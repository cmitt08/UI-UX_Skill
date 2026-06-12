/* Pitchside '26 — data layer.
   Fixtures/teams are real (FIFA World Cup 2026 opening days).
   Live scores, stats and odds are SIMULATED client-side — see app.js engine.
   To wire a real feed, replace the engine's tick source with API polling and
   keep the same match-state shape. */

window.WC = window.WC || {};

/* rough power ratings used to derive odds for any team the live feed sends.
   Unknown codes fall back to 74. */
WC.STRENGTHS = {
  ARG: 89, FRA: 88, BRA: 88, ESP: 87, ENG: 86, GER: 85, POR: 85, NED: 84,
  ITA: 83, BEL: 82, CRO: 81, URU: 81, COL: 81, MAR: 80, NOR: 80, JPN: 79,
  USA: 79, AUT: 79, MEX: 78, SUI: 78, SEN: 78, DEN: 78, ECU: 77, TUR: 77,
  KOR: 76, NGA: 76, ALG: 76, CIV: 76, POL: 75, IRN: 75, CAN: 75, EGY: 75,
  PAR: 74, CZE: 74, SRB: 74, UKR: 74, SCO: 73, TUN: 73, GHA: 73, AUS: 72,
  UZB: 71, PAN: 71, BIH: 71, CRC: 71, JOR: 70, KSA: 70, RSA: 70, IRQ: 69,
  NZL: 68, QAT: 67, CPV: 67, CUW: 68, HON: 69, JAM: 70, HAI: 65
};


WC.TEAMS = {
  MEX: { code: 'MEX', name: 'Mexico',            short: 'Mexico',       strength: 78, color: '#0fa968', color2: '#e2485a', flag: 'linear-gradient(90deg,#006847 0 33%,#f5f5f0 33% 66%,#ce1126 66%)' },
  RSA: { code: 'RSA', name: 'South Africa',      short: 'South Africa', strength: 70, color: '#eab308', color2: '#16a34a', flag: 'linear-gradient(180deg,#de3831 0 30%,#f5f5f0 30% 38%,#007a4d 38% 62%,#f5f5f0 62% 70%,#002395 70%)' },
  KOR: { code: 'KOR', name: 'South Korea',       short: 'South Korea',  strength: 76, color: '#e0454f', color2: '#3b82f6', flag: 'radial-gradient(circle at 50% 38%,#cd2e3a 0 24%,transparent 25%),radial-gradient(circle at 50% 62%,#0047a0 0 24%,transparent 25%),linear-gradient(#f5f5f0,#f5f5f0)' },
  CZE: { code: 'CZE', name: 'Czechia',           short: 'Czechia',      strength: 74, color: '#e23d45', color2: '#3e6fbb', flag: 'linear-gradient(112deg,#11457e 0 36%,transparent 36%),linear-gradient(180deg,#f5f5f0 0 50%,#d7141a 50%)' },
  CAN: { code: 'CAN', name: 'Canada',            short: 'Canada',       strength: 75, color: '#ef4444', color2: '#e2e8f0', flag: 'linear-gradient(90deg,#d80621 0 28%,#f5f5f0 28% 72%,#d80621 72%)' },
  BIH: { code: 'BIH', name: 'Bosnia & Herz.',    short: 'Bosnia',       strength: 71, color: '#4169e1', color2: '#fecb00', flag: 'linear-gradient(135deg,#002395 0 52%,#fecb00 52% 60%,#002395 60%)' },
  QAT: { code: 'QAT', name: 'Qatar',             short: 'Qatar',        strength: 67, color: '#a8325a', color2: '#e2e8f0', flag: 'linear-gradient(90deg,#f5f5f0 0 30%,#8d1b3d 30%)' },
  SUI: { code: 'SUI', name: 'Switzerland',       short: 'Switzerland',  strength: 78, color: '#ef3c34', color2: '#e2e8f0', flag: 'linear-gradient(#f5f5f0 0 0) 50% 50%/54% 16% no-repeat,linear-gradient(#f5f5f0 0 0) 50% 50%/16% 54% no-repeat,linear-gradient(#da291c,#da291c)' },
  BRA: { code: 'BRA', name: 'Brazil',            short: 'Brazil',       strength: 88, color: '#16a34a', color2: '#fde047', flag: 'radial-gradient(circle at 50% 50%,#002776 0 14%,#ffdf00 15% 34%,#009739 35%)' },
  MAR: { code: 'MAR', name: 'Morocco',           short: 'Morocco',      strength: 80, color: '#e0454f', color2: '#0e9e54', flag: 'radial-gradient(circle at 50% 50%,#006233 0 20%,transparent 21%),linear-gradient(#c1272d,#c1272d)' },
  HAI: { code: 'HAI', name: 'Haiti',             short: 'Haiti',        strength: 65, color: '#4169e1', color2: '#e0454f', flag: 'linear-gradient(180deg,#00209f 0 50%,#d21034 50%)' },
  SCO: { code: 'SCO', name: 'Scotland',          short: 'Scotland',     strength: 73, color: '#3b82f6', color2: '#e2e8f0', flag: 'linear-gradient(45deg,transparent 0 45%,#f5f5f0 45% 55%,transparent 55%),linear-gradient(-45deg,transparent 0 45%,#f5f5f0 45% 55%,transparent 55%),linear-gradient(#005eb8,#005eb8)' },
  AUS: { code: 'AUS', name: 'Australia',         short: 'Australia',    strength: 72, color: '#eab308', color2: '#0e9e54', flag: 'radial-gradient(circle at 72% 58%,#f5f5f0 0 7%,transparent 8%),radial-gradient(circle at 60% 30%,#f5f5f0 0 5%,transparent 6%),linear-gradient(#00247d,#00247d)' },
  TUR: { code: 'TUR', name: 'Türkiye',           short: 'Türkiye',      strength: 77, color: '#ef4444', color2: '#e2e8f0', flag: 'radial-gradient(circle at 40% 50%,#f5f5f0 0 17%,transparent 18%),radial-gradient(circle at 46% 50%,#e30a17 0 14%,transparent 15%),linear-gradient(#e30a17,#e30a17)' },
  USA: { code: 'USA', name: 'United States',     short: 'USA',          strength: 79, color: '#3b82f6', color2: '#ef4444', flag: 'linear-gradient(90deg,#3c3b6e 0 38%,transparent 38%),repeating-linear-gradient(180deg,#b22234 0 13%,#f5f5f0 13% 26%)' },
  PAR: { code: 'PAR', name: 'Paraguay',          short: 'Paraguay',     strength: 74, color: '#e0454f', color2: '#4169e1', flag: 'linear-gradient(180deg,#d52b1e 0 33%,#f5f5f0 33% 66%,#0038a8 66%)' }
};

