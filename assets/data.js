// Editorial estimates. See docs/RANKING-METHODOLOGY.md.
const AtlasData = {
  "characters": [
    {
      "id": "ichigo",
      "name": "Ichigo Kurosaki",
      "series": "Bleach",
      "faction": "Substitute Shinigami",
      "aura": "#3a6fe0",
      "forms": [
        {
          "name": "Shikai — Soul Society",
          "overall": 48,
          "note": "Early Shikai is below his later Bankai."
        },
        {
          "name": "Bankai — Arrancar arc, without mask",
          "overall": 63,
          "note": "This excludes the Hollow mask and later training."
        },
        {
          "name": "Final Getsuga Tenshō",
          "overall": 95,
          "note": "A brief peak with a major duration limit; not his ordinary fighting state."
        },
        {
          "name": "True Bankai — final war",
          "overall": 97,
          "note": "Endgame potential is high, but the final encounter involved allies and special circumstances."
        }
      ],
      "context": "Soul Society, Arrancar and Thousand-Year Blood War arcs; use the named form’s arc."
    },
    {
      "id": "yhwach",
      "name": "Yhwach",
      "series": "Bleach",
      "faction": "Quincy — Wandenreich",
      "aura": "#e0b04a",
      "forms": [
        {
          "name": "Base — first invasion",
          "overall": 90,
          "note": "A formidable early-war form; do not credit it with his later absorbed power."
        },
        {
          "name": "The Almighty — after Soul King absorption",
          "overall": 99,
          "note": "Highest listed Bleach benchmark. Future alteration makes ordinary stat comparisons unreliable."
        }
      ],
      "context": "Soul Society, Arrancar and Thousand-Year Blood War arcs; use the named form’s arc."
    },
    {
      "id": "aizen",
      "name": "Sōsuke Aizen",
      "series": "Bleach",
      "faction": "Shinigami (Traitor)",
      "aura": "#c9932f",
      "forms": [
        {
          "name": "Captain — before Hōgyoku fusion",
          "overall": 84,
          "note": "Hypnosis and versatility matter as much as raw output."
        },
        {
          "name": "Hōgyoku-fused — final war",
          "overall": 96,
          "note": "Endgame Aizen belongs above the conventional captain tier; exact placement against Ichigo is debatable."
        }
      ],
      "context": "Soul Society, Arrancar and Thousand-Year Blood War arcs; use the named form’s arc."
    },
    {
      "id": "yamamoto",
      "name": "Genryūsai Yamamoto",
      "series": "Bleach",
      "faction": "Shinigami — Captain-Commander",
      "aura": "#e04b2f",
      "forms": [
        {
          "name": "Shikai — Ryūjin Jakka",
          "overall": 88,
          "note": "The veteran captain benchmark before Bankai."
        },
        {
          "name": "Bankai — Zanka no Tachi",
          "overall": 92,
          "note": "Bankai raises his threat substantially; its specific counters still matter."
        }
      ],
      "context": "Soul Society, Arrancar and Thousand-Year Blood War arcs; use the named form’s arc."
    },
    {
      "id": "kenpachi",
      "name": "Kenpachi Zaraki",
      "series": "Bleach",
      "faction": "Shinigami — 11th Division",
      "aura": "#d6203a",
      "forms": [
        {
          "name": "Sealed sword — Soul Society",
          "overall": 62,
          "note": "Earlier self-imposed limits are not equivalent to his war-arc strength."
        },
        {
          "name": "Shikai — Nozarashi",
          "overall": 87,
          "note": "Rated after training with Unohana; excludes his later Bankai."
        }
      ],
      "context": "Soul Society, Arrancar and Thousand-Year Blood War arcs; use the named form’s arc."
    },
    {
      "id": "byakuya",
      "name": "Byakuya Kuchiki",
      "series": "Bleach",
      "faction": "Shinigami — 6th Division",
      "aura": "#e792b5",
      "forms": [
        {
          "name": "Shikai — Soul Society",
          "overall": 60,
          "note": "Early Shikai only, not his Bankai or Royal Palace training."
        },
        {
          "name": "Bankai — after Royal Palace training",
          "overall": 84,
          "note": "Training materially improves his control and output."
        }
      ],
      "context": "Soul Society, Arrancar and Thousand-Year Blood War arcs; use the named form’s arc."
    },
    {
      "id": "hitsugaya",
      "name": "Tōshirō Hitsugaya",
      "series": "Bleach",
      "faction": "Shinigami — 10th Division",
      "aura": "#7fd8f0",
      "forms": [
        {
          "name": "Bankai — Soul Society",
          "overall": 61,
          "note": "Early, incomplete Bankai."
        },
        {
          "name": "Mature Bankai — final war",
          "overall": 89,
          "note": "The mature form has stronger freezing effects; activation conditions limit routine use."
        }
      ],
      "context": "Soul Society, Arrancar and Thousand-Year Blood War arcs; use the named form’s arc."
    },
    {
      "id": "gin",
      "name": "Gin Ichimaru",
      "series": "Bleach",
      "faction": "Shinigami (Traitor)",
      "aura": "#c7c2d6",
      "forms": [
        {
          "name": "Bankai — Kamishini no Yari",
          "overall": 78,
          "note": "Specialized surprise tactics can outperform a general ranking in the right matchup."
        }
      ],
      "context": "Soul Society, Arrancar and Thousand-Year Blood War arcs; use the named form’s arc."
    },
    {
      "id": "unohana",
      "name": "Retsu Unohana",
      "series": "Bleach",
      "faction": "Shinigami — 4th Division",
      "aura": "#8fbf7a",
      "forms": [
        {
          "name": "Bankai — Muken training",
          "overall": 83,
          "note": "Placed below the unlocked Kenpachi she trained, rather than above almost every captain."
        }
      ],
      "context": "Soul Society, Arrancar and Thousand-Year Blood War arcs; use the named form’s arc."
    },
    {
      "id": "kyoraku",
      "name": "Shunsui Kyōraku",
      "series": "Bleach",
      "faction": "Shinigami — Gotei 13",
      "aura": "#e0a54b",
      "forms": [
        {
          "name": "Shikai — Fake Karakura Town",
          "overall": 80,
          "note": "The earlier entry excludes Bankai."
        },
        {
          "name": "Bankai — final war",
          "overall": 88,
          "note": "His later Bankai should not rank below his earlier Shikai; its rules and nearby allies matter."
        }
      ],
      "context": "Soul Society, Arrancar and Thousand-Year Blood War arcs; use the named form’s arc."
    },
    {
      "id": "mayuri",
      "name": "Mayuri Kurotsuchi",
      "series": "Bleach",
      "faction": "Shinigami — 12th Division",
      "aura": "#8fd66b",
      "forms": [
        {
          "name": "Modified Bankai — final war",
          "overall": 79,
          "note": "Preparation and countermeasures dominate his matchups; this is not a raw-strength ranking."
        }
      ],
      "context": "Soul Society, Arrancar and Thousand-Year Blood War arcs; use the named form’s arc."
    },
    {
      "id": "rukia",
      "name": "Rukia Kuchiki",
      "series": "Bleach",
      "faction": "Shinigami — 13th Division",
      "aura": "#bcd9ee",
      "forms": [
        {
          "name": "Shikai — Arrancar arc",
          "overall": 45,
          "note": "Corrected arc label: her Shikai is shown after the Soul Society arc."
        },
        {
          "name": "Bankai — Hakka no Togame",
          "overall": 76,
          "note": "A substantial upgrade, with demanding control and limited sustained use."
        }
      ],
      "context": "Soul Society, Arrancar and Thousand-Year Blood War arcs; use the named form’s arc."
    },
    {
      "id": "renji",
      "name": "Renji Abarai",
      "series": "Bleach",
      "faction": "Shinigami — 6th Division",
      "aura": "#e0503a",
      "forms": [
        {
          "name": "Bankai — Soul Society",
          "overall": 50,
          "note": "Earlier incomplete Bankai."
        },
        {
          "name": "True Bankai — Sōō Zabimaru",
          "overall": 79,
          "note": "Royal Palace training unlocks a stronger Bankai."
        }
      ],
      "context": "Soul Society, Arrancar and Thousand-Year Blood War arcs; use the named form’s arc."
    },
    {
      "id": "urahara",
      "name": "Kisuke Urahara",
      "series": "Bleach",
      "faction": "Shinigami — Former Captain",
      "aura": "#e0d84b",
      "forms": [
        {
          "name": "Bankai — Kannonbiraki Benihime Aratame",
          "overall": 87,
          "note": "Versatile restructuring and planning; his final-war victory also required help."
        }
      ],
      "context": "Soul Society, Arrancar and Thousand-Year Blood War arcs; use the named form’s arc."
    },
    {
      "id": "yoruichi",
      "name": "Yoruichi Shihōin",
      "series": "Bleach",
      "faction": "Shinigami — Former Captain",
      "aura": "#f0a63a",
      "forms": [
        {
          "name": "Shunkō — final war",
          "overall": 82,
          "note": "Exceptional close-range speed; no hypothetical unrevealed Bankai is included."
        }
      ],
      "context": "Soul Society, Arrancar and Thousand-Year Blood War arcs; use the named form’s arc."
    },
    {
      "id": "uryu",
      "name": "Uryū Ishida",
      "series": "Bleach",
      "faction": "Quincy",
      "aura": "#4bb3e0",
      "forms": [
        {
          "name": "Quincy bow — early series",
          "overall": 38,
          "note": "Early abilities only."
        },
        {
          "name": "Letzt Stil — Soul Society",
          "overall": 65,
          "note": "Temporary power boost, not a sustainable baseline."
        },
        {
          "name": "The Antithesis — final war manga",
          "overall": 86,
          "note": "Replaces the anime-only Vollständig label. Its reversal ability is highly matchup-dependent."
        }
      ],
      "context": "Soul Society, Arrancar and Thousand-Year Blood War arcs; use the named form’s arc."
    },
    {
      "id": "orihime",
      "name": "Orihime Inoue",
      "series": "Bleach",
      "faction": "Human — Support Specialist",
      "aura": "#f0c1d6",
      "forms": [
        {
          "name": "Shun Shun Rikka — final war",
          "overall": 60,
          "note": "Support specialist: protection and recovery are exceptional, but this combat index understates her team value."
        }
      ],
      "context": "Soul Society, Arrancar and Thousand-Year Blood War arcs; use the named form’s arc."
    },
    {
      "id": "chad",
      "name": "Yasutora \"Chad\" Sado",
      "series": "Bleach",
      "faction": "Human — Fullbringer",
      "aura": "#a0784b",
      "forms": [
        {
          "name": "Brazo Derecha / Izquierda — Hueco Mundo",
          "overall": 49,
          "note": "Strong against lower-level opponents, but below established captain and Espada benchmarks."
        }
      ],
      "context": "Soul Society, Arrancar and Thousand-Year Blood War arcs; use the named form’s arc."
    },
    {
      "id": "ulquiorra",
      "name": "Ulquiorra Cifer",
      "series": "Bleach",
      "faction": "Arrancar — 4th Espada",
      "aura": "#5cc98a",
      "forms": [
        {
          "name": "Resurrección — Murciélago",
          "overall": 73,
          "note": "First release, separate from Segunda Etapa."
        },
        {
          "name": "Segunda Etapa",
          "overall": 80,
          "note": "Above his first release. Relative placement against the top Espada is disputed, not settled by a number."
        }
      ],
      "context": "Soul Society, Arrancar and Thousand-Year Blood War arcs; use the named form’s arc."
    },
    {
      "id": "grimmjow",
      "name": "Grimmjow Jaegerjaquez",
      "series": "Bleach",
      "faction": "Arrancar — 6th Espada",
      "aura": "#4b8ee0",
      "forms": [
        {
          "name": "Resurrección — Hueco Mundo",
          "overall": 68,
          "note": "This entry excludes later war-arc growth."
        }
      ],
      "context": "Soul Society, Arrancar and Thousand-Year Blood War arcs; use the named form’s arc."
    },
    {
      "id": "starrk",
      "name": "Coyote Starrk",
      "series": "Bleach",
      "faction": "Arrancar — 1st Espada (Primera)",
      "aura": "#8a97b0",
      "forms": [
        {
          "name": "Resurrección — Los Lobos",
          "overall": 80,
          "note": "First-ranked Espada; tied with Segunda Etapa Ulquiorra because that comparison lacks a decisive matchup."
        }
      ],
      "context": "Soul Society, Arrancar and Thousand-Year Blood War arcs; use the named form’s arc."
    },
    {
      "id": "haschwalth",
      "name": "Jugram Haschwalth",
      "series": "Bleach",
      "faction": "Quincy — Sternritter \"B\"",
      "aura": "#d4c84b",
      "forms": [
        {
          "name": "The Balance — final war",
          "overall": 88,
          "note": "Damage redistribution gives substantial matchup advantages; excludes temporary Almighty access."
        }
      ],
      "context": "Soul Society, Arrancar and Thousand-Year Blood War arcs; use the named form’s arc."
    },
    {
      "id": "isshin",
      "name": "Isshin Kurosaki",
      "series": "Bleach",
      "faction": "Shinigami — Former Captain",
      "aura": "#3a5be0",
      "forms": [
        {
          "name": "Shikai — Engetsu",
          "overall": 81,
          "note": "Limited direct feats; no unseen Bankai or speculative prime form is included."
        }
      ],
      "context": "Soul Society, Arrancar and Thousand-Year Blood War arcs; use the named form’s arc."
    },
    {
      "id": "hashirama",
      "name": "Hashirama Senju",
      "series": "Naruto",
      "faction": "Konoha — First Hokage",
      "aura": "#5ea86b",
      "forms": [
        {
          "name": "Sage Mode — living prime",
          "overall": 88,
          "note": "Top pre-Six-Paths benchmark, below Ten-Tails jinchūriki forms."
        }
      ],
      "context": "Part II and Fourth Shinobi World War; use the named form’s stage."
    },
    {
      "id": "madara",
      "name": "Madara Uchiha",
      "series": "Naruto",
      "faction": "Konoha — Founding Uchiha",
      "aura": "#8a2e2e",
      "forms": [
        {
          "name": "Reanimated — before Ten-Tails",
          "overall": 87,
          "note": "Includes Rinnegan and demonstrated Susanoo, not his later transformation."
        },
        {
          "name": "Ten-Tails — dual Rinnegan",
          "overall": 96,
          "note": "Endgame transformation above his earlier self; comparisons assume this specific stage."
        }
      ],
      "context": "Part II and Fourth Shinobi World War; use the named form’s stage."
    },
    {
      "id": "obito",
      "name": "Obito Uchiha",
      "series": "Naruto",
      "faction": "Konoha — Akatsuki",
      "aura": "#e07a2f",
      "forms": [
        {
          "name": "Orange mask — Kamui",
          "overall": 80,
          "note": "Intangibility creates favorable matchups without making him the strongest in raw output."
        },
        {
          "name": "Ten-Tails jinchūriki",
          "overall": 91,
          "note": "A major transformation above ordinary Kage-level forms."
        }
      ],
      "context": "Part II and Fourth Shinobi World War; use the named form’s stage."
    },
    {
      "id": "tobirama",
      "name": "Tobirama Senju",
      "series": "Naruto",
      "faction": "Konoha — Second Hokage",
      "aura": "#5c8fbf",
      "forms": [
        {
          "name": "Second Hokage — war-arc portrayal",
          "overall": 81,
          "note": "Teleportation and tactics matter; not credited with Six Paths upgrades."
        }
      ],
      "context": "Part II and Fourth Shinobi World War; use the named form’s stage."
    },
    {
      "id": "kabuto",
      "name": "Kabuto Yakushi",
      "series": "Naruto",
      "faction": "Sound / Akatsuki-adjacent",
      "aura": "#9bb04a",
      "forms": [
        {
          "name": "Sage Mode",
          "overall": 82,
          "note": "Versatile abilities and terrain advantages; excludes an entire summoned army from the score."
        }
      ],
      "context": "Part II and Fourth Shinobi World War; use the named form’s stage."
    },
    {
      "id": "kakashi",
      "name": "Kakashi Hatake",
      "series": "Naruto",
      "faction": "Konoha — Jōnin / Hokage",
      "aura": "#7a7f8c",
      "forms": [
        {
          "name": "Mangekyō — war arc, single eye",
          "overall": 75,
          "note": "Single-eye Kamui only. The temporary dual-Mangekyō form is not represented."
        }
      ],
      "context": "Part II and Fourth Shinobi World War; use the named form’s stage."
    },
    {
      "id": "itachi",
      "name": "Itachi Uchiha",
      "series": "Naruto",
      "faction": "Konoha / Akatsuki",
      "aura": "#4a1f1f",
      "forms": [
        {
          "name": "Akatsuki — living",
          "overall": 79,
          "note": "Strong techniques with limited stamina; excludes a hypothetical healthy prime."
        }
      ],
      "context": "Part II and Fourth Shinobi World War; use the named form’s stage."
    },
    {
      "id": "jiraiya",
      "name": "Jiraiya",
      "series": "Naruto",
      "faction": "Konoha — Sannin",
      "aura": "#c9622f",
      "forms": [
        {
          "name": "Sage Mode",
          "overall": 77,
          "note": "Powerful but imperfect Sage Mode; preparation and information affect the Pain matchup."
        }
      ],
      "context": "Part II and Fourth Shinobi World War; use the named form’s stage."
    },
    {
      "id": "naruto",
      "name": "Naruto Uzumaki",
      "series": "Naruto",
      "faction": "Konoha — Jinchūriki",
      "aura": "#f2a134",
      "forms": [
        {
          "name": "Sage Mode — war arc, no Kurama cloak",
          "overall": 78,
          "note": "Sage Mode alone must not inherit his later Six Paths strength."
        },
        {
          "name": "Six Paths Sage Mode — war arc",
          "overall": 94,
          "note": "Same broad benchmark as Rinnegan Sasuke; no Boruto-era upgrades."
        }
      ],
      "context": "Part II and Fourth Shinobi World War; use the named form’s stage."
    },
    {
      "id": "sasuke",
      "name": "Sasuke Uchiha",
      "series": "Naruto",
      "faction": "Konoha — Rogue / Uchiha",
      "aura": "#6e3ab5",
      "forms": [
        {
          "name": "Eternal Mangekyō — war arc",
          "overall": 81,
          "note": "Before receiving Hagoromo’s power."
        },
        {
          "name": "Rinnegan — war arc",
          "overall": 94,
          "note": "Peer benchmark with Six Paths Naruto; matchup and temporary borrowed power still matter."
        }
      ],
      "context": "Part II and Fourth Shinobi World War; use the named form’s stage."
    },
    {
      "id": "guy",
      "name": "Might Guy",
      "series": "Naruto",
      "faction": "Konoha — Taijutsu Specialist",
      "aura": "#2f8f5c",
      "forms": [
        {
          "name": "Base jōnin — no opened Gates",
          "overall": 61,
          "note": "Corrected the old 88 score, which wrongly gave base Guy the standing of his empowered forms."
        }
      ],
      "context": "Part II and Fourth Shinobi World War; use the named form’s stage."
    },
    {
      "id": "minato",
      "name": "Minato Namikaze",
      "series": "Naruto",
      "faction": "Konoha — Fourth Hokage",
      "aura": "#e8d84f",
      "forms": [
        {
          "name": "Reanimated — Kurama Chakra Mode",
          "overall": 84,
          "note": "Corrected the Six Paths label: this is his Kurama-enhanced war-arc state."
        }
      ],
      "context": "Part II and Fourth Shinobi World War; use the named form’s stage."
    },
    {
      "id": "pain",
      "name": "Pain (Nagato)",
      "series": "Naruto",
      "faction": "Akatsuki",
      "aura": "#e05a5a",
      "forms": [
        {
          "name": "Six Paths of Pain — six bodies",
          "overall": 82,
          "note": "Rated as the full six-body formation, with shared vision and resource constraints."
        }
      ],
      "context": "Part II and Fourth Shinobi World War; use the named form’s stage."
    },
    {
      "id": "kaguya",
      "name": "Kaguya Ōtsutsuki",
      "series": "Naruto",
      "faction": "Ōtsutsuki Clan",
      "aura": "#c9c2e0",
      "forms": [
        {
          "name": "Revived — final war",
          "overall": 99,
          "note": "Highest listed Naruto benchmark; defeating her required a coordinated sealing strategy."
        }
      ],
      "context": "Part II and Fourth Shinobi World War; use the named form’s stage."
    },
    {
      "id": "luffy",
      "name": "Monkey D. Luffy",
      "series": "One Piece",
      "faction": "Straw Hat Pirates — Captain",
      "aura": "#e05353",
      "forms": [
        {
          "name": "Gear 4 — late Wano, advanced Haki",
          "overall": 84,
          "note": "Specifies late-Wano Haki rather than mixing Dressrosa and Wano versions."
        },
        {
          "name": "Gear 5 — Wano",
          "overall": 93,
          "note": "Same band as Kaido. The Wano outcome does not establish an effortless fresh-opponent rematch win."
        }
      ],
      "context": "Sabaody, Marineford, Whole Cake Island and Wano; Roger/Whitebeard use the Oden flashback."
    },
    {
      "id": "zoro",
      "name": "Roronoa Zoro",
      "series": "One Piece",
      "faction": "Straw Hat Pirates — Swordsman",
      "aura": "#4a7a3a",
      "forms": [
        {
          "name": "King of Hell — Wano",
          "overall": 79,
          "note": "Strong commander benchmark after his Haki breakthrough, below the established Emperor band."
        }
      ],
      "context": "Sabaody, Marineford, Whole Cake Island and Wano; Roger/Whitebeard use the Oden flashback."
    },
    {
      "id": "kaido",
      "name": "Kaido",
      "series": "One Piece",
      "faction": "Beasts Pirates — Yonko",
      "aura": "#4a5a8a",
      "forms": [
        {
          "name": "Hybrid dragon — Wano",
          "overall": 93,
          "note": "Sustained Emperor-level performance across multiple opponents."
        }
      ],
      "context": "Sabaody, Marineford, Whole Cake Island and Wano; Roger/Whitebeard use the Oden flashback."
    },
    {
      "id": "bigmom",
      "name": "Charlotte Linlin (Big Mom)",
      "series": "One Piece",
      "faction": "Big Mom Pirates — Yonko",
      "aura": "#c94fa0",
      "forms": [
        {
          "name": "Soul-enhanced — Wano",
          "overall": 92,
          "note": "Replaces the unsupported Soul King Awakened form name; this is her demonstrated Wano enhancement."
        }
      ],
      "context": "Sabaody, Marineford, Whole Cake Island and Wano; Roger/Whitebeard use the Oden flashback."
    },
    {
      "id": "whitebeard",
      "name": "Edward \"Whitebeard\" Newgate",
      "series": "One Piece",
      "faction": "Whitebeard Pirates — Yonko",
      "aura": "#4a90c9",
      "forms": [
        {
          "name": "Prime — Roger flashback",
          "overall": 96,
          "note": "Prime portrayal, not his later Marineford condition; tied with Roger."
        }
      ],
      "context": "Sabaody, Marineford, Whole Cake Island and Wano; Roger/Whitebeard use the Oden flashback."
    },
    {
      "id": "shanks",
      "name": "Shanks",
      "series": "One Piece",
      "faction": "Red Hair Pirates — Yonko",
      "aura": "#c9403a",
      "forms": [
        {
          "name": "Emperor — through Wano",
          "overall": 93,
          "note": "High-end Haki portrayal; limited fights by this cutoff make finer placement uncertain."
        }
      ],
      "context": "Sabaody, Marineford, Whole Cake Island and Wano; Roger/Whitebeard use the Oden flashback."
    },
    {
      "id": "blackbeard",
      "name": "Marshall D. Teach (Blackbeard)",
      "series": "One Piece",
      "faction": "Blackbeard Pirates — Yonko",
      "aura": "#2a2a2a",
      "forms": [
        {
          "name": "Two Devil Fruits — through Wano",
          "overall": 89,
          "note": "Excludes post-Wano feats. Exact placement is uncertain because direct combat evidence is limited."
        }
      ],
      "context": "Sabaody, Marineford, Whole Cake Island and Wano; Roger/Whitebeard use the Oden flashback."
    },
    {
      "id": "akainu",
      "name": "Sakazuki (Akainu)",
      "series": "One Piece",
      "faction": "Marines — Fleet Admiral",
      "aura": "#c9402a",
      "forms": [
        {
          "name": "Magu Magu — Marineford / timeskip context",
          "overall": 91,
          "note": "Top Marine benchmark; later rank does not by itself establish a numerical power increase."
        }
      ],
      "context": "Sabaody, Marineford, Whole Cake Island and Wano; Roger/Whitebeard use the Oden flashback."
    },
    {
      "id": "katakuri",
      "name": "Charlotte Katakuri",
      "series": "One Piece",
      "faction": "Big Mom Pirates — Sweet Commander",
      "aura": "#8a5aa0",
      "forms": [
        {
          "name": "Awakened Mochi — Whole Cake Island",
          "overall": 76,
          "note": "Future sight and awakening are substantial, but this is below late-Wano Emperor scaling."
        }
      ],
      "context": "Sabaody, Marineford, Whole Cake Island and Wano; Roger/Whitebeard use the Oden flashback."
    },
    {
      "id": "rayleigh",
      "name": "Silvers Rayleigh",
      "series": "One Piece",
      "faction": "Roger Pirates — First Mate",
      "aura": "#d4b04a",
      "forms": [
        {
          "name": "Retired — Sabaody",
          "overall": 83,
          "note": "Old Rayleigh, not his inferred prime; stamina is an important limitation."
        }
      ],
      "context": "Sabaody, Marineford, Whole Cake Island and Wano; Roger/Whitebeard use the Oden flashback."
    },
    {
      "id": "roger",
      "name": "Gol D. Roger",
      "series": "One Piece",
      "faction": "Roger Pirates — Captain",
      "aura": "#e8c94f",
      "forms": [
        {
          "name": "Prime — Oden flashback",
          "overall": 96,
          "note": "Tied with prime Whitebeard; no invented bounty-based strength calculation."
        }
      ],
      "context": "Sabaody, Marineford, Whole Cake Island and Wano; Roger/Whitebeard use the Oden flashback."
    }
  ],
  "series": {
    "Bleach": {
      "url": "https://www.viz.com/shonenjump/chapters/bleach",
      "label": "Bleach manga · through chapter 686",
      "cutoff": "Manga through chapter 686; anime-only additions and novels excluded."
    },
    "Naruto": {
      "url": "https://www.viz.com/shonenjump/chapters/naruto",
      "label": "Naruto manga · through chapter 700",
      "cutoff": "Original manga through chapter 700; Boruto excluded."
    },
    "One Piece": {
      "url": "https://www.viz.com/shonenjump/chapters/one-piece",
      "label": "One Piece manga · Wano cutoff",
      "cutoff": "Through chapter 1057 (end of Wano); later revelations excluded."
    }
  }
};
if (typeof module !== "undefined") module.exports = AtlasData;
