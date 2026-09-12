/* ============== BLEACH ============== */
const DATA = [
  {id:'ichigo', name:'Ichigo Kurosaki', faction:'Substitute Shinigami', aura:'#3a6fe0',
    desc:'Half-Human, half-Quincy, half-Hollow, half-Shinigami — the walking exception to every rule in the story.',
    forms:[
      {name:'Shikai (Soul Society)', overall:45, badge:'estimate', stats:{str:55,def:40,spd:50,kid:20,intel:35,rei:60}},
      {name:'Bankai (Arrancar Arc)', overall:65, badge:'estimate', stats:{str:70,def:55,spd:72,kid:30,intel:40,rei:78}},
      {name:'Final Getsuga Tenshō', overall:80, badge:'estimate', stats:{str:88,def:35,spd:90,kid:35,intel:45,rei:95}},
      {name:'True Bankai (TYBW)', overall:93, badge:'estimate', stats:{str:92,def:78,spd:90,kid:55,intel:60,rei:96}}
    ]},
  {id:'yhwach', name:'Yhwach', faction:'Quincy — Wandenreich', aura:'#e0b04a',
    desc:'The Quincy King. His "Almighty" lets him see and rewrite the future — the story\'s ultimate final boss.',
    forms:[
      {name:'Base Form', overall:90, badge:'estimate', stats:{str:85,def:82,spd:80,kid:90,intel:98,rei:96}},
      {name:'The Almighty (Awakened)', overall:99, badge:'estimate', stats:{str:95,def:96,spd:88,kid:99,intel:100,rei:100}}
    ]},
  {id:'aizen', name:'Sōsuke Aizen', faction:'Shinigami (Traitor)', aura:'#c9932f',
    desc:'Former 5th Division Captain. Spent a century engineering his own transcendence in total secrecy.',
    forms:[
      {name:'Captain (Soul Society Arc)', overall:78, badge:'official', stats:{str:80,def:80,spd:80,kid:80,intel:100,rei:80}},
      {name:'Hōgyoku-Fused (TYBW)', overall:92, badge:'estimate', stats:{str:88,def:90,spd:85,kid:85,intel:100,rei:97}}
    ]},
  {id:'yamamoto', name:'Genryūsai Yamamoto', faction:'Shinigami — Captain-Commander', aura:'#e04b2f',
    desc:'Founder of the Gotei 13. Nearly 2,600 years old and, for most of the series, its strongest captain.',
    forms:[
      {name:'Captain-Commander', overall:82, badge:'official', stats:{str:90,def:90,spd:90,kid:75,intel:85,rei:95}},
      {name:'Bankai — Zanka no Tachi', overall:88, badge:'estimate', stats:{str:97,def:85,spd:88,kid:78,intel:85,rei:99}}
    ]},
  {id:'kenpachi', name:'Kenpachi Zaraki', faction:'Shinigami — 11th Division', aura:'#d6203a',
    desc:'Fights with his spiritual pressure sealed by his own eyepatch, simply because he prefers a challenge.',
    forms:[
      {name:'Captain (Sealed)', overall:58, badge:'official', stats:{str:95,def:75,spd:70,kid:5,intel:30,rei:60}},
      {name:'Unlocked — Nozarashi', overall:87, badge:'estimate', stats:{str:99,def:88,spd:85,kid:15,intel:35,rei:95}}
    ]},
  {id:'byakuya', name:'Byakuya Kuchiki', faction:'Shinigami — 6th Division', aura:'#e792b5',
    desc:'Head of the noble Kuchiki house. Fights with an immaculate, almost ceremonial precision.',
    forms:[
      {name:'Shikai — Senbonzakura', overall:63, badge:'official', stats:{str:70,def:70,spd:85,kid:70,intel:80,rei:87}},
      {name:'Bankai (TYBW)', overall:80, badge:'estimate', stats:{str:80,def:78,spd:90,kid:82,intel:82,rei:92}}
    ]},
  {id:'hitsugaya', name:'Tōshirō Hitsugaya', faction:'Shinigami — 10th Division', aura:'#7fd8f0',
    desc:'The youngest captain in Gotei 13 history, wielding the ice dragon zanpakutō Hyōrinmaru.',
    forms:[
      {name:'Bankai (Soul Society Arc)', overall:61, badge:'official', stats:{str:78,def:83,spd:83,kid:70,intel:88,rei:87}},
      {name:'Bankai (TYBW)', overall:77, badge:'estimate', stats:{str:85,def:88,spd:86,kid:78,intel:90,rei:92}}
    ]},
  {id:'gin', name:'Gin Ichimaru', faction:'Shinigami (Traitor)', aura:'#c7c2d6',
    desc:'3rd Division Captain whose Shinsō extends faster than the eye can track — a spy to the very end.',
    forms:[{name:'Captain', overall:76, badge:'official', stats:{str:78,def:78,spd:88,kid:75,intel:90,rei:80}}]},
  {id:'unohana', name:'Retsu Unohana', faction:'Shinigami — 4th Division', aura:'#8fbf7a',
    desc:'Officially the "gentle" healer captain. Was, in truth, Kenpachi\'s original bearer of the name.',
    forms:[{name:'Captain', overall:90, badge:'official', stats:{str:82,def:80,spd:83,kid:90,intel:92,rei:95}}]},
  {id:'kyoraku', name:'Shunsui Kyōraku', faction:'Shinigami — 8th Division', aura:'#e0a54b',
    desc:'Laid-back on the surface, but wields two zanpakutō and a fighting style built entirely on deception.',
    forms:[
      {name:'Captain (Soul Society Arc)', overall:88, badge:'official', stats:{str:88,def:85,spd:90,kid:75,intel:88,rei:88}},
      {name:'Captain-Commander (TYBW)', overall:81, badge:'estimate', stats:{str:88,def:86,spd:90,kid:80,intel:90,rei:90}}
    ]},
  {id:'mayuri', name:'Mayuri Kurotsuchi', faction:'Shinigami — 12th Division', aura:'#8fd66b',
    desc:'Head of the Shinigami Research Institute. Wins fights before they start, through preparation and poison.',
    forms:[{name:'Captain', overall:65, badge:'official', stats:{str:55,def:60,spd:60,kid:85,intel:100,rei:70}}]},
  {id:'rukia', name:'Rukia Kuchiki', faction:'Shinigami — 13th Division', aura:'#bcd9ee',
    desc:'Adopted into the Kuchiki house. Her ice zanpakutō Sode no Shirayuki grows sharper across the story.',
    forms:[
      {name:'Shikai (Soul Society Arc)', overall:38, badge:'estimate', stats:{str:35,def:40,spd:50,kid:65,intel:70,rei:55}},
      {name:'Bankai — Hakka no Tōgame (TYBW)', overall:70, badge:'estimate', stats:{str:60,def:65,spd:75,kid:82,intel:78,rei:85}}
    ]},
  {id:'renji', name:'Renji Abarai', faction:'Shinigami — 6th Division', aura:'#e0503a',
    desc:'Byakuya\'s lieutenant, then successor. Grows from brash lieutenant into a genuine captain-class fighter.',
    forms:[
      {name:'Bankai (Soul Society Arc)', overall:48, badge:'estimate', stats:{str:65,def:55,spd:55,kid:35,intel:45,rei:60}},
      {name:'Bankai (TYBW)', overall:73, badge:'estimate', stats:{str:82,def:70,spd:72,kid:50,intel:60,rei:80}}
    ]},
  {id:'urahara', name:'Kisuke Urahara', faction:'Human — Ex-Captain', aura:'#e0d84b',
    desc:'Former 12th Division Captain and the Hōgyoku\'s creator. Almost never fights at full strength.',
    forms:[{name:'Bankai — Benihime', overall:88, badge:'estimate', stats:{str:85,def:80,spd:88,kid:85,intel:100,rei:90}}]},
  {id:'yoruichi', name:'Yoruichi Shihōin', faction:'Human — Ex-Captain', aura:'#f0a63a',
    desc:'Former Commander of the Onmitsukidō. The fastest character in the entire series, hands down.',
    forms:[{name:'Shunkō', overall:85, badge:'estimate', stats:{str:78,def:75,spd:100,kid:80,intel:88,rei:85}}]},
  {id:'uryu', name:'Uryū Ishida', faction:'Quincy', aura:'#4bb3e0',
    desc:'Last of the visible Quincy line, until Yhwach reveals otherwise. Rebuilds his power from scratch twice.',
    forms:[
      {name:'Base Quincy Bow', overall:32, badge:'estimate', stats:{str:20,def:30,spd:45,kid:75,intel:85,rei:40}},
      {name:'Letzt Stil', overall:55, badge:'estimate', stats:{str:35,def:45,spd:60,kid:88,intel:88,rei:65}},
      {name:'Quincy: Vollständig (Sklaverei)', overall:81, badge:'estimate', stats:{str:60,def:65,spd:78,kid:97,intel:92,rei:88}}
    ]},
  {id:'orihime', name:'Orihime Inoue', faction:'Human — Fullbringer-adjacent', aura:'#f0c1d6',
    desc:'Her Shun Shun Rikka can reject reality itself — one of the most conceptually powerful abilities in Bleach.',
    forms:[{name:'Six-Petal Shield', overall:52, badge:'estimate', stats:{str:10,def:60,spd:30,kid:95,intel:70,rei:55}}]},
  {id:'chad', name:'Yasutora "Chad" Sado', faction:'Human — Fullbringer', aura:'#a0784b',
    desc:'Converts his entire arm into a weapon. Quiet, loyal, and steadily more durable with every arc.',
    forms:[{name:'Brazo Derecha / Izquierda', overall:58, badge:'estimate', stats:{str:88,def:90,spd:40,kid:15,intel:35,rei:55}}]},
  {id:'ulquiorra', name:'Ulquiorra Cifer', faction:'Arrancar — 4th Espada', aura:'#5cc98a',
    desc:'The most emotionally hollow of all the Espada, and one of Aizen\'s most devastating weapons.',
    forms:[
      {name:'Resurrección — Murciélago', overall:74, badge:'estimate', stats:{str:82,def:75,spd:78,kid:70,intel:75,rei:85}},
      {name:'Segunda Etapa', overall:83, badge:'estimate', stats:{str:92,def:80,spd:85,kid:78,intel:75,rei:92}}
    ]},
  {id:'grimmjow', name:'Grimmjow Jaegerjaquez', faction:'Arrancar — 6th Espada', aura:'#4b8ee0',
    desc:'Fights purely for the thrill of it, and never stops climbing back up no matter how badly he\'s beaten.',
    forms:[{name:'Resurrección — Pantera', overall:74, badge:'estimate', stats:{str:88,def:65,spd:90,kid:45,intel:55,rei:80}}]},
  {id:'starrk', name:'Coyote Starrk', faction:'Arrancar — 1st Espada (Primera)', aura:'#8a97b0',
    desc:'The strongest of the Espada by raw ranking, though his own loneliness weighs on everything he does.',
    forms:[{name:'Resurrección — Los Lobos', overall:79, badge:'estimate', stats:{str:85,def:78,spd:85,kid:70,intel:65,rei:90}}]},
  {id:'haschwalth', name:'Jugram Haschwalth', faction:'Quincy — Sternritter "B"', aura:'#d4c84b',
    desc:'Yhwach\'s closest attendant, whose "Balance Breaker" can steal and redistribute an opponent\'s strength.',
    forms:[{name:'The Balance', overall:84, badge:'estimate', stats:{str:75,def:80,spd:78,kid:92,intel:88,rei:88}}]},
  {id:'isshin', name:'Isshin Kurosaki', faction:'Human — Ex-Captain', aura:'#3a5be0',
    desc:'Ichigo\'s father and a former 10th Division Captain, hiding a captain-class Shinigami career for years.',
    forms:[{name:'Engetsu (Shikai)', overall:86, badge:'estimate', stats:{str:88,def:85,spd:86,kid:65,intel:75,rei:92}}]}
];
DATA.forEach(c => c.series = 'Bleach');