/* role weights drive who the sim picks as a goalscorer */
WC.ROSTERS = {
  MEX: [
    { name: 'S. Giménez',   pos: 'ST', w: 4.0 },
    { name: 'R. Jiménez',   pos: 'ST', w: 3.4 },
    { name: 'J. Quiñones',  pos: 'FW', w: 3.0 },
    { name: 'H. Lozano',    pos: 'LW', w: 2.6 },
    { name: 'A. Vega',      pos: 'RW', w: 2.2 },
    { name: 'L. Chávez',    pos: 'CM', w: 1.3 },
    { name: 'E. Álvarez',   pos: 'DM', w: 0.9 },
    { name: 'J. Vásquez',   pos: 'CB', w: 0.5 }
  ],
  RSA: [
    { name: 'L. Foster',    pos: 'ST', w: 3.6 },
    { name: 'P. Tau',       pos: 'AM', w: 2.8 },
    { name: 'T. Zwane',     pos: 'AM', w: 2.2 },
    { name: 'O. Appollis',  pos: 'LW', w: 2.0 },
    { name: 'T. Mokoena',   pos: 'CM', w: 1.2 },
    { name: 'A. Modiba',    pos: 'LB', w: 0.6 },
    { name: 'M. Mvala',     pos: 'CB', w: 0.5 }
  ],
  KOR: [
    { name: 'Son Heung-min',  pos: 'LW', w: 4.2 },
    { name: 'Hwang Hee-chan', pos: 'ST', w: 3.2 },
    { name: 'Cho Gue-sung',   pos: 'ST', w: 2.6 },
    { name: 'Lee Kang-in',    pos: 'AM', w: 2.5 },
    { name: 'Lee Jae-sung',   pos: 'CM', w: 1.3 },
    { name: 'Hwang In-beom',  pos: 'CM', w: 1.0 },
    { name: 'Kim Min-jae',    pos: 'CB', w: 0.6 }
  ],
  CZE: [
    { name: 'P. Schick',    pos: 'ST', w: 4.0 },
    { name: 'A. Hložek',    pos: 'SS', w: 2.8 },
    { name: 'M. Chytil',    pos: 'ST', w: 2.4 },
    { name: 'A. Barák',     pos: 'AM', w: 1.8 },
    { name: 'L. Provod',    pos: 'CM', w: 1.4 },
    { name: 'T. Souček',    pos: 'CM', w: 1.3 },
    { name: 'R. Hranáč',    pos: 'CB', w: 0.5 }
  ]
};

