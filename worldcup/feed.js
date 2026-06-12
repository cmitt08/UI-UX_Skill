/* Pitchside '26 — live data feed (ESPN public scoreboard API).
   No API key required; endpoints are CORS-open. Everything is parsed
   defensively: if the feed is unreachable or its shape changes, every
   function returns null and the app falls back to the labeled sim.

   Endpoints:
     {BASE}/scoreboard?dates=YYYYMMDD[-YYYYMMDD]  schedule + live scores + goal/card details
     {BASE}/summary?event={id}                    per-match team statistics

   `?feedbase=<url>` overrides BASE so the pipeline can be tested
   against local mock fixtures. */

window.Feed = (function () {
  'use strict';

  const params = new URLSearchParams(location.search);
  const BASE = params.get('feedbase') ||
    'https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world';

  const TOURNAMENT_RANGE = '20260611-20260719';

  async function getJSON(url) {
    try {
      const res = await fetch(url, { cache: 'no-store' });
      if (!res.ok) return null;
      return await res.json();
    } catch (e) {
      return null;
    }
  }

  const validHex = c => (typeof c === 'string' && /^[0-9a-f]{6}$/i.test(c)) ? '#' + c.toLowerCase() : null;

  /* "62'" -> 62 · "45'+3'" -> 48 · "90'+5'" -> 95 · anything else -> null */
  function parseClock(s) {
    if (typeof s !== 'string') return null;
    const mm = s.match(/^(\d+)'(?:\s*\+\s*(\d+))?/);
    if (!mm) return null;
    return parseInt(mm[1], 10) + (mm[2] ? parseInt(mm[2], 10) : 0);
  }

  /* register a feed team into WC.TEAMS so every renderer can use it */
  function registerTeam(competitor) {
    const t = (competitor && competitor.team) || {};
    const code = String(t.abbreviation || t.shortDisplayName || 'TBD').toUpperCase().slice(0, 4);
    if (!WC.TEAMS[code]) {
      WC.TEAMS[code] = {
        code,
        name: t.displayName || t.shortDisplayName || code,
        short: t.shortDisplayName || t.displayName || code,
        strength: (WC.STRENGTHS || {})[code] || 74,
        color: validHex(t.color) || '#64748b',
        color2: validHex(t.alternateColor) || '#e2e8f0',
        flag: t.logo ? `url('${t.logo}') center/contain no-repeat` : 'linear-gradient(135deg,#334155 0 50%,#475569 50%)'
      };
    }
    return code;
  }

  function detailKey(d) {
    return [
      d.type && d.type.id, d.clock && d.clock.displayValue,
      d.team && d.team.id,
      d.athletesInvolved && d.athletesInvolved[0] && d.athletesInvolved[0].displayName
    ].join('|');
  }

  function normEvent(evt) {
    try {
      const comp = evt.competitions && evt.competitions[0];
      if (!comp || !Array.isArray(comp.competitors)) return null;
      const cs = comp.competitors;
      const homeC = cs.find(c => c.homeAway === 'home') || cs[0];
      const awayC = cs.find(c => c.homeAway === 'away') || cs[1];
      if (!homeC || !awayC) return null;

      const status = evt.status || comp.status || {};
      const stype = status.type || {};
      const noteText = [
        comp.notes && comp.notes[0] && comp.notes[0].headline,
        evt.name, comp.headline
      ].filter(Boolean).join(' ');
      const groupMatch = noteText.match(/group\s+([a-l])\b/i);

      return {
        id: String(evt.id),
        date: evt.date || comp.date,
        home: registerTeam(homeC),
        away: registerTeam(awayC),
        homeId: String((homeC.team && homeC.team.id) || ''),
        awayId: String((awayC.team && awayC.team.id) || ''),
        score: [parseInt(homeC.score, 10) || 0, parseInt(awayC.score, 10) || 0],
        state: stype.state || 'pre',                  // 'pre' | 'in' | 'post'
        detail: stype.shortDetail || stype.detail || '',
        halftime: /half/i.test(stype.name || '') || /^ht$/i.test(stype.shortDetail || ''),
        period: status.period || 0,
        clockMin: parseClock(status.displayClock),
        venue: (comp.venue && comp.venue.fullName) || '',
        city: (comp.venue && comp.venue.address && comp.venue.address.city) || '',
        attendance: comp.attendance || null,
        group: groupMatch ? groupMatch[1].toUpperCase() : null,
        details: (comp.details || []).map(d => ({
          key: detailKey(d),
          min: parseClock(d.clock && d.clock.displayValue),
          teamId: String((d.team && d.team.id) || ''),
          goal: !!d.scoringPlay,
          ownGoal: !!d.ownGoal,
          penalty: !!d.penaltyKick,
          red: !!d.redCard,
          yellow: !!d.yellowCard,
          player: (d.athletesInvolved && d.athletesInvolved[0] &&
            (d.athletesInvolved[0].shortName || d.athletesInvolved[0].displayName)) || ''
        }))
      };
    } catch (e) {
      return null;
    }
  }

  /* one ranged request -> every match of the tournament */
  async function loadSchedule() {
    const data = await getJSON(`${BASE}/scoreboard?dates=${TOURNAMENT_RANGE}&limit=400`);
    if (!data || !Array.isArray(data.events) || !data.events.length) return null;
    const events = data.events.map(normEvent).filter(Boolean);
    if (!events.length) return null;

    const byDay = new Map();
    for (const e of events) {
      const d = new Date(e.date);
      if (isNaN(d)) continue;
      const dayId = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
      if (!byDay.has(dayId)) byDay.set(dayId, []);
      byDay.get(dayId).push(e);
    }
    const days = [...byDay.entries()].sort((a, b) => a[0] < b[0] ? -1 : 1).map(([id, evs]) => {
      evs.sort((a, b) => new Date(a.date) - new Date(b.date));
      const d = new Date(evs[0].date);
      return {
        id,
        label: d.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase() + ' ' + d.getDate(),
        title: d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }),
        fixtures: evs.map(e => ({
          id: 'e' + e.id, espnId: e.id, feed: true,
          group: e.group, home: e.home, away: e.away,
          venue: e.venue, city: e.city,
          kickLocal: new Date(e.date).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', timeZoneName: 'short' }),
          kickoffUTC: e.date
        }))
      };
    });

    /* group memberships discovered from the schedule */
    const groups = {};
    for (const e of events) {
      if (!e.group) continue;
      const g = groups[e.group] = groups[e.group] || [];
      for (const code of [e.home, e.away]) {
        if (code !== 'TBD' && !g.includes(code)) g.push(code);
      }
    }

    return { days, events, groups };
  }

  /* fresh scores/details for one local day (its fixtures may span two UTC dates) */
  async function pollDay(fixtures) {
    if (!fixtures || !fixtures.length) return null;
    const utcDays = [...new Set(fixtures.map(fx => (fx.kickoffUTC || '').slice(0, 10).replace(/-/g, '')))].filter(Boolean).sort();
    if (!utcDays.length) return null;
    const range = utcDays.length > 1 ? `${utcDays[0]}-${utcDays[utcDays.length - 1]}` : utcDays[0];
    const data = await getJSON(`${BASE}/scoreboard?dates=${range}&limit=100`);
    if (!data || !Array.isArray(data.events)) return null;
    const out = new Map();
    for (const raw of data.events) {
      const e = normEvent(raw);
      if (e) out.set(e.id, e);
    }
    return out;
  }

  /* team statistics for one match: { statName: [homeValue, awayValue] } */
  async function summary(espnId, homeId, awayId) {
    const data = await getJSON(`${BASE}/summary?event=${espnId}`);
    const teams = data && data.boxscore && data.boxscore.teams;
    if (!Array.isArray(teams) || teams.length < 2) return null;
    const byId = {};
    for (const t of teams) {
      const id = String((t.team && t.team.id) || '');
      byId[id] = {};
      for (const s of (t.statistics || [])) {
        if (s && s.name != null) byId[id][s.name] = parseFloat(s.displayValue);
      }
    }
    const hm = byId[homeId], aw = byId[awayId];
    if (!hm || !aw) return null;
    const stats = {};
    for (const name of Object.keys(hm)) {
      if (!isNaN(hm[name]) && aw[name] != null && !isNaN(aw[name])) stats[name] = [hm[name], aw[name]];
    }
    return stats;
  }

  return { BASE, loadSchedule, pollDay, summary, parseClock };
})();