/* ============== NARUTO ==============
   stats8 = {ninjutsu, taijutsu, genjutsu, intelligence, strength, speed, stamina, handseals}, each 0–5 in 0.5 steps,
   matching the real databook's "Skill Parameter" categories. */
const NARUTO = [
  {id:'hashirama', name:'Hashirama Senju', faction:'Konoha — First Hokage', aura:'#5ea86b',
    desc:'The "God of Shinobi." His Wood Release let him found the entire Hidden Leaf Village single-handedly.',
    forms:[{name:'First Hokage', overall:93, badge:'official',
      stats8:{ninjutsu:5,taijutsu:5,genjutsu:5,intelligence:4.5,strength:5,speed:5,stamina:5,handseals:5}}]},
  {id:'madara', name:'Madara Uchiha', faction:'Konoha — Founding Uchiha', aura:'#8a2e2e',
    desc:'Hashirama\'s rival and the shinobi world\'s eternal boogeyman, right up until he nearly becomes a god.',
    forms:[
      {name:'Base (Fourth War)', overall:85, badge:'official',
        stats8:{ninjutsu:5,taijutsu:5,genjutsu:5,intelligence:5,strength:4.5,speed:5,stamina:5,handseals:5}},
      {name:'Six Paths / Ten-Tails Jinchūriki', overall:97, badge:'estimate',
        stats8:{ninjutsu:5,taijutsu:5,genjutsu:5,intelligence:5,strength:5,speed:5,stamina:5,handseals:5}}
    ]},
  {id:'obito', name:'Obito Uchiha', faction:'Konoha — Akatsuki', aura:'#e07a2f',
    desc:'Presumed dead for over a decade, he quietly engineered the entire Fourth Shinobi World War from the shadows.',
    forms:[
      {name:'Masked Man (Akatsuki)', overall:80, badge:'official',
        stats8:{ninjutsu:5,taijutsu:4.5,genjutsu:5,intelligence:5,strength:4.5,speed:5,stamina:5,handseals:5}},
      {name:'Ten-Tails Jinchūriki', overall:90, badge:'estimate',
        stats8:{ninjutsu:5,taijutsu:4.5,genjutsu:5,intelligence:5,strength:5,speed:5,stamina:5,handseals:5}}
    ]},
  {id:'tobirama', name:'Tobirama Senju', faction:'Konoha — Second Hokage', aura:'#5c8fbf',
    desc:'Inventor of the Flying Thunder God technique, decades before Minato ever picked up a kunai.',
    forms:[{name:'Second Hokage', overall:78, badge:'official',
      stats8:{ninjutsu:5,taijutsu:5,genjutsu:4.5,intelligence:5,strength:4.5,speed:5,stamina:5,handseals:5}}]},
  {id:'kabuto', name:'Kabuto Yakushi', faction:'Sound / Akatsuki-adjacent', aura:'#9bb04a',
    desc:'A master medical-nin and spy who fused himself with Orochimaru\'s cells and half of Konoha\'s dead shinobi.',
    forms:[{name:'Sage Mode (Edo Tensei Master)', overall:74, badge:'official',
      stats8:{ninjutsu:5,taijutsu:4.5,genjutsu:5,intelligence:5,strength:4,speed:4.5,stamina:5,handseals:5}}]},
  {id:'kakashi', name:'Kakashi Hatake', faction:'Konoha — Jōnin / Hokage', aura:'#7a7f8c',
    desc:'The Copy Ninja. Spent a career mastering a thousand other people\'s jutsu before finding his own.',
    forms:[{name:'Part II (Mangekyō)', overall:72, badge:'official',
      stats8:{ninjutsu:5,taijutsu:5,genjutsu:4.5,intelligence:5,strength:4,speed:5,stamina:4,handseals:5}}]},
  {id:'itachi', name:'Itachi Uchiha', faction:'Konoha / Akatsuki', aura:'#4a1f1f',
    desc:'Wiped out his own clan to prevent a coup, then spent the rest of his short life protecting the brother who hated him.',
    forms:[{name:'Akatsuki (Databook III)', overall:76, badge:'official',
      stats8:{ninjutsu:5,taijutsu:4.5,genjutsu:5,intelligence:5,strength:3,speed:5,stamina:3,handseals:5}}]},
  {id:'jiraiya', name:'Jiraiya', faction:'Konoha — Sannin', aura:'#c9622f',
    desc:'One of the Legendary Sannin and Naruto\'s teacher, whose intelligence network Pain never saw coming.',
    forms:[{name:'Sage Mode (Databook III)', overall:79, badge:'official',
      stats8:{ninjutsu:5,taijutsu:4,genjutsu:3.5,intelligence:4.5,strength:4.5,speed:4,stamina:5,handseals:5}}]},
  {id:'naruto', name:'Naruto Uzumaki', faction:'Konoha — Jinchūriki', aura:'#f2a134',
    desc:'Jinchūriki of the Nine-Tails, and the only shinobi ever to talk a tailed beast into becoming his friend.',
    forms:[
      {name:'Sage Mode (War Arc)', overall:82, badge:'estimate',
        stats8:{ninjutsu:5,taijutsu:4,genjutsu:2.5,intelligence:4,strength:4,speed:4.5,stamina:5,handseals:4.5}},
      {name:'Six Paths Sage Mode', overall:94, badge:'estimate',
        stats8:{ninjutsu:5,taijutsu:4.5,genjutsu:3,intelligence:4,strength:4.5,speed:5,stamina:5,handseals:5}}
    ]},
  {id:'sasuke', name:'Sasuke Uchiha', faction:'Konoha — Rogue / Uchiha', aura:'#6e3ab5',
    desc:'Chased power out of vengeance, ended up wielding the eyes of a god by the end of the war.',
    forms:[
      {name:'Eternal Mangekyō Susanoo', overall:80, badge:'estimate',
        stats8:{ninjutsu:5,taijutsu:4,genjutsu:5,intelligence:4.5,strength:4,speed:4.5,stamina:4,handseals:5}},
      {name:'Rinnegan (War Arc)', overall:90, badge:'estimate',
        stats8:{ninjutsu:5,taijutsu:4.5,genjutsu:5,intelligence:4.5,strength:4.5,speed:5,stamina:4.5,handseals:5}}
    ]},
  {id:'guy', name:'Might Guy', faction:'Konoha — Taijutsu Specialist', aura:'#2f8f5c',
    desc:'Can\'t use ninjutsu or genjutsu at all — the Eight Gates push him briefly past every number on this sheet, including Madara\'s.',
    forms:[{name:'Base Jōnin (Eight Gates untapped)', overall:88, badge:'estimate',
      stats8:{ninjutsu:0.5,taijutsu:5,genjutsu:0.5,intelligence:3.5,strength:4.5,speed:4.5,stamina:5,handseals:1}}]},
  {id:'minato', name:'Minato Namikaze', faction:'Konoha — Fourth Hokage', aura:'#e8d84f',
    desc:'The Yellow Flash. Feared across the entire shinobi world for a teleportation jutsu no one could counter.',
    forms:[{name:'Fourth Hokage (Six Paths Chakra)', overall:85, badge:'estimate',
      stats8:{ninjutsu:5,taijutsu:4,genjutsu:3.5,intelligence:4.5,strength:3.5,speed:5,stamina:4,handseals:5}}]},
  {id:'pain', name:'Pain (Nagato)', faction:'Akatsuki', aura:'#e05a5a',
    desc:'Controls six corpses at once through the Rinnegan, and levels an entire village to prove a point about peace.',
    forms:[{name:'Six Paths of Pain', overall:83, badge:'estimate',
      stats8:{ninjutsu:5,taijutsu:3,genjutsu:3.5,intelligence:4.5,strength:3.5,speed:3.5,stamina:3.5,handseals:4.5}}]},
  {id:'kaguya', name:'Kaguya Ōtsutsuki', faction:'Ōtsutsuki Clan', aura:'#c9c2e0',
    desc:'The progenitor of chakra itself. The shinobi world\'s entire history is a footnote to her story.',
    forms:[{name:'Ten-Tails\' Progenitor', overall:98, badge:'estimate',
      stats8:{ninjutsu:5,taijutsu:5,genjutsu:5,intelligence:5,strength:5,speed:5,stamina:5,handseals:5}}]}
];
NARUTO.forEach(c => c.series = 'Naruto');