/* stars shown on upcoming-match cards */
WC.STARS = {
  CAN: ['J. David', 'A. Davies'], BIH: ['E. Džeko', 'E. Demirović'],
  USA: ['C. Pulisic', 'F. Balogun'], PAR: ['J. Enciso', 'M. Almirón'],
  QAT: ['A. Afif', 'A. Ali'], SUI: ['B. Embolo', 'G. Xhaka'],
  BRA: ['Vinícius Jr', 'Raphinha'], MAR: ['B. Díaz', 'A. Hakimi'],
  HAI: ['F. Pierrot', 'D. Nazon'], SCO: ['S. McTominay', 'J. McGinn'],
  AUS: ['R. McGree', 'M. Duke'], TUR: ['A. Güler', 'K. Yıldız']
};

WC.DAYS = [
  {
    id: '2026-06-11', label: 'THU 11', title: 'Matchday 1 · Opening Day', live: true,
    fixtures: [
      { id: 'm1', group: 'A', home: 'MEX', away: 'RSA', venue: 'Estadio Azteca', city: 'Mexico City', kickLocal: '1:00 PM CST', kickoffUTC: '2026-06-11T19:00:00Z', attendance: '87,523', referee: 'F. Rapallini (ARG)', weather: '72°F · Clear', startMinute: 57, note: 'Tournament opener',
        /* real result — sim recreates the score/scorers/reds around it */
        official: {
          score: [2, 0],
          goals: [
            { min: 10, side: 0, scorer: 'J. Quiñones' },
            { min: 64, side: 0, scorer: 'R. Jiménez' }
          ],
          reds: [
            { min: 52, side: 1 },
            { min: 71, side: 0 },
            { min: 84, side: 1 }
          ],
          note: 'First World Cup opener ever with three red cards'
        } },
      { id: 'm2', group: 'A', home: 'KOR', away: 'CZE', venue: 'Estadio Akron', city: 'Guadalajara', kickLocal: '8:00 PM CST', kickoffUTC: '2026-06-12T02:00:00Z', attendance: '46,212', referee: 'J. Brooks (USA)', weather: '66°F · Partly cloudy', startMinute: 14, note: 'Group A · Match 2' }
    ]
  },
  {
    id: '2026-06-12', label: 'FRI 12', title: 'Matchday 1 · Day 2', live: false,
    fixtures: [
      { id: 'm3', group: 'B', home: 'CAN', away: 'BIH', venue: 'BMO Field', city: 'Toronto', kickLocal: '3:00 PM ET', kickoffUTC: '2026-06-12T19:00:00Z' },
      { id: 'm4', group: 'D', home: 'USA', away: 'PAR', venue: 'SoFi Stadium', city: 'Los Angeles', kickLocal: '6:00 PM PT', kickoffUTC: '2026-06-13T01:00:00Z' }
    ]
  },
  {
    id: '2026-06-13', label: 'SAT 13', title: 'Matchday 1 · Day 3', live: false,
    fixtures: [
      { id: 'm5', group: 'B', home: 'QAT', away: 'SUI', venue: "Levi's Stadium", city: 'San Francisco Bay Area', kickLocal: '12:00 PM PT', kickoffUTC: '2026-06-13T19:00:00Z' },
      { id: 'm6', group: 'C', home: 'BRA', away: 'MAR', venue: 'MetLife Stadium', city: 'New York / New Jersey', kickLocal: '6:00 PM ET', kickoffUTC: '2026-06-13T22:00:00Z' },
      { id: 'm7', group: 'C', home: 'HAI', away: 'SCO', venue: 'Gillette Stadium', city: 'Boston', kickLocal: '9:00 PM ET', kickoffUTC: '2026-06-14T01:00:00Z' },
      { id: 'm8', group: 'D', home: 'AUS', away: 'TUR', venue: 'BC Place', city: 'Vancouver', kickLocal: '9:00 PM PT', kickoffUTC: '2026-06-14T04:00:00Z' }
    ]
  }
];