/* ============== ONE PIECE ==============
   stats = same 6 generic axes as Bleach (str/def/spd/kid[TEC]/intel/rei[POW]) but rendered as bars, not a hexagon.
   haki = {obs, arm, con} 0–100, rendered as a 3-point Haki triangle. con:0 means Conqueror's has never been shown. */
const ONE_PIECE = [
  {id:'luffy', name:'Monkey D. Luffy', faction:'Straw Hat Pirates — Captain', aura:'#e05353', bounty:'3,000,000,000',
    desc:'Ate the Gomu Gomu no Mi — actually the mythical Hito Hito no Mi: Model Nika, the "Sun God."',
    forms:[
      {name:'Gear 4', overall:78, badge:'estimate', stats:{str:88,def:80,spd:80,kid:70,intel:55,rei:82}, haki:{obs:70,arm:75,con:55}},
      {name:'Gear 5', overall:96, badge:'estimate', stats:{str:97,def:90,spd:95,kid:95,intel:60,rei:99}, haki:{obs:80,arm:88,con:88}}
    ]},
  {id:'zoro', name:'Roronoa Zoro', faction:'Straw Hat Pirates — Swordsman', aura:'#4a7a3a', bounty:'1,111,000,000',
    desc:'Wields three swords at once and is on track to become the world\'s greatest swordsman, full stop.',
    forms:[{name:'Enma Unleashed', overall:85, badge:'estimate',
      stats:{str:92,def:85,spd:88,kid:90,intel:60,rei:88}, haki:{obs:70,arm:96,con:80}}]},
  {id:'kaido', name:'Kaido', faction:'Beasts Pirates — Yonko', aura:'#4a5a8a', bounty:'4,611,100,000',
    desc:'"The Strongest Creature." Has fallen from cliffs, been executed, and survived it all so many times he\'s suicidal about it.',
    forms:[{name:'Hybrid Dragon Form', overall:95, badge:'estimate',
      stats:{str:99,def:98,spd:82,kid:85,intel:70,rei:97}, haki:{obs:75,arm:97,con:96}}]},
  {id:'bigmom', name:'Charlotte Linlin (Big Mom)', faction:'Big Mom Pirates — Yonko', aura:'#c94fa0', bounty:'4,388,000,000',
    desc:'Can rip the lifespan out of anyone who fears her and turn it into a soul-powered homie army.',
    forms:[{name:'Soul King Awakened', overall:93, badge:'estimate',
      stats:{str:95,def:95,spd:75,kid:92,intel:70,rei:97}, haki:{obs:72,arm:88,con:92}}]},
  {id:'whitebeard', name:'Edward "Whitebeard" Newgate', faction:'Whitebeard Pirates — Yonko', aura:'#4a90c9',
    bounty:'5,046,000,000 · highest bounty ever confirmed',
    desc:'Once called "the strongest man in the world." His quake powers alone could have split the sky.',
    forms:[{name:'Peak — Gura Gura no Mi', overall:94, badge:'estimate',
      stats:{str:97,def:92,spd:60,kid:96,intel:75,rei:97}, haki:{obs:65,arm:92,con:88}}]},
  {id:'shanks', name:'Shanks', faction:'Red Hair Pirates — Yonko', aura:'#c9403a', bounty:'4,048,900,000',
    desc:'Lost an arm to save Luffy\'s life as a child, and has been quietly the most feared man alive ever since.',
    forms:[{name:'Advanced Conqueror\'s Haki', overall:91, badge:'estimate',
      stats:{str:88,def:82,spd:88,kid:98,intel:85,rei:95}, haki:{obs:86,arm:92,con:97}}]},
  {id:'blackbeard', name:'Marshall D. Teach (Blackbeard)', faction:'Blackbeard Pirates — Yonko', aura:'#2a2a2a',
    desc:'The only known person to hold two Devil Fruit powers, and he stole the second one in cold blood.',
    forms:[{name:'Dark-Quake Twin Fruits', overall:90, badge:'estimate',
      stats:{str:90,def:88,spd:60,kid:96,intel:80,rei:93}, haki:{obs:55,arm:82,con:0}}]},
  {id:'akainu', name:'Sakazuki (Akainu)', faction:'Marines — Fleet Admiral', aura:'#c9402a',
    desc:'Believes in "absolute justice" so completely that he\'ll burn allies as readily as enemies to enforce it.',
    forms:[{name:'Magu Magu no Mi', overall:87, badge:'estimate',
      stats:{str:92,def:85,spd:70,kid:90,intel:78,rei:92}, haki:{obs:72,arm:90,con:0}}]},
  {id:'katakuri', name:'Charlotte Katakuri', faction:'Big Mom Pirates — Sweet Commander', aura:'#8a5aa0', bounty:'1,057,000,000',
    desc:'Can see seconds into the future with Advanced Observation Haki. Fought Luffy to a near-standstill alone.',
    forms:[{name:'Mochi Awakening', overall:82, badge:'estimate',
      stats:{str:85,def:80,spd:85,kid:88,intel:82,rei:88}, haki:{obs:96,arm:90,con:0}}]},
  {id:'rayleigh', name:'Silvers Rayleigh', faction:'Roger Pirates — First Mate', aura:'#d4b04a',
    desc:'The "Dark King" and Gol D. Roger\'s right hand. Taught Luffy to use Haki in a matter of weeks.',
    forms:[{name:'Dark King (Retired)', overall:84, badge:'estimate',
      stats:{str:82,def:78,spd:82,kid:95,intel:88,rei:90}, haki:{obs:85,arm:92,con:90}}]},
  {id:'roger', name:'Gol D. Roger', faction:'Roger Pirates — Captain', aura:'#e8c94f',
    bounty:'Unknown — regarded as the highest ever set',
    desc:'The Pirate King. Died of illness at his peak, and the world has been chasing his shadow ever since.',
    forms:[{name:'Peak (Flashback Era)', overall:97, badge:'estimate',
      stats:{str:95,def:92,spd:88,kid:98,intel:90,rei:99}, haki:{obs:90,arm:95,con:98}}]}
];
ONE_PIECE.forEach(c => c.series = 'One Piece');

const ALL = DATA.concat(NARUTO, ONE_PIECE);

const SERIES_META = {
  'Bleach':    {color:'#b3122d', icon:'霊'},
  'Naruto':    {color:'#f2a134', icon:'火'},
  'One Piece': {color:'#2e86c9', icon:'海'}
};
const SERIES_LIST = ['All', 'Bleach', 'Naruto', 'One Piece'];

const activeForm = {};   // id -> form index
const openStats = {};    // id -> bool
let state = { query:'', series:'All', faction:'All', sort:'power-desc' };

/* ---------- geometry helpers ---------- */
function pt(cx, cy, r, i, n){
  const angle = (Math.PI/180) * ((360/n)*i - 90);
  return [cx + r*Math.cos(angle), cy + r*Math.sin(angle)];
}
function ringPath(cx, cy, r, n){
  return [...Array(n).keys()].map(i => pt(cx,cy,r,i,n).join(',')).join(' ');
}

/* ---------- BLEACH: hexagonal reiatsu radar ---------- */
function radarSVG(stats, aura){
  const cx=90, cy=86, maxR=62, n=6;
  const labels = ['STR','DEF','SPD','TEC','INT','POW'];
  const keys = ['str','def','spd','kid','intel','rei'];
  const grid = [0.33,0.66,1].map(f => `<polygon points="${ringPath(cx,cy,maxR*f,n)}" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>`).join('');
  const spokes = [...Array(n).keys()].map(i => { const [x,y]=pt(cx,cy,maxR,i,n); return `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>`; }).join('');
  const labelEls = [...Array(n).keys()].map(i => { const [x,y]=pt(cx,cy,maxR+14,i,n); return `<text x="${x}" y="${y}" class="radar-label">${labels[i]}</text>`; }).join('');
  const poly = keys.map((k,i) => { const val=Math.max(4,stats[k])/100; const [x,y]=pt(cx,cy,maxR*val,i,n); return `${x.toFixed(1)},${y.toFixed(1)}`; }).join(' ');
  return `<svg width="180" height="176" viewBox="0 0 180 176">${grid}${spokes}<polygon points="${poly}" fill="${aura}33" stroke="${aura}" stroke-width="2"/>${labelEls}</svg>`;
}