WC.GROUPS = {
  A: ['MEX', 'RSA', 'KOR', 'CZE'],
  B: ['CAN', 'BIH', 'QAT', 'SUI'],
  C: ['BRA', 'MAR', 'HAI', 'SCO'],
  D: ['USA', 'PAR', 'AUS', 'TUR']
};

WC.STAGES = [
  { name: 'Group Stage',   dates: 'Jun 11 – 27', detail: '72 matches · 12 groups · 16 host cities', games: 72 },
  { name: 'Round of 32',   dates: 'Jun 28 – Jul 3', detail: 'Top two per group + eight best third-placed teams', games: 16 },
  { name: 'Round of 16',   dates: 'Jul 4 – 7', detail: 'Single elimination begins to bite', games: 8 },
  { name: 'Quarterfinals', dates: 'Jul 9 – 11', detail: 'Boston · KC · LA · Miami', games: 4 },
  { name: 'Semifinals',    dates: 'Jul 14 – 15', detail: 'AT&T Stadium · Mercedes-Benz Stadium', games: 2 },
  { name: 'Final',         dates: 'Jul 19', detail: 'MetLife Stadium · New York / New Jersey', games: 1, final: true }
];

/* kickoff trivia — one flips through these on the matchday page */
WC.TRIVIA = [
  { q: 'Who scored the fastest goal in World Cup history?', a: 'Hakan Şükür — 10.8 seconds for Türkiye vs South Korea in 2002.' },
  { q: 'Which country has won the most World Cups?', a: 'Brazil, with five (1958, 1962, 1970, 1994, 2002).' },
  { q: 'What makes the 2026 World Cup a first?', a: 'It is the first 48-team World Cup, the first with a Round of 32, and the first hosted by three nations.' },
  { q: 'Who is the only player to win three World Cups?', a: 'Pelé — 1958, 1962 and 1970.' },
  { q: 'Who is the all-time top World Cup goalscorer?', a: 'Miroslav Klose, with 16 goals across four tournaments.' },
  { q: 'Which stadium has hosted two World Cup finals — and now a third opening match?', a: 'Estadio Azteca in Mexico City (finals in 1970 and 1986, opener in 2026).' },
  { q: 'What is the highest-scoring World Cup match ever?', a: 'Austria 7–5 Switzerland in 1954 — twelve goals.' },
  { q: 'Who holds the single-tournament scoring record?', a: 'Just Fontaine — 13 goals for France in 1958.' },
  { q: 'Who scored five goals in a single World Cup match?', a: 'Oleg Salenko for Russia vs Cameroon in 1994 — still the only player to do it.' },
  { q: 'Which nation has played in every single World Cup?', a: 'Brazil — never missed one since 1930.' },
  { q: 'Who won the very first World Cup?', a: 'Uruguay, beating Argentina 4–2 in the 1930 final in Montevideo.' },
  { q: 'How young was the youngest World Cup goalscorer?', a: 'Pelé was 17 years and 239 days old when he scored vs Wales in 1958.' }
];

/* tournament futures — anytime tournament top scorer (entertainment only) */
WC.GOLDEN_BOOT_FUTURES = [
  { player: 'K. Mbappé',     team: 'France',    odds: '+650' },
  { player: 'E. Haaland',    team: 'Norway',    odds: '+700' },
  { player: 'H. Kane',       team: 'England',   odds: '+850' },
  { player: 'Vinícius Jr',   team: 'Brazil',    odds: '+1100' },
  { player: 'J. Álvarez',    team: 'Argentina', odds: '+1400' },
  { player: 'L. Messi',      team: 'Argentina', odds: '+2000' },
  { player: 'C. Ronaldo',    team: 'Portugal',  odds: '+2200' },
  { player: 'Son Heung-min', team: 'Korea Rep.',odds: '+2500' },
  { player: 'P. Schick',     team: 'Czechia',   odds: '+2800' },
  { player: 'S. Giménez',    team: 'Mexico',    odds: '+2800' },
  { player: 'C. Pulisic',    team: 'USA',       odds: '+3000' },
  { player: 'J. David',      team: 'Canada',    odds: '+3300' }
];