/* ---------- ONE PIECE: 3-point Haki triangle ---------- */
function hakiTriangleSVG(haki, aura){
  const cx=90, cy=82, maxR=58, n=3;
  const labels = ['OBS','ARM','CON'];
  const keys = ['obs','arm','con'];
  const grid = [0.33,0.66,1].map(f => `<polygon points="${ringPath(cx,cy,maxR*f,n)}" fill="none" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>`).join('');
  const spokes = [...Array(n).keys()].map(i => { const [x,y]=pt(cx,cy,maxR,i,n); return `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>`; }).join('');
  const labelEls = [...Array(n).keys()].map(i => { const [x,y]=pt(cx,cy,maxR+16,i,n); return `<text x="${x}" y="${y}" class="radar-label">${labels[i]}</text>`; }).join('');
  const poly = keys.map((k,i) => { const val=Math.max(3,haki[k])/100; const [x,y]=pt(cx,cy,maxR*val,i,n); return `${x.toFixed(1)},${y.toFixed(1)}`; }).join(' ');
  const conColor = haki.con > 0 ? '#e0b04a' : 'rgba(255,255,255,0.15)';
  const [cxp,cyp] = pt(cx,cy,maxR,2,n);
  const conDot = `<circle cx="${cxp}" cy="${cyp}" r="4" fill="${conColor}" ${haki.con>0?`style="filter:drop-shadow(0 0 4px #e0b04a)"`:''}/>`;
  return `<svg width="180" height="168" viewBox="0 0 180 168">${grid}${spokes}<polygon points="${poly}" fill="${aura}33" stroke="${aura}" stroke-width="2"/>${labelEls}${conDot}</svg>`;
}

/* ---------- NARUTO: databook skill-parameter meters (10 half-point ticks) ---------- */
function dbkTicksHTML(value){
  const filled = Math.round(value*2); // number of half-steps out of 10
  let html = '';
  for(let i=0;i<10;i++){
    html += `<div class="dbk-tick ${i<filled?'filled':''}"></div>`;
  }
  return html;
}
function databookHTML(stats8, aura){
  const rows = [
    ['ninjutsu','Ninjutsu'],['taijutsu','Taijutsu'],['genjutsu','Genjutsu'],['intelligence','Intelligence'],
    ['strength','Strength'],['speed','Speed'],['stamina','Stamina'],['handseals','Hand Seals']
  ];
  const total = rows.reduce((s,[k]) => s + stats8[k], 0);
  const body = rows.map(([k,label]) => `
    <div class="dbk-row">
      <span class="dbk-label">${label}</span>
      <div class="dbk-ticks">${dbkTicksHTML(stats8[k])}</div>
      <span class="dbk-val">${stats8[k].toFixed(1)}</span>
    </div>`).join('');
  return `${body}<div class="dbk-total"><span>Databook Total</span><b>${total.toFixed(1)} / 40</b></div>`;
}

/* ---------- ONE PIECE: horizontal bars for the 6 core stats ---------- */
function opBarsHTML(stats, aura){
  const rows = [['str','STR'],['def','DEF'],['spd','SPD'],['kid','TEC'],['intel','INT'],['rei','POW']];
  return rows.map(([k,label]) => `
    <div class="bar-row">
      <span>${label}</span>
      <div class="bar-track"><div class="bar-fill" style="width:${stats[k]}%"></div></div>
      <span>${stats[k]}</span>
    </div>`).join('');
}

/* ---------- card renderers per universe ---------- */
function bleachCardBody(c, form, fi){
  const keys = [['str','STR'],['def','DEF'],['spd','SPD'],['kid','TEC'],['intel','INT'],['rei','POW']];
  const subRows = keys.map(([k,label]) => `
    <div class="substat-row">
      <span>${label}</span>
      <div class="substat-bar"><div class="substat-fill" style="width:${form.stats[k]}%"></div></div>
      <span>${form.stats[k]}</span>
    </div>`).join('');
  const isOpen = openStats[c.id] ? 'open' : '';
  return `
    <div class="radar-wrap">${radarSVG(form.stats, c.aura)}</div>
    <div class="substat-toggle" data-toggle="${c.id}">${isOpen ? 'Hide' : 'Show'} raw stat breakdown ▾</div>
    <div class="substats ${isOpen}" id="sub-${c.id}">${subRows}</div>`;
}
function narutoCardBody(c, form, fi){
  return `
    <div class="section-label">Databook Skill Parameters</div>
    ${databookHTML(form.stats8, c.aura)}`;
}
function onePieceCardBody(c, form, fi){
  const conNote = form.haki.con > 0
    ? `<div class="haki-caption awakened">◆ Conqueror\'s Haki awakened — one in several million are ever born with it</div>`
    : `<div class="haki-caption">Conqueror\'s Haki not shown — vanishingly rare even among top-tier fighters</div>`;
  const bounty = c.bounty ? `<div class="bounty-row"><span class="bounty-label">Bounty</span><span class="bounty-val">฿ ${c.bounty}</span></div>` : '';
  return `
    <div class="section-label">Haki</div>
    <div class="haki-wrap">${hakiTriangleSVG(form.haki, c.aura)}</div>
    ${conNote}
    <div class="section-label">Core Stats</div>
    ${opBarsHTML(form.stats, c.aura)}
    ${bounty}`;
}

function cardHTML(c){
  const fi = activeForm[c.id] ?? 0;
  const form = c.forms[fi];
  const sm = SERIES_META[c.series];
  const badgeText = form.badge === 'official'
    ? `<span class="dot" style="background:var(--gold)"></span> Official databook stat`
    : `<span class="dot" style="background:var(--muted-2)"></span> Fan-consensus estimate`;
  const pills = c.forms.map((f,i) => `<span class="form-pill ${i===fi?'active':''}" data-id="${c.id}" data-form="${i}">${f.name}</span>`).join('');

  let body = '';
  if(c.series === 'Bleach') body = bleachCardBody(c, form, fi);
  else if(c.series === 'Naruto') body = narutoCardBody(c, form, fi);
  else body = onePieceCardBody(c, form, fi);

  return `
  <div class="card" style="--aura:${c.aura}; --series-color:${sm.color}">
    <span class="series-tag">${sm.icon} ${c.series}</span>
    <span class="faction-tag">${c.faction}</span>
    <div class="char-name">${c.name}</div>
    <div class="char-desc">${c.desc}</div>
    ${c.forms.length > 1 ? `<div class="form-pills">${pills}</div>` : ''}
    ${body}
    <div class="power-row">
      <div class="power-label"><span>Power Level</span><b>${form.overall}</b></div>
      <div class="gauge"><div class="gauge-fill" style="width:${form.overall}%"></div></div>
    </div>
    <div class="badge-note">${badgeText}</div>
  </div>`;
}

/* ---------- filtering / controls ---------- */
function factionsForSeries(series){
  const pool = series === 'All' ? ALL : ALL.filter(c => c.series === series);
  return ['All', ...new Set(pool.map(c => c.faction.split(' —')[0].split(' (')[0]))];
}

function render(){
  const grid = document.getElementById('grid');
  let list = ALL.filter(c => {
    const matchesQuery = c.name.toLowerCase().includes(state.query.toLowerCase());
    const matchesSeries = state.series === 'All' || c.series === state.series;
    const matchesFaction = state.faction === 'All' || c.faction.startsWith(state.faction);
    return matchesQuery && matchesSeries && matchesFaction;
  });
  list = list.slice().sort((a,b) => {
    const pa = a.forms[activeForm[a.id] ?? 0].overall;
    const pb = b.forms[activeForm[b.id] ?? 0].overall;
    if(state.sort === 'power-desc') return pb - pa;
    if(state.sort === 'power-asc') return pa - pb;
    return a.name.localeCompare(b.name);
  });
  grid.innerHTML = list.length ? list.map(cardHTML).join('') : `<div class="empty">No character matches that search.</div>`;
}

function renderSeriesChips(){
  const wrap = document.getElementById('seriesChips');
  wrap.innerHTML = SERIES_LIST.map(s => {
    const meta = SERIES_META[s];
    const activeStyle = state.series === s && meta ? `style="background:${meta.color}; border-color:${meta.color}; color:#fff; box-shadow:0 0 16px ${meta.color}88;"` : '';
    const label = meta ? `${meta.icon} ${s}` : s;
    return `<span class="chip ${state.series===s?'active':''}" data-series="${s}" ${activeStyle}>${label}</span>`;
  }).join('');
  wrap.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      state.series = chip.dataset.series;
      state.faction = 'All'; // reset faction filter — its options change per universe
      renderSeriesChips();
      renderFactionChips();
      render();
    });
  });
  const label = document.getElementById('factionRowLabel');
  label.textContent = state.series === 'All' ? 'Faction' : `${state.series} Faction`;
}

function renderFactionChips(){
  const wrap = document.getElementById('factionChips');
  const factions = factionsForSeries(state.series);
  wrap.innerHTML = factions.map(f => `<span class="chip ${state.faction===f?'active':''}" data-faction="${f}">${f}</span>`).join('');
  wrap.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      state.faction = chip.dataset.faction;
      renderFactionChips();
      render();
    });
  });
}

document.getElementById('searchInput').addEventListener('input', e => { state.query = e.target.value; render(); });
document.getElementById('sortSel').addEventListener('change', e => { state.sort = e.target.value; render(); });
document.getElementById('grid').addEventListener('click', e => {
  const pill = e.target.closest('.form-pill');
  if(pill){ activeForm[pill.dataset.id] = parseInt(pill.dataset.form, 10); render(); return; }
  const toggle = e.target.closest('.substat-toggle');
  if(toggle){ const id = toggle.dataset.toggle; openStats[id] = !openStats[id]; render(); }
});

renderSeriesChips();
renderFactionChips();
render();
