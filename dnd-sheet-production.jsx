// ===== D&D LIBRARY DATA (from dnd-library.js) =====
// D&D 5e Library Data
// Loaded by dnd-sheet.jsx via <script> tag or window.DND_LIBRARY

// D&D 5e Library Data
// Loaded by dnd-sheet.jsx via <script> tag or window.DND_LIBRARY

// D&D 5e Library Data
// Loaded by dnd-sheet.jsx via <script> tag or window.DND_LIBRARY


// Hooks available as globals (set by index.html) or from React
const useState = window.useState || React.useState;
const useCallback = window.useCallback || React.useCallback;
const useRef = window.useRef || React.useRef;

// COMPENDIUM - sourced from Library (dnd-library-backup-2026-05-24)
// Races from RACE_COMPENDIUM
const SPECIES = {
  Aasimar: { traits:[{name:"Celestial Resistance",desc:"Resistance to radiant & necrotic damage."},{name:"Darkvision",desc:"60 ft darkvision."},{name:"Healing Hands",desc:"Heal HP = your level as Magic action (1/Long Rest)."},{name:"Light Bearer",desc:"Know Light cantrip."}], abilityBonus:{CHA:2}, size:"Medium", speed:30 },
  Dragonborn: { traits:[{name:"Draconic Ancestry",desc:"Choose a dragon type - sets Breath Weapon damage type and Resistance."},{name:"Breath Weapon",desc:"2d6 exhale, scales up. DC = 8 + CON mod + PB."},{name:"Damage Resistance",desc:"Resistance matching your ancestry."}], abilityBonus:{STR:2,CHA:1}, size:"Medium", speed:30 },
  Dwarf: { traits:[{name:"Darkvision",desc:"60 ft darkvision."},{name:"Dwarven Resilience",desc:"Advantage vs. poison saves; resistance to poison damage."},{name:"Stonecunning",desc:"Double prof on History checks related to stonework."},{name:"Tool Proficiency",desc:"Proficiency with one artisan's tool set."}], abilityBonus:{CON:2}, size:"Medium", speed:25 },
  Elf: { traits:[{name:"Darkvision",desc:"60 ft darkvision."},{name:"Keen Senses",desc:"Proficiency in Perception."},{name:"Fey Ancestry",desc:"Advantage on saves vs. Charmed; immune to magical sleep."},{name:"Trance",desc:"Long Rest in 4 hours of trance."}], abilityBonus:{DEX:2}, size:"Medium", speed:30 },
  Gnome: { traits:[{name:"Darkvision",desc:"60 ft darkvision."},{name:"Gnome Cunning",desc:"Advantage on all INT/WIS/CHA saving throws against magic."}], abilityBonus:{INT:2}, size:"Small", speed:25 },
  "Half-Elf": { traits:[{name:"Darkvision",desc:"60 ft darkvision."},{name:"Fey Ancestry",desc:"Advantage vs. Charmed; immune to magical sleep."},{name:"Skill Versatility",desc:"Proficiency in two skills of your choice."}], abilityBonus:{CHA:2}, size:"Medium", speed:30 },
  "Half-Orc": { traits:[{name:"Darkvision",desc:"60 ft darkvision."},{name:"Menacing",desc:"Proficiency in Intimidation."},{name:"Relentless Endurance",desc:"Drop to 1 HP instead of 0 once per Long Rest."},{name:"Savage Attacks",desc:"Extra damage die on melee crit."}], abilityBonus:{STR:2,CON:1}, size:"Medium", speed:30 },
  Halfling: { traits:[{name:"Lucky",desc:"Reroll 1s on attack rolls, ability checks, or saving throws."},{name:"Brave",desc:"Advantage on saves vs. Frightened."},{name:"Halfling Nimbleness",desc:"Move through space of any larger creature."}], abilityBonus:{DEX:2}, size:"Small", speed:25 },
  Human: { traits:[{name:"Extra Language",desc:"Speak one extra language."},{name:"Extra Skill",desc:"Proficiency in one skill of your choice."}], abilityBonus:{STR:1,DEX:1,CON:1,INT:1,WIS:1,CHA:1}, size:"Medium", speed:30 },
  Tiefling: { traits:[{name:"Darkvision",desc:"60 ft darkvision."},{name:"Hellish Resistance",desc:"Resistance to fire damage."},{name:"Infernal Legacy",desc:"Thaumaturgy cantrip; Hellish Rebuke 1/day at 3rd; Darkness 1/day at 5th."}], abilityBonus:{CHA:2,INT:1}, size:"Medium", speed:30 },
};

// Subraces from SUBRACE_COMPENDIUM - keyed by parent race
const SUBRACES = {
  Dwarf: ["Hill Dwarf","Mountain Dwarf"],
  Elf: ["High Elf","Wood Elf","Dark Elf (Drow)"],
  Gnome: ["Forest Gnome","Rock Gnome"],
  "Half-Elf": [],
  "Half-Orc": [],
  Halfling: ["Lightfoot Halfling","Stout Halfling"],
  Human: ["Human (Variant)"],
  Tiefling: ["Tiefling (Infernal)"],
  Dragonborn: [
    "Dragonborn - Black","Dragonborn - Blue","Dragonborn - Brass",
    "Dragonborn - Bronze","Dragonborn - Copper","Dragonborn - Gold",
    "Dragonborn - Green","Dragonborn - Red","Dragonborn - Silver","Dragonborn - White",
  ],
  Aasimar: [],
};

// Subrace trait details from SUBRACE_COMPENDIUM
const SUBRACE_TRAITS = {
  "Hill Dwarf": [{name:"Dwarven Toughness",desc:"HP max +1, and +1 again each level. Ability Score Increase: +1 WIS."}],
  "Mountain Dwarf": [{name:"Dwarven Armor Training",desc:"Proficiency with light and medium armor. Ability Score Increase: +2 STR."}],
  "High Elf": [{name:"Cantrip",desc:"Know one wizard cantrip (INT-based). Extra Language. Ability Score Increase: +1 INT."}],
  "Wood Elf": [{name:"Fleet of Foot",desc:"Speed 35 ft. Mask of the Wild: hide in natural obscurement. Ability Score Increase: +1 WIS."}],
  "Dark Elf (Drow)": [{name:"Drow Magic",desc:"Superior Darkvision 120 ft. Sunlight Sensitivity. Dancing Lights, Faerie Fire, Darkness (1/day each). Ability Score Increase: +1 CHA."}],
  "Lightfoot Halfling": [{name:"Naturally Stealthy",desc:"Can hide behind creatures one size larger. Ability Score Increase: +1 CHA."}],
  "Stout Halfling": [{name:"Stout Resilience",desc:"Advantage vs. poison; resistance to poison damage. Ability Score Increase: +1 CON."}],
  "Forest Gnome": [{name:"Natural Illusionist",desc:"Know Minor Illusion cantrip. Speak with Small Beasts. Ability Score Increase: +1 DEX."}],
  "Rock Gnome": [{name:"Tinker",desc:"Construct clockwork devices. Double prof on magic item History checks. Ability Score Increase: +1 CON."}],
  "Human (Variant)": [{name:"Variant Traits",desc:"Ability Score Increase: +1 to two scores. One skill. One feat. Requires DM approval."}],
  "Tiefling (Infernal)": [{name:"Infernal Legacy",desc:"Thaumaturgy cantrip, Hellish Rebuke 1/day, Darkness 1/day. Ability Score Increase: +2 CHA, +1 INT."}],
  "Dragonborn - Black": [{name:"Draconic Ancestry",desc:"Acid. Breath: 5x30 ft line, DEX save."}],
  "Dragonborn - Blue": [{name:"Draconic Ancestry",desc:"Lightning. Breath: 5x30 ft line, DEX save."}],
  "Dragonborn - Brass": [{name:"Draconic Ancestry",desc:"Fire. Breath: 5x30 ft line, DEX save."}],
  "Dragonborn - Bronze": [{name:"Draconic Ancestry",desc:"Lightning. Breath: 5x30 ft line, DEX save."}],
  "Dragonborn - Copper": [{name:"Draconic Ancestry",desc:"Acid. Breath: 5x30 ft line, DEX save."}],
  "Dragonborn - Gold": [{name:"Draconic Ancestry",desc:"Fire. Breath: 15 ft cone, DEX save."}],
  "Dragonborn - Green": [{name:"Draconic Ancestry",desc:"Poison. Breath: 15 ft cone, CON save."}],
  "Dragonborn - Red": [{name:"Draconic Ancestry",desc:"Fire. Breath: 15 ft cone, DEX save."}],
  "Dragonborn - Silver": [{name:"Draconic Ancestry",desc:"Cold. Breath: 15 ft cone, CON save."}],
  "Dragonborn - White": [{name:"Draconic Ancestry",desc:"Cold. Breath: 15 ft cone, CON save."}],
};

const CLASSES = {
  Barbarian:{ hitDie:12, primaryAbility:"STR", savingThrows:["STR","CON"], armorProf:["Light","Medium","Shields"], weaponProf:["Simple","Martial"], skillChoices:["Animal Handling","Athletics","Intimidation","Nature","Perception","Survival"], skillCount:2, features:{1:["Rage (2/LR, +2 dmg)","Unarmored Defense (10+DEX+CON)","Weapon Mastery"],2:["Reckless Attack","Danger Sense"],3:["Primal Path (Subclass)"],4:["Ability Score Increase"],5:["Extra Attack","Fast Movement +10 ft"],6:["Rage 3/LR","Primal Path Feature"],7:["Feral Instinct","Instinctive Pounce"],8:["Ability Score Increase"],9:["Brutal Strike"],10:["Primal Path Feature"]}, startingEquipment:"Greataxe or any martial melee weapon; 4 handaxes or any simple weapon; Explorer's Pack; 15 gp", spellcastingAbility:null, spells:{} },
  Bard: { hitDie:8, primaryAbility:"CHA", savingThrows:["DEX","CHA"], armorProf:["Light"], weaponProf:["Simple","Hand Crossbow","Longsword","Rapier","Shortsword"], skillChoices:["Acrobatics","Animal Handling","Arcana","Athletics","Deception","History","Insight","Intimidation","Investigation","Medicine","Nature","Perception","Performance","Persuasion","Religion","Sleight of Hand","Stealth","Survival"], skillCount:3, features:{1:["Bardic Inspiration d6","Spellcasting (CHA)","Weapon Mastery"],2:["Expertise (2 skills)","Jack of All Trades"],3:["Bard Subclass","Expertise (2 more)"],4:["Ability Score Increase"],5:["Font of Inspiration","Bardic Inspiration d8"],6:["Subclass Feature"],7:["Countercharm"],8:["Ability Score Increase"],9:["Expertise (2 more)"],10:["Bardic Inspiration d10","Magical Secrets"]}, startingEquipment:"Rapier or longsword or any simple weapon; Diplomat's Pack or Entertainer's Pack; Lute or other musical instrument; Leather armor; Dagger", spellcastingAbility:"CHA", spells:{cantrips:["Blade Ward","Dancing Lights","Friends","Light","Mage Hand","Minor Illusion","Prestidigitation","Starry Wisp","True Strike","Vicious Mockery"],1:["Bane","Charm Person","Cure Wounds","Detect Magic","Dissonant Whispers","Faerie Fire","Healing Word","Heroism","Identify","Silent Image","Sleep","Thunderwave"],2:["Aid","Calm Emotions","Enhance Ability","Heat Metal","Hold Person","Invisibility","Knock","Lesser Restoration","See Invisibility","Shatter","Silence","Suggestion"],3:["Bestow Curse","Clairvoyance","Dispel Magic","Fear","Hypnotic Pattern","Major Image","Mass Healing Word","Tongues"],4:["Charm Monster","Confusion","Dimension Door","Greater Invisibility","Polymorph"],5:["Dominate Person","Dream","Greater Restoration","Hold Monster","Modify Memory","Raise Dead","Scrying"]} },
  Cleric: { hitDie:8, primaryAbility:"WIS", savingThrows:["WIS","CHA"], armorProf:["Light","Medium","Shields"], weaponProf:["Simple"], skillChoices:["History","Insight","Medicine","Persuasion","Religion"], skillCount:2, features:{1:["Spellcasting (WIS)","Divine Domain (choose your domain, gain domain spells)"],2:["Channel Divinity (1/rest)","Divine Domain feature"],3:[],4:["Ability Score Improvement"],5:["Destroy Undead (CR 1/2)"],6:["Channel Divinity (2/rest)","Divine Domain feature"],7:[],8:["Ability Score Improvement","Destroy Undead (CR 1)","Divine Domain feature"],9:[],10:["Divine Intervention"],11:["Destroy Undead (CR 2)"],12:["Ability Score Improvement"],13:[],14:["Destroy Undead (CR 3)"],15:[],16:["Ability Score Improvement"],17:["Destroy Undead (CR 4)","Divine Domain feature"],18:["Channel Divinity (3/rest)"],19:["Ability Score Improvement"],20:["Divine Intervention improvement"]}, startingEquipment:"Mace or warhammer (if proficient); Scale mail or Leather armor or Chain mail; Light crossbow + 20 bolts or any simple weapon; Priest's Pack or Explorer's Pack; Shield; Holy symbol", spellcastingAbility:"WIS", spells:{cantrips:["Guidance","Light","Mending","Resistance","Sacred Flame","Spare the Dying","Thaumaturgy","Toll the Dead","Word of Radiance"],1:["Bane","Bless","Command","Cure Wounds","Detect Evil and Good","Detect Magic","Guiding Bolt","Healing Word","Inflict Wounds","Protection from Evil and Good","Sanctuary","Shield of Faith"],2:["Aid","Augury","Blindness/Deafness","Calm Emotions","Hold Person","Lesser Restoration","Prayer of Healing","Silence","Spiritual Weapon","Zone of Truth"],3:["Animate Dead","Beacon of Hope","Daylight","Dispel Magic","Mass Healing Word","Revivify","Sending","Speak with Dead","Spirit Guardians"],4:["Banishment","Control Water","Death Ward","Divination","Freedom of Movement","Guardian of Faith"],5:["Commune","Contagion","Dispel Evil and Good","Flame Strike","Greater Restoration","Hallow","Mass Cure Wounds","Raise Dead","Scrying"]} },
  Druid: { hitDie:8, primaryAbility:"WIS", savingThrows:["INT","WIS"], armorProf:["Light","Medium","Shields (non-metal)"], weaponProf:["Simple"], skillChoices:["Arcana","Animal Handling","Insight","Medicine","Nature","Perception","Religion","Survival"], skillCount:2, features:{1:["Druidic","Primal Order","Spellcasting (WIS)","Wild Shape CR 1/4"],2:["Wild Shape CR 1/2 (swim)","Wild Companion"],3:["Druid Circle (Subclass)","Wild Resurgence"],4:["Ability Score Increase","Wild Shape improvement"],5:["Wild Shape CR 1 (fly)","Commune with Nature"],6:["Subclass Feature"],7:["Elemental Fury"],8:["Ability Score Increase","Wild Shape CR 2"],9:["Commune improvement"],10:["Subclass Feature","Wild Shape CR 3"]}, startingEquipment:"Wooden shield or any simple weapon; Scimitar or simple melee weapon; Leather armor; Explorer's Pack; Druidic focus", spellcastingAbility:"WIS", spells:{cantrips:["Druidcraft","Guidance","Mending","Produce Flame","Resistance","Shillelagh","Spare the Dying","Thorn Whip","Thunderclap"],1:["Animal Friendship","Charm Person","Cure Wounds","Detect Magic","Entangle","Faerie Fire","Fog Cloud","Goodberry","Healing Word","Longstrider","Speak with Animals","Thunderwave"],2:["Animal Messenger","Barkskin","Enhance Ability","Flame Blade","Gust of Wind","Heat Metal","Hold Person","Moonbeam","Pass without Trace","Spike Growth","Summon Beast"],3:["Call Lightning","Conjure Animals","Daylight","Dispel Magic","Plant Growth","Revivify","Sleet Storm","Speak with Plants","Wind Wall"],4:["Blight","Control Water","Dominate Beast","Freedom of Movement","Ice Storm","Polymorph","Stoneskin","Wall of Fire"],5:["Antilife Shell","Awaken","Commune with Nature","Conjure Elemental","Greater Restoration","Insect Plague","Mass Cure Wounds","Reincarnate","Scrying"]} },
  Fighter: { hitDie:10, primaryAbility:"STR", savingThrows:["STR","CON"], armorProf:["Light","Medium","Heavy","Shields"], weaponProf:["Simple","Martial"], skillChoices:["Acrobatics","Animal Handling","Athletics","History","Insight","Intimidation","Perception","Survival"], skillCount:2, features:{1:["Fighting Style","Second Wind (1d10+level)","Weapon Mastery (3)"],2:["Action Surge 1/SR","Tactical Mind"],3:["Martial Archetype (Subclass)"],4:["Ability Score Increase","Weapon Mastery (4)"],5:["Extra Attack","Tactical Shift"],6:["Ability Score Increase"],7:["Subclass Feature"],8:["Ability Score Increase"],9:["Indomitable 1/LR","Master of Armaments"],10:["Subclass Feature","Weapon Mastery (5)"]}, startingEquipment:"Chain mail or leather armor + longbow + 20 arrows; Martial weapon + shield or two martial weapons; Light crossbow + 20 bolts or hand crossbow; Dungeoneer's Pack or Explorer's Pack", spellcastingAbility:null, spells:{} },
  Monk: { hitDie:8, primaryAbility:"DEX/WIS", savingThrows:["STR","DEX"], armorProf:[], weaponProf:["Simple","Martial (Monk Weapons)"], skillChoices:["Acrobatics","Athletics","History","Insight","Religion","Stealth"], skillCount:2, features:{1:["Martial Arts d6","Unarmored Defense (10+DEX+WIS)","Weapon Mastery"],2:["Monk's Focus (PBx/LR)","Unarmored Movement +10","Uncanny Metabolism"],3:["Deflect Attacks","Monastic Tradition (Subclass)"],4:["Ability Score Increase","Slow Fall"],5:["Extra Attack","Stunning Strike"],6:["Subclass Feature","Empowered Strikes"],7:["Evasion"],8:["Ability Score Increase"],9:["Acrobatic Movement"],10:["Heightened Focus","Self-Restoration"]}, startingEquipment:"Shortsword or any simple weapon; Dungeoneer's Pack or Explorer's Pack; 10 darts", spellcastingAbility:null, spells:{} },
  Paladin: { hitDie:10, primaryAbility:"STR/CHA", savingThrows:["WIS","CHA"], armorProf:["Light","Medium","Heavy","Shields"], weaponProf:["Simple","Martial"], skillChoices:["Athletics","Insight","Intimidation","Medicine","Persuasion","Religion"], skillCount:2, features:{1:["Divine Smite","Lay on Hands (5xlevel)","Spellcasting (CHA)","Weapon Mastery"],2:["Fighting Style","Paladin's Smite"],3:["Channel Divinity 1/SR","Sacred Oath (Subclass)"],4:["Ability Score Increase"],5:["Extra Attack","Faithful Steed"],6:["Aura of Protection (CHA mod to saves, 10 ft)"],7:["Subclass Feature"],8:["Ability Score Increase"],9:["Abjure Foes"],10:["Aura of Courage (10 ft)"]}, startingEquipment:"Martial weapon + shield or two martial weapons; 5 javelins or any simple melee weapon; Priest's Pack or Explorer's Pack; Chain mail; Holy symbol", spellcastingAbility:"CHA", spells:{1:["Bless","Command","Compelled Duel","Cure Wounds","Detect Evil and Good","Divine Favor","Heroism","Searing Smite","Shield of Faith","Thunderous Smite","Wrathful Smite"],2:["Aid","Branding Smite","Find Steed","Lesser Restoration","Magic Weapon","Prayer of Healing","Warding Bond","Zone of Truth"],3:["Aura of Vitality","Blinding Smite","Daylight","Dispel Magic","Magic Circle","Remove Curse","Revivify"],4:["Aura of Life","Banishment","Death Ward","Staggering Smite"],5:["Banishing Smite","Circle of Power","Destructive Wave","Dispel Evil and Good","Holy Weapon","Raise Dead"]} },
  Ranger: { hitDie:10, primaryAbility:"DEX/WIS", savingThrows:["STR","DEX"], armorProf:["Light","Medium","Shields"], weaponProf:["Simple","Martial"], skillChoices:["Animal Handling","Athletics","Insight","Investigation","Nature","Perception","Stealth","Survival"], skillCount:3, features:{1:["Deft Explorer","Favored Enemy (+2 dmg)","Spellcasting (WIS)","Weapon Mastery"],2:["Fighting Style","Favored Enemy improvement"],3:["Ranger Archetype (Subclass)","Roving (+5 ft, climb & swim)"],4:["Ability Score Increase"],5:["Extra Attack","Tireless"],6:["Subclass Feature","Favored Enemy improvement"],7:["Blindsight 10 ft"],8:["Ability Score Increase"],9:["Conjure Barrage"],10:["Subclass Feature"]}, startingEquipment:"Scale mail or leather armor; Two shortswords or two simple melee weapons; Dungeoneer's Pack or Explorer's Pack; Longbow + 20 arrows", spellcastingAbility:"WIS", spells:{1:["Alarm","Animal Friendship","Cure Wounds","Detect Magic","Entangle","Fog Cloud","Goodberry","Hunter's Mark","Jump","Longstrider","Speak with Animals"],2:["Animal Messenger","Barkskin","Cordon of Arrows","Darkvision","Pass without Trace","Protection from Poison","Silence","Spike Growth","Summon Beast"],3:["Conjure Animals","Conjure Barrage","Daylight","Lightning Arrow","Plant Growth","Speak with Plants","Wind Wall"],4:["Conjure Woodland Beings","Freedom of Movement","Grasping Vine","Stoneskin"],5:["Conjure Volley","Steel Wind Strike","Swift Quiver","Tree Stride"]} },
  Rogue: { hitDie:8, primaryAbility:"DEX", savingThrows:["DEX","INT"], armorProf:["Light"], weaponProf:["Simple","Hand Crossbow","Longsword","Rapier","Shortsword"], skillChoices:["Acrobatics","Athletics","Deception","Insight","Intimidation","Investigation","Perception","Persuasion","Sleight of Hand","Stealth"], skillCount:4, features:{1:["Expertise (2 skills)","Sneak Attack 1d6","Thieves' Cant","Weapon Mastery"],2:["Cunning Action (Dash/Disengage/Hide)"],3:["Roguish Archetype (Subclass)","Steady Aim"],4:["Ability Score Increase"],5:["Cunning Strike","Sneak Attack 3d6","Uncanny Dodge"],6:["Expertise (2 more)"],7:["Evasion","Reliable Talent"],8:["Ability Score Increase"],9:["Subclass Feature"],10:["Ability Score Increase"]}, startingEquipment:"Rapier or shortsword; Shortbow + 20 arrows or shortsword; Burglar's Pack or Dungeoneer's Pack or Explorer's Pack; Leather armor; Two daggers; Thieves' tools", spellcastingAbility:null, spells:{} },
  Sorcerer: { hitDie:6, primaryAbility:"CHA", savingThrows:["CON","CHA"], armorProf:[], weaponProf:["Simple"], skillChoices:["Arcana","Deception","Insight","Intimidation","Persuasion","Religion"], skillCount:2, features:{1:["Innate Sorcery (Adv spell attacks, +1 DC)","Spellcasting (CHA)","Weapon Mastery"],2:["Font of Magic (SP = level)","Metamagic (2)"],3:["Sorcerous Origin (Subclass)"],4:["Ability Score Increase"],5:["Sorcerous Restoration"],6:["Subclass Feature"],7:["Sorcery Incarnate"],8:["Ability Score Increase"],9:["Metamagic (3)"],10:["Subclass Feature","Metamagic (4)"]}, startingEquipment:"Light crossbow + 20 bolts or any simple weapon; Component pouch or arcane focus; Dungeoneer's Pack or Explorer's Pack; Two daggers", spellcastingAbility:"CHA", spells:{cantrips:["Blade Ward","Chill Touch","Fire Bolt","Light","Mage Hand","Minor Illusion","Poison Spray","Prestidigitation","Ray of Frost","Shocking Grasp","True Strike"],1:["Burning Hands","Charm Person","Chromatic Orb","Detect Magic","Expeditious Retreat","False Life","Feather Fall","Fog Cloud","Mage Armor","Magic Missile","Ray of Sickness","Shield","Sleep","Thunderwave","Witch Bolt"],2:["Alter Self","Blindness/Deafness","Blur","Darkness","Darkvision","Enhance Ability","Enlarge/Reduce","Hold Person","Invisibility","Knock","Mirror Image","Misty Step","Scorching Ray","Shatter","Spider Climb","Suggestion","Web"],3:["Blink","Counterspell","Daylight","Dispel Magic","Fear","Fireball","Fly","Haste","Hypnotic Pattern","Lightning Bolt","Slow","Stinking Cloud","Tongues"],4:["Banishment","Blight","Confusion","Dimension Door","Fire Shield","Greater Invisibility","Ice Storm","Polymorph","Stoneskin","Wall of Fire"],5:["Animate Objects","Cloudkill","Cone of Cold","Creation","Dominate Person","Hold Monster","Insect Plague","Seeming","Telekinesis","Teleportation Circle","Wall of Stone"]} },
  Warlock: { hitDie:8, primaryAbility:"CHA", savingThrows:["WIS","CHA"], armorProf:["Light"], weaponProf:["Simple"], skillChoices:["Arcana","Deception","History","Intimidation","Investigation","Nature","Religion"], skillCount:2, features:{1:["Eldritch Invocations (1)","Pact Magic (CHA, SR recharge)","Weapon Mastery"],2:["Eldritch Invocations (2 total)"],3:["Pact Boon (Blade/Chain/Talisman/Tome)","Otherworldly Patron (Subclass)"],4:["Ability Score Increase"],5:["Eldritch Invocations (3 total)","Pact Magic 3rd-level"],6:["Subclass Feature"],7:["Eldritch Invocations (4 total)"],8:["Ability Score Increase"],9:["Contact Patron","Pact Magic 5th-level"],10:["Subclass Feature","Eldritch Invocations (5 total)"]}, startingEquipment:"Light crossbow + 20 bolts or any simple weapon; Component pouch or arcane focus; Scholar's Pack or Dungeoneer's Pack; Leather armor; Any simple weapon; Two daggers", spellcastingAbility:"CHA", spells:{cantrips:["Blade Ward","Chill Touch","Eldritch Blast","Mage Hand","Minor Illusion","Poison Spray","Prestidigitation","True Strike"],1:["Armor of Agathys","Arms of Hadar","Bane","Charm Person","Hex","Hellish Rebuke","Protection from Evil and Good","Witch Bolt"],2:["Cloud of Daggers","Darkness","Enthrall","Hold Person","Invisibility","Mirror Image","Misty Step","Shatter","Spider Climb","Suggestion"],3:["Counterspell","Dispel Magic","Fear","Fly","Hunger of Hadar","Hypnotic Pattern","Vampiric Touch"],4:["Banishment","Blight","Charm Monster","Dimension Door","Shadow of Moil"],5:["Contact Other Plane","Dream","Hold Monster","Scrying","Synaptic Static","Teleportation Circle"]} },
  Wizard: { hitDie:6, primaryAbility:"INT", savingThrows:["INT","WIS"], armorProf:[], weaponProf:["Simple"], skillChoices:["Arcana","History","Insight","Investigation","Medicine","Religion"], skillCount:3, features:{1:["Arcane Recovery (½ level slots/SR)","Memorize Spell","Spellcasting (INT)","Weapon Mastery"],2:["Scholar (Expertise: Arcana or History)"],3:["Arcane Tradition (Subclass)","Cantrip Formulas"],4:["Ability Score Increase"],5:["Memorize Spell improvement"],6:["Subclass Feature"],7:["Spell Mastery (cantrip)"],8:["Ability Score Increase"],9:["Spell Mastery (1st-level)"],10:["Subclass Feature"]}, startingEquipment:"Quarterstaff or dagger; Component pouch or arcane focus; Scholar's Pack or Explorer's Pack; Spellbook", spellcastingAbility:"INT", spells:{cantrips:["Acid Splash","Blade Ward","Chill Touch","Dancing Lights","Fire Bolt","Light","Mage Hand","Mending","Minor Illusion","Poison Spray","Prestidigitation","Ray of Frost","Shocking Grasp","True Strike"],1:["Alarm","Burning Hands","Charm Person","Chromatic Orb","Comprehend Languages","Detect Magic","Expeditious Retreat","False Life","Feather Fall","Find Familiar","Fog Cloud","Grease","Identify","Mage Armor","Magic Missile","Protection from Evil and Good","Ray of Sickness","Shield","Silent Image","Sleep","Tasha's Hideous Laughter","Thunderwave","Unseen Servant","Witch Bolt"],2:["Alter Self","Arcane Lock","Blindness/Deafness","Blur","Cloud of Daggers","Crown of Madness","Darkness","Darkvision","Detect Thoughts","Enlarge/Reduce","Flaming Sphere","Hold Person","Invisibility","Knock","Levitate","Mirror Image","Misty Step","Phantasmal Force","Scorching Ray","See Invisibility","Shatter","Spider Climb","Suggestion","Web"],3:["Animate Dead","Bestow Curse","Blink","Clairvoyance","Counterspell","Dispel Magic","Fear","Fireball","Fly","Gaseous Form","Haste","Hypnotic Pattern","Lightning Bolt","Major Image","Protection from Energy","Remove Curse","Sending","Slow","Stinking Cloud","Tongues","Vampiric Touch","Water Breathing"],4:["Arcane Eye","Banishment","Blight","Confusion","Control Water","Dimension Door","Evard's Black Tentacles","Fire Shield","Greater Invisibility","Ice Storm","Locate Creature","Polymorph","Stone Shape","Stoneskin","Wall of Fire"],5:["Animate Objects","Bigby's Hand","Cloudkill","Cone of Cold","Conjure Elemental","Contact Other Plane","Creation","Dominate Person","Dream","Geas","Hold Monster","Legend Lore","Mislead","Modify Memory","Passwall","Scrying","Seeming","Telekinesis","Teleportation Circle","Wall of Force","Wall of Stone"]} },
};

const SKILLS_BY_ABILITY = {
  STR:[{name:"Athletics",ability:"STR"}],
  DEX:[{name:"Acrobatics",ability:"DEX"},{name:"Sleight of Hand",ability:"DEX"},{name:"Stealth",ability:"DEX"}],
  CON:[],
  INT:[{name:"Arcana",ability:"INT"},{name:"History",ability:"INT"},{name:"Investigation",ability:"INT"},{name:"Nature",ability:"INT"},{name:"Religion",ability:"INT"}],
  WIS:[{name:"Animal Handling",ability:"WIS"},{name:"Insight",ability:"WIS"},{name:"Medicine",ability:"WIS"},{name:"Perception",ability:"WIS"},{name:"Survival",ability:"WIS"}],
  CHA:[{name:"Deception",ability:"CHA"},{name:"Intimidation",ability:"CHA"},{name:"Performance",ability:"CHA"},{name:"Persuasion",ability:"CHA"}],
};

const SPELL_SLOTS = {
  1:[2],2:[3],3:[4,2],4:[4,3],5:[4,3,2],6:[4,3,3],7:[4,3,3,1],8:[4,3,3,2],9:[4,3,3,3,1],
  10:[4,3,3,3,2],11:[4,3,3,3,2,1],12:[4,3,3,3,2,1],13:[4,3,3,3,2,1,1],14:[4,3,3,3,2,1,1],
  15:[4,3,3,3,2,1,1,1],16:[4,3,3,3,2,1,1,1],17:[4,3,3,3,2,1,1,1,1],18:[4,3,3,3,3,1,1,1,1],
  19:[4,3,3,3,3,2,1,1,1],20:[4,3,3,3,3,2,2,1,1],
};

const ABILITY_KEYS  = ["STR","DEX","CON","INT","WIS","CHA"];
const ABILITY_NAMES = {STR:"Strength",DEX:"Dexterity",CON:"Constitution",INT:"Intelligence",WIS:"Wisdom",CHA:"Charisma"};
const CURRENCY = ["PP","GP","EP","SP","CP"];
const CURRENCY_RATES = {CP:"x100=1GP",SP:"x10=1GP",EP:"x2=1GP",GP:"base",PP:"=10GP"};

const abilityMod = s => Math.floor((s-10)/2);
const profBonus  = l => Math.ceil(l/4)+1;
const fmt        = n => n>=0 ? `+${n}` : `${n}`;

const BLANK = {
 name:"", player:"", charClass:"", level:1, background:"", species:"", subrace:"", alignment:"",
 abilities:{STR:10,DEX:10,CON:10,INT:10,WIS:10,CHA:10},
 hp:{max:0,current:0,temp:0},
 ac:10, speed:30,
 saveProficiencies:[], skillProficiencies:[], skillExpertise:[],
 inspiration:false, deathSaves:{successes:0,failures:0},
  // Attack tab
 weapons:[{name:"",atk:"",dmg:""},{name:"",atk:"",dmg:""},{name:"",atk:"",dmg:""},{name:"",atk:"",dmg:""},{name:"",atk:"",dmg:""}],
 attackSpells:[{name:"",atk:"",lvl:"",dmg:""},{name:"",atk:"",lvl:"",dmg:""},{name:"",atk:"",lvl:"",dmg:""}],
  // Spells tab
 spellSlotsUsed:Array(9).fill(0), spellsKnown:[], preparedSpells:[],
  // Gear tab
 armor:"", armorItems:[], shield:false, shieldItems:[], weaponItems:[],
 starterPack:"", toolsEquip:"", chosenStartEquip:[], toolItems:[], gemItems:[], gems:"", jewelryItems:[], jewelry:"", componentItems:[], components:"", potionItems:[], potions:"", spellbooks:"", scrollItems:[], scrolls:"", wandItems:[], wands:"", rods:"", magicItemItems:[], magicItems:"",
 currency:{CP:0,SP:0,EP:0,GP:0,PP:0},
  // Notes tab
 notes:"", personalityTraits:"", ideals:"", bonds:"", flaws:"",
  // Photos tab
 photos:[],
  // Rounds tab
 conditions:[], concentrating:"", rageActive:false, rageRounds:0,
 bonusActions:"", reactions:"", legendaryActions:"",
  // Companion tab
 companionName:"", companionType:"", companionAC:"", companionHP:"", companionSpeed:"",
 companionSTR:10,companionDEX:10,companionCON:10,companionINT:10,companionWIS:10,companionCHA:10,
 companionAttacks:[{name:"",atk:"",dmg:""}],
 companionNotes:"", avatarPhoto:"", multiClass:"",
 classLevel:1, multiClassLevel:0,
 resistances:[], immunities:[], vulnerabilities:[],
 advantage:false, disadvantage:false,
 inspirationActive:false, actionDiceCount:0,
 classSkills:[],
 languages:[],
 divineDomain:"",
 racialCantrip:"",
};

const CHAR_KEY = "dnd5e_character_v1";
const TABS = ["core","features","gear","spells","notes","photos","rounds","companion"];

// Skill proficiencies granted by each background (PHB)
const BG_SKILLS = {
  Acolyte: ["Insight","Religion"],
  Charlatan: ["Deception","Sleight of Hand"],
  Criminal: ["Deception","Stealth"],
  Entertainer: ["Acrobatics","Performance"],
  "Folk Hero": ["Animal Handling","Survival"],
  "Guild Artisan":["Insight","Persuasion"],
  Hermit: ["Medicine","Religion"],
  Noble: ["History","Persuasion"],
  Outlander: ["Athletics","Survival"],
  Sage: ["Arcana","History"],
  Sailor: ["Athletics","Perception"],
  Soldier: ["Athletics","Intimidation"],
  Urchin: ["Sleight of Hand","Stealth"],
};

// Ability score bonuses granted by each subrace
const SUBRACE_BONUS = {
  "Hill Dwarf": {WIS:1},
  "Mountain Dwarf": {STR:2},
  "High Elf": {INT:1},
  "Wood Elf": {WIS:1},
  "Dark Elf (Drow)": {CHA:1},
  "Lightfoot Halfling":{CHA:1},
  "Stout Halfling": {CON:1},
  "Forest Gnome": {DEX:1},
  "Rock Gnome": {CON:1},
  "Draconic Bloodline":{},
  "Feather": {},
};

// Languages granted by race
const RACE_LANGUAGES = {
  Human: ["Common"],
  Elf: ["Common","Elvish"],
  Dwarf: ["Common","Dwarvish"],
  Halfling: ["Common","Halfling"],
  Gnome: ["Common","Gnomish"],
  "Half-Elf": ["Common","Elvish"],
  "Half-Orc": ["Common","Orc"],
  Tiefling: ["Common","Infernal"],
  Dragonborn: ["Common","Draconic"],
  Aasimar: ["Common","Celestial"],
};

// Languages granted by background
const BG_LANGUAGES = {
  Acolyte: [],
  Charlatan: [],
  Criminal: [],
  Entertainer: [],
  "Folk Hero": [],
  "Guild Artisan":[],
  Hermit: [],
  Noble: [],
  Outlander: [],
  Sage: [],
  Sailor: [],
  Soldier: [],
  Urchin: [],
};

// Cantrip choices granted by subrace
const SUBRACE_CANTRIPS = {
  "High Elf": {source:"Wizard", list:["Acid Splash","Blade Ward","Chill Touch","Dancing Lights","Fire Bolt","Friends","Frostbite","Light","Mage Hand","Mending","Message","Minor Illusion","Poison Spray","Prestidigitation","Ray of Frost","Shocking Grasp","True Strike"]},
  "Forest Gnome":{source:"Illusion", list:["Minor Illusion"]},
};

// Standard languages available for choice
const ALL_LANGUAGES = ["Abyssal","Celestial","Common","Deep Speech","Draconic","Dwarvish","Elvish","Giant","Gnomish","Goblin","Halfling","Infernal","Orc","Primordial","Sylvan","Thieves' Cant","Undercommon"];

// Extra language choices granted by subrace (number of languages to pick)
const SUBRACE_LANGUAGES = {
  "High Elf": 1,
  "Half-Elf": 1,
  "Hill Dwarf": 0,
};

// Skill proficiencies granted by racial traits
const RACE_SKILLS = {
  Elf: ["Perception"], // Keen Senses
  "Half-Elf":["Perception"], // Keen Senses via elf heritage
  Aasimar: [],
  Dwarf: [],
  Gnome: [],
  Halfling: [],
  "Half-Orc":["Intimidation"], // Menacing
  Human: [],
  Tiefling: [],
  Dragonborn:[],
};

function charLoad() {
 try {
 const raw = localStorage.getItem(CHAR_KEY);
 if (raw) {
 const saved = JSON.parse(raw);
      // Merge with BLANK so new fields added in updates are always present
 return { ...BLANK, ...saved,
 abilities: { ...BLANK.abilities, ...(saved.abilities||{}) },
 hp: { ...BLANK.hp, ...(saved.hp||{}) },
 deathSaves: { ...BLANK.deathSaves, ...(saved.deathSaves||{}) },
 currency: { ...BLANK.currency, ...(saved.currency||{}) },
 resistances: Array.isArray(saved.resistances)      ? saved.resistances      : [],
 immunities: Array.isArray(saved.immunities)       ? saved.immunities       : [],
 vulnerabilities: Array.isArray(saved.vulnerabilities)  ? saved.vulnerabilities  : [],
 weapons: Array.isArray(saved.weapons)          ? saved.weapons          : BLANK.weapons,
 attackSpells: Array.isArray(saved.attackSpells)     ? saved.attackSpells     : BLANK.attackSpells,
 spellSlotsUsed: Array.isArray(saved.spellSlotsUsed)   ? saved.spellSlotsUsed   : BLANK.spellSlotsUsed,
 spellsKnown: Array.isArray(saved.spellsKnown)      ? saved.spellsKnown      : [],
 preparedSpells: Array.isArray(saved.preparedSpells)   ? saved.preparedSpells   : [],
 photos: Array.isArray(saved.photos)           ? saved.photos           : [],
 conditions: Array.isArray(saved.conditions)       ? saved.conditions       : [],
 saveProficiencies: Array.isArray(saved.saveProficiencies)    ? saved.saveProficiencies    : [],
 skillProficiencies: Array.isArray(saved.skillProficiencies)   ? saved.skillProficiencies   : [],
 skillExpertise: Array.isArray(saved.skillExpertise)       ? saved.skillExpertise       : [],
 classSkills: Array.isArray(saved.classSkills)         ? saved.classSkills         : [],
 languages: Array.isArray(saved.languages)           ? saved.languages            : [],
        // Migration: clear multiClass if multiClassLevel is 0 (not actually multiclassed)
 multiClass: (saved.multiClassLevel > 0) ? (saved.multiClass || "") : "",
      };
    }
  } catch(_) {}
 return BLANK;
}

function charSave(c) {
 try { localStorage.setItem(CHAR_KEY, JSON.stringify(c)); } catch(_) {}
}

const CONDITIONS = ["Blinded","Charmed","Deafened","Exhaustion","Frightened","Grappled","Incapacitated","Invisible","Paralyzed","Petrified","Poisoned","Prone","Restrained","Stunned","Unconscious"];

// MULTICLASS RULES (enforced on sheet, not stored in library)
// Prereqs: [ability, minScore] - all must be met
const MC_PREREQS = {
  Barbarian: [["STR",13]],
  Bard: [["CHA",13]],
  Cleric: [["WIS",13]],
  Druid: [["WIS",13]],
  Fighter: [["STR",13]], // OR DEX 13 - handled as union below
  Monk: [["DEX",13],["WIS",13]],
  Paladin: [["STR",13],["CHA",13]],
  Ranger: [["DEX",13],["WIS",13]],
  Rogue: [["DEX",13]],
  Sorcerer: [["CHA",13]],
  Warlock: [["CHA",13]],
  Wizard: [["INT",13]],
};
// Fighter/Ranger have OR conditions - we handle them separately
const MC_PREREQS_OR = {
  Fighter: [["STR",13],["DEX",13]], // need STR 13 OR DEX 13
  Ranger: null, // Ranger needs both DEX+WIS (covered above)
};

function mcPrereqMet(className, abilities) {
 if (MC_PREREQS_OR[className]) {
    // OR logic: at least one must be met
 return MC_PREREQS_OR[className].some(([ab,score]) => (abilities[ab]||10) >= score);
  }
 const prereqs = MC_PREREQS[className];
 if (!prereqs) return true;
 return prereqs.every(([ab,score]) => (abilities[ab]||10) >= score);
}

function mcFailedPrereqs(className, abilities) {
 if (MC_PREREQS_OR[className]) {
 const orPrereqs = MC_PREREQS_OR[className];
 const anyMet = orPrereqs.some(([ab,score]) => (abilities[ab]||10) >= score);
 return anyMet ? [] : orPrereqs; // show all OR options if none met
  }
 return (MC_PREREQS[className]||[]).filter(([ab,score]) => (abilities[ab]||10) < score);
}

const MC_PROFS_GAINED = {
  Barbarian: "Light & medium armor, shields, simple & martial weapons",
  Bard: "Light armor, simple weapons, hand crossbows, longswords, rapiers, shortswords, Bardic Inspiration",
  Cleric: "Light & medium armor, shields, simple weapons",
  Druid: "Light & medium armor (non-metal), shields (non-metal)",
  Fighter: "Light & medium armor, shields, simple & martial weapons",
  Monk: "Simple weapons, shortswords",
  Paladin: "Light & medium armor, shields, simple & martial weapons",
  Ranger: "Light & medium armor, shields, simple & martial weapons",
  Rogue: "Light armor, thieves' tools",
  Sorcerer: "-",
  Warlock: "Light armor, simple weapons",
  Wizard: "-",
};

// Info popover shown next to the MULTICLASS label
function MulticlassInfo({ primaryClass, abilities }) {
 const [show, setShow] = useState(false);
 return (
    <span style={{position:"relative",display:"inline-flex"}}>
      <button className="mc-info-btn" onClick={()=>setShow(s=>!s)} title="Multiclass rules">ℹ</button>
      {show && (
        <>
          <div className="mc-info-backdrop" onClick={()=>setShow(false)}/>
          <div className="mc-info-panel">
            <div className="mc-info-title">Multiclassing Rules</div>
            <div className="mc-info-section">
              <div className="mc-info-head">Prerequisites</div>
              <div className="mc-info-body">You must meet the ability score prerequisite for your current class <em>and</em> the new class before taking a level in it.</div>
            </div>
            <div className="mc-info-section">
              <div className="mc-info-head">Proficiency Bonus</div>
              <div className="mc-info-body">Based on your <em>total</em> character level across all classes.</div>
            </div>
            <div className="mc-info-section">
              <div className="mc-info-head">Proficiencies Gained</div>
              <div className="mc-info-body">You only gain the multiclass proficiencies for the new class - not full starting proficiencies.</div>
            </div>
            <div className="mc-info-section">
              <div className="mc-info-head">Spell Slots</div>
              <div className="mc-info-body">Full casters (Bard, Cleric, Druid, Sorcerer, Wizard) count full levels. Half casters (Paladin, Ranger) count half levels (round down). Slots are shared across all classes.</div>
            </div>
            <div className="mc-info-section">
              <div className="mc-info-head">Extra Attack</div>
              <div className="mc-info-body">Extra Attack does not stack between classes unless a feature specifically says so.</div>
            </div>
            <div className="mc-info-section">
              <div className="mc-info-head">All Prerequisites</div>
              <div className="mc-info-body" style={{fontFamily:"'DM Mono',monospace",fontSize:10,lineHeight:1.7}}>
                {Object.entries(MC_PREREQS).map(([cls, prereqs]) => {
 const orCond = MC_PREREQS_OR[cls];
 const condText = orCond
                    ? orCond.map(([ab,s])=>`${ab} ${s}`).join(" or ")
                    : prereqs.map(([ab,s])=>`${ab} ${s}`).join(" & ");
 const met = mcPrereqMet(cls, abilities);
 return (
                    <div key={cls} style={{display:"flex",justifyContent:"space-between",gap:8,color:met?"var(--green)":"var(--text)"}}>
                      <span>{cls}</span><span>{condText} {met?"✓":""}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            {primaryClass && MC_PROFS_GAINED[primaryClass] && (
              <div className="mc-info-section">
                <div className="mc-info-head">If multiclassing into {primaryClass}</div>
                <div className="mc-info-body">{MC_PROFS_GAINED[primaryClass]}</div>
              </div>
            )}
          </div>
        </>
      )}
    </span>
  );
}

// XP required to reach each level (index = level, value = total XP needed)
const XP_THRESHOLDS = [0,0,300,900,2700,6500,14000,23000,34000,48000,64000,85000,100000,120000,140000,165000,195000,225000,265000,305000,355000];

// ALIGNMENT SELECT
// Shows abbreviated (LG, CN...) when closed, full name in the open dropdown list.

const ALIGNMENTS = [
  {abbr:"LG", full:"Lawful Good"},
  {abbr:"NG", full:"Neutral Good"},
  {abbr:"CG", full:"Chaotic Good"},
  {abbr:"LN", full:"Lawful Neutral"},
  {abbr:"TN", full:"True Neutral"},
  {abbr:"CN", full:"Chaotic Neutral"},
  {abbr:"LE", full:"Lawful Evil"},
  {abbr:"NE", full:"Neutral Evil"},
  {abbr:"CE", full:"Chaotic Evil"},
];
const ALIGN_ABBR = Object.fromEntries(ALIGNMENTS.map(a=>[a.full, a.abbr]));

function AlignmentSelect({ value, onChange }) {
 const [open, setOpen] = useState(false);
 const abbr = value ? (ALIGN_ABBR[value] || value) : "";
 return (
    <div className="align-wrap">
      {/* Closed state - shows abbreviation */}
      {!open && (
        <button className="align-closed hdr-field-in" onClick={()=>setOpen(true)}>
          {abbr || <span style={{color:"var(--subtle)"}}>-</span>}
          <span className="align-caret">▾</span>
        </button>
      )}
      {/* Open state - full select with full names */}
      {open && (
        <select
 autoFocus
 className="hdr-field-in hdr-field-sel align-open"
 value={value}
 onChange={e=>{ onChange(e.target.value); setOpen(false); }}
 onBlur={()=>setOpen(false)}
        >
          <option value="">- Select -</option>
          {ALIGNMENTS.map(a=>(
            <option key={a.full} value={a.full}>{a.full}</option>
          ))}
        </select>
      )}
    </div>
  );
}

function SmartPopup({desc}) {
 const ref = React.useRef(null);
  React.useEffect(()=>{
 if(!ref.current) return;
 const rect = ref.current.getBoundingClientRect();
 const overflow = rect.right - (window.innerWidth - 8);
 if(overflow > 0) ref.current.style.transform = `translateX(calc(-50% - ${overflow}px))`;
  },[]);
 return (
    <div ref={ref} className="ft-info-popup">
      <div className="ft-info-popup-body">{desc}</div>
    </div>
  );
}

function App() {
 const [char, setChar] = useState(() => charLoad());

  // Auto-save on every change
 const setCharSaving = useCallback((updater) => {
 setChar(prev => {
 const next = typeof updater === "function" ? updater(prev) : updater;
 charSave(next);
 return next;
    });
  }, []);
 const [tab, setTab] = useState(()=>localStorage.getItem("dnd5e_tab")||"core");
 const [hdrOpen, setHdrOpen] = useState(false);
 const [skillRoll, setSkillRoll] = useState(null);
 const [hpAmount, setHpAmount]   = useState("");
 const [dsLastRoll, setDsLastRoll] = useState(null);
 const [rivOpen, setRivOpen]    = useState(false);
 const [rivType, setRivType]    = useState("");
 const [rivDmg, setRivDmg]     = useState("");
 const [actionDiceRoll, setActionDiceRoll] = useState(null);
 const [advRolls, setAdvRolls]   = useState(null); // {label, roll, bonus, total}
 const [openFeat, setOpenFeat] = useState(null);
 const [openCurrency, setOpenCurrency] = useState(false);
 const [curBuf, setCurBuf] = React.useState({PP:"",GP:"",EP:"",SP:"",CP:""});
 const [openArmor, setOpenArmor] = useState(false);
 const [openShield, setOpenShield] = useState(false);
 const [openGearWeapons, setOpenGearWeapons] = useState(false);
 const [openTrait, setOpenTrait] = useState(null);
 const [spellView, setSpellView] = useState("cantrips");
 const [avatarLightbox, setAvatarLightbox] = useState(false);
 const [showLibrary, setShowLibrary] = useState(false);
 const [showDice, setShowDice]    = useState(false);
 const [diceColor, setDiceColor]   = useState("blue");
 const [libEntries, setLibEntries] = useState(() => libLoad());
 const [xpAdd, setXpAdd] = useState("");
 const [levelUpMsg, setLevelUpMsg] = useState("");
 const [levelUpPending, setLevelUpPending] = useState(null); // {newLvl, primaryClass, multiClass}

  // Auto-clear multiClass when multiClassLevel drops to 0
 const { useEffect } = React;
 useEffect(() => {
 if (char.multiClass && char.multiClassLevel === 0) {
 setCharSaving(p => ({...p, multiClass: "", classLevel: p.level}));
    }
  }, [char.multiClassLevel, char.multiClass]);

 const applyLevelUp = useCallback((chosenClass) => {
 setCharSaving(p => {
 const nc = CLASSES[chosenClass] || null;
 const u = {...p};
 const isSplit = levelUpPending?.isSplit;
 if (isSplit) {
        // Retroactive split: chosen class keeps current level, other gets level-1
 if (chosenClass === p.charClass) {
 u.classLevel = p.level - 1;
 u.multiClassLevel = 1;
        } else {
 u.classLevel = p.level - 1;
 u.multiClassLevel = 1;
        }
 setLevelUpMsg(`✓ Level split set: ${p.charClass} ${u.classLevel} / ${p.multiClass} ${u.multiClassLevel}`);
 setTimeout(() => setLevelUpMsg(""), 5000);
 return u;
      }
      // Normal level up: increment chosen class
 if (chosenClass === p.charClass) {
 u.classLevel = (p.classLevel || 1) + 1;
 u.multiClassLevel = p.multiClassLevel || 0;
      } else {
 u.classLevel = p.classLevel || 1;
 u.multiClassLevel = (p.multiClassLevel || 0) + 1;
      }
 if (nc) {
 const conMod = abilityMod(p.abilities.CON + (SPECIES[p.species]?.abilityBonus?.CON||0));
 const roll = Math.floor(Math.random() * nc.hitDie) + 1;
 const hpGain = Math.max(1, roll + conMod);
 u.hp = {...p.hp, max: (p.hp.max || 0) + hpGain};
 const clsLvl = chosenClass === p.charClass ? u.classLevel : u.multiClassLevel;
 setLevelUpMsg(`🎉 Level ${p.level}! ${chosenClass} → ${clsLvl}. +${hpGain} HP (rolled ${roll}${conMod>=0?"+":""}${conMod} CON on d${nc.hitDie}). Max now ${u.hp.max}.`);
      } else {
 setLevelUpMsg(`🎉 Level ${p.level}!`);
      }
 setTimeout(() => setLevelUpMsg(""), 7000);
 return u;
    });
 setLevelUpPending(null);
  }, [levelUpPending]);

 const handleAddXp = useCallback(() => {
 const gain = Math.max(0, Number(xpAdd) || 0);
 if (!gain) return;
 setCharSaving(p => {
 const newXp  = (p.xp || 0) + gain;
 const newLvl = Math.min(20, XP_THRESHOLDS.reduce((best, thresh, i) => newXp >= thresh ? i : best, 1));
 const u = {...p, xp: newXp};
 if (newLvl > p.level) {
 u.level = newLvl;
        // If multiclass exists (in CLASSES or library), show picker; otherwise auto-apply primary class
 const mcValid = p.multiClass && p.multiClass !== p.charClass &&
          !!(CLASSES[p.multiClass]);
 if (mcValid) {
          // At level 2: auto-split 1/1. Above level 2: show picker.
 if (newLvl === 2) {
 u.classLevel = 1;
 u.multiClassLevel = 1;
 const nc2 = CLASSES[p.charClass] || null;
 if (nc2) {
 const conMod2 = abilityMod(p.abilities.CON + (SPECIES[p.species]?.abilityBonus?.CON||0));
 const roll2 = Math.floor(Math.random() * nc2.hitDie) + 1;
 const hpGain2 = Math.max(1, roll2 + conMod2);
 u.hp = {...p.hp, max: (p.hp.max || 0) + hpGain2};
 setLevelUpMsg(`🎉 Level 2! ${p.charClass} 1 / ${p.multiClass} 1. +${hpGain2} HP from ${p.charClass} d${nc2.hitDie}. Max now ${u.hp.max}.`);
            } else {
 setLevelUpMsg(`🎉 Level 2! ${p.charClass} 1 / ${p.multiClass} 1.`);
            }
 setTimeout(() => setLevelUpMsg(""), 7000);
          } else {
 setLevelUpPending({newLvl, primaryClass: p.charClass, multiClass: p.multiClass});
          }
        } else {
 const nc = CLASSES[p.charClass] || null;
 u.classLevel = (p.classLevel || 1) + 1;
 if (nc) {
 const conMod = abilityMod(p.abilities.CON + (SPECIES[p.species]?.abilityBonus?.CON||0));
 const roll = Math.floor(Math.random() * nc.hitDie) + 1;
 const hpGain = Math.max(1, roll + conMod);
 u.hp = {...p.hp, max: (p.hp.max || 0) + hpGain};
 setLevelUpMsg(`🎉 Level ${newLvl}! ${p.charClass} → ${u.classLevel}. +${hpGain} HP (rolled ${roll}${conMod>=0?"+":""}${conMod} CON on d${nc.hitDie}). Max now ${u.hp.max}.`);
          } else {
 setLevelUpMsg(`🎉 Level ${newLvl}!`);
          }
 setTimeout(() => setLevelUpMsg(""), 7000);
        }
      }
 return u;
    });
 setXpAdd("");
  }, [xpAdd]);
 const photoRef = useRef();

  // Re-read library from localStorage whenever the panel opens or closes
 const toggleLibrary = open => {
 if (!open) setLibEntries(libLoad()); // refresh sheet when library closes
 setShowLibrary(open);
  };

  // Live race/subrace/background/class lists derived from the library
 const libRaces       = [...new Set(libEntries.filter(e=>e.category==="Race").map(e=>e.title))].sort();
 const libSubraces    = title => [...new Set(libEntries.filter(e=>e.category==="Subrace" && (e.tags||"").toLowerCase().includes(title.toLowerCase())).map(e=>e.title))].sort();
 const libBackgrounds = [...new Set(libEntries.filter(e=>e.category==="Background").map(e=>e.title))].sort();
 const libClasses     = [...new Set(libEntries.filter(e=>e.category==="Class").map(e=>e.title))].sort();
 const libSubclasses  = cls => [...new Set(libEntries.filter(e=>e.category==="Subclass"&&(e.tags||"").toLowerCase().includes((cls||"").toLowerCase())).map(e=>e.title))].sort();

  // spc: mechanical data from SPECIES hardcoded, but augmented by library if available
 const spc = (() => {
 const hardcoded = SPECIES[char.species];
 const libRaceEntry = libEntries.find(e=>e.category==="Race" && e.title===char.species);
 if (hardcoded) return hardcoded; // use hardcoded for mechanics; library used directly in features tab
 if (libRaceEntry) return { traits:[{name:libRaceEntry.title, desc:(libRaceEntry.desc||"")+(libRaceEntry.notes?"\n\n"+libRaceEntry.notes:"")}], abilityBonus:{}, size:"Medium", speed:30 };
 return null;
  })();
 const cls = CLASSES[char.charClass] || null;
 const pb  = profBonus(char.level);

 const eff = {};
 const subBonus = SUBRACE_BONUS[char.subrace] || {};
  ABILITY_KEYS.forEach(k => {
 eff[k] = char.abilities[k] + (spc?.abilityBonus?.[k]||0) + (subBonus[k]||0);
  });

  // Effective skill proficiencies = manual selections + background-granted + race-granted
 const bgSkills      = BG_SKILLS[char.background] || [];
 const raceSkills    = RACE_SKILLS[char.species] || RACE_SKILLS[Object.keys(RACE_SKILLS).find(k=>char.species&&char.species.toLowerCase().includes(k.toLowerCase()))] || [];
 const effSkillProfs = [...new Set([...(char.skillProficiencies||[]), ...bgSkills, ...raceSkills, ...(char.classSkills||[])])];

 const skBonus = s => {
 const b = abilityMod(eff[s.ability]);
 if ((char.skillExpertise||[]).includes(s.name)) return b + pb*2;
 if (effSkillProfs.includes(s.name)) return b + pb;
 return b;
  };
 const svBonus = k => abilityMod(eff[k]) + (cls?.savingThrows?.includes(k) ? pb : 0);

 const spellMod = cls?.spellcastingAbility ? abilityMod(eff[cls.spellcastingAbility])+pb : null;
 const spellDC  = spellMod!=null ? 8+spellMod : null;
 const passPerc = 10 + skBonus({name:"Perception",ability:"WIS"});
  // Build available spells, merging in domain spells if cleric with a domain chosen
 const availSpells = (() => {
 const base = cls?.spells ? JSON.parse(JSON.stringify(cls.spells)) : {};
 if (char.charClass === "Cleric" && char.divineDomain) {
 const domEntry = libEntries.find(e => e.title === char.divineDomain);
 if (domEntry?.notes) {
 const spellLvlToClsLvl = {"1st":1,"2nd":2,"3rd":3,"4th":4,"5th":5,"6th":6,"7th":7,"8th":8,"9th":9};
 const clsLvlNow = char.multiClassLevel > 0 && char.classLevel > 1 ? char.classLevel : char.level;
 const spellMatch = domEntry.notes.match(/Domain Spells: (.+)/);
 if (spellMatch) {
 const groups = spellMatch[1].split(/\(\d+[a-z]+\)\.?/).map(g=>g.trim()).filter(Boolean);
 const lvls = [...spellMatch[1].matchAll(/\((\d+[a-z]+)\)/g)].map(m=>m[1]);
 groups.forEach((group, i) => {
 const spellLvl = lvls[i];
 const minClsLvl = spellLvlToClsLvl[spellLvl] || 1;
 if (clsLvlNow < minClsLvl) return;
 const spellNum = {"1st":1,"3rd":2,"5th":3,"7th":4,"9th":5}[spellLvl] || 1;
 if (!base[spellNum]) base[spellNum] = [];
 group.split(",").map(s=>s.trim()).filter(Boolean).forEach(spell => {
 if (!base[spellNum].includes(spell)) base[spellNum].push(spell);
            });
          });
        }
      }
    }
 return base;
  })();
 const spellLvls = Object.keys(availSpells).filter(k=>k!=="cantrips").map(Number).sort((a,b)=>a-b);
 const domainSpellSet = (() => {
 if (char.charClass !== "Cleric" || !char.divineDomain) return new Set();
 const domEntry = libEntries.find(e => e.title === char.divineDomain);
 if (!domEntry?.notes) return new Set();
 const spells = new Set();
 const spellMatch = domEntry.notes.match(/Domain Spells: (.+)/);
 if (spellMatch) {
 const spellLvlToClsLvl = {"1st":1,"2nd":2,"3rd":3,"4th":4,"5th":5,"6th":6,"7th":7,"8th":8,"9th":9};
 const clsLvlNow = char.multiClassLevel > 0 ? char.classLevel : char.level;
 const groups = spellMatch[1].split(/\(\d+[a-z]+\)\.?/).map(g=>g.trim()).filter(Boolean);
 const lvls = [...spellMatch[1].matchAll(/\((\d+[a-z]+)\)/g)].map(m=>m[1]);
 groups.forEach((group, i) => {
 const minClsLvl = spellLvlToClsLvl[lvls[i]] || 1;
 if (clsLvlNow < minClsLvl) return;
 group.split(",").map(s=>s.trim()).filter(Boolean).forEach(s=>spells.add(s));
      });
    }
 return spells;
  })();
 const maxSlot   = Math.min(9, Math.ceil((char.multiClassLevel > 0 && char.classLevel > 1 ? char.classLevel : char.level)/2));
 const slots     = SPELL_SLOTS[char.level] || [];

  // Compute AC from equipped armor items
 const computeArmorAC = React.useCallback((armorItems, abilities, libEntries) => {
 const equipped = (armorItems||[]).filter(i=>(typeof i==="object"?i.equipped&&i.name:false));
 if(!equipped.length) return null; // no equipped armor = use existing char.ac
 const dex = abilityMod(abilities?.DEX||10);
 let best = 0;
 equipped.forEach(item=>{
 const name = item.name;
 const entry = libEntries.find(e=>e.title===name&&e.category==="Armor");
 if(!entry) return;
 const acStr = entry.notes?.match(/AC:\s*([^.]+)/)?.[1]?.trim()||"";
 let ac = 10;
 if(acStr.includes("DEX(max2)")) ac = (parseInt(acStr)||10) + Math.min(dex,2);
 else if(acStr.includes("+DEX")) ac = (parseInt(acStr)||10) + dex;
 else if(/^\d+$/.test(acStr)) ac = parseInt(acStr);
 else ac = parseInt(acStr)||10;
 if(ac > best) best = ac;
    });
 return best > 0 ? best : null;
  }, []);

  // Check if any equipped armor imposes stealth disadvantage
 const hasStealthDisadv = React.useMemo(() => {
 return (char.armorItems||[]).some(i => {
 if(typeof i !== "object" || !i.equipped || !i.name) return false;
 const entry = libEntries.find(e => e.title === i.name && e.category === "Armor");
 return entry?.notes?.toLowerCase().includes("stealth: disadv");
    });
  }, [char.armorItems, libEntries]);

 const setF = useCallback((path, val) => setCharSaving(p => {
 if (!path.includes(".")) return {...p,[path]:val};
 const [a,b] = path.split(".");
 return {...p,[a]:{...p[a],[b]:val}};
  }), [setCharSaving]);

 const setNested = useCallback((field, idx, key, val) => setCharSaving(p => {
 const arr = [...(p[field]||[])];
 arr[idx] = {...arr[idx],[key]:val};
 return {...p,[field]:arr};
  }), [setCharSaving]);

 const tog = useCallback((field, val) => setCharSaving(p => {
 const a = p[field]||[];
 return {...p,[field]:a.includes(val)?a.filter(x=>x!==val):[...a,val]};
  }), [setCharSaving]);

 const setCurrency = (k,v) => setCharSaving(p=>({...p,currency:{...p.currency,[k]:Number(v)||0}}));
 const setSlotUsed = (i,v) => setCharSaving(p=>{const a=[...p.spellSlotsUsed];a[i]=Math.max(0,Math.min(slots[i]||0,Number(v)||0));return {...p,spellSlotsUsed:a};});

 const rollCheck = (label, bonus, sides=20) => {
 const armorStealthDis = hasStealthDisadv && label==="Stealth";
 const isAdv = char.advantage && !char.disadvantage && !armorStealthDis;
 const isDis = (char.disadvantage && !char.advantage) || armorStealthDis;
 const r1 = Math.floor(Math.random()*sides)+1;
 const r2 = (isAdv||isDis) ? Math.floor(Math.random()*sides)+1 : null;
 const roll = isAdv ? Math.max(r1,r2) : isDis ? Math.min(r1,r2) : r1;
 const total = roll + bonus;
 const isCrit = roll===sides;
 const isFail = roll===1;
 setSkillRoll({label, roll, bonus, total, isCrit, isFail, sides, r1, r2, isAdv, isDis});
  };

 const changeClass = nv => {
 const nc = CLASSES[nv] || null;
 const u = {charClass: nv, classSkills: []};
 const effDex = char.abilities.DEX + (spc?.abilityBonus?.DEX||0) + (subBonus.DEX||0);
 const effCon = char.abilities.CON + (spc?.abilityBonus?.CON||0) + (subBonus.CON||0);
 if (nc) {
 const pl = Math.floor(nc.hitDie / 2) + 1;
 u.hp = {...char.hp, max: Math.max(1, nc.hitDie + abilityMod(effCon) + (char.level - 1) * (pl + abilityMod(effCon)))};
    }
 u.ac = 10 + abilityMod(effDex);
 setCharSaving(p => ({...p, ...u}));
  };

 const changeSpecies = nv => {
 const ns = SPECIES[nv] || null;
 const u = {species: nv, subrace: ""};
 if (ns) {
 u.speed = ns.speed;
      // Recalculate AC with new racial DEX bonus
 const newEffDex = char.abilities.DEX + (ns.abilityBonus?.DEX||0);
 u.ac = 10 + abilityMod(newEffDex);
      // Recalculate HP with new racial CON bonus if class set
 if (cls) {
 const pl = Math.floor(cls.hitDie / 2) + 1;
 const newEffCon = char.abilities.CON + (ns.abilityBonus?.CON||0);
 u.hp = {...char.hp, max: Math.max(1, cls.hitDie + abilityMod(newEffCon) + (char.level - 1) * (pl + abilityMod(newEffCon)))};
      }
    } else {
 u.speed = 30;
 u.ac = 10 + abilityMod(char.abilities.DEX);
    }
 setCharSaving(p => ({...p, ...u}));
  };
 const changeAbility = (k, v) => {
 const nv = Number(v)||10;
 const u = {abilities:{...char.abilities,[k]:nv}};
 const racialB = (spc?.abilityBonus?.[k]||0) + (subBonus[k]||0);
 const effNv = nv + racialB;
 if(k==="CON"&&cls){const pl=Math.floor(cls.hitDie/2)+1;u.hp={...char.hp,max:Math.max(1,cls.hitDie+abilityMod(effNv)+(char.level-1)*(pl+abilityMod(effNv)))};}
 if(k==="DEX")u.ac=10+abilityMod(effNv);
 setCharSaving(p=>({...p,...u}));
  };
  // Atoms
 const Lbl = ({children}) => <div className="flbl">{children}</div>;
 const Card = ({children,style={}}) => <div className="card-wrap" style={style}>{children}</div>;
 const SecHead = ({icon,title}) => (
    <div className="sec-head"><span className="sec-rune">{icon||"◈"}</span><span className="sec-title">{title}</span><div className="sec-rule"/></div>
  );
 const PipRow = ({label,count,used,color,onSet}) => (
    <div className="pip-row">
      <span className="pip-lbl">{label}</span>
      <div className="pips">{Array.from({length:count},(_,i)=>(
        <div key={i} className={`pip ${i<used?`pip-${color}`:""}`} onClick={()=>onSet(i<used?used-1:i+1)}/>
      ))}</div>
    </div>
  );
 const Empty = ({icon,msg}) => <div className="empty-state"><div style={{fontSize:32,marginBottom:8}}>{icon}</div>{msg}</div>;

  // RENDER
 return (
    <div className="sheet">
      <style>{CSS}</style>

      {/* HEADER (matches screenshot layout) */}
      <input ref={photoRef} type="file" accept="image/*" style={{display:"none"}}
 onChange={e=>{
 const file=e.target.files[0]; if(!file) return;
 const r=new FileReader();
 r.onload=ev=>setCharSaving(p=>({...p,avatarPhoto:ev.target.result}));
 r.readAsDataURL(file);
 e.target.value="";
        }}/>

      {/* ROW 1: Photo . Level . Name + chips . Dice */}
      <div className="hdr-row1">
        {/* Photo */}
        <div className="hdr-photo" onClick={()=>char.avatarPhoto?setAvatarLightbox(true):photoRef.current?.click()}
 title={char.avatarPhoto?"View full photo":"Upload character photo"}>
          {char.avatarPhoto
            ? <img src={char.avatarPhoto} alt="Character" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
            : <div className="hdr-photo-empty"><span style={{fontSize:24}}>📷</span><span className="hdr-photo-lbl">Photo</span></div>
          }
          {char.avatarPhoto && (
            <button className="hdr-photo-del" onClick={e=>{e.stopPropagation();setCharSaving(p=>({...p,avatarPhoto:""}));}}>x</button>
          )}
        </div>

        {/* Level - read-only, driven by XP */}
        <div className="hdr-level-box">
          <div className="hdr-level-lbl">LEVEL</div>
          <div className="hdr-level-num">{char.level}</div>
        </div>

        {/* Name + chips */}
        <div className="hdr-identity">
          <div className="hdr-charname">{char.name||<span className="hdr-name-empty">Unnamed Hero</span>}</div>
          <div className="hdr-chips">
            {char.species  && <span className="hdr-chip">{char.species}</span>}
            {char.charClass && <span className="hdr-chip hdr-chip-accent">{char.charClass} {char.multiClassLevel > 0 ? char.classLevel : char.level}</span>}
            {char.multiClass && char.multiClassLevel > 0 && char.multiClass !== char.charClass && (CLASSES[char.multiClass] || libEntries.find(e=>e.category==="Class"&&e.title===char.multiClass)) && <span className="hdr-chip" style={{background:"rgba(168,85,247,0.1)",borderColor:"rgba(168,85,247,0.3)",color:"#7c3aed",cursor:"default",display:"inline-flex",alignItems:"center",gap:"4px"}}>/ {char.multiClass} {char.multiClassLevel}</span>}
            {char.alignment && <span className="hdr-chip">{{"Lawful Good":"LG","Neutral Good":"NG","Chaotic Good":"CG","Lawful Neutral":"LN","True Neutral":"TN","Chaotic Neutral":"CN","Lawful Evil":"LE","Neutral Evil":"NE","Chaotic Evil":"CE"}[char.alignment]||char.alignment}</span>}
          </div>
          {/* Languages row */}
          {(()=>{
 const autoLangs = [...new Set([
              ...(RACE_LANGUAGES[char.species]||[]),
              ...(BG_LANGUAGES[char.background]||[]),
            ])];
 const racialChosenLang = (char.languages||[])[0]||"";
 const manualLangs = (char.languages||[]).slice(1); // skip [0] which is the racial choice
 return (
              <div className="hdr-chips hdr-lang-row">
                <span className="hdr-chip hdr-chip-lang-lbl">&#x1F5E3;</span>
                {autoLangs.map((lang,i)=>(
                  <span key={`a${i}`} className="hdr-chip hdr-chip-lang-auto" title="Granted by race or background">{lang}</span>
                ))}
                {racialChosenLang&&(
                  <span className="hdr-chip hdr-chip-lang-racial" title="Racial language choice">{racialChosenLang}</span>
                )}
                {manualLangs.map((lang,i)=>(
                  <span key={`m${i}`} className="hdr-chip hdr-chip-lang"
 onClick={()=>setCharSaving(p=>({...p,languages:[p.languages[0],...p.languages.slice(1).filter((_,j)=>j!==i)]}))}>
                    {lang} <span style={{opacity:0.5,fontSize:9}}>x</span>
                  </span>
                ))}
              </div>
            );
          })()}
        </div>

        {/* Dice button */}
        <button className="hdr-dice-btn" onClick={()=>setShowDice(d=>!d)}>
          <svg viewBox="0 0 64 64" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
            <polygon points="32,4 58,18 58,46 32,60 6,46 6,18"/>
            <polygon points="32,4 58,18 6,18"/>
            <polygon points="32,22 48,44 16,44"/>
            <line x1="32" y1="4" x2="32" y2="22"/>
            <line x1="58" y1="18" x2="48" y2="44"/>
            <line x1="6" y1="18" x2="16" y2="44"/>
            <line x1="32" y1="60" x2="32" y2="44"/>
            <line x1="58" y1="46" x2="48" y2="44"/>
            <line x1="6" y1="46" x2="16" y2="44"/>
          </svg>
        </button>

        <button className="hdr-lib-btn" onClick={()=>toggleLibrary(!showLibrary)}>
          <span style={{fontSize:18,lineHeight:1}}>📚</span>
        </button>

        <button className="hdr-collapse-btn" onClick={()=>setHdrOpen(o=>!o)}
 title={hdrOpen ? "Collapse header" : "Expand header"}>
          <span style={{fontSize:16,display:"inline-block",transition:"transform .2s",transform:hdrOpen?"rotate(0)":"rotate(180deg)"}}>⌃</span>
        </button>
      </div>

      {/* ROW 3: Editable identity fields */}
      {hdrOpen && <div className="hdr-row3">
        {/* Row 1: Name + Background + Alignment (abbreviated) */}
        <div className="hdr-field-group hdr-field-name">
          <label className="hdr-field-lbl">CHARACTER NAME</label>
          <input className="hdr-field-in" value={char.name} onChange={e=>setF("name",e.target.value)} placeholder="Name..."/>
        </div>
        <div className="hdr-field-group hdr-field-background">
          <label className="hdr-field-lbl">BACKGROUND</label>
          <select className="hdr-field-in hdr-field-sel" value={char.background} onChange={e=>setF("background",e.target.value)}>
            <option value="">- Select -</option>
            {libBackgrounds.map(b=><option key={b} value={b}>{b}</option>)}
          </select>
        </div>
        <div className="hdr-field-group hdr-field-group-xs">
          <label className="hdr-field-lbl">ALIGNMENT</label>
          <AlignmentSelect value={char.alignment} onChange={v=>setF("alignment",v)}/>
        </div>
        {/* Row 2: Race + Subrace */}
        <div className="hdr-row3-break"/>
        <div className="hdr-field-group hdr-field-name">
          <label className="hdr-field-lbl">RACE / SPECIES</label>
          <select className="hdr-field-in hdr-field-sel" value={char.species} onChange={e=>changeSpecies(e.target.value)}>
            <option value="">-</option>
            {libRaces.map(s=><option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div className="hdr-field-group hdr-field-background">
          <label className="hdr-field-lbl">SUBRACE</label>
          {(() => {
 const subs = char.species
              ? [...(SUBRACES[char.species]||[]), ...libSubraces(char.species)]
                  .filter((v,i,a)=>a.indexOf(v)===i).sort()
              : [];
 return subs.length > 0
              ? <select className="hdr-field-in hdr-field-sel" value={char.subrace||""} onChange={e=>setF("subrace",e.target.value)}>
                  <option value="">- Select subrace -</option>
                  {subs.map(sr=><option key={sr} value={sr}>{sr}</option>)}
                </select>
              : <input className="hdr-field-in" value={char.subrace||""} onChange={e=>setF("subrace",e.target.value)}
 placeholder={char.species?"No subraces":"Select race first..."}
 disabled={!char.species}
 style={{opacity:char.species?1:0.5}}/>;
          })()}
        </div>
        {/* Row 3: Class + Multiclass (level 2+) */}
        <div className="hdr-row3-break"/>
        <div className="hdr-field-group hdr-field-name">
          <label className="hdr-field-lbl">CLASS</label>
          <select className="hdr-field-in hdr-field-sel" value={char.charClass} onChange={e=>changeClass(e.target.value)}>
            <option value="">-</option>
            {libClasses.length > 0
              ? libClasses.map(c=><option key={c} value={c}>{c}</option>)
              : Object.keys(CLASSES).map(c=><option key={c} value={c}>{c}</option>)
            }
          </select>
        </div>
        <div className="hdr-field-group hdr-field-background" style={{position:"relative"}}>
          <label className="hdr-field-lbl" style={{display:"flex",alignItems:"center",gap:5}}>
            MULTICLASS
            {char.level < 2 && <span className="mc-lock-badge">Lvl 2+</span>}
            {char.level >= 2 && <MulticlassInfo primaryClass={char.charClass} abilities={eff}/>}
          </label>
          {char.level >= 2 ? (
            <>
              <select className="hdr-field-in hdr-field-sel" value={char.multiClass||""} onChange={e=>{
 const mc = e.target.value || "";
 if (!mc) {
                    // Clearing multiclass: reset everything in one call
 setCharSaving(p => ({...p, multiClass: "", multiClassLevel: 0, classLevel: p.level}));
                  } else {
                    // Setting multiclass: one call handles all
 setCharSaving(p => {
 const u = {...p, multiClass: mc, multiClassLevel: 0};
 if (mc !== p.charClass && CLASSES[mc] && p.level >= 2) {
 u.classLevel = p.level - 1;
 u.multiClassLevel = 1;
                      }
 return u;
                    });
                  }
                }}>
                <option value="">- None -</option>
                {(libClasses.length > 0 ? libClasses : Object.keys(CLASSES))
                  .filter(c => c !== char.charClass)
                  .map(c => {
 const met = mcPrereqMet(c, eff);
 return <option key={c} value={c}>{c}{!met?" ⚠":""}</option>;
                  })
                }
              </select>
              {char.multiClass && (() => {
 const failed = mcFailedPrereqs(char.multiClass, eff);
 if (!failed.length) return null;
 const isOr = !!MC_PREREQS_OR[char.multiClass];
 return (
                  <div className="mc-warn">
                    ⚠ Needs {failed.map(([ab,score])=>`${ab} ${score}`).join(isOr?" or ":" & ")} to multiclass into {char.multiClass}
                  </div>
                );
              })()}

            </>
          ) : (
            <div className="mc-locked">
              <span className="mc-lock-icon">🔒</span>
              <span>Available at level 2</span>
            </div>
          )}
        </div>
      </div>}

      {/* ROW 4: XP - always visible */}
      <div className="hdr-row4">
        {/* Level-up toast - shown above bar when triggered */}
        {levelUpMsg && (
          <div className="levelup-toast" onClick={()=>setLevelUpMsg("")}>{levelUpMsg}</div>
        )}
        {levelUpPending && (
          <div className="levelup-modal-backdrop">
            <div className="levelup-modal">
              <div className="levelup-modal-title">{levelUpPending.isSplit ? "⚔️ Multiclass Added" : `🎉 Level ${levelUpPending.newLvl}!`}</div>
              <div className="levelup-modal-sub">{levelUpPending.isSplit ? `Set first multiclass level — which class has ${levelUpPending.newLvl - 1} levels?` : "Which class gains this level?"}</div>
              <div className="levelup-modal-btns">
                <button className="levelup-class-btn" onClick={()=>applyLevelUp(levelUpPending.primaryClass)}>
                  <span className="levelup-class-name">{levelUpPending.primaryClass}</span>
                  <span className="levelup-class-die">d{CLASSES[levelUpPending.primaryClass]?.hitDie}</span>
                </button>
                <button className="levelup-class-btn levelup-class-btn-multi" onClick={()=>applyLevelUp(levelUpPending.multiClass)}>
                  <span className="levelup-class-name">{levelUpPending.multiClass}</span>
                  <span className="levelup-class-die">d{CLASSES[levelUpPending.multiClass]?.hitDie}</span>
                </button>
              </div>
              <div className="levelup-modal-hint">Tap to choose which class this level goes to</div>
            </div>
          </div>
        )}
        {/* Progress bar */}
        {(() => {
 const xp        = char.xp || 0;
 const lvl       = char.level;
 const thisFloor = XP_THRESHOLDS[lvl]     || 0;
 const nextCeil  = XP_THRESHOLDS[lvl + 1] || XP_THRESHOLDS[20];
 const segSize   = Math.max(1, nextCeil - thisFloor);
 const segDone   = Math.min(segSize, Math.max(0, xp - thisFloor));
 const pct       = Math.min(100, (segDone / segSize) * 100);
 const toNext    = Math.max(0, nextCeil - xp);
 return (
            <div className="hdr-xp-bar-row">
              <div className="hdr-xp-bar">
                <div className="hdr-xp-fill" style={{width:`${pct}%`}}/>
              </div>
              <div className="hdr-xp-bar-labels">
                <span className="hdr-xp-seg-lbl">{segDone.toLocaleString()} / {segSize.toLocaleString()} XP</span>
                <span className="hdr-xp-next">
                  {lvl < 20 ? `${toNext.toLocaleString()} to level ${lvl + 1}` : "Max Level"}
                </span>
              </div>
            </div>
          );
        })()}
        {/* Single-line: XP [total] + [add] button */}
        <div className="hdr-xp-inline">
          <span className="hdr-xp-lbl">XP</span>
          <input className="hdr-xp-in" type="number" value={char.xp||0}
 onChange={e=>{
 const newXp = Math.max(0, Number(e.target.value)||0);
 const newLvl = Math.min(20, XP_THRESHOLDS.reduce((best,thresh,i) => newXp >= thresh ? i : best, 1));
 setCharSaving(p => {
 const u = {...p, xp: newXp};
 if (newLvl !== p.level) {
 u.level = newLvl;
 const nc = CLASSES[p.charClass]||null;
 if (nc) { const pl=Math.floor(nc.hitDie/2)+1; u.hp={...p.hp,max:Math.max(1,nc.hitDie+abilityMod(p.abilities.CON)+(u.level-1)*(pl+abilityMod(p.abilities.CON)))}; }
                }
                // Always reset splits when at level 1
 if (newLvl === 1) {
 u.classLevel = 1;
 u.multiClassLevel = 0;
 u.multiClass = "";
                }
 return u;
              });
            }} placeholder="0"/>
          <span className="hdr-xp-plus">+</span>
          <input className="hdr-xp-in" type="number" value={xpAdd}
 onChange={e=>setXpAdd(e.target.value)} placeholder="Add XP"
 onKeyDown={e=>{ if(e.key==="Enter"&&xpAdd) handleAddXp(); }}/>
          <button className="hdr-xp-add-btn" onClick={handleAddXp} disabled={!xpAdd}>Add</button>
        </div>
      </div>

      {/* TAB STRIP */}
      <div className="tabs">
        {TABS.map(t=>(
          <button key={t} className={`tab ${tab===t?"tab-on":""}`} onClick={()=>{setTab(t);localStorage.setItem("dnd5e_tab",t);if(t==="features")setLibEntries(libLoad());}}>
            {t.charAt(0).toUpperCase()+t.slice(1)}
          </button>
        ))}
      </div>

      {/* TAB CONTENT */}
      <div className={`tab-body ${tab==="core"?"tab-body-core":""}`}>

        {/* CORE */}
        {tab==="core" && (
          <div className="panel panel-core">

            {/* LEFT: ability stat cards running down the page */}
            <div className="core-left">
              {ABILITY_KEYS.map(k=>{
 const bonus = (spc?.abilityBonus?.[k]||0) + (subBonus[k]||0);
 const isPri    = cls?.primaryAbility?.includes(k);
 const skills   = SKILLS_BY_ABILITY[k];
 return (
                  <div key={k} className={`ab-stat-card ${isPri?"ab-stat-primary":""}`}>

                    {/* Full ability name centered at top */}
                    <div className="ab-stat-title">{ABILITY_NAMES[k]}</div>

                    {/* Body: pill on left, skills on right */}
                    <div className="ab-stat-body">
                      {/* Left pill: abbrev + modifier + base score + racial bonus */}
                      <div className={`ab-stat-pill ${isPri?"ab-stat-pill-primary":""}`}>
                        <div className="ab-stat-abbr">{k}</div>
                        <div className="ab-stat-mod-big">{fmt(abilityMod(eff[k]))}</div>
                        <input className="ab-stat-score-in" type="number" value={char.abilities[k]} min={1} max={20}
 onChange={e=>changeAbility(k,e.target.value)}/>
                        {bonus!==0&&(
                          <div className="ab-racial-bonus">+{bonus} racial</div>
                        )}
                      </div>

                      {/* Right: skill rows */}
                      {skills.length>0&&(
                        <div className="ab-stat-skills">
                          {skills.map(sk=>{
 const ip    = effSkillProfs.includes(sk.name);
 const ie    = (char.skillExpertise||[]).includes(sk.name);
 const isBg    = bgSkills.includes(sk.name) && !(char.skillProficiencies||[]).includes(sk.name);
 const isRace  = raceSkills.includes(sk.name) && !isBg && !(char.skillProficiencies||[]).includes(sk.name);
 const isClass = (char.classSkills||[]).includes(sk.name) && !isBg && !isRace && !(char.skillProficiencies||[]).includes(sk.name);
 return (
                              <div key={sk.name} className={`ab-sk-row ${ip||ie||isRace||isBg?"ab-sk-on":""}`}
 onClick={()=>rollCheck(sk.name, skBonus(sk))} title={hasStealthDisadv&&sk.name==="Stealth"?"⚠ Armor imposes disadvantage on Stealth":undefined}>
                                <div className={`ab-sk-dot ${ie?"ab-sk-dot-ex":isRace?"ab-sk-dot-race":isBg?"ab-sk-dot-bg":isClass?"ab-sk-dot-cls":ip?"ab-sk-dot-p":"ab-sk-dot-empty"}`}/>
                                <span className="ab-sk-name" style={isRace?{color:"var(--green)",fontWeight:700}:isBg?{color:"var(--mana)",fontWeight:700}:isClass?{color:"var(--accent)",fontWeight:700}:{}}>{sk.name}{hasStealthDisadv&&sk.name==="Stealth"&&<span style={{fontSize:9,color:"var(--red)",marginLeft:3}}>⚠</span>}</span>
                                {isRace&&<span className="ab-sk-race-tag">racial</span>}
                                {isBg&&<span className="ab-sk-bg-tag">bg</span>}
                                {isClass&&<span className="ab-sk-cls-tag">class</span>}
                                <span className="ab-sk-bonus">{fmt(skBonus(sk))}</span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                      {skills.length===0&&<div className="ab-stat-noskills"/>}
                    </div>

                    {k==="CON" && cls && (
                      <div className="ab-hit-die-row">
                        <span className="ab-hit-die-label">Hit Die</span>
                        <span className="ab-hit-die-val">d{cls.hitDie}</span>
                      </div>
                    )}
                    {/* Saving throw at bottom - set by class only, click to roll */}
                    {(() => {
 const isClassSave = !!(cls?.savingThrows?.includes(k));
 return (
                        <div className={`ab-save-row ${isClassSave?"ab-save-prof":""}`}
 onClick={()=>rollCheck(`${ABILITY_NAMES[k]} Save`, svBonus(k))}
 title={isClassSave?"Class saving throw - click to roll":"No proficiency"}>
                          <div className={`ab-sk-dot ${isClassSave?"ab-sk-dot-p":"ab-sk-dot-empty"}`}/>
                          <span className="ab-save-label">Saving Throw</span>
                          {isClassSave && <span className="ab-save-class-tag">class</span>}
                          <span className="sv-bonus">{fmt(svBonus(k))}</span>
                        </div>
                      );
                    })()}
                  </div>
                );
              })}

              {/* Class skill picker - bottom of left column */}
              {cls&&cls.skillChoices&&(
                <div className="cls-skill-card">
                  <div className="cls-skill-hdr">
                    <span className="cls-skill-title">CLASS SKILLS</span>
                    <span className="cls-skill-count">{(char.classSkills||[]).length}/{cls.skillCount} chosen</span>
                  </div>
                  <div className="cls-skill-grid">
                    {cls.skillChoices.map(sk=>{
 const chosen  = (char.classSkills||[]).includes(sk);
 const full    = (char.classSkills||[]).length >= cls.skillCount;
 const fromBg  = bgSkills.includes(sk);
 const fromRace= raceSkills.includes(sk);
 const covered = fromBg || fromRace;
 return (
                        <button key={sk}
 className={"cls-skill-opt"+(chosen?" cls-skill-opt-on":fromBg?" cls-skill-opt-bg":fromRace?" cls-skill-opt-race":full&&!chosen?" cls-skill-opt-dim":"")}
 title={fromBg?`Already granted by ${char.background} background`:fromRace?`Already granted by ${char.species} racial trait`:""}
 onClick={()=>{
 if(covered) return;
 if(chosen) setCharSaving(p=>({...p,classSkills:(p.classSkills||[]).filter(x=>x!==sk)}));
 else if(!full) setCharSaving(p=>({...p,classSkills:[...(p.classSkills||[]),sk]}));
                          }}>
                          {sk}
                          {fromBg&&<span className="cls-skill-src-tag">bg</span>}
                          {fromRace&&<span className="cls-skill-src-tag cls-skill-src-race">racial</span>}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* RIGHT: combat stats */}
            <div className="core-right">

              {/* Combat Stats grid */}
              <div className="core-stats-grid">
                {/* AC - editable */}
                <div className="cstat-card">
                  <div className="cstat-label">AC</div>
                  {(()=>{const arAC=computeArmorAC(char.armorItems,char.abilities,libEntries);const shieldBonus=char.shield?2:0;const displayAC=arAC!=null?(arAC+shieldBonus):char.ac;return <input className="cstat-val cstat-input" type="number" value={displayAC}
 readOnly={arAC!=null}
 style={arAC!=null?{color:"var(--accent)",cursor:"default"}:{}}
 title={arAC!=null?"AC calculated from equipped armor":""}
 onChange={e=>{if(arAC==null)setCharSaving(p=>({...p,ac:Number(e.target.value)||10}));}}/>;})()}
                </div>
                {/* Initiative - click to roll d20 + DEX mod */}
                <div className="cstat-card cstat-card-btn" onClick={()=>{
 const mod = abilityMod(eff.DEX);
 const roll = Math.floor(Math.random()*20)+1;
 const total = roll + mod;
 const isCrit = roll===20;
 const isFail = roll===1;
 setSkillRoll({label:"Initiative",roll,bonus:mod,total,isCrit,isFail,sides:20,r1:roll,r2:null,isAdv:false,isDis:false});
                }}>
                  <div className="cstat-label">INITIATIVE</div>
                  <div className="cstat-val" style={{color:"var(--accent)"}}>{fmt(abilityMod(eff.DEX))}</div>
                </div>
                {/* Speed - editable */}
                <div className="cstat-card">
                  <div className="cstat-label">SPEED</div>
                  <div style={{display:"flex",alignItems:"baseline",gap:0}}>
                    <input className="cstat-val cstat-input" type="number" value={char.speed}
 onChange={e=>setCharSaving(p=>({...p,speed:Number(e.target.value)||30}))}
 style={{width:52}}/>
                    <span style={{fontFamily:"'DM Mono',monospace",fontSize:11,fontWeight:700,color:"var(--muted)",marginLeft:-2}}>ft</span>
                  </div>
                </div>
                {/* Proficiency Bonus - auto from level */}
                <div className="cstat-card">
                  <div className="cstat-label">PROF BONUS <span className="cstat-auto">AUTO</span></div>
                  <div className="cstat-val">{fmt(pb)}</div>
                </div>
              </div>
              {/* Passive Perception - full width */}
              <div className="cstat-card cstat-wide">
                <div className="cstat-label">PASSIVE PERCEPTION <span className="cstat-auto">AUTO</span></div>
                <div className="cstat-val cstat-val-lg">{passPerc}</div>
              </div>

              {/* Hit Points card - death saves overlay at 0 HP */}
              <div style={{position:"relative"}}>
                <div className={"hp-card"+(char.hp.current===0?" hp-card-dimmed":"")}>
                <div className="hp-card-title">HIT POINTS</div>
                <div className="hp-card-bar">
                  {(()=>{
 const pct=char.hp.max>0?Math.max(0,Math.min(100,(char.hp.current/char.hp.max)*100)):100;
 let color;
 if(pct>=50){const t=(pct-50)/50;color=`rgb(${Math.round(34+(245-34)*(1-t))},${Math.round(197+(158-197)*(1-t))},${Math.round(94+(11-94)*(1-t))})`;}
 else{const t=Math.max(0,(pct-10)/40);color=`rgb(${Math.round(245+(239-245)*(1-t))},${Math.round(158+(68-158)*(1-t))},${Math.round(11+(68-11)*(1-t))})`;}
 return <div className="hp-card-fill" style={{width:`${pct}%`,background:color}}/>;
                  })()}
                </div>
                <div className="hp-card-meta">
                  <span>. {char.hp.current} / {char.hp.max} hp</span>
                  {(()=>{
 const pct=char.hp.max>0?Math.max(0,Math.min(100,(char.hp.current/char.hp.max)*100)):100;
 let color;
 if(pct>=50){const t=(pct-50)/50;color=`rgb(${Math.round(34+(245-34)*(1-t))},${Math.round(197+(158-197)*(1-t))},${Math.round(94+(11-94)*(1-t))})`;}
 else{const t=Math.max(0,(pct-10)/40);color=`rgb(${Math.round(245+(239-245)*(1-t))},${Math.round(158+(68-158)*(1-t))},${Math.round(11+(68-11)*(1-t))})`;}
 return <span style={{color,fontWeight:700}}>{char.hp.max>0?`${Math.round(pct)}%`:"-"}</span>;
                  })()}
                </div>
                <div className="hp-card-fields">
                  <div className="hp-card-field">
                    <div className="hp-card-field-lbl">Current</div>
                    <input className="hp-card-in" inputMode="numeric" pattern="[0-9]*"
 value={char.hp.current===0?"":char.hp.current}
 onChange={e=>{const v=e.target.value.replace(/^0+(?=\d)/,"");setF("hp.current",Math.max(0,Number(v)||0));}}
 onBlur={e=>{if(e.target.value==="")setF("hp.current",0);}}
 placeholder="0"/>
                  </div>
                  <div className="hp-card-field">
                    <div className="hp-card-field-lbl">Max</div>
                    <input className="hp-card-in" inputMode="numeric" pattern="[0-9]*"
 value={char.hp.max===0?"":char.hp.max}
 onChange={e=>{const v=e.target.value.replace(/^0+(?=\d)/,"");setF("hp.max",Math.max(0,Number(v)||0));}}
 onBlur={e=>{if(e.target.value==="")setF("hp.max",0);}}
 placeholder="0"/>
                  </div>
                  <div className="hp-card-field">
                    <div className="hp-card-field-lbl">Temp</div>
                    <input className="hp-card-in" inputMode="numeric" pattern="[0-9]*"
 value={char.hp.temp||""}
 onChange={e=>{const v=e.target.value.replace(/^0+(?=\d)/,"");setF("hp.temp",Number(v)||0);}}
 placeholder="0"/>
                  </div>
                </div>
                <div className="hp-card-action-row">
                  <input className="hp-card-amount" type="number" value={hpAmount}
 onChange={e=>setHpAmount(e.target.value)} placeholder="Amount"
 onKeyDown={e=>{if(e.key==="Enter"&&hpAmount){setF("hp.current",Math.min(char.hp.max,Math.max(0,(char.hp.current||0)+Math.abs(Number(hpAmount)||0))));setHpAmount("");}}}/>
                  <button className="hp-card-heal" onClick={()=>{
 if(!hpAmount)return;
 setF("hp.current",Math.min(char.hp.max,Math.max(0,(char.hp.current||0)+Math.abs(Number(hpAmount)||0))));
 setHpAmount("");
                  }}>
                    <span className="hp-btn-plus">+</span>
                    <span className="hp-btn-lbl">Heal</span>
                  </button>
                  <button className="hp-card-dmg" onClick={()=>{
 if(!hpAmount)return;
 setF("hp.current",Math.max(0,(char.hp.current||0)-Math.abs(Number(hpAmount)||0)));
 setHpAmount("");
                  }}>
                    <span className="hp-btn-minus">-</span>
                    <span className="hp-btn-lbl">Dmg</span>
                  </button>
                </div>
                </div>

                {char.hp.current===0 && (
                  <div className="ds-overlay">
                    <div className="ds-overlay-hdr">
                      <span>&#x1F480;</span>
                      <span className="ds-overlay-title">DEATH SAVES</span>
                      <button className="ds-overlay-reset"
 onClick={()=>{
 setF("hp.current",1);
 setF("deathSaves.successes",0);
 setF("deathSaves.failures",0);
 setDsLastRoll(null);
                        }}>
                        &#x21BA;
                      </button>
                    </div>
                    <div className="ds-overlay-body">
                      <div className="ds-overlay-rows">
                        <div className="ds-overlay-row">
                          <span className="ds-overlay-lbl">Successes</span>
                          <div className="ds-overlay-pips">
                            {[0,1,2].map(i=>(
                              <div key={i}
 className={"ds-pip"+(i<char.deathSaves.successes?" ds-pip-succ":"")}
 onClick={()=>{
 const next = i<char.deathSaves.successes ? i : i+1;
 if(next>=3){
 setF("hp.current",1);
 setF("deathSaves.successes",0);
 setF("deathSaves.failures",0);
 setDsLastRoll(null);
                                  } else {
 setF("deathSaves.successes",next);
                                  }
                                }}/>
                            ))}
                          </div>
                        </div>
                        <div className="ds-overlay-row">
                          <span className="ds-overlay-lbl">Failures</span>
                          <div className="ds-overlay-pips">
                            {[0,1,2].map(i=>(
                              <div key={i}
 className={"ds-pip"+(i<char.deathSaves.failures?" ds-pip-fail":"")}
 onClick={()=>setF("deathSaves.failures",i<char.deathSaves.failures?i:i+1)}/>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="ds-overlay-d20"
 onClick={()=>{
 if(dsLastRoll!=null){setDsLastRoll(null);return;}
 const roll = Math.floor(Math.random()*20)+1;
 setDsLastRoll(roll);
 if(roll===20){
 setTimeout(()=>{setF("hp.current",1);setF("deathSaves.successes",0);setF("deathSaves.failures",0);setDsLastRoll(null);},800);
                          } else if(roll>=10){
 const next = Math.min(3, char.deathSaves.successes+1);
 if(next>=3){
 setF("hp.current",1);
 setF("deathSaves.successes",0);
 setF("deathSaves.failures",0);
 setDsLastRoll(null);
                            } else {
 setF("deathSaves.successes",next);
                            }
                          } else if(roll===1){
 setF("deathSaves.failures",Math.min(3,char.deathSaves.failures+2));
                          } else {
 setF("deathSaves.failures",Math.min(3,char.deathSaves.failures+1));
                          }
                        }}>
                        <span className="ds-overlay-d20-lbl">D20</span>
                        {dsLastRoll!=null ? (
                          <>
                            <div className="adv-result-box"
 style={{
 borderColor: dsLastRoll===20?"var(--green)":dsLastRoll===1?"var(--red)":dsLastRoll>=10?"var(--green)":"var(--red)",
 color: dsLastRoll===20?"var(--green)":dsLastRoll===1?"var(--red)":dsLastRoll>=10?"var(--green)":"var(--red)",
                              }}>
                              {dsLastRoll}
                            </div>
                            <button className="adv-reroll"
 onClick={e=>{
 e.stopPropagation();
 const roll = Math.floor(Math.random()*20)+1;
 setDsLastRoll(roll);
 if(roll===20){
 setTimeout(()=>{setF("hp.current",1);setF("deathSaves.successes",0);setF("deathSaves.failures",0);setDsLastRoll(null);},800);
                                } else if(roll>=10){
 const next = Math.min(3, char.deathSaves.successes+1);
 if(next>=3){setF("hp.current",1);setF("deathSaves.successes",0);setF("deathSaves.failures",0);setDsLastRoll(null);}
 else{setF("deathSaves.successes",next);}
                                } else if(roll===1){
 setF("deathSaves.failures",Math.min(3,char.deathSaves.failures+2));
                                } else {
 setF("deathSaves.failures",Math.min(3,char.deathSaves.failures+1));
                                }
                              }}>
                              &#x21BA; Reroll
                            </button>
                          </>
                        ) : (
                          <svg viewBox="0 0 64 64" width="32" height="32" fill="none"
 stroke="rgba(239,68,68,0.55)" strokeWidth="1.8" strokeLinejoin="round">
                            <polygon points="32,4 58,18 58,46 32,60 6,46 6,18"/>
                            <polygon points="32,4 58,18 6,18"/>
                            <polygon points="32,22 48,44 16,44"/>
                            <line x1="32" y1="4" x2="32" y2="22"/>
                            <line x1="58" y1="18" x2="48" y2="44"/>
                            <line x1="6" y1="18" x2="16" y2="44"/>
                            <line x1="32" y1="60" x2="32" y2="44"/>
                            <line x1="58" y1="46" x2="48" y2="44"/>
                            <line x1="6" y1="46" x2="16" y2="44"/>
                          </svg>
                        )}
                      </div>
                    </div>
                    {char.deathSaves.failures>=3 && (
                      <div className="ds-death-notice">
                        &#x2620; Your character has died.
                      </div>
                    )}
                  </div>
                )}
              </div>
              {/* Resistances, Immunities & Vulnerabilities */}
              {(()=>{
 const DMG_TYPES = ["Acid","Bludgeoning","Cold","Fire","Force","Lightning","Necrotic","Piercing","Poison","Psychic","Radiant","Slashing","Thunder","Non-magical B/P/S"];
 const RIV_TYPES = ["Resistance","Immunity","Vulnerability"];
 const TYPE_COLORS = {
                  Resistance: {bg:"rgba(34,197,94,0.1)", border:"rgba(34,197,94,0.3)", text:"#15803d"},
                  Immunity: {bg:"rgba(99,102,241,0.1)", border:"rgba(99,102,241,0.3)", text:"var(--accent)"},
                  Vulnerability:{bg:"rgba(239,68,68,0.1)", border:"rgba(239,68,68,0.3)", text:"var(--red)"},
                };
 const allEntries = [
                  ...(char.resistances||[]).map(d=>({type:"Resistance",damage:d})),
                  ...(char.immunities||[]).map(d=>({type:"Immunity",damage:d})),
                  ...(char.vulnerabilities||[]).map(d=>({type:"Vulnerability",damage:d})),
                ];
 const removeEntry = (type, damage) => {
 const field = type==="Resistance"?"resistances":type==="Immunity"?"immunities":"vulnerabilities";
 setCharSaving(p=>({...p,[field]:(p[field]||[]).filter(x=>x!==damage)}));
                };
 const addEntry = () => {
 if(!rivType||!rivDmg) return;
 const field = rivType==="Resistance"?"resistances":rivType==="Immunity"?"immunities":"vulnerabilities";
 setCharSaving(p=>({...p,[field]:[...(p[field]||[]),rivDmg]}));
 setRivDmg(""); // reset damage only - keep type and form open
                };
 return (
                  <div className="ri-card">
                    <div className="ri-card-hdr">
                      <span className="ri-card-title">RESISTANCES &amp; IMMUNITIES</span>
                      <button className="ri-add-btn" onClick={()=>setRivOpen(o=>!o)}>
                        {rivOpen ? "Close" : "+ Add"}
                      </button>
                    </div>

                    {rivOpen && (
                      <div className="ri-add-form">
                        <select className="ri-sel" value={rivType}
 onChange={e=>{setRivType(e.target.value);setRivDmg("");}}>
                          <option value="">Type...</option>
                          {RIV_TYPES.map(t=><option key={t} value={t}>{t}</option>)}
                        </select>
                        <select className="ri-sel" value={rivDmg}
 onChange={e=>setRivDmg(e.target.value)}
 disabled={!rivType}>
                          <option value="">Damage type...</option>
                          {DMG_TYPES.filter(t=>{
 const field = rivType==="Resistance"?"resistances":rivType==="Immunity"?"immunities":"vulnerabilities";
 return !(char[field]||[]).includes(t);
                          }).map(t=><option key={t} value={t}>{t}</option>)}
                        </select>
                        <button className="ri-confirm-btn"
 disabled={!rivType||!rivDmg}
 onClick={addEntry}>
                          + Add
                        </button>
                      </div>
                    )}

                    {allEntries.length===0 ? (
                      <div className="ri-empty">No resistances added.</div>
                    ) : (
                      <div className="ri-entries">
                        {allEntries.map(({type,damage})=>{
 const col = TYPE_COLORS[type];
 return (
                            <span key={type+damage} className="ri-tag"
 style={{background:col.bg,border:`1px solid ${col.border}`,color:col.text}}>
                              <span className="ri-tag-type">{type.slice(0,3).toUpperCase()}</span>
                              {damage}
                              <button className="ri-tag-x" onClick={()=>removeEntry(type,damage)}>x</button>
                            </span>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })()}

              {/* Advantage / Disadvantage */}
              {(()=>{
 const rollAdv = () => {
 const r1 = Math.floor(Math.random()*20)+1;
 const r2 = Math.floor(Math.random()*20)+1;
 setAdvRolls([r1,r2]);
                };
 const isAdv = char.advantage && !char.disadvantage;
 const isDis = char.disadvantage && !char.advantage;
 return (
                  <div className="adv-card">
                    <div className="adv-checks">
                      <button className={"adv-row"+(char.advantage?" adv-on-adv":"")}
 onClick={()=>{setF("advantage",!char.advantage);setAdvRolls(null);}}>
                        <div className={"adv-chk"+(char.advantage?" adv-chk-on-adv":"")}/>
                        <span className="adv-lbl" style={char.advantage?{color:"var(--green)",fontWeight:700}:{}}>Advantage</span>
                      </button>
                      <button className={"adv-row"+(char.disadvantage?" adv-on-dis":"")}
 onClick={()=>{setF("disadvantage",!char.disadvantage);setAdvRolls(null);}}>
                        <div className={"adv-chk"+(char.disadvantage?" adv-chk-on-dis":"")}/>
                        <span className="adv-lbl" style={char.disadvantage?{color:"var(--red)",fontWeight:700}:{}}>Disadvantage</span>
                      </button>
                    </div>
                    <div className="adv-dice-box" onClick={advRolls ? ()=>setAdvRolls(null) : rollAdv}>
                      {advRolls ? (
                        <div className="adv-results">
                          {advRolls.map((r,i)=>{
 const isWinner = isAdv ? r===Math.max(...advRolls) : isDis ? r===Math.min(...advRolls) : false;
 const isTie = advRolls[0]===advRolls[1];
 return (
                              <div key={i} className={"adv-result-box"+(isWinner&&!isTie?" adv-result-win":"")}
 style={{
 borderColor: isWinner&&!isTie?(isAdv?"var(--green)":"var(--red)"):"var(--border)",
 color: isWinner&&!isTie?(isAdv?"var(--green)":"var(--red)"):"var(--muted)"
                                }}>
                                {r}
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <>
                          <span className="adv-dice-lbl" style={{
 color: isAdv?"var(--green)":isDis?"var(--red)":"var(--muted)"
                          }}>
                            {isAdv?"2D20 ADV":isDis?"2D20 DIS":"2D20"}
                          </span>
                          <svg viewBox="0 0 64 64" width="28" height="28" fill="none"
 stroke={isAdv?"rgba(34,197,94,0.6)":isDis?"rgba(239,68,68,0.6)":"rgba(100,116,139,0.4)"}
 strokeWidth="1.8" strokeLinejoin="round">
                            <polygon points="32,4 58,18 58,46 32,60 6,46 6,18"/>
                            <polygon points="32,4 58,18 6,18"/>
                            <polygon points="32,22 48,44 16,44"/>
                            <line x1="32" y1="4" x2="32" y2="22"/>
                            <line x1="58" y1="18" x2="48" y2="44"/>
                            <line x1="6" y1="18" x2="16" y2="44"/>
                            <line x1="32" y1="60" x2="32" y2="44"/>
                            <line x1="58" y1="46" x2="48" y2="44"/>
                            <line x1="6" y1="46" x2="16" y2="44"/>
                          </svg>
                        </>
                      )}
                      {advRolls && (
                        <button className="adv-reroll" onClick={e=>{e.stopPropagation();rollAdv();}}>
                          &#x21BA; Reroll
                        </button>
                      )}
                    </div>
                  </div>
                );
              })()}

              {/* Inspiration / Action Dice */}
              <div className="iad-card">
                <div className="iad-title">INSPIRATION / ACTION DICE</div>
                <div className="iad-row">
                  {/* Inspiration toggle */}
                  <button className={"iad-insp"+(char.inspirationActive?" iad-insp-on":"")}
 onClick={()=>setF("inspirationActive",!char.inspirationActive)}>
                    <div className={"iad-chk"+(char.inspirationActive?" iad-chk-on":"")}/>
                    <span className="iad-insp-lbl">{char.inspirationActive?"Active":"Inactive"}</span>
                  </button>
                  {/* Action dice counter + roll */}
                  <div className="iad-counter">
                    <button className="iad-counter-sub"
 onClick={()=>setF("actionDiceCount",Math.max(0,(char.actionDiceCount||0)-1))}>
                      -
                    </button>
                    <button className="iad-counter-num"
 onClick={()=>{
 if((char.actionDiceCount||0)===0) return;
 const roll = Math.floor(Math.random()*4)+1;
 setSkillRoll({label:"Action Dice (d4)", roll, bonus:0, total:roll, isCrit:roll===4, isFail:roll===1, sides:4});
 setF("actionDiceCount", (char.actionDiceCount||0)-1);
                      }}
 title="Tap to roll d4">
                      <span style={{color:"var(--amber)",fontWeight:800,fontSize:13}}>{char.actionDiceCount||0}</span>
                    </button>
                    <button className="iad-counter-add"
 onClick={()=>{setF("actionDiceCount",Math.min(20,(char.actionDiceCount||0)+1));setActionDiceRoll(null);}}>
                      +
                    </button>
                  </div>
                </div>
                <div className="iad-hint">Tap number to roll d4 . counter 0-20</div>
              </div>

              {/* Rest */}
              <div className="rest-card">
                <div className="rest-title">REST</div>
                <div className="rest-row">
                  <button className="rest-btn rest-short"
 onClick={()=>{
 if(!cls) return;
 const roll = Math.floor(Math.random()*cls.hitDie)+1;
 const conMod = abilityMod(eff.CON);
 setF("hp.current", Math.min(char.hp.max, (char.hp.current||0) + Math.max(1, roll + conMod)));
                    }}>
                    <div>
                      <div className="rest-btn-title" style={{color:"var(--amber)"}}>⚡ Short Rest</div>
                      <div className="rest-btn-sub">Roll 1 hit die</div>
                    </div>
                  </button>
                  <button className="rest-btn rest-long"
 onClick={()=>{
 setF("hp.current", char.hp.max);
 setF("deathSaves.successes", 0);
 setF("deathSaves.failures", 0);
 setCharSaving(p=>({...p, spellSlotsUsed: Array(9).fill(0), inspirationActive: false}));
                    }}>
                    <div>
                      <div className="rest-btn-title" style={{color:"var(--accent)"}}>🌙 Long Rest</div>
                      <div className="rest-btn-sub">Full restore</div>
                    </div>
                  </button>
                </div>
              </div>

              <div className="core-sheet-footer">Character Sheet . D&amp;D 2024 . 5th Edition</div>
            </div>

          </div>
        )}

        {/* FEATURES */}
        {tab==="features" && (() => {
 const NoteTags = ({notes, traits, extra, exclude=[], hideAllTags=false}) => {
 if (!notes) return null;
 const items = notes.split(/\.\s+/).map(s=>s.replace(/\.$/,'')).filter(Boolean);
 const plain = items.filter(item=>
              !item.toLowerCase().startsWith("subraces:") &&
              !item.toLowerCase().startsWith("parent:") &&
              !(extra && item.toLowerCase().startsWith("cantrip")) &&
              !(extra && item.toLowerCase().startsWith("extra language")) &&
              !exclude.some(ex=>item.toLowerCase().startsWith(ex.toLowerCase())) &&
              !(traits||[]).find(t=>
 item.toLowerCase().startsWith(t.name.toLowerCase())||
 t.name.toLowerCase()===item.split(":")[0].trim().toLowerCase()||
 t.name.toLowerCase()===item.split("(")[0].trim().toLowerCase()
              )
            );
 const detailed = items.map(item=>{
 const t=(traits||[]).find(t=>
 item.toLowerCase().startsWith(t.name.toLowerCase())||
 t.name.toLowerCase()===item.split(":")[0].trim().toLowerCase()||
 t.name.toLowerCase()===item.split("(")[0].trim().toLowerCase()
              );
 return t?{item,trait:t}:null;
            }).filter(Boolean);
 const subracesTag = items.find(i=>i.toLowerCase().startsWith("subraces:"));
 const parentTag   = items.find(i=>i.toLowerCase().startsWith("parent:"));
 return (
              <div style={{position:"relative"}}>
                {detailed.length>0&&(
                  <div className="ft-detail-row">
                    {detailed.map(({item,trait},i)=>(
                      <div key={i} className="ft-detail-wrap">
                        <span className="ft-note-tag ft-note-tag-clickable"
 onClick={()=>setOpenFeat(openFeat===`nt${i}`?null:`nt${i}`)}>
                          {item}<span className="ft-info-icon">i</span>
                        </span>
                        {openFeat===`nt${i}`&&(
                          <>
                            <div className="ft-info-backdrop" onClick={()=>setOpenFeat(null)}/>
                            <SmartPopup desc={trait.desc}/>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                )}
                {plain.length>0&&!hideAllTags&&(
                  <div className="ft-note-tags" style={{marginTop:detailed.length>0?12:6}}>
                    {plain.map((item,i)=>{
 const asiMatch=item.match(/Ability Score Increase:\s*([+\-]\d+)\s+([A-Z]{3})/i);
 const isApplied=asiMatch&&char.abilities[asiMatch[2].toUpperCase()]>10;
 return <span key={i} className={"ft-note-tag"+(isApplied?" ft-note-tag-asi-on":"")}>{item}</span>;
                    })}
                  </div>
                )}
                {extra&&<div style={{marginTop:8}}>{extra}</div>}
                {(subracesTag||parentTag)&&(
                  <div className="ft-subraces-tag">
                    {parentTag&&<span>{parentTag}</span>}
                    {subracesTag&&<span>{subracesTag}</span>}
                  </div>
                )}
              </div>
            );
          };
 const RaceEntry = ({title, entry, traits, titleHidden, cantripExtra}) => {
 const desc = entry?.desc?.replace(new RegExp(`^${title}[:\\s.,-]*`,'i'),'').trim();
 return (
              <div className="ft-lib-entry">
                {!titleHidden&&<div className="ft-lib-entry-hdr"><div className="ft-lib-entry-title">{title}</div></div>}
                {desc&&<div className="ft-lib-desc">{desc}</div>}
                {entry?.notes&&<NoteTags notes={entry.notes} traits={traits||spc?.traits} extra={cantripExtra}/>}
                {!entry&&traits&&traits.map((t,i)=>(
                  <div key={i} className="ft-lib-trait-row">
                    <span className="ft-lib-trait-name">{t.name}</span>
                    {t.desc&&<span className="ft-lib-trait-desc"> - {t.desc}</span>}
                  </div>
                ))}
              </div>
            );
          };
 return (
          <div className="panel">
            {!char.species&&!char.charClass&&!char.background
              ? <Empty icon="📜" msg="Choose a class and species in the header to see features."/>
              : (<div className="feat-list">

                  {/* Racial traits card - library style with desc + notes + tags */}
                  {spc&&spc.traits&&(()=>{
 const libRace = libEntries.find(e=>e.category==="Race"&&e.title===char.species);
 const libSub  = char.subrace ? libEntries.find(e=>e.category==="Subrace"&&e.title===char.subrace) : null;

 return (
                      <>
                        <div className="ft-card ft-card-race">
                          <div className="ft-lib-section-hdr ft-lib-section-hdr-btn"
 onClick={()=>setOpenTrait(openTrait==="race"?null:"race")}>
                            <span>Racial Traits - {char.species}</span>
                            <span className="ft-hdr-chev">{openTrait==="race"?"▲":"▼"}</span>
                          </div>
                          {openTrait==="race"&&<RaceEntry title={char.species} entry={libRace} traits={spc.traits} titleHidden/>}
                        </div>
                        {(libSub || (char.subrace && (SUBRACE_TRAITS[char.subrace]||[]).length>0)) && (
                          <div style={{marginLeft:16,borderLeft:"3px solid var(--border)",borderRadius:"0 14px 14px 0"}}>
                            <div className="ft-card ft-card-race" style={{borderRadius:"0 14px 14px 0"}}>
                              <div className="ft-lib-section-hdr ft-lib-section-hdr-btn"
 onClick={()=>setOpenTrait(openTrait==="subrace"?null:"subrace")}>
                                <span>Subrace - {char.subrace}</span>
                                <span className="ft-hdr-chev">{openTrait==="subrace"?"▲":"▼"}</span>
                              </div>
                              {openTrait==="subrace"&&(()=>{
 const subraceCantrip = SUBRACE_CANTRIPS[char.subrace];
 const subraceLangCount = SUBRACE_LANGUAGES[char.subrace]||0;
 const autoLangs = [...(RACE_LANGUAGES[char.species]||[]),...(BG_LANGUAGES[char.background]||[])];
 const cantripExtra = (subraceCantrip||subraceLangCount>0) ? (
                                  <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
                                    {subraceCantrip&&(
                                      <div style={{flex:1,minWidth:140}}>
                                        <div style={{fontSize:12,fontWeight:600,color:"var(--text)",marginBottom:4}}>
                                          Cantrip ({subraceCantrip?.source||"Racial"})
                                        </div>
                                        <select className="ri-sel"
 value={char.racialCantrip||""}
 onChange={e=>setF("racialCantrip",e.target.value)}
 style={{borderColor:"var(--green)",color:char.racialCantrip?"var(--green)":"var(--muted)",width:"100%"}}>
                                          <option value="">-- Choose a cantrip --</option>
                                          {(subraceCantrip?.list||[]).map(c=>(
                                            <option key={c} value={c}>{c}</option>
                                          ))}
                                        </select>
                                      </div>
                                    )}
                                    {subraceLangCount>0&&(
                                      <div style={{flex:1,minWidth:140}}>
                                        <div style={{fontSize:12,fontWeight:600,color:"var(--text)",marginBottom:4}}>
                                          Extra Language
                                        </div>
                                        <select className="ri-sel"
 value={(char.languages||[])[0]||""}
 onChange={e=>{
 const val=e.target.value;
 setCharSaving(p=>({...p,languages:val?[val,...(p.languages||[]).slice(1)]:(p.languages||[]).slice(1)}));
                                          }}
 style={{borderColor:"rgba(59,130,246,0.4)",color:(char.languages||[])[0]?"var(--mana)":"var(--muted)",width:"100%"}}>
                                          <option value="">-- Choose a language --</option>
                                          {ALL_LANGUAGES.filter(l=>!autoLangs.includes(l)).map(l=>(
                                            <option key={l} value={l}>{l}</option>
                                          ))}
                                        </select>
                                      </div>
                                    )}
                                  </div>
                                ) : null;
 return libSub
                                  ? <RaceEntry title={char.subrace} entry={libSub} traits={null} titleHidden cantripExtra={cantripExtra}/>
                                  : <RaceEntry title={char.subrace} entry={null} traits={SUBRACE_TRAITS[char.subrace]} titleHidden cantripExtra={cantripExtra}/>;
                              })()}
                              {/* cantrip picker is now inside RaceEntry via cantripExtra */}
                            </div>
                          </div>
                        )}
                      </>
                    );
                  })()}

                  {/* Class features card */}
                  {cls&&cls.features&&(()=>{
 const isOpen = openTrait==="class";
 const libCls = libEntries.find(e=>e.category==="Class"&&e.title===char.charClass);
 return (
                      <div className="ft-card ft-card-race">
                        <div className="ft-lib-section-hdr ft-lib-section-hdr-btn"
 onClick={()=>setOpenTrait(isOpen?null:"class")}>
                          <span>Class Features - {char.charClass} {char.multiClassLevel > 0 ? char.classLevel : char.level}</span>
                          <span className="ft-hdr-chev">{isOpen?"▲":"▼"}</span>
                        </div>
                        {isOpen&&(
                          <div className="ft-lib-entry" onClick={e=>e.stopPropagation()}>
                            {libCls?.desc&&<div className="ft-lib-desc">{libCls.desc}</div>}
                            {/* Single row of purple stat tags below description */}
                            <div className="ft-cls-stat-row">
                              {cls.hitDie&&<span className="ft-cls-stat-tag">Hit Die: d{cls.hitDie}</span>}
                              {cls.savingThrows?.length>0&&<span className="ft-cls-stat-tag">Saves: {cls.savingThrows.join(", ")}</span>}
                              {cls.spellcastingAbility&&<span className="ft-cls-stat-tag">Spell Ability: {cls.spellcastingAbility}</span>}
                            </div>
                            {libCls?.notes&&<NoteTags notes={libCls.notes} traits={[]} exclude={["Hit Die","Primary","Saves","Multiclass Prereq","Multiclass Gains","Spellcasting","Armor","Weapons","Weapon","Tools","Key Features"]}/>}
                            <div className="ft-feature-list">
                              {/* Weapons and armor on one row */}
                              {(cls.weaponProf?.length>0||cls.armorProf?.length>0)&&<div className="ft-feature-row ft-feature-row-info">
                                {cls.weaponProf?.length>0&&<><span className="feat-badge feat-badge-info">Weapons</span><span className="ft-feature-name">{cls.weaponProf.join(", ")}</span></>}
                                {cls.armorProf?.length>0&&<><span className="feat-badge feat-badge-info" style={{marginLeft:8}}>Armor</span><span className="ft-feature-name">{cls.armorProf.join(", ")}</span></>}
                              </div>}
                              {cls.startingEquipment&&(()=>{
 const groups = cls.startingEquipment.split(";").map(g=>g.trim()).filter(Boolean);
 return (
                                  <div style={{marginTop:6,display:"flex",flexDirection:"column",gap:4}}>
                                    <span style={{fontSize:10,fontWeight:700,letterSpacing:".05em",textTransform:"uppercase",color:"var(--muted)"}}>Starting Equipment</span>
                                    <div style={{display:"flex",flexWrap:"wrap",gap:4}}>
                                      {groups.map((group,gi)=>{
 const parts = group.split(/ or /i).map(p=>p.trim()).filter(Boolean);
 return (
                                          <div key={gi} style={{display:"flex",alignItems:"center",gap:3,flexWrap:"wrap"}}>
                                            {parts.map((part,pi)=>(
                                              <span key={pi} style={{display:"flex",alignItems:"center",gap:2}}>
                                                {(()=>{
                                                  const chosen=(char.chosenStartEquip||[]).includes(part);
                                                  return <span
                                                    onClick={()=>setCharSaving(p=>{
                                                      const arr=[...(p.chosenStartEquip||[])];
                                                      const i=arr.indexOf(part);
                                                      const nowChosen=i<0;
                                                      if(i>=0) arr.splice(i,1); else arr.push(part);

                                                      const ARMOR_MAP={"Leather armor":"Leather Armor","Scale mail":"Scale Mail","Chain mail":"Chain Mail","Half plate":"Half Plate","Plate armor":"Plate Armor","Splint armor":"Splint Armor","Hide armor":"Hide Armor","Studded leather":"Studded Leather","Ring mail":"Ring Mail","Chain shirt":"Chain Shirt","Breastplate":"Breastplate","Padded armor":"Padded Armor"};
                                                      const SHIELD_MAP={"Shield":"Shield","Wooden shield":"Shield"};
                                                      const WEAPON_MAP={"Mace":"Mace","Warhammer":"Warhammer","Greataxe":"Greataxe","Longsword":"Longsword","Rapier":"Rapier","Shortsword":"Shortsword","Scimitar":"Scimitar","Quarterstaff":"Quarterstaff","Dagger":"Dagger","Shortbow":"Shortbow","Longbow":"Longbow","Light crossbow":"Light Crossbow","Hand crossbow":"Hand Crossbow","Handaxe":"Handaxe","Javelin":"Javelin","Two daggers":"Dagger","10 darts":"Dart","Lute":"Lute"};

                                                      const armorTitle=ARMOR_MAP[part];
                                                      const shieldTitle=SHIELD_MAP[part];
                                                      const weaponTitle=WEAPON_MAP[part];

                                                      let newArmorItems=[...(p.armorItems||[])];
                                                      let newShieldItems=[...(p.shieldItems||[])];
                                                      let newWeaponItems=[...(p.weaponItems||[])];

                                                      if(armorTitle){
                                                        if(nowChosen){if(!newArmorItems.some(a=>typeof a==="object"&&a.name===armorTitle&&a.source==="class")) newArmorItems.push({name:armorTitle,equipped:false,source:"class"});}
                                                        else{newArmorItems=newArmorItems.filter(a=>!(typeof a==="object"&&a.name===armorTitle&&a.source==="class"));}
                                                      }
                                                      if(shieldTitle){
                                                        if(nowChosen){if(!newShieldItems.some(a=>typeof a==="object"&&a.name===shieldTitle&&a.source==="class")) newShieldItems.push({name:shieldTitle,equipped:false,source:"class"});}
                                                        else{newShieldItems=newShieldItems.filter(a=>!(typeof a==="object"&&a.name===shieldTitle&&a.source==="class"));}
                                                      }
                                                      if(weaponTitle){
                                                        if(nowChosen){if(!newWeaponItems.some(a=>typeof a==="object"&&a.name===weaponTitle&&a.source==="class")) newWeaponItems.push({name:weaponTitle,equipped:false,hand:"",source:"class"});}
                                                        else{newWeaponItems=newWeaponItems.filter(a=>!(typeof a==="object"&&a.name===weaponTitle&&a.source==="class"));}
                                                      }

                                                      return {...p,chosenStartEquip:arr,armorItems:newArmorItems,shieldItems:newShieldItems,weaponItems:newWeaponItems};
                                                    })}
                                                    style={{fontSize:10,fontWeight:600,padding:"2px 7px",borderRadius:5,cursor:"pointer",
                                                      background:chosen?"rgba(99,102,241,0.18)":"rgba(99,102,241,0.07)",
                                                      border:chosen?"1px solid rgba(99,102,241,0.6)":"1px solid rgba(99,102,241,0.2)",
                                                      color:chosen?"var(--accent)":"var(--text)",
                                                      whiteSpace:"nowrap",transition:"all .15s"}}>{part}</span>;
                                                })()}
                                                {pi<parts.length-1&&<span style={{fontSize:9,color:"var(--muted)",fontStyle:"italic"}}>or</span>}
                                              </span>
                                            ))}
                                            {gi<groups.length-1&&<span style={{fontSize:9,color:"var(--subtle)"}}>·</span>}
                                          </div>
                                        );
                                      })}
                                    </div>
                                  </div>
                                );
                              })()}

                              {(()=>{
 const clsLvlNow = char.multiClassLevel > 0 && char.classLevel > 1 ? char.classLevel : char.level;
 const nextLvl = Object.keys(cls.features).map(Number).filter(l=>l>clsLvlNow).sort((a,b)=>a-b)[0];
 if(!nextLvl) return null;
 const nextFeats = cls.features[nextLvl]||[];
 const suffix = nextLvl===1?"1st":nextLvl===2?"2nd":nextLvl===3?"3rd":`${nextLvl}th`;
 return (
                                  <>
                                    <div className="ft-lib-section-hdr" style={{margin:"4px -14px 0",borderTop:"1px solid var(--divider)",fontWeight:800,color:"#f97316"}}>
                                      At Next Level — {suffix} Level
                                    </div>
                                    {nextFeats.map((f,i)=>(
                                      <div key={`n${i}`} className="ft-feature-row" style={{opacity:0.55}}>
                                        <span className="feat-badge feat-badge-dim">{nextLvl}</span>
                                        <span className="ft-feature-name">{f.split("(")[0].trim()}</span>
                                      </div>
                                    ))}
                                  </>
                                );
                              })()}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })()}

                  {/* Key feature sub-cards - one per unlocked feature, indented like subraces */}
                  {cls&&(()=>{
 const clsLvlNow = char.multiClassLevel > 0 && char.classLevel > 1 ? char.classLevel : char.level;
 const unlockedFeatures = Object.entries(cls.features)
                      .filter(([l])=>Number(l)<=clsLvlNow)
                      .flatMap(([,feats])=>feats)
                      .map(f=>f.split("(")[0].trim());
                    // Show cards for features with detail text or library entries
 const allFeatStrings = Object.entries(cls.features)
                      .filter(([l])=>Number(l)<=clsLvlNow)
                      .flatMap(([,feats])=>feats);
 const NON_NOTABLE = ["Spellcasting","Ability Score Increase","Expertise","Proficiencies","Weapon Mastery"];
 const ALWAYS_NOTABLE = ["Channel Divinity","Rage","Sneak Attack","Bardic Inspiration","Wild Shape","Lay on Hands","Divine Smite","Eldritch Invocations","Ki","Pact Magic","Arcane Recovery","Action Surge","Second Wind","Extra Attack","Unarmored Defense","Martial Arts","Metamagic","Sorcery Points"];
 const seenFeats = new Set();
 const keyFeats = allFeatStrings.filter(f=>{
 const name = f.split("(")[0].trim();
 if(seenFeats.has(name)) return false;
 seenFeats.add(name);
 if(NON_NOTABLE.some(n=>name.toLowerCase().startsWith(n.toLowerCase()))) return false;
 if(ALWAYS_NOTABLE.some(n=>name.toLowerCase().startsWith(n.toLowerCase()))) return true;
 const det = f.match(/\((.+)\)/)?.[1];
 const libFeat = libEntries.find(e=>
 e.title.toLowerCase()===name.toLowerCase() &&
                        (e.tags||"").toLowerCase().includes((char.charClass||"").toLowerCase())
                      );
 return !!(det || libFeat);
                    });
 if(!keyFeats.length) return null;
 return (
                      <div style={{marginLeft:16,borderLeft:"3px solid var(--border)",borderRadius:"0 14px 14px 0"}}>
                        {keyFeats.map((featStr,idx)=>{
 const feat = featStr.split("(")[0].trim();
 const det = featStr.match(/\((.+)\)/)?.[1];
 const libFeat = libEntries.find(e=>
                            (e.title.toLowerCase()===feat.toLowerCase() ||
 feat.toLowerCase().startsWith(e.title.toLowerCase())) &&
                            (e.tags||"").toLowerCase().includes((char.charClass||"").toLowerCase())
                          );
 const isAlwaysNotable = ALWAYS_NOTABLE.some(n=>feat.toLowerCase().startsWith(n.toLowerCase()));
 const hasContent = libFeat || det || isAlwaysNotable;
 if(!hasContent) return null;
 const key = `clf-${idx}`;
 const isOpen = openTrait===key;
 return (
                            <div key={key} className="ft-card ft-card-race" style={{borderRadius:"0 14px 14px 0"}}>
                              <div className="ft-lib-section-hdr ft-lib-section-hdr-btn"
 onClick={()=>setOpenTrait(isOpen?null:key)}>
                                <span>{feat}{feat==="Divine Domain"&&char.divineDomain?" — "+char.divineDomain:""}</span>
                                <span className="ft-hdr-chev">{isOpen?"▲":"▼"}</span>
                              </div>
                              {isOpen&&(
                                <div className="ft-lib-entry" onClick={e=>e.stopPropagation()}>
                                  {libFeat?.desc&&<div className="ft-lib-desc">{libFeat.desc}</div>}
                                  {/* Domain picker for Cleric Divine Domain feature */}
                                  {feat==="Divine Domain"&&char.charClass==="Cleric"&&(()=>{
 const domains = libEntries
                                      .filter(e=>e.category==="Subclass"&&(e.tags||"").toLowerCase().includes("cleric")&&e.title.toLowerCase().includes("domain")&&e.title!=="Divine Domain")
                                      .map(e=>e.title)
                                      .sort();
 return (
                                      <div style={{marginTop:8}}>
                                        <div style={{fontSize:12,fontWeight:600,color:"var(--text)",marginBottom:4}}>Choose Domain</div>
                                        <select className="ri-sel"
 value={char.divineDomain||""}
 onChange={e=>setF("divineDomain",e.target.value)}
 style={{borderColor:"rgba(99,102,241,0.4)",color:char.divineDomain?"var(--accent)":"var(--muted)",width:"100%"}}>
                                          <option value="">-- Choose a domain --</option>
                                          {domains.map(d=><option key={d} value={d}>{d}</option>)}
                                        </select>
                                        {char.divineDomain&&(()=>{
 const domEntry = libEntries.find(e=>e.title===char.divineDomain);
 return domEntry&&(
                                            <div style={{marginTop:8}}>
                                              {domEntry.desc&&<div className="ft-lib-desc">{domEntry.desc}</div>}
                                              {(()=>{
 if(!domEntry.notes) return null;
                                                // Extract domain spells sentence and render as purple tags
 const spellMatch = domEntry.notes.match(/Domain Spells: (.+)/);
 if(!spellMatch) return null;
                                                // Parse "Spell A, Spell B (1st). Spell C, Spell D (3rd)." into tags
 const spellGroups = spellMatch[1].split(/\(\d+[a-z]+\)\.?/).map(g=>g.trim()).filter(Boolean);
 const levelMatches = [...spellMatch[1].matchAll(/\((\d+[a-z]+)\)/g)].map(m=>m[1]);
                                                // Map spell level ordinal to min cleric level required
 const spellLvlToClsLvl = {"1st":1,"2nd":2,"3rd":3,"4th":4,"5th":5,"6th":6,"7th":7,"8th":8,"9th":9};
 const clsLvlNow = char.multiClassLevel > 0 && char.classLevel > 1 ? char.classLevel : char.level;
 return (
                                                  <><div style={{fontSize:10,fontWeight:700,color:"var(--muted)",letterSpacing:".06em",textTransform:"uppercase",marginTop:10,marginBottom:2}}>Spells Available</div>
                                                  <div className="ft-cls-stat-row" style={{marginTop:0}}>
                                                    {spellGroups.map((group,i)=>{
 const spellLvl = levelMatches[i];
 const minLvl = spellLvlToClsLvl[spellLvl] || 1;
 if(clsLvlNow < minLvl) return null;
 return group.split(",").map(s=>s.trim()).filter(Boolean).map((spell,j)=>(
                                                        <span key={`${i}-${j}`} className="ft-cls-stat-tag">
                                                          {spell}{spellLvl?` (${spellLvl})`:""}</span>
                                                      ));
                                                    })}
                                                  </div></>
                                                );
                                              })()}
                                              {domEntry.notes&&<NoteTags notes={domEntry.notes} traits={[]} hideAllTags/>}
                                            </div>
                                          );
                                        })()}
                                      </div>
                                    );
                                  })()}
                                  {libFeat?.notes&&<NoteTags notes={libFeat.notes} traits={[]} exclude={["Domain Spells","Domains"]}/>}
                                  {!libFeat&&det&&<div className="ft-lib-desc">{det}</div>}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    );
                  })()}

                  {/* Multiclass card */}
                  {char.multiClass&&char.multiClassLevel>0&&CLASSES[char.multiClass]&&(()=>{
 const isOpen = openTrait==="mc";
 const libMc = libEntries.find(e=>e.category==="Class"&&e.title===char.multiClass);
 return (
                      <div className="ft-card ft-card-race">
                        <div className="ft-lib-section-hdr ft-lib-section-hdr-btn"
 onClick={()=>setOpenTrait(isOpen?null:"mc")}>
                          <span>Multiclass - {char.multiClass} {char.multiClassLevel}</span>
                          <span className="ft-hdr-chev">{isOpen?"▲":"▼"}</span>
                        </div>
                        {isOpen&&(
                          <div className="ft-lib-entry" onClick={e=>e.stopPropagation()}>
                            {libMc?.desc&&<div className="ft-lib-desc">{libMc.desc}</div>}
                            {libMc?.notes&&<NoteTags notes={libMc.notes} traits={[]} exclude={["Hit Die","Primary","Saves","Multiclass Prereq","Multiclass Gains","Spellcasting","Armor","Weapons","Weapon","Tools","Key Features"]}/>}
                          </div>
                        )}
                      </div>
                    );
                  })()}

                  {/* Background card */}
                  {char.background&&(()=>{
 const bg = libEntries.find(e=>e.category==="Background"&&e.title===char.background);
 const isOpen = openTrait==="bg";
 return (
                      <div className="ft-card ft-card-race">
                        <div className="ft-lib-section-hdr ft-lib-section-hdr-btn"
 onClick={()=>setOpenTrait(isOpen?null:"bg")}>
                          <span>Background - {char.background}</span>
                          <span className="ft-hdr-chev">{isOpen?"▲":"▼"}</span>
                        </div>
                        {isOpen&&bg&&(
                          <div className="ft-lib-entry" onClick={e=>e.stopPropagation()}>
                            {bg.desc&&<div className="ft-lib-desc">{bg.desc}</div>}
                            {bg.notes&&<NoteTags notes={bg.notes} traits={[]}/>}
                          </div>
                        )}
                      </div>
                    );
                  })()}

                </div>)
            }
          </div>
        );})()}

        {/* ATTACKS */}
        {tab==="spells" && (
          <div className="panel">
            {!cls?.spellcastingAbility
              ? <Empty icon="✨" msg={char.charClass?`${char.charClass}s don't use a spell list.`:"Select a spellcasting class in the header."}/>
              : (<>
                  {/* Stats bar */}
                  <Card>
                    <div className="spell-stats">
                      <div className="ss-cell"><div className="ss-val">{cls.spellcastingAbility}</div><div className="ss-lbl">Ability</div></div>
                      <div className="ss-divider"/>
                      <div className="ss-cell"><div className="ss-val">{fmt(spellMod)}</div><div className="ss-lbl">Atk Bonus</div></div>
                      <div className="ss-divider"/>
                      <div className="ss-cell"><div className="ss-val">{spellDC}</div><div className="ss-lbl">Save DC</div></div>
                      <div className="ss-divider"/>
                      <div className="ss-cell"><div className="ss-val">{(char.spellsKnown||[]).length}</div><div className="ss-lbl">Known</div></div>
                    </div>
                  </Card>

                  {/* Spell slots */}
                  {slots.length>0&&(
                    <Card>
                      <SecHead icon="◉" title="Spell Slots"/>
                      <div className="slot-levels">
                        {slots.map((total,i)=>(
                          <div key={i} className="slot-row">
                            <span className="slot-lvl">{i+1}</span>
                            <div className="slot-pips">
                              {Array.from({length:total},(_,j)=>(
                                <div key={j}
 className={`slot-pip ${j<((char.spellSlotsUsed||[])[i]||0)?"slot-used":""}`}
 onClick={()=>setSlotUsed(i,j<((char.spellSlotsUsed||[])[i]||0)?((char.spellSlotsUsed||[])[i]||0)-1:j+1)}/>
                              ))}
                            </div>
                            <span className="slot-rem">{total-((char.spellSlotsUsed||[])[i]||0)} left</span>
                          </div>
                        ))}
                      </div>
                    </Card>
                  )}

                  {/* Spell list tabs */}
                  <div className="spell-tabs">
                    {["cantrips",...spellLvls.filter(l=>l<=maxSlot).map(l=>`level${l}`)].map(sv=>{
 const lbl = sv==="cantrips"?"Cantrips":`Level ${sv.replace("level","")}`;
 return <button key={sv} className={`sp-tab ${spellView===sv?"sp-tab-on":""}`} onClick={()=>setSpellView(sv)}>{lbl}</button>;
                    })}
                  </div>

                  {spellView==="cantrips"&&availSpells.cantrips&&(
                    <div className="sp-grid">
                      {availSpells.cantrips.map(s=>{
 const isRacial = char.racialCantrip===s;
 const isKnown  = (char.spellsKnown||[]).includes(s);
 return (
                          <div key={s}
 className={`sp-item ${isKnown?"sp-on":""} ${isRacial?"sp-item-racial":""}`}
 onClick={()=>tog("spellsKnown",s)}>
                            <div className={`sp-dot ${isRacial?"sp-dot-racial":""}`}/>
                            {s}
                            {isRacial&&<span className="sp-racial-tag">racial</span>}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {spellView!=="cantrips"&&(()=>{
 const lvl = Number(spellView.replace("level",""));
 const spells = availSpells[lvl]||[];
 return (
                      <div className="sp-grid">
                        {spells.map(s=>{
 const isDomain = domainSpellSet.has(s);
 const isKnown = (char.spellsKnown||[]).includes(s);
 return (
                            <div key={s}
 className={`sp-item ${isKnown?"sp-on":""} ${isDomain?"sp-item-domain":""}`}
 onClick={()=>tog("spellsKnown",s)}>
                              <div className={`sp-dot ${isDomain?"sp-dot-domain":""}`}/>{s}
                              {isDomain&&<span className="sp-domain-tag">domain</span>}
                            </div>
                          );
                        })}
                      </div>
                    );
                  })()}
                </>)
            }
          </div>
        )}

        {/* GEAR */}
        {tab==="gear" && (
          <div className="panel">
            <div className="card-wrap" style={{marginBottom:12,padding:0,overflow:"hidden"}}>
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"8px 14px",cursor:"pointer",background:"var(--surface)",borderBottom:openCurrency?"1px solid var(--divider)":"none"}}
 onClick={()=>setOpenCurrency(o=>!o)}>
                <div style={{display:"flex",alignItems:"center",gap:7}}>
                  <span style={{fontSize:13}}>💰</span>
                  <span style={{fontSize:10,fontWeight:700,letterSpacing:".07em",textTransform:"uppercase",color:"var(--muted)"}}>Currency</span>
                </div>
                <span style={{fontSize:10,color:"var(--muted)"}}>{openCurrency?"▲":"▼"}</span>
              </div>
              {openCurrency&&<div style={{padding:"12px 14px"}}>
              {(()=>{
 const pp=Number(char.currency.PP)||0, gp=Number(char.currency.GP)||0;
 const ep=Number(char.currency.EP)||0, sp=Number(char.currency.SP)||0;
 const cp=Number(char.currency.CP)||0;
 const totalCP = pp*1000 + gp*100 + ep*50 + sp*10 + cp;
 const totals = {PP:Math.floor(totalCP/1000).toLocaleString(), GP:Math.floor(totalCP/100).toLocaleString(), EP:Math.floor(totalCP/50).toLocaleString(), SP:Math.floor(totalCP/10).toLocaleString(), CP:totalCP.toLocaleString()};
 const colors = {PP:"#a78bfa", GP:"#f59e0b", EP:"#34d399", SP:"#94a3b8", CP:"#cd7f32"};
 return (
                  <div style={{display:"flex",gap:10,alignItems:"flex-start"}}>
                    <div style={{flex:"1 1 0",minWidth:0}}>
                      <div className="currency-grid">
                        {CURRENCY.map(cur=>(
                          <div key={cur} className="cur-cell">
                            <input className="cur-in" type="text" inputMode="numeric"
 value={curBuf[cur]!==undefined&&curBuf[cur]!==""?curBuf[cur]:(char.currency[cur]||0)}
 onChange={e=>{
 const v=e.target.value.replace(/[^0-9]/g,"");
 setCurBuf(b=>({...b,[cur]:v}));
 setCurrency(cur,Number(v)||0);
                              }}
 onFocus={e=>{setCurBuf(b=>({...b,[cur]:String(char.currency[cur]||0)}));e.target.select();}}
 onBlur={e=>{setCurBuf(b=>({...b,[cur]:""}));setCurrency(cur,Number(e.target.value.replace(/[^0-9]/g,""))||0);}}/>
                            <div className="cur-lbl" style={{color:colors[cur]}}>{cur}</div>
                          </div>
                        ))}
                      </div>
                      <div className="currency-grid" style={{marginTop:6}}>
                        {CURRENCY.map(cur=>(
                          <div key={cur} className="cur-cell" style={{padding:"3px 2px"}}>
                            <div className="cur-in" style={{fontSize:11,fontWeight:600,color:colors[cur]}}>{totals[cur]}</div>
                            <div className="cur-lbl" style={{color:"var(--muted)"}}>total</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Conversion calculator */}
                    <div style={{borderLeft:"1px solid var(--divider)",paddingLeft:10,flexShrink:0,minWidth:150,display:"flex",flexDirection:"column",alignItems:"center"}}>
                      <div className="conv-title" style={{marginBottom:5}}>Convert</div>
                      {(()=>{
 const amt = Number(char._convAmt)||0;
 const from = char._convFrom||"GP";
 const to   = char._convTo||"CP";
 const rates = {PP:1000,GP:100,EP:50,SP:10,CP:1};
 const result = Math.floor(amt * rates[from] / rates[to]);
 return (
                          <>
                            <div style={{display:"flex",alignItems:"center",gap:4,marginBottom:1}}>
                              <div style={{display:"flex",gap:4,alignItems:"center",flex:1}}>
                                <input type="number" min={0}
 style={{width:60,fontSize:12,fontFamily:"'DM Mono',monospace",fontWeight:700,background:"var(--input)",border:"1px solid var(--border)",borderRadius:6,padding:"2px 4px",textAlign:"center",outline:"none",color:"var(--text)"}}
 value={char._convAmt||""} placeholder="0"
 onChange={e=>setF("_convAmt",e.target.value)}/>
                                <select className="hdr-field-in hdr-field-sel" style={{width:46,flexShrink:0,fontSize:10,padding:"2px 2px"}}
 value={from} onChange={e=>setF("_convFrom",e.target.value)}>
                                  {CURRENCY.map(cur=><option key={cur} value={cur}>{cur}</option>)}
                                </select>
                              </div>
                              <span style={{fontSize:12,color:"var(--muted)",fontWeight:700,flexShrink:0}}>→</span>
                            </div>
                            <div style={{display:"flex",alignItems:"center",gap:4,marginBottom:2}}>
                              <div style={{display:"flex",gap:4,alignItems:"center",flex:1}}>
                                <div style={{width:60,fontSize:12,fontFamily:"'DM Mono',monospace",fontWeight:800,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:6,padding:"2px 4px",textAlign:"center",color:colors[to]}}>
                                  {amt>0?result.toLocaleString():"—"}
                                </div>
                                <select className="hdr-field-in hdr-field-sel" style={{width:46,flexShrink:0,fontSize:10,padding:"2px 2px"}}
 value={to} onChange={e=>setF("_convTo",e.target.value)}>
                                  {CURRENCY.map(cur=><option key={cur} value={cur}>{cur}</option>)}
                                </select>
                              </div>
                              <span style={{fontSize:12,fontWeight:700,flexShrink:0,visibility:"hidden"}}>→</span>
                            </div>
                            <button
 disabled={!amt||result<=0||from===to||(Number(char.currency[from])||0)<=0}
 style={{width:"100%",padding:"4px 0",borderRadius:6,fontSize:11,fontWeight:700,background:(!amt||result<=0||from===to)?"var(--input)":"rgba(99,102,241,0.1)",border:"1px solid "+( (!amt||result<=0||from===to)?"var(--border)":"rgba(99,102,241,0.35)"),color:(!amt||result<=0||from===to)?"var(--muted)":"var(--accent)",cursor:(!amt||result<=0||from===to)?"default":"pointer",transition:"all .15s"}}
 onClick={()=>{
 if(!amt||result<=0||from===to||(Number(char.currency[from])||0)<=0) return;
 setCharSaving(p=>{
 const cur = {...(p.currency||{})};
 cur[from] = Math.max(0,(Number(cur[from])||0) - amt);
 cur[to]   = (Number(cur[to])||0) + result;
 return {...p, currency:cur, _convAmt:""};
                                });
                              }}>
                              Convert
                            </button>
                          </>
                        );
                      })()}
                    </div>
                  </div>
                );
              })()}
              </div>}
            </div>
            <SecHead icon="🛡" title="Defenses"/>
            <div className="two-col">
              <div>
                {/* Armor */}
                <div className="card-wrap" style={{marginBottom:8,padding:0,overflow:"hidden"}}>
                  <div style={{display:"flex",alignItems:"center",padding:"6px 10px",gap:8,background:"var(--surface)",borderBottom:openArmor?"1px solid var(--divider)":"none",borderRadius:openArmor?"8px 8px 0 0":"8px"}}>
                    <div style={{display:"flex",alignItems:"center",gap:5,cursor:"pointer",flex:1,minWidth:0}} onClick={()=>setOpenArmor(o=>!o)}>
                      <span style={{fontSize:12,flexShrink:0}}>🥋</span>
                      <span style={{fontSize:10,fontWeight:700,letterSpacing:".07em",textTransform:"uppercase",color:"var(--muted)",flexShrink:0}}>Armor</span>
                      {(()=>{const arAC=computeArmorAC(char.armorItems,char.abilities,libEntries);const shieldBonus=char.shield?2:0;const totalAC=arAC!=null?(arAC+shieldBonus):char.ac;return <span style={{fontSize:10,fontWeight:800,color:"var(--accent)",background:"rgba(99,102,241,0.08)",border:"1px solid rgba(99,102,241,0.2)",borderRadius:4,padding:"0 5px",flexShrink:0}}>AC {totalAC}</span>;})()}
                    </div>
                    <button style={{fontSize:11,fontWeight:700,color:"var(--accent)",background:"rgba(99,102,241,0.08)",border:"1px solid rgba(99,102,241,0.25)",borderRadius:6,padding:"1px 8px",cursor:"pointer",flexShrink:0}}
 onClick={e=>{e.stopPropagation();setCharSaving(p=>({...p,armorItems:[...(p.armorItems||[]),""],openArmor:true}));setOpenArmor(true);}}>+ Add</button>
                    <span style={{fontSize:10,color:"var(--muted)",cursor:"pointer",flexShrink:0}} onClick={()=>setOpenArmor(o=>!o)}>{openArmor?"▲":"▼"}</span>
                  </div>
                  {openArmor&&<div style={{padding:"8px 12px",display:"flex",flexDirection:"column",gap:5}}>
                    {(char.armorItems||[]).length===0&&<div style={{fontSize:11,color:"var(--subtle)",fontStyle:"italic"}}>No armor added. Tap + Add to add armor.</div>}
                    {(char.armorItems||[]).map((item,idx)=>{
 const name = typeof item==="object"?item.name:item;
 const equipped = typeof item==="object"?item.equipped:false;
 const updateItem = (patch) => setCharSaving(p=>{
 const a=[...(p.armorItems||[])];
 a[idx]={name,equipped,...(typeof a[idx]==="object"?a[idx]:{}), ...patch};
 const anyEquipped = a.some(i=>typeof i==="object"?i.equipped&&i.name:false);
 const newAC = anyEquipped ? p.ac : (10 + abilityMod((p.abilities?.DEX||10) + (SPECIES[p.species]?.abilityBonus?.DEX||0)));
 return {...p,armorItems:a,armor:a.filter(i=>(typeof i==="object"?i.equipped&&i.name:i)).map(i=>typeof i==="object"?i.name:i).join(", "),ac:anyEquipped?p.ac:newAC};
                      });
 return (
                        <div key={idx} style={{display:"flex",gap:4,alignItems:"center"}}>
                          <button
 title={equipped?"Equipped":"Not equipped"}
 style={{fontSize:9,fontWeight:800,padding:"2px 5px",borderRadius:5,border:"1px solid",flexShrink:0,cursor:"pointer",
 background:equipped?"rgba(34,197,94,0.12)":"var(--input)",
 borderColor:equipped?"rgba(34,197,94,0.4)":"var(--border)",
 color:equipped?"var(--green)":"var(--muted)"}}
 onClick={()=>updateItem({equipped:!equipped})}>EQ</button>
                              {(()=>{
                            const arEntryAT = name ? libEntries.find(e=>e.title===name&&e.category==="Armor") : null;
                            const needsAttune = arEntryAT && (arEntryAT.notes||"").toLowerCase().includes("attune: yes");
                            if(!needsAttune) return null;
                            const attuned = typeof item==="object" ? item.attuned : false;
                            return <button
                              title={attuned?"Attuned":"Not attuned"}
                              style={{fontSize:9,fontWeight:800,padding:"2px 5px",borderRadius:5,border:"1px solid",flexShrink:0,cursor:"pointer",
                                background:attuned?"rgba(220,38,38,0.12)":"var(--input)",
                                borderColor:attuned?"rgba(220,38,38,0.4)":"var(--border)",
                                color:attuned?"#dc2626":"var(--muted)"}}
                              onClick={()=>updateItem({attuned:!attuned})}>AT</button>;
                          })()}
                              {(()=>{
                            // Proficiency warning
 const arEntry = name ? libEntries.find(e=>e.title===name&&e.category==="Armor") : null;
 const arType = arEntry?.notes?.match(/Type: (\w+)/)?.[1]?.toLowerCase()||"";
 const profList = (cls?.armorProf||[]).map(p=>p.toLowerCase());
 const isProficient = !name || !arType ||
 profList.some(p=>p.includes(arType)||p.includes("all")||
                                (arType==="light"&&(p.includes("light")||p.includes("medium")||p.includes("heavy")||p.includes("all")))||
                                (arType==="medium"&&(p.includes("medium")||p.includes("heavy")||p.includes("all")))||
                                (arType==="heavy"&&(p.includes("heavy")||p.includes("all"))));
 return (
                              <>
                                <select className="gi gi-sm" style={{flex:1,color:name?"var(--text)":"var(--subtle)",borderColor:name&&!isProficient?"var(--red)":"",outline:"none"}}
 value={name||""}
 onChange={e=>updateItem({name:e.target.value})}>
                                  <option value="">— Pick armor —</option>
                                  {libEntries.filter(e=>e.category==="Armor").sort((a,b)=>a.title.localeCompare(b.title)).map(e=>(
                                    <option key={e.id} value={e.title}>{e.title}{e.notes?.match(/AC: ([^.]+)/)?` (${e.notes.match(/AC: ([^.]+)/)[1]})`:"" }</option>
                                  ))}
                                </select>
                                {name&&(typeof item==="object"&&item.source==="class")&&<span style={{fontSize:9,fontWeight:700,color:"var(--accent)",background:"rgba(99,102,241,0.1)",border:"1px solid rgba(99,102,241,0.3)",borderRadius:4,padding:"1px 4px",flexShrink:0}}>class</span>}
                                {name&&(typeof item==="object"&&item.source==="class")&&<span style={{fontSize:9,fontWeight:700,color:"var(--accent)",background:"rgba(99,102,241,0.1)",border:"1px solid rgba(99,102,241,0.3)",borderRadius:4,padding:"1px 4px",flexShrink:0}}>class</span>}
                          {name&&!isProficient&&<span style={{fontSize:9,color:"var(--red)",fontWeight:700,flexShrink:0,whiteSpace:"nowrap"}}>⚠ Not proficient</span>}
                              </>
                            );
                          })()}
                          {name&&(()=>{
 const infoEntry = libEntries.find(e=>e.title===name&&e.category==="Armor");
 if(!infoEntry) return null;
 const showInfo = char[`_ai_${idx}`];
 return (
                              <div style={{position:"relative",flexShrink:0}}>
                                <button style={{fontSize:10,fontWeight:800,width:18,height:18,borderRadius:"50%",border:"1px solid rgba(99,102,241,0.3)",background:"rgba(99,102,241,0.08)",color:"var(--accent)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",lineHeight:1}}
 onClick={e=>{e.stopPropagation();setF(`_ai_${idx}`,!showInfo);}}>i</button>
                                {showInfo&&<>
                                  <div style={{position:"fixed",inset:0,zIndex:299}} onClick={()=>setF(`_ai_${idx}`,false)}/>
                                  <div style={{position:"fixed",bottom:80,right:16,zIndex:300,background:"var(--card)",border:"1px solid var(--border)",borderRadius:10,padding:"10px 12px",boxShadow:"0 6px 20px rgba(0,0,0,0.18)",width:"min(280px,90vw)",fontSize:11,color:"var(--muted)",lineHeight:1.55}}>
                                    <div style={{fontWeight:700,color:"var(--text)",fontSize:13,marginBottom:6}}>{infoEntry.title}</div>
                                    {infoEntry.desc&&<div style={{color:"var(--text)",marginBottom:6,fontSize:12}}>{infoEntry.desc}</div>}
                                    {infoEntry.notes&&<div>{infoEntry.notes}</div>}
                                  </div>
                                </>}
                              </div>
                            );
                          })()}
                          <button style={{fontSize:13,color:"var(--red)",background:"none",border:"none",cursor:"pointer",padding:"0 4px",lineHeight:1}}
 onClick={()=>setCharSaving(p=>{const a=[...(p.armorItems||[])];a.splice(idx,1);return {...p,armorItems:a,armor:a.filter(i=>(typeof i==="object"?i.equipped&&i.name:i)).map(i=>typeof i==="object"?i.name:i).join(", ")};})}>✕</button>
                        </div>
                      );
                    })}
                  </div>}
                </div>
                {/* Shield */}
                <div className="card-wrap" style={{marginBottom:8,padding:0,overflow:"hidden"}}>
                  <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 10px",background:"var(--surface)",borderBottom:openShield?"1px solid var(--divider)":"none",borderRadius:openShield?"8px 8px 0 0":"8px"}}>
                    <div style={{display:"flex",alignItems:"center",gap:6,cursor:"pointer",flex:1}} onClick={()=>setOpenShield(o=>!o)}>
                      <span style={{fontSize:12}}>🛡</span>
                      <span style={{fontSize:10,fontWeight:700,letterSpacing:".07em",textTransform:"uppercase",color:"var(--muted)"}}>Shield</span>
                    </div>
                    <div style={{display:"flex",alignItems:"center",gap:6}}>
                      <button style={{fontSize:11,fontWeight:700,color:"var(--accent)",background:"rgba(99,102,241,0.08)",border:"1px solid rgba(99,102,241,0.25)",borderRadius:6,padding:"1px 8px",cursor:"pointer"}}
 onClick={e=>{e.stopPropagation();setCharSaving(p=>({...p,shieldItems:[...(p.shieldItems||[]),{name:"",equipped:false}]}));setOpenShield(true);}}>+ Add</button>
                      <span style={{fontSize:10,color:"var(--muted)",cursor:"pointer"}} onClick={()=>setOpenShield(o=>!o)}>{openShield?"▲":"▼"}</span>
                    </div>
                  </div>
                  {openShield&&<div style={{padding:"8px 12px",display:"flex",flexDirection:"column",gap:5}}>
                    {(char.shieldItems||[]).length===0&&<div style={{fontSize:11,color:"var(--subtle)",fontStyle:"italic"}}>No shield added. Tap + Add to add a shield.</div>}
                    {(char.shieldItems||[]).map((item,idx)=>{
 const name = typeof item==="object"?item.name:item;
 const equipped = typeof item==="object"?item.equipped:false;
 const updateShield = (patch) => setCharSaving(p=>{
 const a=[...(p.shieldItems||[])];
 a[idx]={name,equipped,...(typeof a[idx]==="object"?a[idx]:{}), ...patch};
 const hasEquipped = a.some(i=>typeof i==="object"?i.equipped:false);
 return {...p,shieldItems:a,shield:hasEquipped};
                      });
 const isProficient = (cls?.armorProf||[]).some(p=>p.toLowerCase().includes("shield"));
 return (
                        <div key={idx} style={{display:"flex",gap:4,alignItems:"center"}}>
                          <button title={equipped?"Equipped":"Not equipped"}
 style={{fontSize:9,fontWeight:800,padding:"2px 5px",borderRadius:5,border:"1px solid",flexShrink:0,cursor:"pointer",
 background:equipped?"rgba(34,197,94,0.12)":"var(--input)",
 borderColor:equipped?"rgba(34,197,94,0.4)":"var(--border)",
 color:equipped?"var(--green)":"var(--muted)"}}
 onClick={()=>updateShield({equipped:!equipped})}>EQ</button>
                          {(()=>{
                            const shEntryAT = name ? libEntries.find(e=>e.title===name&&(e.category==="Shield"||e.category==="Armor")) : null;
                            const needsAttune = shEntryAT && (shEntryAT.notes||"").toLowerCase().includes("attune: yes");
                            if(!needsAttune) return null;
                            const attuned = typeof item==="object" ? item.attuned : false;
                            return <button
                              title={attuned?"Attuned":"Not attuned"}
                              style={{fontSize:9,fontWeight:800,padding:"2px 5px",borderRadius:5,border:"1px solid",flexShrink:0,cursor:"pointer",
                                background:attuned?"rgba(220,38,38,0.12)":"var(--input)",
                                borderColor:attuned?"rgba(220,38,38,0.4)":"var(--border)",
                                color:attuned?"#dc2626":"var(--muted)"}}
                              onClick={()=>updateShield({attuned:!attuned})}>AT</button>;
                          })()}
                          <select className="gi gi-sm" style={{flex:1,color:name?"var(--text)":"var(--subtle)",borderColor:name&&!isProficient?"var(--red)":""}}
 value={name||""}
 onChange={e=>updateShield({name:e.target.value})}>
                            <option value="">— Pick shield —</option>
                            {libEntries.filter(e=>e.category==="Shield").sort((a,b)=>a.title.localeCompare(b.title)).map(e=>(
                              <option key={e.id} value={e.title}>{e.title}</option>
                            ))}
                            <option value="Shield">Shield (+2 AC)</option>
                            <option value="Shield +1">Shield +1 (+3 AC)</option>
                            <option value="Shield +2">Shield +2 (+4 AC)</option>
                            <option value="Shield +3">Shield +3 (+5 AC)</option>
                          </select>
                          {name&&(typeof item==="object"&&item.source==="class")&&<span style={{fontSize:9,fontWeight:700,color:"var(--accent)",background:"rgba(99,102,241,0.1)",border:"1px solid rgba(99,102,241,0.3)",borderRadius:4,padding:"1px 4px",flexShrink:0}}>class</span>}
                          {name&&!isProficient&&<span style={{fontSize:9,color:"var(--red)",fontWeight:700,flexShrink:0,whiteSpace:"nowrap"}}>⚠ Not proficient</span>}
                          {name&&(()=>{
 const infoEntry = libEntries.find(e=>e.title===name&&(e.category==="Shield"||e.category==="Armor"));
 if(!infoEntry) return null;
 const showInfo = char[`_si_${idx}`];
 return (
                              <div style={{position:"relative",flexShrink:0}}>
                                <button style={{fontSize:10,fontWeight:800,width:18,height:18,borderRadius:"50%",border:"1px solid rgba(99,102,241,0.3)",background:"rgba(99,102,241,0.08)",color:"var(--accent)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",lineHeight:1}}
 onClick={e=>{e.stopPropagation();setF(`_si_${idx}`,!showInfo);}}>i</button>
                                {showInfo&&<>
                                  <div style={{position:"fixed",inset:0,zIndex:299}} onClick={()=>setF(`_si_${idx}`,false)}/>
                                  <div style={{position:"fixed",bottom:80,right:16,zIndex:300,background:"var(--card)",border:"1px solid var(--border)",borderRadius:10,padding:"10px 12px",boxShadow:"0 6px 20px rgba(0,0,0,0.18)",width:"min(280px,90vw)",fontSize:11,color:"var(--muted)",lineHeight:1.55}}>
                                    <div style={{fontWeight:700,color:"var(--text)",fontSize:13,marginBottom:6}}>{infoEntry.title}</div>
                                    {infoEntry.desc&&<div style={{color:"var(--text)",marginBottom:6,fontSize:12}}>{infoEntry.desc}</div>}
                                    {infoEntry.notes&&<div>{infoEntry.notes}</div>}
                                  </div>
                                </>}
                              </div>
                            );
                          })()}
                          <button style={{fontSize:13,color:"var(--red)",background:"none",border:"none",cursor:"pointer",padding:"0 4px",lineHeight:1}}
 onClick={()=>setCharSaving(p=>{const a=[...(p.shieldItems||[])];a.splice(idx,1);return {...p,shieldItems:a,shield:a.some(i=>typeof i==="object"?i.equipped:false)};})}>✕</button>
                        </div>
                      );
                    })}
                  </div>}
                </div>
                {/* Weapons */}
                <div className="card-wrap" style={{marginBottom:8,padding:0,overflow:"hidden"}}>
                  <div style={{display:"flex",alignItems:"center",padding:"6px 10px",gap:8,background:"var(--surface)",borderBottom:openGearWeapons?"1px solid var(--divider)":"none",borderRadius:openGearWeapons?"8px 8px 0 0":"8px"}}>
                    <div style={{display:"flex",alignItems:"center",gap:5,cursor:"pointer",flex:1,minWidth:0}} onClick={()=>setOpenGearWeapons(o=>!o)}>
                      <span style={{fontSize:12,flexShrink:0}}>⚔️</span>
                      <span style={{fontSize:10,fontWeight:700,letterSpacing:".07em",textTransform:"uppercase",color:"var(--muted)",flexShrink:0}}>Weapons</span>
                    </div>
                    <button style={{fontSize:11,fontWeight:700,color:"var(--accent)",background:"rgba(99,102,241,0.08)",border:"1px solid rgba(99,102,241,0.25)",borderRadius:6,padding:"1px 8px",cursor:"pointer",flexShrink:0}}
 onClick={e=>{e.stopPropagation();setCharSaving(p=>({...p,weaponItems:[...(p.weaponItems||[]),{name:"",equipped:false}]}));setOpenGearWeapons(true);}}>+ Add</button>
                    <span style={{fontSize:10,color:"var(--muted)",cursor:"pointer",flexShrink:0}} onClick={()=>setOpenGearWeapons(o=>!o)}>{openGearWeapons?"▲":"▼"}</span>
                  </div>
                  {openGearWeapons&&<div style={{padding:"8px 12px",display:"flex",flexDirection:"column",gap:5}}>
                    {(char.weaponItems||[]).length===0&&<div style={{fontSize:11,color:"var(--subtle)",fontStyle:"italic"}}>No weapons added. Tap + Add to add a weapon.</div>}
                    {(char.weaponItems||[]).map((item,idx)=>{
 const name = typeof item==="object"?item.name:item;
 const equipped = typeof item==="object"?item.equipped:false;
 const updateWeapon = (patch) => setCharSaving(p=>{
 const a=[...(p.weaponItems||[])];
 a[idx]={name,equipped,...(typeof a[idx]==="object"?a[idx]:{}), ...patch};
 return {...p,weaponItems:a};
                      });
 const isProficient = !name || (cls?.weaponProf||[]).some(p=>{
 const pl=p.toLowerCase();
 const entry=libEntries.find(e=>e.title===name&&e.category==="Weapon");
 const wTags=(entry?.tags||"").toLowerCase();
 return pl.includes("simple")&&wTags.includes("simple")||pl.includes("martial")&&wTags.includes("martial")||pl.includes(name.toLowerCase());
                      });
 return (
                        <div key={idx} style={{display:"flex",gap:4,alignItems:"center"}}>
                          {(()=>{
 const hand = typeof item==="object"?(item.hand||""):"";
 const nextHand = hand===""?"RH":hand==="RH"?"LH":hand==="LH"?"BH":"";
 const handColor = hand==="RH"?"var(--accent)":hand==="LH"?"#a855f7":hand==="BH"?"var(--amber)":"var(--muted)";
 return (
                              <button title={hand?`Hand: ${hand} — tap to cycle`:"No hand set — tap to cycle"}
 style={{fontSize:9,fontWeight:800,padding:"2px 5px",borderRadius:5,border:"1px solid",flexShrink:0,cursor:"pointer",
 background:hand?"rgba(99,102,241,0.07)":"var(--input)",
 borderColor:hand?"rgba(99,102,241,0.3)":"var(--border)",
 color:handColor,minWidth:24,textAlign:"center"}}
 onClick={()=>updateWeapon({hand:nextHand})}>{hand||"—"}</button>
                            );
                          })()}
                          <button title={equipped?"Equipped":"Not equipped"}
 style={{fontSize:9,fontWeight:800,padding:"2px 5px",borderRadius:5,border:"1px solid",flexShrink:0,cursor:"pointer",
 background:equipped?"rgba(34,197,94,0.12)":"var(--input)",
 borderColor:equipped?"rgba(34,197,94,0.4)":"var(--border)",
 color:equipped?"var(--green)":"var(--muted)"}}
 onClick={()=>updateWeapon({equipped:!equipped})}>EQ</button>
                          <select className="gi gi-sm" style={{flex:"2 1 0",minWidth:0,color:name?"var(--text)":"var(--subtle)",borderColor:name&&!isProficient?"var(--red)":""}}
 value={name||""}
 onChange={e=>{
 const wEntry = libEntries.find(en=>en.title===e.target.value&&en.category==="Weapon");
 const dmg = wEntry?.notes?.match(/Dmg: ([^.]+)/)?.[1]?.trim()||"";
 const wType = (wEntry?.tags||"").toLowerCase().includes("finesse")?"DEX/STR":(wEntry?.tags||"").toLowerCase().includes("ranged")?"DEX":"STR";
 const isTwoHanded = (wEntry?.notes||"").toLowerCase().includes("two-handed");
 updateWeapon({name:e.target.value, damage:dmg, abilityMod:wType, weaponType:wEntry?.notes?.match(/Type: ([^.]+)/)?.[1]?.trim()||"", ...(isTwoHanded?{hand:"BH"}:{})});
                            }}>
                            <option value="">— Pick weapon —</option>
                            {libEntries.filter(e=>e.category==="Weapon").sort((a,b)=>a.title.localeCompare(b.title)).map(e=>(
                              <option key={e.id} value={e.title}>{e.title}</option>
                            ))}
                          </select>
                          {name&&<>
                            {(()=>{
 const wAbil = (typeof item==="object"?item.abilityMod:"")||"STR";
 const wEntry2 = name?libEntries.find(e=>e.title===name&&e.category==="Weapon"):null;
 const tags2 = (wEntry2?.tags||"").toLowerCase();
 const isFinesse = tags2.includes("finesse");
 const isRanged = tags2.includes("ranged");
 const opts = isFinesse
                                ? [{v:"STR",l:"STR"},{v:"DEX",l:"DEX"}]
                                : isRanged
                                  ? [{v:"DEX",l:"DEX"}]
                                  : [{v:"STR",l:"STR"}];
 const bonus = wAbil==="DEX/STR"?Math.max(abilityMod(eff.STR||10),abilityMod(eff.DEX||10)):abilityMod(eff[wAbil]||10);
 return (
                                <div style={{display:"flex",alignItems:"center",gap:2,flexShrink:0}}>
                                  <select className="gi gi-sm" style={{width:44,flexShrink:0,fontSize:10,padding:"2px 2px",color:"var(--accent)"}}
 value={wAbil}
 onChange={e=>updateWeapon({abilityMod:e.target.value})}>
                                    {opts.map(o=><option key={o.v} value={o.v}>{o.l}</option>)}
                                  </select>
                                  <span style={{fontSize:10,fontWeight:700,color:"var(--accent)",fontFamily:"'DM Mono',monospace",flexShrink:0}}>{bonus+pb>=0?"+":""}{bonus+pb}</span>
                                </div>
                              );
                            })()}
                            {(()=>{
 const wEntry = name?libEntries.find(e=>e.title===name&&e.category==="Weapon"):null;
 const dmgRaw = (wEntry?.notes?.match(/Dmg: ([^.]+)/)?.[1]?.trim()||"");
 const dmgParts = dmgRaw.match(/^(\S+)\s+(.+)$/);
 const dmgDice = dmgParts?dmgParts[1]:dmgRaw;
 const dmgTypeRaw = dmgParts?dmgParts[2]:"";
 const dmgType = dmgTypeRaw
                                .replace(/\bslash\b/i,"slashing").replace(/\bslas\b/i,"slashing")
                                .replace(/\bpierc\b/i,"piercing").replace(/\bpier\b/i,"piercing")
                                .replace(/\bbludg\b/i,"bludgeoning").replace(/\bblud\b/i,"bludgeoning")
                                .replace(/\bthund\b/i,"thunder").replace(/\bnecr\b/i,"necrotic")
                                .replace(/\bpois\b/i,"poison").replace(/\bpsych\b/i,"psychic")
                                .replace(/\bradiant\b/i,"radiant").replace(/\bacid\b/i,"acid");
 const rawType = wEntry?.notes?.match(/Type: ([^.]+)/)?.[1]?.trim()||"";
 const typeVal = rawType.toLowerCase().includes("ranged")?"Ranged":rawType?"Melee":"";
 return (
                                <>
                                  <span style={{flexShrink:0,fontSize:10,fontWeight:700,color:"var(--text)",background:"var(--input)",border:"1px solid var(--border)",borderRadius:6,padding:"2px 5px",whiteSpace:"nowrap",fontFamily:"'DM Mono',monospace"}}>{dmgDice||"—"}</span>
                                  <span style={{flex:"0 0 72px",fontSize:10,color:"var(--muted)",background:"var(--input)",border:"1px solid var(--border)",borderRadius:6,padding:"2px 3px",whiteSpace:"nowrap",textAlign:"center",overflow:"hidden",textOverflow:"clip"}}>{dmgType||"—"}</span>
                                  <span style={{flexShrink:0,fontSize:10,color:"var(--accent)",background:"rgba(99,102,241,0.07)",border:"1px solid rgba(99,102,241,0.2)",borderRadius:6,padding:"2px 5px",whiteSpace:"nowrap"}}>{typeVal||"—"}</span>
                                </>
                              );
                            })()}
                          </>}
                          {name&&(typeof item==="object"&&item.source==="class")&&<span style={{fontSize:9,fontWeight:700,color:"var(--accent)",background:"rgba(99,102,241,0.1)",border:"1px solid rgba(99,102,241,0.3)",borderRadius:4,padding:"1px 4px",flexShrink:0}}>class</span>}
                          {name&&!isProficient&&<span style={{fontSize:9,color:"var(--red)",fontWeight:700,flexShrink:0,whiteSpace:"nowrap"}}>⚠ Not proficient</span>}
                          {name&&(()=>{
 const infoEntry = libEntries.find(e=>e.title===name&&e.category==="Weapon");
 if(!infoEntry) return null;
 const showInfo = char[`_wi_${idx}`];
 return (
                              <div style={{position:"relative",flexShrink:0}}>
                                <button style={{fontSize:10,fontWeight:800,width:18,height:18,borderRadius:"50%",border:"1px solid rgba(99,102,241,0.3)",background:"rgba(99,102,241,0.08)",color:"var(--accent)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",lineHeight:1}}
 onClick={e=>{e.stopPropagation();setF(`_wi_${idx}`,!showInfo);}}>i</button>
                                {showInfo&&<>
                                  <div style={{position:"fixed",inset:0,zIndex:299}} onClick={()=>setF(`_wi_${idx}`,false)}/>
                                  <div style={{position:"fixed",bottom:80,right:16,zIndex:300,background:"var(--card)",border:"1px solid var(--border)",borderRadius:10,padding:"10px 12px",boxShadow:"0 6px 20px rgba(0,0,0,0.18)",width:"min(280px,90vw)",fontSize:11,color:"var(--muted)",lineHeight:1.55}}>
                                    <div style={{fontWeight:700,color:"var(--text)",fontSize:13,marginBottom:6}}>{infoEntry.title}</div>
                                    {infoEntry.desc&&<div style={{color:"var(--text)",marginBottom:6,fontSize:12}}>{infoEntry.desc}</div>}
                                    {infoEntry.notes&&<div>{infoEntry.notes}</div>}
                                  </div>
                                </>}
                              </div>
                            );
                          })()}
                          <button style={{fontSize:13,color:"var(--red)",background:"none",border:"none",cursor:"pointer",padding:"0 4px",lineHeight:1}}
 onClick={()=>setCharSaving(p=>{const a=[...(p.weaponItems||[])];a.splice(idx,1);return {...p,weaponItems:a};})}>✕</button>
                        </div>
                      );
                    })}
                  </div>}
                </div>
              </div>
            </div>
            <SecHead icon="🎒" title="Inventory"/>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
              {/* Left column */}
              <div style={{display:"flex",flexDirection:"column",gap:8}}>
                {[
                  {lbl:"Starter Pack", f:"starterPack", ph:"Starting equipment...", icon:"🎒"},
                ].map(({lbl,f,ph,icon})=>(
                  <div key={f} className="card-wrap" style={{padding:"10px 12px",marginBottom:0}}>
                    <div style={{display:"flex",alignItems:"center",gap:5,marginBottom:6}}>
                      <span style={{fontSize:11}}>{icon}</span>
                      <span style={{fontSize:9,fontWeight:700,letterSpacing:".07em",textTransform:"uppercase",color:"var(--muted)"}}>{lbl}</span>
                    </div>
                    <textarea className="gi gi-area" style={{minHeight:48}} value={char[f]||""} onChange={e=>setF(f,e.target.value)} placeholder={ph} rows={2}/>
                  </div>
                ))}
                {/* Gems card */}
                <div className="card-wrap" style={{padding:"10px 12px",marginBottom:0}}>
                  <div style={{display:"flex",alignItems:"center",gap:5,marginBottom:6}}>
                    <span style={{fontSize:11}}>💎</span>
                    <span style={{fontSize:9,fontWeight:700,letterSpacing:".07em",textTransform:"uppercase",color:"var(--muted)",flex:1}}>Gems</span>
                    <button style={{fontSize:11,fontWeight:700,color:"var(--accent)",background:"rgba(99,102,241,0.08)",border:"1px solid rgba(99,102,241,0.25)",borderRadius:6,padding:"1px 8px",cursor:"pointer"}}
 onClick={()=>setCharSaving(p=>({...p,gemItems:[...(p.gemItems||[]),{name:"",qty:1}]}))}>+ Add</button>
                  </div>
                  {(char.gemItems||[]).length===0&&<div style={{fontSize:11,color:"var(--subtle)",fontStyle:"italic"}}>No gems added.</div>}
                  {(char.gemItems||[]).map((item,idx)=>{
 const gemName = typeof item==="object"?item.name:item;
 const qty = typeof item==="object"?(item.qty||1):1;
 const gemEntry = gemName?libEntries.find(e=>e.title===gemName&&e.category==="Gem"):null;
 const updateGem = (patch) => setCharSaving(p=>{
 const a=[...(p.gemItems||[])];
 a[idx]={...(typeof a[idx]==="object"?a[idx]:{name:"",qty:1}), ...patch};
 return {...p,gemItems:a};
                    });
 return (
                      <div key={idx} style={{display:"flex",gap:4,alignItems:"center",marginBottom:4}}>
                        <input type="number" min={1}
 style={{width:28,flexShrink:0,fontSize:11,fontFamily:"'DM Mono',monospace",fontWeight:700,background:"var(--input)",border:"1px solid var(--border)",borderRadius:6,padding:"2px 2px",textAlign:"center",outline:"none",color:"var(--accent)"}}
 value={qty} onChange={e=>updateGem({qty:Math.max(1,Number(e.target.value)||1)})}/>
                        <select className="gi gi-sm" style={{flex:1,color:gemName?"var(--text)":"var(--subtle)",fontSize:gemName&&gemName.length>18?9:gemName&&gemName.length>14?10:12}}
 value={gemName||""}
 onChange={e=>{
 const entry=libEntries.find(en=>en.title===e.target.value&&en.category==="Gem");
 const gpMatch=entry?.notes?.match(/Value:\s*([\d,]+)\s*gp/);
 const gpVal=gpMatch?gpMatch[1].replace(/,/g,""):"";
 updateGem({name:e.target.value, gp:gpVal});
                          }}>
                          <option value="">— Pick gem —</option>
                          {libEntries.filter(e=>e.category==="Gem").sort((a,b)=>a.title.localeCompare(b.title)).map(e=>(
                            <option key={e.id} value={e.title}>{e.title}</option>
                          ))}
                        </select>
                        {gemName&&<div style={{display:"flex",alignItems:"center",gap:2,flexShrink:0}}>
                          <input type="number" min={0}
 style={{width:46,fontSize:11,fontFamily:"'DM Mono',monospace",fontWeight:600,background:"var(--input)",border:"1px solid var(--border)",borderRadius:6,padding:"2px 3px",textAlign:"center",outline:"none",color:"var(--amber)"}}
 value={(()=>{
 const stored = typeof item==="object"?item.gp:"";
 if(stored) return stored;
 const gpMatch = gemEntry?.notes?.match(/Value:\s*([\d,]+)\s*gp/);
 return gpMatch?gpMatch[1].replace(/,/g,""):"";
                            })()}
 onChange={e=>updateGem({gp:e.target.value})}/>
                          <span style={{fontSize:9,fontWeight:700,color:"var(--amber)",flexShrink:0}}>gp</span>
                        </div>}
                        {gemName&&(()=>{
 const showInfo = char[`_gi_${idx}`];
 return (
                            <div style={{position:"relative",flexShrink:0}}>
                              <button style={{fontSize:10,fontWeight:800,width:18,height:18,borderRadius:"50%",border:"1px solid rgba(99,102,241,0.3)",background:"rgba(99,102,241,0.08)",color:"var(--accent)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",lineHeight:1}}
 onClick={e=>{e.stopPropagation();setF(`_gi_${idx}`,!showInfo);}}>i</button>
                              {showInfo&&<>
                                <div style={{position:"fixed",inset:0,zIndex:299}} onClick={()=>setF(`_gi_${idx}`,false)}/>
                                <div style={{position:"fixed",bottom:80,right:16,zIndex:300,background:"var(--card)",border:"1px solid var(--border)",borderRadius:10,padding:"10px 12px",boxShadow:"0 6px 20px rgba(0,0,0,0.18)",width:"min(280px,90vw)",fontSize:11,color:"var(--muted)",lineHeight:1.55}}>
                                  <div style={{fontWeight:700,color:"var(--text)",fontSize:13,marginBottom:6}}>{gemEntry?.title}</div>
                                  {gemEntry?.desc&&<div style={{color:"var(--text)",marginBottom:6,fontSize:12}}>{gemEntry.desc}</div>}
                                  {gemEntry?.notes&&<div>{gemEntry.notes}</div>}
                                </div>
                              </>}
                            </div>
                          );
                        })()}
                        <button style={{fontSize:13,color:"var(--red)",background:"none",border:"none",cursor:"pointer",padding:"0 4px",lineHeight:1}}
 onClick={()=>setCharSaving(p=>{const a=[...(p.gemItems||[])];a.splice(idx,1);return {...p,gemItems:a};})}>✕</button>
                      </div>
                    );
                  })}
                </div>
                {/* Magic Items card */}
                <div className="card-wrap" style={{padding:"10px 12px",marginBottom:0}}>
                  <div style={{display:"flex",alignItems:"center",gap:5,marginBottom:6}}>
                    <span style={{fontSize:11}}>✨</span>
                    <span style={{fontSize:9,fontWeight:700,letterSpacing:".07em",textTransform:"uppercase",color:"var(--muted)",flex:1}}>Magic Items</span>
                    <button style={{fontSize:11,fontWeight:700,color:"var(--accent)",background:"rgba(99,102,241,0.08)",border:"1px solid rgba(99,102,241,0.25)",borderRadius:6,padding:"1px 8px",cursor:"pointer"}}
 onClick={()=>setCharSaving(p=>({...p,magicItemItems:[...(p.magicItemItems||[]),{name:"",qty:1}]}))}>+ Add</button>
                  </div>
                  {(char.magicItemItems||[]).length===0&&<div style={{fontSize:11,color:"var(--subtle)",fontStyle:"italic"}}>No magic items added.</div>}
                  {(char.magicItemItems||[]).map((item,idx)=>{
 const miName = typeof item==="object"?item.name:item;
 const qty = typeof item==="object"?(item.qty||1):1;
 const miEntry = miName?libEntries.find(e=>e.title===miName&&e.category==="Magic Item"):null;
 const updateMi = (patch) => setCharSaving(p=>{
 const a=[...(p.magicItemItems||[])];
 a[idx]={...(typeof a[idx]==="object"?a[idx]:{name:"",qty:1}), ...patch};
 return {...p,magicItemItems:a};
                    });
 return (
                      <div key={idx} style={{display:"flex",gap:4,alignItems:"center",marginBottom:4}}>
                        <input type="number" min={1}
 style={{width:28,flexShrink:0,fontSize:11,fontFamily:"'DM Mono',monospace",fontWeight:700,background:"var(--input)",border:"1px solid var(--border)",borderRadius:6,padding:"2px 2px",textAlign:"center",outline:"none",color:"var(--accent)"}}
 value={qty} onChange={e=>updateMi({qty:Math.max(1,Number(e.target.value)||1)})}/>
                        <select className="gi gi-sm" style={{flex:1,color:miName?"var(--text)":"var(--subtle)",fontSize:miName&&miName.length>18?9:miName&&miName.length>14?10:12}}
 value={miName||""}
 onChange={e=>updateMi({name:e.target.value})}>
                          <option value="">— Pick magic item —</option>
                          {libEntries.filter(e=>e.category==="Magic Item").sort((a,b)=>a.title.localeCompare(b.title)).map(e=>(
                            <option key={e.id} value={e.title}>{e.title}</option>
                          ))}
                        </select>
                        {miName&&(()=>{
 const showInfo = char[`_mii_${idx}`];
 return (
                            <div style={{position:"relative",flexShrink:0}}>
                              <button style={{fontSize:10,fontWeight:800,width:18,height:18,borderRadius:"50%",border:"1px solid rgba(99,102,241,0.3)",background:"rgba(99,102,241,0.08)",color:"var(--accent)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",lineHeight:1}}
 onClick={e=>{e.stopPropagation();setF(`_mii_${idx}`,!showInfo);}}>i</button>
                              {showInfo&&<>
                                <div style={{position:"fixed",inset:0,zIndex:299}} onClick={()=>setF(`_mii_${idx}`,false)}/>
                                <div style={{position:"fixed",bottom:80,right:16,zIndex:300,background:"var(--card)",border:"1px solid var(--border)",borderRadius:10,padding:"10px 12px",boxShadow:"0 6px 20px rgba(0,0,0,0.18)",width:"min(280px,90vw)",fontSize:11,color:"var(--muted)",lineHeight:1.55}}>
                                  <div style={{fontWeight:700,color:"var(--text)",fontSize:13,marginBottom:6}}>{miEntry?.title}</div>
                                  {miEntry?.desc&&<div style={{color:"var(--text)",marginBottom:6,fontSize:12}}>{miEntry.desc}</div>}
                                  {miEntry?.notes&&<div>{miEntry.notes}</div>}
                                </div>
                              </>}
                            </div>
                          );
                        })()}
                        <button style={{fontSize:13,color:"var(--red)",background:"none",border:"none",cursor:"pointer",padding:"0 4px",lineHeight:1}}
 onClick={()=>setCharSaving(p=>{const a=[...(p.magicItemItems||[])];a.splice(idx,1);return {...p,magicItemItems:a};})}>✕</button>
                      </div>
                    );
                  })}
                </div>
                {/* Components card */}
                <div className="card-wrap" style={{padding:"10px 12px",marginBottom:0}}>
                  <div style={{display:"flex",alignItems:"center",gap:5,marginBottom:6}}>
                    <span style={{fontSize:11}}>🧪</span>
                    <span style={{fontSize:9,fontWeight:700,letterSpacing:".07em",textTransform:"uppercase",color:"var(--muted)",flex:1}}>Components</span>
                    <button style={{fontSize:11,fontWeight:700,color:"var(--accent)",background:"rgba(99,102,241,0.08)",border:"1px solid rgba(99,102,241,0.25)",borderRadius:6,padding:"1px 8px",cursor:"pointer"}}
 onClick={()=>setCharSaving(p=>({...p,componentItems:[...(p.componentItems||[]),{name:"",qty:1}]}))}>+ Add</button>
                  </div>
                  {(char.componentItems||[]).length===0&&<div style={{fontSize:11,color:"var(--subtle)",fontStyle:"italic"}}>No components added.</div>}
                  {(char.componentItems||[]).map((item,idx)=>{
 const cpName = typeof item==="object"?item.name:item;
 const qty = typeof item==="object"?(item.qty||1):1;
 const cpEntry = cpName?libEntries.find(e=>e.title===cpName&&e.category==="Component"):null;
 const updateCp = (patch) => setCharSaving(p=>{
 const a=[...(p.componentItems||[])];
 a[idx]={...(typeof a[idx]==="object"?a[idx]:{name:"",qty:1}), ...patch};
 return {...p,componentItems:a};
                    });
 return (
                      <div key={idx} style={{display:"flex",gap:4,alignItems:"center",marginBottom:4}}>
                        <input type="number" min={1}
 style={{width:28,flexShrink:0,fontSize:11,fontFamily:"'DM Mono',monospace",fontWeight:700,background:"var(--input)",border:"1px solid var(--border)",borderRadius:6,padding:"2px 2px",textAlign:"center",outline:"none",color:"var(--accent)"}}
 value={qty} onChange={e=>updateCp({qty:Math.max(1,Number(e.target.value)||1)})}/>
                        <select className="gi gi-sm" style={{flex:1,color:cpName?"var(--text)":"var(--subtle)",fontSize:cpName&&cpName.length>18?9:cpName&&cpName.length>14?10:12}}
 value={cpName||""}
 onChange={e=>updateCp({name:e.target.value})}>
                          <option value="">— Pick component —</option>
                          {libEntries.filter(e=>e.category==="Component").sort((a,b)=>a.title.localeCompare(b.title)).map(e=>(
                            <option key={e.id} value={e.title}>{e.title}</option>
                          ))}
                        </select>
                        {cpName&&(()=>{
 const showInfo = char[`_cpi_${idx}`];
 return (
                            <div style={{position:"relative",flexShrink:0}}>
                              <button style={{fontSize:10,fontWeight:800,width:18,height:18,borderRadius:"50%",border:"1px solid rgba(99,102,241,0.3)",background:"rgba(99,102,241,0.08)",color:"var(--accent)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",lineHeight:1}}
 onClick={e=>{e.stopPropagation();setF(`_cpi_${idx}`,!showInfo);}}>i</button>
                              {showInfo&&<>
                                <div style={{position:"fixed",inset:0,zIndex:299}} onClick={()=>setF(`_cpi_${idx}`,false)}/>
                                <div style={{position:"fixed",bottom:80,right:16,zIndex:300,background:"var(--card)",border:"1px solid var(--border)",borderRadius:10,padding:"10px 12px",boxShadow:"0 6px 20px rgba(0,0,0,0.18)",width:"min(280px,90vw)",fontSize:11,color:"var(--muted)",lineHeight:1.55}}>
                                  <div style={{fontWeight:700,color:"var(--text)",fontSize:13,marginBottom:6}}>{cpEntry?.title}</div>
                                  {cpEntry?.desc&&<div style={{color:"var(--text)",marginBottom:6,fontSize:12}}>{cpEntry.desc}</div>}
                                  {cpEntry?.notes&&<div>{cpEntry.notes}</div>}
                                </div>
                              </>}
                            </div>
                          );
                        })()}
                        <button style={{fontSize:13,color:"var(--red)",background:"none",border:"none",cursor:"pointer",padding:"0 4px",lineHeight:1}}
 onClick={()=>setCharSaving(p=>{const a=[...(p.componentItems||[])];a.splice(idx,1);return {...p,componentItems:a};})}>✕</button>
                      </div>
                    );
                  })}
                </div>
                {[

                  {lbl:"Spell Books", f:"spellbooks", ph:"Spellbooks, tomes...", icon:"📖"},

                ].map(({lbl,f,ph,icon})=>(
                  <div key={f} className="card-wrap" style={{padding:"10px 12px",marginBottom:0}}>
                    <div style={{display:"flex",alignItems:"center",gap:5,marginBottom:6}}>
                      <span style={{fontSize:11}}>{icon}</span>
                      <span style={{fontSize:9,fontWeight:700,letterSpacing:".07em",textTransform:"uppercase",color:"var(--muted)"}}>{lbl}</span>
                    </div>
                    <textarea className="gi gi-area" style={{minHeight:48}} value={char[f]||""} onChange={e=>setF(f,e.target.value)} placeholder={ph} rows={2}/>
                  </div>
                ))}
              </div>
              {/* Right column */}
              <div style={{display:"flex",flexDirection:"column",gap:8}}>
                {/* Tools & Equipment card */}
                <div className="card-wrap" style={{padding:"10px 12px",marginBottom:0}}>
                  <div style={{display:"flex",alignItems:"center",gap:5,marginBottom:6}}>
                    <span style={{fontSize:11}}>🔧</span>
                    <span style={{fontSize:9,fontWeight:700,letterSpacing:".07em",textTransform:"uppercase",color:"var(--muted)",flex:1}}>Tools & Equipment</span>
                    <button style={{fontSize:11,fontWeight:700,color:"var(--accent)",background:"rgba(99,102,241,0.08)",border:"1px solid rgba(99,102,241,0.25)",borderRadius:6,padding:"1px 8px",cursor:"pointer"}}
 onClick={()=>setCharSaving(p=>({...p,toolItems:[...(p.toolItems||[]),{name:"",qty:1}]}))}>+ Add</button>
                  </div>
                  {(char.toolItems||[]).length===0&&<div style={{fontSize:11,color:"var(--subtle)",fontStyle:"italic"}}>No tools or equipment added.</div>}
                  {(char.toolItems||[]).map((item,idx)=>{
 const tlName = typeof item==="object"?item.name:item;
 const qty = typeof item==="object"?(item.qty||1):1;
 const tlEntry = tlName?libEntries.find(e=>e.title===tlName&&(e.category==="Tool"||e.category==="Equipment")):null;
 const updateTl = (patch) => setCharSaving(p=>{
 const a=[...(p.toolItems||[])];
 a[idx]={...(typeof a[idx]==="object"?a[idx]:{name:"",qty:1}), ...patch};
 return {...p,toolItems:a};
                    });
 return (
                      <div key={idx} style={{display:"flex",gap:4,alignItems:"center",marginBottom:4}}>
                        <input type="number" min={1}
 style={{width:28,flexShrink:0,fontSize:11,fontFamily:"'DM Mono',monospace",fontWeight:700,background:"var(--input)",border:"1px solid var(--border)",borderRadius:6,padding:"2px 2px",textAlign:"center",outline:"none",color:"var(--accent)"}}
 value={qty} onChange={e=>updateTl({qty:Math.max(1,Number(e.target.value)||1)})}/>
                        <select className="gi gi-sm" style={{flex:1,color:tlName?"var(--text)":"var(--subtle)",fontSize:tlName&&tlName.length>18?9:tlName&&tlName.length>14?10:12}}
 value={tlName||""}
 onChange={e=>updateTl({name:e.target.value})}>
                          <option value="">— Pick tool or equipment —</option>
                          <optgroup label="Tools">
                            {libEntries.filter(e=>e.category==="Tool").sort((a,b)=>a.title.localeCompare(b.title)).map(e=>(
                              <option key={e.id} value={e.title}>{e.title}</option>
                            ))}
                          </optgroup>
                          <optgroup label="Equipment">
                            {libEntries.filter(e=>e.category==="Equipment").sort((a,b)=>a.title.localeCompare(b.title)).map(e=>(
                              <option key={e.id} value={e.title}>{e.title}</option>
                            ))}
                          </optgroup>
                        </select>
                        {tlName&&(()=>{
 const showInfo = char[`_tli_${idx}`];
 return (
                            <div style={{position:"relative",flexShrink:0}}>
                              <button style={{fontSize:10,fontWeight:800,width:18,height:18,borderRadius:"50%",border:"1px solid rgba(99,102,241,0.3)",background:"rgba(99,102,241,0.08)",color:"var(--accent)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",lineHeight:1}}
 onClick={e=>{e.stopPropagation();setF(`_tli_${idx}`,!showInfo);}}>i</button>
                              {showInfo&&<>
                                <div style={{position:"fixed",inset:0,zIndex:299}} onClick={()=>setF(`_tli_${idx}`,false)}/>
                                <div style={{position:"fixed",bottom:80,right:16,zIndex:300,background:"var(--card)",border:"1px solid var(--border)",borderRadius:10,padding:"10px 12px",boxShadow:"0 6px 20px rgba(0,0,0,0.18)",width:"min(280px,90vw)",fontSize:11,color:"var(--muted)",lineHeight:1.55}}>
                                  <div style={{fontWeight:700,color:"var(--text)",fontSize:13,marginBottom:6}}>{tlEntry?.title}</div>
                                  {tlEntry?.desc&&<div style={{color:"var(--text)",marginBottom:6,fontSize:12}}>{tlEntry.desc}</div>}
                                  {tlEntry?.notes&&<div>{tlEntry.notes}</div>}
                                </div>
                              </>}
                            </div>
                          );
                        })()}
                        <button style={{fontSize:13,color:"var(--red)",background:"none",border:"none",cursor:"pointer",padding:"0 4px",lineHeight:1}}
 onClick={()=>setCharSaving(p=>{const a=[...(p.toolItems||[])];a.splice(idx,1);return {...p,toolItems:a};})}>✕</button>
                      </div>
                    );
                  })}
                </div>
                {/* Jewelry card */}
                <div className="card-wrap" style={{padding:"10px 12px",marginBottom:0}}>
                  <div style={{display:"flex",alignItems:"center",gap:5,marginBottom:6}}>
                    <span style={{fontSize:11}}>💍</span>
                    <span style={{fontSize:9,fontWeight:700,letterSpacing:".07em",textTransform:"uppercase",color:"var(--muted)",flex:1}}>Jewelry</span>
                    <button style={{fontSize:11,fontWeight:700,color:"var(--accent)",background:"rgba(99,102,241,0.08)",border:"1px solid rgba(99,102,241,0.25)",borderRadius:6,padding:"1px 8px",cursor:"pointer"}}
 onClick={()=>setCharSaving(p=>({...p,jewelryItems:[...(p.jewelryItems||[]),{name:"",qty:1}]}))}>+ Add</button>
                  </div>
                  {(char.jewelryItems||[]).length===0&&<div style={{fontSize:11,color:"var(--subtle)",fontStyle:"italic"}}>No jewelry added.</div>}
                  {(char.jewelryItems||[]).map((item,idx)=>{
 const jwlName = typeof item==="object"?item.name:item;
 const qty = typeof item==="object"?(item.qty||1):1;
 const jwlEntry = jwlName?libEntries.find(e=>e.title===jwlName&&e.category==="Jewelry"):null;
 const updateJwl = (patch) => setCharSaving(p=>{
 const a=[...(p.jewelryItems||[])];
 a[idx]={...(typeof a[idx]==="object"?a[idx]:{name:"",qty:1}), ...patch};
 return {...p,jewelryItems:a};
                    });
 return (
                      <div key={idx} style={{display:"flex",gap:4,alignItems:"center",marginBottom:4}}>
                        <input type="number" min={1}
 style={{width:28,flexShrink:0,fontSize:11,fontFamily:"'DM Mono',monospace",fontWeight:700,background:"var(--input)",border:"1px solid var(--border)",borderRadius:6,padding:"2px 2px",textAlign:"center",outline:"none",color:"var(--accent)"}}
 value={qty} onChange={e=>updateJwl({qty:Math.max(1,Number(e.target.value)||1)})}/>
                        <select className="gi gi-sm" style={{flex:1,color:jwlName?"var(--text)":"var(--subtle)",fontSize:jwlName&&jwlName.length>18?9:jwlName&&jwlName.length>14?10:12}}
 value={jwlName||""}
 onChange={e=>updateJwl({name:e.target.value})}>
                          <option value="">— Pick jewelry —</option>
                          {libEntries.filter(e=>e.category==="Jewelry").sort((a,b)=>a.title.localeCompare(b.title)).map(e=>(
                            <option key={e.id} value={e.title}>{e.title}</option>
                          ))}
                        </select>
                        {jwlName&&(()=>{
 const showInfo = char[`_jwi_${idx}`];
 return (
                            <div style={{position:"relative",flexShrink:0}}>
                              <button style={{fontSize:10,fontWeight:800,width:18,height:18,borderRadius:"50%",border:"1px solid rgba(99,102,241,0.3)",background:"rgba(99,102,241,0.08)",color:"var(--accent)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",lineHeight:1}}
 onClick={e=>{e.stopPropagation();setF(`_jwi_${idx}`,!showInfo);}}>i</button>
                              {showInfo&&<>
                                <div style={{position:"fixed",inset:0,zIndex:299}} onClick={()=>setF(`_jwi_${idx}`,false)}/>
                                <div style={{position:"fixed",bottom:80,right:16,zIndex:300,background:"var(--card)",border:"1px solid var(--border)",borderRadius:10,padding:"10px 12px",boxShadow:"0 6px 20px rgba(0,0,0,0.18)",width:"min(280px,90vw)",fontSize:11,color:"var(--muted)",lineHeight:1.55}}>
                                  <div style={{fontWeight:700,color:"var(--text)",fontSize:13,marginBottom:6}}>{jwlEntry?.title}</div>
                                  {jwlEntry?.desc&&<div style={{color:"var(--text)",marginBottom:6,fontSize:12}}>{jwlEntry.desc}</div>}
                                  {jwlEntry?.notes&&<div>{jwlEntry.notes}</div>}
                                </div>
                              </>}
                            </div>
                          );
                        })()}
                        <button style={{fontSize:13,color:"var(--red)",background:"none",border:"none",cursor:"pointer",padding:"0 4px",lineHeight:1}}
 onClick={()=>setCharSaving(p=>{const a=[...(p.jewelryItems||[])];a.splice(idx,1);return {...p,jewelryItems:a};})}>✕</button>
                      </div>
                    );
                  })}
                </div>
                {/* Wands & Rods card */}
                <div className="card-wrap" style={{padding:"10px 12px",marginBottom:0}}>
                  <div style={{display:"flex",alignItems:"center",gap:5,marginBottom:6}}>
                    <span style={{fontSize:11}}>🪄</span>
                    <span style={{fontSize:9,fontWeight:700,letterSpacing:".07em",textTransform:"uppercase",color:"var(--muted)",flex:1}}>Wands & Rods</span>
                    <button style={{fontSize:11,fontWeight:700,color:"var(--accent)",background:"rgba(99,102,241,0.08)",border:"1px solid rgba(99,102,241,0.25)",borderRadius:6,padding:"1px 8px",cursor:"pointer"}}
 onClick={()=>setCharSaving(p=>({...p,wandItems:[...(p.wandItems||[]),{name:"",qty:1}]}))}>+ Add</button>
                  </div>
                  {(char.wandItems||[]).length===0&&<div style={{fontSize:11,color:"var(--subtle)",fontStyle:"italic"}}>No wands or rods added.</div>}
                  {(char.wandItems||[]).map((item,idx)=>{
 const wdName = typeof item==="object"?item.name:item;
 const qty = typeof item==="object"?(item.qty||1):1;
 const wdEntry = wdName?libEntries.find(e=>e.title===wdName&&e.category==="Wand & Rod"):null;
 const updateWd = (patch) => setCharSaving(p=>{
 const a=[...(p.wandItems||[])];
 a[idx]={...(typeof a[idx]==="object"?a[idx]:{name:"",qty:1}), ...patch};
 return {...p,wandItems:a};
                    });
 return (
                      <div key={idx} style={{display:"flex",gap:4,alignItems:"center",marginBottom:4}}>
                        <input type="number" min={1}
 style={{width:28,flexShrink:0,fontSize:11,fontFamily:"'DM Mono',monospace",fontWeight:700,background:"var(--input)",border:"1px solid var(--border)",borderRadius:6,padding:"2px 2px",textAlign:"center",outline:"none",color:"var(--accent)"}}
 value={qty} onChange={e=>updateWd({qty:Math.max(1,Number(e.target.value)||1)})}/>
                        <select className="gi gi-sm" style={{flex:1,color:wdName?"var(--text)":"var(--subtle)",fontSize:wdName&&wdName.length>18?9:wdName&&wdName.length>14?10:12}}
 value={wdName||""}
 onChange={e=>updateWd({name:e.target.value})}>
                          <option value="">— Pick wand or rod —</option>
                          {libEntries.filter(e=>e.category==="Wand & Rod").sort((a,b)=>a.title.localeCompare(b.title)).map(e=>(
                            <option key={e.id} value={e.title}>{e.title}</option>
                          ))}
                        </select>
                        {wdName&&(()=>{
 const showInfo = char[`_wdi_${idx}`];
 return (
                            <div style={{position:"relative",flexShrink:0}}>
                              <button style={{fontSize:10,fontWeight:800,width:18,height:18,borderRadius:"50%",border:"1px solid rgba(99,102,241,0.3)",background:"rgba(99,102,241,0.08)",color:"var(--accent)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",lineHeight:1}}
 onClick={e=>{e.stopPropagation();setF(`_wdi_${idx}`,!showInfo);}}>i</button>
                              {showInfo&&<>
                                <div style={{position:"fixed",inset:0,zIndex:299}} onClick={()=>setF(`_wdi_${idx}`,false)}/>
                                <div style={{position:"fixed",bottom:80,right:16,zIndex:300,background:"var(--card)",border:"1px solid var(--border)",borderRadius:10,padding:"10px 12px",boxShadow:"0 6px 20px rgba(0,0,0,0.18)",width:"min(280px,90vw)",fontSize:11,color:"var(--muted)",lineHeight:1.55}}>
                                  <div style={{fontWeight:700,color:"var(--text)",fontSize:13,marginBottom:6}}>{wdEntry?.title}</div>
                                  {wdEntry?.desc&&<div style={{color:"var(--text)",marginBottom:6,fontSize:12}}>{wdEntry.desc}</div>}
                                  {wdEntry?.notes&&<div>{wdEntry.notes}</div>}
                                </div>
                              </>}
                            </div>
                          );
                        })()}
                        <button style={{fontSize:13,color:"var(--red)",background:"none",border:"none",cursor:"pointer",padding:"0 4px",lineHeight:1}}
 onClick={()=>setCharSaving(p=>{const a=[...(p.wandItems||[])];a.splice(idx,1);return {...p,wandItems:a};})}>✕</button>
                      </div>
                    );
                  })}
                </div>
                {/* Potions card */}
                <div className="card-wrap" style={{padding:"10px 12px",marginBottom:0}}>
                  <div style={{display:"flex",alignItems:"center",gap:5,marginBottom:6}}>
                    <span style={{fontSize:11}}>⚗️</span>
                    <span style={{fontSize:9,fontWeight:700,letterSpacing:".07em",textTransform:"uppercase",color:"var(--muted)",flex:1}}>Potions</span>
                    <button style={{fontSize:11,fontWeight:700,color:"var(--accent)",background:"rgba(99,102,241,0.08)",border:"1px solid rgba(99,102,241,0.25)",borderRadius:6,padding:"1px 8px",cursor:"pointer"}}
 onClick={()=>setCharSaving(p=>({...p,potionItems:[...(p.potionItems||[]),{name:"",qty:1}]}))}>+ Add</button>
                  </div>
                  {(char.potionItems||[]).length===0&&<div style={{fontSize:11,color:"var(--subtle)",fontStyle:"italic"}}>No potions added.</div>}
                  {(char.potionItems||[]).map((item,idx)=>{
 const potName = typeof item==="object"?item.name:item;
 const qty = typeof item==="object"?(item.qty||1):1;
 const potEntry = potName?libEntries.find(e=>e.title===potName&&e.category==="Potion"):null;
 const updatePot = (patch) => setCharSaving(p=>{
 const a=[...(p.potionItems||[])];
 a[idx]={...(typeof a[idx]==="object"?a[idx]:{name:"",qty:1}), ...patch};
 return {...p,potionItems:a};
                    });
 return (
                      <div key={idx} style={{display:"flex",gap:4,alignItems:"center",marginBottom:4}}>
                        <input type="number" min={1}
 style={{width:28,flexShrink:0,fontSize:11,fontFamily:"'DM Mono',monospace",fontWeight:700,background:"var(--input)",border:"1px solid var(--border)",borderRadius:6,padding:"2px 2px",textAlign:"center",outline:"none",color:"var(--accent)"}}
 value={qty} onChange={e=>updatePot({qty:Math.max(1,Number(e.target.value)||1)})}/>
                        <select className="gi gi-sm" style={{flex:1,color:potName?"var(--text)":"var(--subtle)",fontSize:potName&&potName.length>18?9:potName&&potName.length>14?10:12}}
 value={potName||""}
 onChange={e=>{
 const entry=libEntries.find(en=>en.title===e.target.value&&en.category==="Potion");
 updatePot({name:e.target.value});
                          }}>
                          <option value="">— Pick potion —</option>
                          {libEntries.filter(e=>e.category==="Potion").sort((a,b)=>a.title.localeCompare(b.title)).map(e=>(
                            <option key={e.id} value={e.title}>{e.title}</option>
                          ))}
                        </select>
                        {potName&&(()=>{
 const showInfo = char[`_pi_${idx}`];
 return (
                            <div style={{position:"relative",flexShrink:0}}>
                              <button style={{fontSize:10,fontWeight:800,width:18,height:18,borderRadius:"50%",border:"1px solid rgba(99,102,241,0.3)",background:"rgba(99,102,241,0.08)",color:"var(--accent)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",lineHeight:1}}
 onClick={e=>{e.stopPropagation();setF(`_pi_${idx}`,!showInfo);}}>i</button>
                              {showInfo&&<>
                                <div style={{position:"fixed",inset:0,zIndex:299}} onClick={()=>setF(`_pi_${idx}`,false)}/>
                                <div style={{position:"fixed",bottom:80,right:16,zIndex:300,background:"var(--card)",border:"1px solid var(--border)",borderRadius:10,padding:"10px 12px",boxShadow:"0 6px 20px rgba(0,0,0,0.18)",width:"min(280px,90vw)",fontSize:11,color:"var(--muted)",lineHeight:1.55}}>
                                  <div style={{fontWeight:700,color:"var(--text)",fontSize:13,marginBottom:6}}>{potEntry?.title}</div>
                                  {potEntry?.desc&&<div style={{color:"var(--text)",marginBottom:6,fontSize:12}}>{potEntry.desc}</div>}
                                  {potEntry?.notes&&<div>{potEntry.notes}</div>}
                                </div>
                              </>}
                            </div>
                          );
                        })()}
                        <button style={{fontSize:13,color:"var(--red)",background:"none",border:"none",cursor:"pointer",padding:"0 4px",lineHeight:1}}
 onClick={()=>setCharSaving(p=>{const a=[...(p.potionItems||[])];a.splice(idx,1);return {...p,potionItems:a};})}>✕</button>
                      </div>
                    );
                  })}
                </div>
                {/* Scrolls card */}
                <div className="card-wrap" style={{padding:"10px 12px",marginBottom:0}}>
                  <div style={{display:"flex",alignItems:"center",gap:5,marginBottom:6}}>
                    <span style={{fontSize:11}}>📜</span>
                    <span style={{fontSize:9,fontWeight:700,letterSpacing:".07em",textTransform:"uppercase",color:"var(--muted)",flex:1}}>Scrolls</span>
                    <button style={{fontSize:11,fontWeight:700,color:"var(--accent)",background:"rgba(99,102,241,0.08)",border:"1px solid rgba(99,102,241,0.25)",borderRadius:6,padding:"1px 8px",cursor:"pointer"}}
 onClick={()=>setCharSaving(p=>({...p,scrollItems:[...(p.scrollItems||[]),{name:"",qty:1}]}))}>+ Add</button>
                  </div>
                  {(char.scrollItems||[]).length===0&&<div style={{fontSize:11,color:"var(--subtle)",fontStyle:"italic"}}>No scrolls added.</div>}
                  {(char.scrollItems||[]).map((item,idx)=>{
 const scName = typeof item==="object"?item.name:item;
 const qty = typeof item==="object"?(item.qty||1):1;
 const scEntry = scName?libEntries.find(e=>e.title===scName&&e.category==="Scroll"):null;
 const updateSc = (patch) => setCharSaving(p=>{
 const a=[...(p.scrollItems||[])];
 a[idx]={...(typeof a[idx]==="object"?a[idx]:{name:"",qty:1}), ...patch};
 return {...p,scrollItems:a};
                    });
 return (
                      <div key={idx} style={{display:"flex",gap:4,alignItems:"center",marginBottom:4}}>
                        <input type="number" min={1}
 style={{width:28,flexShrink:0,fontSize:11,fontFamily:"'DM Mono',monospace",fontWeight:700,background:"var(--input)",border:"1px solid var(--border)",borderRadius:6,padding:"2px 2px",textAlign:"center",outline:"none",color:"var(--accent)"}}
 value={qty} onChange={e=>updateSc({qty:Math.max(1,Number(e.target.value)||1)})}/>
                        <select className="gi gi-sm" style={{flex:1,color:scName?"var(--text)":"var(--subtle)",fontSize:scName&&scName.length>18?9:scName&&scName.length>14?10:12}}
 value={scName||""}
 onChange={e=>updateSc({name:e.target.value})}>
                          <option value="">— Pick scroll —</option>
                          {libEntries.filter(e=>e.category==="Scroll").sort((a,b)=>a.title.localeCompare(b.title)).map(e=>(
                            <option key={e.id} value={e.title}>{e.title}</option>
                          ))}
                        </select>
                        {scName&&(()=>{
 const showInfo = char[`_sci_${idx}`];
 return (
                            <div style={{position:"relative",flexShrink:0}}>
                              <button style={{fontSize:10,fontWeight:800,width:18,height:18,borderRadius:"50%",border:"1px solid rgba(99,102,241,0.3)",background:"rgba(99,102,241,0.08)",color:"var(--accent)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",lineHeight:1}}
 onClick={e=>{e.stopPropagation();setF(`_sci_${idx}`,!showInfo);}}>i</button>
                              {showInfo&&<>
                                <div style={{position:"fixed",inset:0,zIndex:299}} onClick={()=>setF(`_sci_${idx}`,false)}/>
                                <div style={{position:"fixed",bottom:80,right:16,zIndex:300,background:"var(--card)",border:"1px solid var(--border)",borderRadius:10,padding:"10px 12px",boxShadow:"0 6px 20px rgba(0,0,0,0.18)",width:"min(280px,90vw)",fontSize:11,color:"var(--muted)",lineHeight:1.55}}>
                                  <div style={{fontWeight:700,color:"var(--text)",fontSize:13,marginBottom:6}}>{scEntry?.title}</div>
                                  {scEntry?.desc&&<div style={{color:"var(--text)",marginBottom:6,fontSize:12}}>{scEntry.desc}</div>}
                                  {scEntry?.notes&&<div>{scEntry.notes}</div>}
                                </div>
                              </>}
                            </div>
                          );
                        })()}
                        <button style={{fontSize:13,color:"var(--red)",background:"none",border:"none",cursor:"pointer",padding:"0 4px",lineHeight:1}}
 onClick={()=>setCharSaving(p=>{const a=[...(p.scrollItems||[])];a.splice(idx,1);return {...p,scrollItems:a};})}>✕</button>
                      </div>
                    );
                  })}
                </div>
                {[

                ].map(({lbl,f,ph,icon})=>(
                  <div key={f} className="card-wrap" style={{padding:"10px 12px",marginBottom:0}}>
                    <div style={{display:"flex",alignItems:"center",gap:5,marginBottom:6}}>
                      <span style={{fontSize:11}}>{icon}</span>
                      <span style={{fontSize:9,fontWeight:700,letterSpacing:".07em",textTransform:"uppercase",color:"var(--muted)"}}>{lbl}</span>
                    </div>
                    <textarea className="gi gi-area" style={{minHeight:48}} value={char[f]||""} onChange={e=>setF(f,e.target.value)} placeholder={ph} rows={2}/>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* NOTES */}
        {tab==="notes" && (
          <div className="panel">
            <div className="two-col">
              <div>
                <SecHead icon="✒" title="Session Notes"/>
                <Card>
                  <textarea className="gi gi-area" style={{minHeight:160}} value={char.notes} onChange={e=>setF("notes",e.target.value)} placeholder="Quest progress, NPCs met, items found, plot threads..."/>
                </Card>
              </div>
              <div>
                <SecHead icon="⚜" title="Character Background"/>
                <Card>
                  {[
                    {lbl:"Personality Traits",f:"personalityTraits",ph:"How does your character act?"},
                    {lbl:"Ideals", f:"ideals", ph:"What principles drive them?"},
                    {lbl:"Bonds", f:"bonds", ph:"Who or what do they care about?"},
                    {lbl:"Flaws", f:"flaws", ph:"What are their weaknesses?"},
                  ].map(({lbl,f,ph})=>(
                    <div key={f} style={{marginBottom:10}}>
                      <Lbl>{lbl}</Lbl>
                      <textarea className="gi gi-area" value={char[f]} onChange={e=>setF(f,e.target.value)} placeholder={ph} rows={2}/>
                    </div>
                  ))}
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* PHOTOS */}
        {tab==="photos" && (
          <div className="panel">
            <SecHead icon="🖼" title="Character Photos"/>
            <input ref={photoRef} type="file" accept="image/*" multiple style={{display:"none"}}
 onChange={e=>{
 const files=Array.from(e.target.files);
 files.forEach(file=>{
 const r=new FileReader();
 r.onload=ev=>setCharSaving(p=>({...p,photos:[...(p.photos||[]),ev.target.result]}));
 r.readAsDataURL(file);
                });
              }}/>
            <div className="photo-grid">
              {(char.photos||[]).map((src,i)=>(
                <div key={i} className="photo-item">
                  <img src={src} alt={`Character ${i+1}`} style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:10}}/>
                  <button className="photo-del" onClick={()=>setCharSaving(p=>({...p,photos:p.photos.filter((_,j)=>j!==i)}))}>x</button>
                </div>
              ))}
              <div className="photo-add" onClick={()=>photoRef.current?.click()}>
                <div style={{fontSize:32,color:"var(--subtle)"}}>+</div>
                <div style={{fontSize:12,color:"var(--subtle)",marginTop:4}}>Add Photo</div>
              </div>
            </div>
          </div>
        )}

        {/* ROUNDS */}
        {tab==="rounds" && (
          <div className="panel">
            <div className="two-col">
              <div>
                <SecHead icon="⚡" title="Conditions"/>
                <Card>
                  <div className="condition-grid">
                    {CONDITIONS.map(c=>{
 const on = (char.conditions||[]).includes(c);
 return (
                        <div key={c} className={`condition-chip ${on?"condition-on":""}`}
 onClick={()=>tog("conditions",c)}>{c}</div>
                      );
                    })}
                  </div>
                </Card>

                <SecHead icon="🎯" title="Concentration"/>
                <Card>
                  <Lbl>Concentrating On</Lbl>
                  <input className="gi" value={char.concentrating} onChange={e=>setF("concentrating",e.target.value)} placeholder="Spell name..."/>
                </Card>

                <SecHead icon="🔥" title="Rage / Resources"/>
                <Card>
                  <div className="shield-row" onClick={()=>setF("rageActive",!char.rageActive)} style={{marginBottom:12}}>
                    <div className={`shield-chk ${char.rageActive?"shield-on":""}`} style={{borderColor:"var(--red)"}}>{char.rageActive?"✓":""}</div>
                    <span style={{color:char.rageActive?"var(--red)":"var(--text)",fontWeight:char.rageActive?700:400}}>Rage Active</span>
                  </div>
                  <Lbl>Rounds Raged</Lbl>
                  <input className="gi" type="number" value={char.rageRounds} onChange={e=>setF("rageRounds",Number(e.target.value)||0)} style={{width:80}}/>
                </Card>
              </div>

              <div>
                <SecHead icon="🃏" title="Actions This Turn"/>
                <Card>
                  {[
                    {lbl:"Bonus Action Used",f:"bonusActions",ph:"e.g. Healing Word, Bardic Inspiration..."},
                    {lbl:"Reaction Used", f:"reactions", ph:"e.g. Shield, Opportunity Attack..."},
                    {lbl:"Legendary Actions",f:"legendaryActions",ph:"(if applicable)"},
                  ].map(({lbl,f,ph})=>(
                    <div key={f} style={{marginBottom:10}}>
                      <Lbl>{lbl}</Lbl>
                      <textarea className="gi gi-area" value={char[f]} onChange={e=>setF(f,e.target.value)} placeholder={ph} rows={2}/>
                    </div>
                  ))}
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* COMPANION */}
        {tab==="companion" && (
          <div className="panel">
            <div className="two-col">
              <div>
                <SecHead icon="🐾" title="Companion Info"/>
                <Card>
                  {[
                    {lbl:"Name",f:"companionName",ph:"Familiar, pet, steed..."},
                    {lbl:"Type / CR",f:"companionType",ph:"Wolf, Owl, Raven..."},
                  ].map(({lbl,f,ph})=>(
                    <div key={f} style={{marginBottom:8}}>
                      <Lbl>{lbl}</Lbl>
                      <input className="gi" value={char[f]} onChange={e=>setF(f,e.target.value)} placeholder={ph}/>
                    </div>
                  ))}
                  <div className="three-col" style={{marginTop:8}}>
                    <div><Lbl>AC</Lbl><input className="gi gi-center" type="number" value={char.companionAC} onChange={e=>setF("companionAC",e.target.value)}/></div>
                    <div><Lbl>HP</Lbl><input className="gi gi-center" type="number" value={char.companionHP} onChange={e=>setF("companionHP",e.target.value)}/></div>
                    <div><Lbl>Speed</Lbl><input className="gi gi-center" type="number" value={char.companionSpeed} onChange={e=>setF("companionSpeed",e.target.value)}/></div>
                  </div>
                </Card>

                <SecHead icon="◈" title="Companion Ability Scores"/>
                <Card>
                  <div className="ab-row" style={{gridTemplateColumns:"repeat(6,1fr)"}}>
                    {ABILITY_KEYS.map(k=>(
                      <div key={k} className="ab-box">
                        <div className="ab-name">{k}</div>
                        <div className="ab-mod">{fmt(abilityMod(char[`companion${k}`]||10))}</div>
                        <input className="ab-score" type="number" value={char[`companion${k}`]||10} min={1} max={30}
 onChange={e=>setF(`companion${k}`,Number(e.target.value)||10)}/>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              <div>
                <SecHead icon="⚔" title="Companion Attacks"/>
                <Card>
                  <div className="atk-tbl-head"><span>Name</span><span>Atk</span><span>Damage</span></div>
                  {(char.companionAttacks||[]).map((a,i)=>(
                    <div key={i} className="atk-tbl-row">
                      <input className="gi gi-sm" value={a.name} onChange={e=>setNested("companionAttacks",i,"name",e.target.value)} placeholder="Bite"/>
                      <input className="gi gi-sm gi-center" value={a.atk} onChange={e=>setNested("companionAttacks",i,"atk",e.target.value)} placeholder="+4"/>
                      <input className="gi gi-sm" value={a.dmg} onChange={e=>setNested("companionAttacks",i,"dmg",e.target.value)} placeholder="1d6+2"/>
                    </div>
                  ))}
                  <button className="add-row-btn" onClick={()=>setCharSaving(p=>({...p,companionAttacks:[...p.companionAttacks,{name:"",atk:"",dmg:""}]}))}>+ Add Attack</button>
                </Card>

                <SecHead icon="✒" title="Companion Notes"/>
                <Card>
                  <textarea className="gi gi-area" style={{minHeight:120}} value={char.companionNotes} onChange={e=>setF("companionNotes",e.target.value)} placeholder="Special abilities, traits, backstory..."/>
                </Card>
              </div>
            </div>
          </div>
        )}

      </div>{/* end tab-body */}

      {/* SKILL ROLL POPOVER */}
      {skillRoll && (
        <>
          <div className="dt-popover-backdrop" onClick={()=>{if(skillRoll.label==="Initiative")setTab("rounds");setSkillRoll(null);}}/>
          <div className="dt-popover dt-popover-slim">
            <div className="dt-wrap">
              <div className="dt-hdr">
                <div className="dt-title">🎲 {skillRoll.label}</div>
                <button className="lp-close" onClick={()=>{if(skillRoll.label==="Initiative")setTab("rounds");setSkillRoll(null);}}>✕</button>
              </div>
              <div className="dt-body" style={{alignItems:"center",textAlign:"center",gap:14}}>
                {/* Adv/Dis badge */}
                {skillRoll.isAdv && <div className="skill-roll-tag roll-crit-tag" style={{background:"rgba(34,197,94,0.1)",borderColor:"rgba(34,197,94,0.3)",color:"var(--green)"}}>Advantage</div>}
                {skillRoll.isDis && <div className="skill-roll-tag roll-fail-tag" style={{background:"rgba(239,68,68,0.1)",borderColor:"rgba(239,68,68,0.3)",color:"var(--red)"}}>Disadvantage</div>}

                {/* Dice display */}
                {skillRoll.r2!=null ? (
                  <div style={{display:"flex",gap:8,alignItems:"center",justifyContent:"center"}}>
                    {[skillRoll.r1, skillRoll.r2].map((r,i)=>{
 const isChosen = r===skillRoll.roll && !(skillRoll.r1===skillRoll.r2);
 return (
                        <div key={i} style={{opacity: isChosen||skillRoll.r1===skillRoll.r2 ? 1 : 0.35}}>
                          <DieSVG sides={skillRoll.sides||20} roll={r} size={isChosen ? 80 : 64}
 color={skillRoll.isCrit&&isChosen?"green":skillRoll.isFail&&isChosen?"red":isChosen?diceColor:"black"}/>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div>
                    <DieSVG sides={skillRoll.sides||20} roll={skillRoll.roll} size={96}
 color={skillRoll.isCrit?"green":skillRoll.isFail?"red":diceColor}/>
                  </div>
                )}

                {/* Breakdown */}
                <div className="dt-results-breakdown" style={{fontSize:13}}>
                  {skillRoll.roll} {skillRoll.bonus>=0?`+ ${skillRoll.bonus}`:`- ${Math.abs(skillRoll.bonus)}`} =
                </div>
                {/* Total */}
                <div className="dt-results-total"
 style={{color:skillRoll.isCrit?"var(--green)":skillRoll.isFail?"var(--red)":"var(--text)"}}>
                  {skillRoll.total}
                </div>
                {skillRoll.isCrit&&<div className="skill-roll-tag roll-crit-tag">{skillRoll.sides===4?"MAX ROLL!":"NATURAL 20 - CRITICAL!"}</div>}
                {skillRoll.isFail&&<div className="skill-roll-tag roll-fail-tag">{skillRoll.sides===4?"MIN ROLL":"NATURAL 1"}</div>}
                {/* Reroll */}
                <button className="dt-reroll-btn" onClick={()=>{
 const sides = skillRoll.sides||20;
 const isAdv = skillRoll.isAdv; const isDis = skillRoll.isDis;
 const r1=Math.floor(Math.random()*sides)+1;
 const r2=(isAdv||isDis)?Math.floor(Math.random()*sides)+1:null;
 const roll=isAdv?Math.max(r1,r2??r1):isDis?Math.min(r1,r2??r1):r1;
 const total=roll+skillRoll.bonus;
 setSkillRoll({...skillRoll,roll,total,r1,r2,isCrit:roll===sides,isFail:roll===1});
                }}>↺ Reroll</button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* DICE TRAY POPOVER */}
      {showDice && (
        <>
          <div className="dt-popover-backdrop" onClick={()=>setShowDice(false)}/>
          <div className="dt-popover">
            <DiceTrayPanel onClose={()=>setShowDice(false)} diceColor={diceColor} setDiceColor={setDiceColor}/>
          </div>
        </>
      )}

      {/* LIBRARY PANEL */}
      {showLibrary && (
        <>
          <div className="lib-backdrop" onClick={()=>toggleLibrary(false)}/>
          <div className="lib-panel">
            <LibraryPanel onClose={()=>toggleLibrary(false)}/>
          </div>
        </>
      )}

      {/* AVATAR LIGHTBOX */}
      {avatarLightbox && char.avatarPhoto && (
        <div className="lightbox-backdrop" onClick={()=>setAvatarLightbox(false)}>
          <div className="lightbox-panel" onClick={e=>e.stopPropagation()}>
            <img src={char.avatarPhoto} alt={char.name||"Character"} className="lightbox-img"/>
            <div className="lightbox-overlay">
              {(char.name||char.charClass||char.species)&&(
                <div className="lightbox-overlay-info">
                  {char.name&&<div className="lightbox-name">{char.name}</div>}
                  {(char.charClass||char.species)&&(
                    <div className="lightbox-sub">{[char.charClass&&`${char.charClass} ${char.level}`,char.species].filter(Boolean).join(" . ")}</div>
                  )}
                </div>
              )}
              <div className="lightbox-actions">
                <button className="lightbox-btn lightbox-btn-ghost" onClick={()=>{photoRef.current?.click();setAvatarLightbox(false);}}>🔄 Change</button>
                <button className="lightbox-btn lightbox-btn-danger" onClick={()=>{setCharSaving(p=>({...p,avatarPhoto:""}));setAvatarLightbox(false);}}>🗑</button>
                <button className="lightbox-btn lightbox-btn-primary" onClick={()=>setAvatarLightbox(false)}>✕</button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

// DICE TRAY
const PALETTES = {
 blue: {t:"#bfdbfe",m:"#60a5fa",s:"#3b82f6",d:"#2563eb",k:"#1e3a8a",g:"rgba(59,130,246,0.45)"},
 purple:{t:"#e9d5ff",m:"#c084fc",s:"#a855f7",d:"#7c3aed",k:"#4c1d95",g:"rgba(168,85,247,0.45)"},
 red: {t:"#fecaca",m:"#f87171",s:"#ef4444",d:"#dc2626",k:"#7f1d1d",g:"rgba(239,68,68,0.45)"},
 green: {t:"#bbf7d0",m:"#4ade80",s:"#22c55e",d:"#16a34a",k:"#14532d",g:"rgba(34,197,94,0.45)"},
 black: {t:"#d1d5db",m:"#6b7280",s:"#374151",d:"#1f2937",k:"#111827",g:"rgba(55,65,81,0.5)"},
 gold: {t:"#fef08a",m:"#facc15",s:"#eab308",d:"#ca8a04",k:"#713f12",g:"rgba(234,179,8,0.5)"},
 white: {t:"#ffffff",m:"#e2e8f0",s:"#cbd5e1",d:"#94a3b8",k:"#475569",g:"rgba(148,163,184,0.4)"},
 pink: {t:"#fbcfe8",m:"#f472b6",s:"#ec4899",d:"#db2777",k:"#831843",g:"rgba(236,72,153,0.45)"},
 teal: {t:"#a5f3fc",m:"#22d3ee",s:"#0891b2",d:"#0e7490",k:"#164e63",g:"rgba(34,211,238,0.45)"},
};

const DICE_TYPES = [
  {sides:20,label:"D20"},{sides:12,label:"D12"},{sides:100,label:"D100"},
  {sides:10,label:"D10"},{sides:8,label:"D8"},{sides:6,label:"D6"},
  {sides:4,label:"D4"},{sides:2,label:"D2"},
];

const DieSVG = ({sides, roll, color, size=56}) => {
 const pal = PALETTES[color]||PALETTES.blue;
 const {t:faceTop,m:faceMid,s:faceShade,d:faceDark,k:stroke,g:glow} = pal;
 const W=size,H=size,cx=32,cy=32;
 if (sides===20) {
 const R=28,Rm=16;
 const hex=Array.from({length:6},(_,i)=>{const a=(i*60+30)*Math.PI/180;return[+(cx+R*Math.cos(a)).toFixed(1),+(cy+R*Math.sin(a)).toFixed(1)];});
 const c=[cx,cy];
 const inner=Array.from({length:3},(_,i)=>{const a=(i*120+90)*Math.PI/180;return[+(cx+Rm*Math.cos(a)).toFixed(1),+(cy+Rm*Math.sin(a)).toFixed(1)];});
 const outerTris=[[hex[0],hex[1],inner[0]],[hex[1],hex[2],inner[0]],[hex[2],hex[3],inner[1]],[hex[3],hex[4],inner[1]],[hex[4],hex[5],inner[2]],[hex[5],hex[0],inner[2]]];
 const centerTris=[[inner[0],inner[1],c],[inner[1],inner[2],c],[inner[2],inner[0],c]];
 const pf=arr=>arr.map(p=>p.join(",")).join(" ");
 const outerFills=[faceTop,faceMid,faceShade,faceDark,faceShade,faceMid];
 return(<svg viewBox="0 0 64 64" width={W} height={H} style={{filter:`drop-shadow(0 2px 6px ${glow})`}}>
      <g transform={`scale(-1,-1) translate(-64,-64)`}>
        {outerTris.map((f,i)=><polygon key={`o${i}`} points={pf(f)} fill={outerFills[i]} stroke={stroke} strokeWidth="1" strokeLinejoin="round"/>)}
        {centerTris.map((f,i)=><polygon key={`c${i}`} points={pf(f)} fill={[faceTop,faceMid,faceShade][i]} stroke={stroke} strokeWidth="1" strokeLinejoin="round"/>)}
        <polygon points={pf([inner[0],inner[1],inner[2]])} fill={faceTop} stroke={stroke} strokeWidth="1" strokeLinejoin="round"/>
        <polygon points={hex.map(p=>p.join(",")).join(" ")} fill="none" stroke={stroke} strokeWidth="1.5" strokeLinejoin="round"/>
      </g>
      {roll!=null&&<text x={cx} y={cy+1} textAnchor="middle" dominantBaseline="middle" fontSize="16" fontWeight="900" fill="white" stroke={stroke} strokeWidth="1.5" style={{paintOrder:"stroke fill"}} fontFamily="DM Sans,system-ui">{roll}</text>}
    </svg>);
  }
 if (sides===12) {
 const Rout=28,Rpen=16;
 const dec=Array.from({length:10},(_,i)=>{const a=(i*36-90)*Math.PI/180;return[+(cx+Rout*Math.cos(a)).toFixed(1),+(cy+Rout*Math.sin(a)).toFixed(1)];});
 const pen=Array.from({length:5},(_,i)=>{const a=(i*72-90)*Math.PI/180;return[+(cx+Rpen*Math.cos(a)).toFixed(1),+(cy+Rpen*Math.sin(a)).toFixed(1)];});
 const pf=arr=>arr.map(p=>p.join(",")).join(" ");
 const faces=Array.from({length:5},(_,i)=>{const p0=pen[i],p1=pen[(i+1)%5],d0=dec[(i*2)%10],d1=dec[(i*2+1)%10],d2=dec[(i*2+2)%10];return[p0,d0,d1,d2,p1];});
 const fc=[faceTop,faceMid,faceShade,faceDark,faceShade];
 return(<svg viewBox="0 0 64 64" width={W} height={H} style={{filter:`drop-shadow(0 2px 6px ${glow})`}}>
      {faces.map((f,i)=><polygon key={i} points={pf(f)} fill={fc[i]} stroke={stroke} strokeWidth="1.1" strokeLinejoin="round"/>)}
      <polygon points={pf(pen)} fill={faceTop} stroke={stroke} strokeWidth="1.2" strokeLinejoin="round"/>
      <polygon points={dec.map(p=>p.join(",")).join(" ")} fill="none" stroke={stroke} strokeWidth="2" strokeLinejoin="round"/>
      {roll!=null&&<text x={cx} y={cy+1} textAnchor="middle" dominantBaseline="middle" fontSize="16" fontWeight="900" fill="white" stroke={stroke} strokeWidth="1.5" style={{paintOrder:"stroke fill"}} fontFamily="DM Sans,system-ui">{roll}</text>}
    </svg>);
  }
 if (sides===10||sides===100) {
 const apex=[cx,cy-24],nadir=[cx,cy+30],wOL=[cx-26,cy+1],wOR=[cx+26,cy+1],wCL=[cx-14,cy+8],wCR=[cx+14,cy+8],wBot=[cx,cy+13];
 const pf=arr=>arr.map(p=>p.join(",")).join(" ");
 return(<svg viewBox="0 0 64 64" width={W} height={H} style={{filter:`drop-shadow(0 2px 6px ${glow})`}}>
      <polygon points={pf([apex,wOL,wCL])} fill={faceMid} stroke={stroke} strokeWidth="1.3" strokeLinejoin="round"/>
      <polygon points={pf([apex,wCL,wBot,wCR])} fill={faceTop} stroke={stroke} strokeWidth="1.3" strokeLinejoin="round"/>
      <polygon points={pf([apex,wCR,wOR])} fill={faceMid} stroke={stroke} strokeWidth="1.3" strokeLinejoin="round"/>
      <polygon points={pf([wOL,wCL,wBot,nadir])} fill={faceShade} stroke={stroke} strokeWidth="1.3" strokeLinejoin="round"/>
      <polygon points={pf([wBot,wCR,wOR,nadir])} fill={faceDark} stroke={stroke} strokeWidth="1.3" strokeLinejoin="round"/>
      <polygon points={pf([apex,wOR,nadir,wOL])} fill="none" stroke={stroke} strokeWidth="2.4" strokeLinejoin="round"/>
      {roll!=null&&<text x={cx} y={cy+1} textAnchor="middle" dominantBaseline="middle" fontSize={sides===100?11:16} fontWeight="900" fill="white" stroke={stroke} strokeWidth="1.5" style={{paintOrder:"stroke fill"}} fontFamily="DM Sans,system-ui">{roll}</text>}
    </svg>);
  }
 if (sides===8) {
 const R=28;
 const hex=Array.from({length:6},(_,i)=>{const a=(i*60+90)*Math.PI/180;return[+(cx+R*Math.cos(a)).toFixed(1),+(cy-R*Math.sin(a)).toFixed(1)];});
 const [triA,triB,triC]=[hex[0],hex[2],hex[4]];
 const pf=arr=>arr.map(p=>p.join(",")).join(" ");
 return(<svg viewBox="0 0 64 64" width={W} height={H} style={{filter:`drop-shadow(0 2px 6px ${glow})`}}>
      <polygon points={pf([triA,triB,triC])} fill={faceTop} stroke={stroke} strokeWidth="1.4" strokeLinejoin="round"/>
      <polygon points={pf([triA,hex[1],triB])} fill={faceMid} stroke={stroke} strokeWidth="1.4" strokeLinejoin="round"/>
      <polygon points={pf([triB,hex[3],triC])} fill={faceShade} stroke={stroke} strokeWidth="1.4" strokeLinejoin="round"/>
      <polygon points={pf([triC,hex[5],triA])} fill={faceDark} stroke={stroke} strokeWidth="1.4" strokeLinejoin="round"/>
      <polygon points={hex.map(p=>p.join(",")).join(" ")} fill="none" stroke={stroke} strokeWidth="2.4" strokeLinejoin="round"/>
      {roll!=null&&<text x={(triA[0]+triB[0]+triC[0])/3} y={(triA[1]+triB[1]+triC[1])/3} textAnchor="middle" dominantBaseline="middle" fontSize="16" fontWeight="900" fill="white" stroke={stroke} strokeWidth="1.5" style={{paintOrder:"stroke fill"}} fontFamily="DM Sans,system-ui">{roll}</text>}
    </svg>);
  }
 if (sides===6) {
 const s=4,fTL=[cx-18,cy-18+s],fTR=[cx+18,cy-18+s],fBR=[cx+18,cy+18+s],fBL=[cx-18,cy+18+s];
 const tTL=[cx-10,cy-28+s],tTR=[cx+24,cy-28+s],rBR=[cx+24,cy+10+s];
 const pf=arr=>arr.map(p=>p.join(",")).join(" ");
 return(<svg viewBox="0 0 64 64" width={W} height={H} style={{filter:`drop-shadow(0 2px 6px ${glow})`}}>
      <polygon points={pf([fTL,fTR,fBR,fBL])} fill={faceTop} stroke={stroke} strokeWidth="1.4" strokeLinejoin="round"/>
      <polygon points={pf([tTL,tTR,fTR,fTL])} fill={faceMid} stroke={stroke} strokeWidth="1.4" strokeLinejoin="round"/>
      <polygon points={pf([fTR,tTR,rBR,fBR])} fill={faceDark} stroke={stroke} strokeWidth="1.4" strokeLinejoin="round"/>
      <polygon points={pf([tTL,tTR,rBR,fBR,fBL,fTL])} fill="none" stroke={stroke} strokeWidth="2.6" strokeLinejoin="round"/>
      {roll!=null&&<text x={(fTL[0]+fTR[0]+fBR[0]+fBL[0])/4} y={(fTL[1]+fTR[1]+fBR[1]+fBL[1])/4} textAnchor="middle" dominantBaseline="middle" fontSize="20" fontWeight="900" fill="white" stroke={stroke} strokeWidth="1.5" style={{paintOrder:"stroke fill"}} fontFamily="DM Sans,system-ui">{roll}</text>}
    </svg>);
  }
 if (sides===4) {
 const apex=[cx,cy-20],bL=[cx-26,cy+24],bR=[cx+26,cy+24],ridge=[cx+14,cy+24];
 const pf=arr=>arr.map(p=>p.join(",")).join(" ");
 return(<svg viewBox="0 0 64 64" width={W} height={H} style={{filter:`drop-shadow(0 2px 6px ${glow})`}}>
      <polygon points={pf([apex,ridge,bR])} fill={faceShade} stroke={stroke} strokeWidth="1.4" strokeLinejoin="round"/>
      <polygon points={pf([apex,bL,ridge])} fill={faceTop} stroke={stroke} strokeWidth="1.4" strokeLinejoin="round"/>
      <polygon points={pf([apex,bR,bL])} fill="none" stroke={stroke} strokeWidth="2.8" strokeLinejoin="round"/>
      <line x1={apex[0]} y1={apex[1]} x2={ridge[0]} y2={ridge[1]} stroke={stroke} strokeWidth="1.6" strokeLinecap="round"/>
      {roll!=null&&<text x={(apex[0]+bL[0]+ridge[0])/3} y={(apex[1]+bL[1]+ridge[1])/3+3} textAnchor="middle" dominantBaseline="middle" fontSize="15" fontWeight="900" fill="white" stroke={stroke} strokeWidth="1.5" style={{paintOrder:"stroke fill"}} fontFamily="DM Sans,system-ui">{roll}</text>}
    </svg>);
  }
  // D2: coin
 const ry=27,faceRx=24,faceOx=cx-3,rimRx=27,rimOx=cx+2;
 return(<svg viewBox="0 0 64 64" width={W} height={H} style={{filter:`drop-shadow(0 2px 6px ${glow})`}}>
    <defs>
      <radialGradient id="d2face" cx="33%" cy="30%" r="68%"><stop offset="0%" stopColor={faceTop}/><stop offset="55%" stopColor={faceMid}/><stop offset="100%" stopColor={faceShade}/></radialGradient>
      <linearGradient id="d2rim" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={faceMid}/><stop offset="100%" stopColor={faceDark}/></linearGradient>
    </defs>
    <ellipse cx={rimOx} cy={cy} rx={rimRx} ry={ry} fill="url(#d2rim)" stroke={stroke} strokeWidth="2"/>
    <ellipse cx={faceOx} cy={cy} rx={faceRx} ry={ry} fill="url(#d2face)" stroke={stroke} strokeWidth="2"/>
    <ellipse cx={faceOx} cy={cy} rx={faceRx-5} ry={ry-5} fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.2"/>
    {roll!=null&&<text x={faceOx} y={cy+1} textAnchor="middle" dominantBaseline="middle" fontSize="18" fontWeight="900" fill="white" stroke={stroke} strokeWidth="1.5" style={{paintOrder:"stroke fill"}} fontFamily="DM Sans,system-ui">{roll}</text>}
  </svg>);
};

function DiceTrayPanel({ onClose, diceColor, setDiceColor }) {
 const [trayQueue, setTrayQueue]   = useState([]);
 const [rollResults, setRollResults] = useState(null);

 const doRoll = () => {
 const results = trayQueue.map(d => ({sides:d.sides, roll:Math.floor(Math.random()*d.sides)+1}));
 setRollResults(results);
  };

 return (
    <div className="dt-wrap">
      {/* Header */}
      <div className="dt-hdr">
        <div className="dt-title">🎲 Dice Tray</div>
        <button className="lp-close" onClick={onClose}>✕</button>
      </div>

      <div className="dt-body">
        {/* Color picker */}
        <div className="dt-colors">
          {[{id:"blue",hex:"#3b82f6"},{id:"purple",hex:"#a855f7"},{id:"red",hex:"#ef4444"},
            {id:"green",hex:"#22c55e"},{id:"black",hex:"#374151"},{id:"gold",hex:"#eab308"},
            {id:"white",hex:"#e2e8f0"},{id:"pink",hex:"#ec4899"},{id:"teal",hex:"#22d3ee"}]
            .map(({id,hex})=>(
              <button key={id} onClick={()=>setDiceColor(id)}
 className="dt-swatch"
 style={{background:hex,
 border:diceColor===id?"3px solid #1e293b":"2px solid rgba(0,0,0,0.12)",
 transform:diceColor===id?"scale(1.25)":"scale(1)"}}>
              </button>
            ))}
        </div>

        {/* Dice buttons - names only */}
        <div className="dt-grid">
          {DICE_TYPES.map(d=>{
 const inQueue = trayQueue.some(x=>x.sides===d.sides);
 return (
              <button key={d.sides} className={"dt-die-btn"+(inQueue?" dt-die-active":"")}
 onClick={()=>{setTrayQueue(q=>[...q,{id:Date.now()+Math.random(),sides:d.sides}]);setRollResults(null);}}>
                <span className="dt-die-lbl">{d.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tray queue */}
        <div className="dt-tray">
          {trayQueue.length===0
            ? <span className="dt-tray-empty">Tap dice to add to roll...</span>
            : trayQueue.map((d,i)=>(
              <div key={d.id} className="dt-tray-die"
 onClick={()=>{setTrayQueue(q=>q.filter((_,j)=>j!==i));setRollResults(null);}}>
                <DieSVG sides={d.sides} roll={rollResults?rollResults[i]?.roll:null} color={diceColor}/>
              </div>
            ))
          }
        </div>

        {/* Roll controls */}
        {trayQueue.length>0&&(
          <div className="dt-actions">
            <button className="dt-roll-btn" onClick={doRoll}>
              Roll {trayQueue.length} {trayQueue.length===1?"die":"dice"}
            </button>
            <button className="dt-clear-btn" onClick={()=>{setTrayQueue([]);setRollResults(null);}}>
              Clear
            </button>
          </div>
        )}

        {/* Results */}
        {rollResults&&(
          <div className="dt-results">
            <div className="dt-results-breakdown">
              {rollResults.map(r=>r.roll).join(" + ")} =
            </div>
            <div className="dt-results-total">
              {rollResults.reduce((s,r)=>s+r.roll,0)}
            </div>
            <button className="dt-reroll-btn" onClick={doRoll}>↺ Reroll</button>
          </div>
        )}
      </div>

      <div className="lp-foot">Click a die in the tray to remove it</div>
    </div>
  );
}

// --- D&D LIBRARY (data lives in dnd-library.js)
// To use: load dnd-library.js via a <script> tag before this file,
// OR host dnd-library.js and it will be fetched automatically below.
// LIB_KEY, LIB_CATS and LIB_SEED are loaded from dnd-library.js via window.DND_LIBRARY
const LIB_KEY  = window.DND_LIBRARY?.LIB_KEY  || "dnd5e_library_v20";
const LIB_CATS = window.DND_LIBRARY?.LIB_CATS || ["Race","Subrace","Class","Subclass","CL Feature","Background","Armor","Shield","Weapon","Spell","Scroll","Potion","Wand & Rod","Magic Item","Jewelry","Gem","Component","Tool","Deity","Faction","Companion","Equipment","Feat","Other"];
const LIB_SEED = window.DND_LIBRARY?.LIB_SEED || [];
function libLoad() {
 try {
 const raw = localStorage.getItem(LIB_KEY);
 if (raw) {
 const parsed = JSON.parse(raw);
 const ids = new Set(parsed.map(e => e.id));
      // Add missing seed entries
 const missing = LIB_SEED.filter(e => !ids.has(e.id));
      // Also refresh any seed entries that have been updated (by id match)
 const seedById = Object.fromEntries(LIB_SEED.map(e => [e.id, e]));
 const refreshed = parsed.map(e => seedById[e.id] && (e.phb || (e.tags||"").includes("TCE")) ? seedById[e.id] : e);
 return [...refreshed, ...missing];
    }
  } catch(_) {}
 return LIB_SEED;
}
function libSave(entries) {
 try { localStorage.setItem(LIB_KEY, JSON.stringify(entries)); } catch(_) {}
}

function LibraryPanel({ onClose }) {
 const [entries, setEntries]  = useState(libLoad);
 const [cat, setCat]      = useState("All");
 const [q, setQ]        = useState("");
 const [editing, setEditing]  = useState(null);
 const [openCat, setOpenCat]  = useState(null);   // only one book open at a time
 const [expanded, setExpanded] = useState({});

 const commit = updated => { setEntries(updated); libSave(updated); };
 const addNew = () => {
 const id = "c_" + Date.now();
 commit([...entries, {id, title:"New Entry", category:"Other", desc:"", notes:"", tags:""}]);
 setEditing(id);
  };
 const upd = (id, k, v) => commit(entries.map(e => e.id===id ? {...e,[k]:v} : e));
 const del = id => { commit(entries.filter(e => e.id!==id)); if(editing===id) setEditing(null); };

 const pickBook = c => setOpenCat(prev => prev===c ? null : c);

 const lower = q.toLowerCase();
 const visible = entries.filter(e =>
    (cat==="All" || e.category===cat) &&
    (!lower || (e.title||"").toLowerCase().includes(lower)
            || (e.desc||"").toLowerCase().includes(lower)
            || (e.tags||"").toLowerCase().includes(lower))
  );

 const colors = [
    {spine:"#818cf8",top:"#a5b4fc"},{spine:"#fbbf24",top:"#fde68a"},
    {spine:"#34d399",top:"#6ee7b7"},{spine:"#f472b6",top:"#fbcfe8"},
    {spine:"#60a5fa",top:"#93c5fd"},{spine:"#c084fc",top:"#e9d5ff"},
    {spine:"#fb923c",top:"#fed7aa"},{spine:"#2dd4bf",top:"#99f6e4"},
    {spine:"#38bdf8",top:"#bae6fd"},{spine:"#fb7185",top:"#fecdd3"},
    {spine:"#a3a3a3",top:"#d4d4d4"},
  ];

 const visibleCats = LIB_CATS.filter(c => cat==="All" || c===cat)
    .filter(c => visible.filter(e=>e.category===c).length > 0);

 return (
    <div className="lp-wrap">
      {/* Header */}
      <div className="lp-hdr">
        <div>
          <div className="lp-title">📚 D&amp;D Library</div>
          <div className="lp-sub">{entries.length} entries . PHB entries are read-only</div>
        </div>
        <div style={{display:"flex",gap:8,alignItems:"center"}}>
          <button className="lp-add" onClick={addNew}>+ New</button>
          <button className="lp-close" onClick={onClose}>✕</button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="lp-toolbar">
        <input className="lp-search" value={q} onChange={e=>setQ(e.target.value)} placeholder="Search entries..."/>
        <select className="lp-filter" value={cat} onChange={e=>{setCat(e.target.value);setOpenCat(null);}}>
          <option value="All">All Categories</option>
          {LIB_CATS.map(c=><option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      {/* Bookshelf + entries */}
      <div className="lp-list">
        {visible.length===0 && (
          <div className="lp-empty">
            <div style={{fontSize:30,opacity:.2,marginBottom:8}}>📚</div>
            {q||cat!=="All" ? "No matching entries." : "Library is empty - add your first entry."}
          </div>
        )}

        {visible.length > 0 && (<>
          {/* The shelf row */}
          <div style={{position:"relative"}}>
            <div className="lp-shelf">
              {visibleCats.map((c, idx) => {
 const group = visible.filter(e=>e.category===c);
 const isOpen = openCat===c;
 const col = colors[idx % colors.length];
 return (
                  <button key={c} className={"lp-book"+(isOpen?" lp-book-open":"")}
 style={{"--spine":col.spine,"--top":col.top}}
 onClick={()=>pickBook(c)}
 title={c}>
                    <div className="lp-book-head"/>
                    <div className="lp-book-spine">
                      <span className="lp-book-title">{c}</span>
                      <span className="lp-book-count">{group.length}</span>
                    </div>
                  </button>
                );
              })}
              <div className="lp-shelf-end"/>
            </div>
            <div className="lp-shelf-board"/>
          </div>

          {/* Entries for the open book */}
          {openCat && (()=>{
 const group = visible.filter(e=>e.category===openCat).sort((a,b)=>a.title.localeCompare(b.title));
 return (
              <div className="lp-book-contents">
                <div className="lp-book-contents-hdr">
                  <span className="lp-book-contents-cat">{openCat}</span>
                  <span className="lp-book-contents-count">{group.length} entries</span>
                  <button className="lp-contents-close" onClick={()=>setOpenCat(null)}>✕</button>
                </div>
                <div className="lp-book-contents-entries">
                {group.map(entry => {
 const isEditing  = editing===entry.id && !entry.phb && !(entry.tags||"").includes("TCE") && !(entry.tags||"").includes("XGE") && !(entry.tags||"").includes("SCAG") && !(entry.tags||"").includes("DMG");
 const isExpanded = expanded[entry.id];
 return (
                    <div key={entry.id} className="lp-entry"
 style={{borderLeft:entry.phb?"3px solid rgba(212,163,83,0.55)":(entry.tags||"").includes("XGE")?"3px solid rgba(124,58,237,0.55)":(entry.tags||"").includes("TCE")?"3px solid rgba(8,145,178,0.55)":(entry.tags||"").includes("SCAG")?"3px solid rgba(37,99,235,0.55)":(entry.tags||"").includes("DMG")?"3px solid rgba(220,38,38,0.55)":"3px solid var(--border-focus)"}}>
                      {isEditing ? (
                        <div className="lp-form">
                          <input className="lp-in lp-in-title" value={entry.title||""} placeholder="Title"
 onChange={e=>upd(entry.id,"title",e.target.value)}/>
                          <select className="lp-in" value={entry.category}
 onChange={e=>upd(entry.id,"category",e.target.value)}>
                            {LIB_CATS.map(c=><option key={c} value={c}>{c}</option>)}
                          </select>
                          <textarea className="lp-in lp-ta" rows={3} placeholder="Description..."
 value={entry.desc||""} onChange={e=>upd(entry.id,"desc",e.target.value)}/>
                          <textarea className="lp-in lp-ta" rows={3} placeholder="Notes / stats / rules..."
 value={entry.notes||""} onChange={e=>upd(entry.id,"notes",e.target.value)}/>
                          <input className="lp-in" placeholder="Tags (comma separated)"
 value={entry.tags||""} onChange={e=>upd(entry.id,"tags",e.target.value)}/>
                          <div className="lp-form-btns">
                            <button className="lp-btn lp-done" onClick={()=>setEditing(null)}>✓ Done</button>
                            <button className="lp-btn lp-del" onClick={()=>del(entry.id)}>🗑</button>
                          </div>
                        </div>
                      ) : (
                        <>
                          <div className="lp-entry-row"
 onClick={()=>setExpanded(p=>({...p,[entry.id]:!p[entry.id]}))}>
                            <span className="lp-chev" style={{transform:isExpanded?"rotate(0)":"rotate(-90deg)",color:entry.phb?"var(--accent)":(entry.tags||"").includes("XGE")?"#7c3aed":(entry.tags||"").includes("TCE")?"#0891b2":(entry.tags||"").includes("SCAG")?"#2563eb":(entry.tags||"").includes("DMG")?"#dc2626":"var(--muted)"}}>▾</span>
                            <span className="lp-entry-title">{entry.title||"Untitled"}</span>
                            {entry.phb && <span className="lp-phb-badge">PHB</span>}{!entry.phb && (entry.tags||"").includes("XGE") && <span className="lp-phb-badge" style={{color:"#7c3aed"}}>XGE</span>}{!entry.phb && (entry.tags||"").includes("SCAG") && <span className="lp-phb-badge" style={{color:"#2563eb"}}>SCAG</span>}{!entry.phb && (entry.tags||"").includes("DMG") && <span className="lp-phb-badge" style={{color:"#dc2626"}}>DMG</span>}
                            {!entry.phb && (entry.tags||"").includes("TCE") && <span className="lp-tce-badge">TCE</span>}
                          </div>
                          {isExpanded && (
                            <div className="lp-entry-body">
                              {entry.desc  && <div className="lp-desc">{entry.desc}</div>}
                              {entry.notes && <div className="lp-notes">{entry.notes}</div>}
                              {entry.tags  && (
                                <div className="lp-tags">
                                  {entry.tags.split(",").map(t=>t.trim()).filter(Boolean).map(t=>(
                                    <span key={t} className="lp-tag">{t}</span>
                                  ))}
                                </div>
                              )}
                              <div className="lp-entry-foot">
                                {entry.phb
                                  ? <span className="lp-phb-lbl">📖 Player's Handbook</span>
                                  : (entry.tags||"").includes("DMG") ? <span className="lp-tce-lbl" style={{color:"#dc2626"}}>📖 Dungeon Master's Guide</span>
                                  : (entry.tags||"").includes("SCAG") ? <span className="lp-tce-lbl" style={{color:"#2563eb"}}>📖 Sword Coast Adventurer's Guide</span>
                                  : (entry.tags||"").includes("XGE") ? <span className="lp-tce-lbl" style={{color:"#7c3aed"}}>📖 Xanathar's Guide to Everything</span>
                                  : (entry.tags||"").includes("TCE") ? <span className="lp-tce-lbl">📖 Tasha's Cauldron of Everything</span>
                                  : <button className="lp-edit-link" onClick={()=>setEditing(entry.id)}>✏ Edit</button>
                                }
                              </div>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  );
                })}
                </div>{/* end lp-book-contents-entries */}
              </div>
            );
          })()}
        </>)}
      </div>

      <div className="lp-foot">Changes auto-save . PHB entries are read-only</div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap');*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}:root{--bg:#dde3ec;--surface:#f8fafc;--card:#ffffff;--input:#f8fafc;--border:#c8d0dc;--border-focus:#6366f1;--text:#1e293b;--muted:#64748b;--subtle:#94a3b8;--accent:#6366f1;--accent-dark:#4338ca;--green:#22c55e;--amber:#f59e0b;--red:#ef4444;--blood:#dc2626;--mana:#3b82f6;--divider:#c8d0dc;}html,body{overflow:hidden;height:100%;background:var(--bg);}::-webkit-scrollbar{width:5px}::-webkit-scrollbar-track{background:var(--bg)}::-webkit-scrollbar-thumb{background:#b0bccb;border-radius:3px}.sheet{font-family:'DM Sans',system-ui,sans-serif;font-size:14px;color:var(--text);background:var(--bg);height:100dvh;max-width:1100px;margin:0 auto;display:flex;flex-direction:column;overflow:hidden;}input,textarea,select{font-family:'DM Sans',system-ui,sans-serif;}input:focus,textarea:focus,select:focus{border-color:var(--border-focus)!important;outline:none;}button{font-family:inherit;cursor:pointer;border:none;background:none;}textarea{resize:vertical;}.hdr-row1{display:flex;align-items:center;gap:12px;background:var(--surface);border-bottom:1px solid var(--divider);padding:6px 12px;position:sticky;top:0;z-index:100;}.hdr-photo{width:76px;height:76px;border-radius:12px;background:var(--input);border:1.5px solid var(--border);overflow:hidden;flex-shrink:0;cursor:pointer;position:relative;transition:border-color .2s;display:flex;align-items:center;justify-content:center;}.hdr-photo:hover{border-color:var(--accent);}.hdr-photo-empty{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;}.hdr-photo-lbl{font-size:9px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--subtle);}.hdr-photo-del{position:absolute;top:3px;right:3px;width:18px;height:18px;border-radius:50%;background:rgba(239,68,68,0.85);color:#fff;font-size:13px;font-weight:700;display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .15s;border:none;cursor:pointer;}.hdr-photo:hover .hdr-photo-del{opacity:1;}.hdr-level-box{display:flex;flex-direction:column;align-items:center;justify-content:center;background:var(--card);border:1px solid var(--border);border-radius:8px;box-shadow:0 1px 3px rgba(0,0,0,0.07);width:48px;height:48px;flex-shrink:0;}.hdr-level-lbl{font-size:7px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);margin-bottom:1px;}.hdr-level-num{font-family:'DM Mono',monospace;font-size:20px;font-weight:900;color:var(--accent);line-height:1;margin-top:1px;}.hdr-lvl-on{background:rgba(99,102,241,0.12)!important;border-color:var(--accent)!important;color:var(--accent)!important;font-weight:800;}.hdr-identity{flex:1;display:flex;flex-direction:column;justify-content:center;gap:6px;min-width:0;}.hdr-charname{font-size:22px;font-weight:800;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:1.15;}.hdr-name-empty{color:var(--subtle);font-weight:400;font-style:italic;}.hdr-chips{display:flex;gap:6px;flex-wrap:wrap;}.hdr-lang-row{margin-top:3px;}.hdr-chip-lang-lbl{cursor:default;padding:2px 5px;}.hdr-chip-lang{cursor:pointer;background:rgba(59,130,246,0.08);border-color:rgba(59,130,246,0.25);color:var(--mana);}.hdr-chip-lang:hover{background:rgba(239,68,68,0.08);border-color:rgba(239,68,68,0.25);color:var(--red);}.hdr-chip-lang-auto{background:var(--input);border-color:var(--border);color:var(--muted);cursor:default;}.hdr-chip-lang-racial{background:rgba(34,197,94,0.08);border-color:rgba(34,197,94,0.35);color:var(--green);cursor:default;}.hdr-lang-input{font-size:10px;font-weight:500;color:var(--muted);background:transparent;border:1px dashed var(--border);border-radius:6px;padding:2px 7px;outline:none;width:90px;font-family:inherit;}.hdr-lang-input:focus{border-color:var(--accent);color:var(--text);}.hdr-chip{font-size:10px;font-weight:600;color:var(--muted);background:var(--input);border:1px solid var(--border);border-radius:6px;padding:2px 7px;white-space:nowrap;}.hdr-chip-accent{background:rgba(99,102,241,0.1);border-color:rgba(99,102,241,0.3);color:var(--accent);}.hdr-dice-btn{display:flex;align-items:center;justify-content:center;background:rgba(99,102,241,0.07);border:1px solid rgba(99,102,241,0.2);border-radius:12px;color:var(--accent);width:40px;height:40px;flex-shrink:0;transition:all .15s;cursor:pointer;}.hdr-dice-btn:hover{background:rgba(99,102,241,0.14);border-color:var(--accent);}.hdr-dice-lbl{font-size:9px;font-weight:700;letter-spacing:.08em;color:var(--accent);}.hdr-row3{display:flex;flex-wrap:wrap;gap:5px;padding:6px 12px;background:var(--surface);border-bottom:1px solid var(--divider);}.hdr-row3-break{width:100%;height:0;flex-basis:100%;margin:-2px 0;}.hdr-field-group{display:flex;flex-direction:column;gap:2px;min-width:120px;flex:1;}.hdr-field-name{flex:1.6;min-width:160px;}.hdr-field-background{flex:1.4;min-width:150px;}.hdr-field-group-sm{min-width:110px;flex:0.7;}.hdr-field-group-xs{min-width:62px;flex:0 0 62px;}.mc-lock-badge{font-size:8px;font-weight:700;letter-spacing:.06em;background:rgba(245,158,11,0.12);border:1px solid rgba(245,158,11,0.3);color:var(--amber);border-radius:4px;padding:1px 5px;text-transform:uppercase;}.mc-locked{display:flex;align-items:center;gap:6px;background:var(--input);border:1px solid var(--border);border-radius:8px;padding:7px 10px;font-size:12px;color:var(--subtle);opacity:0.6;}.mc-lock-icon{font-size:13px;}.mc-warn{font-size:10px;color:var(--red);margin-top:3px;font-weight:500;}.mc-info-btn{font-size:10px;color:var(--accent);background:rgba(99,102,241,0.1);border:1px solid rgba(99,102,241,0.2);border-radius:50%;width:14px;height:14px;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;line-height:1;font-family:inherit;}.mc-info-btn:hover{background:rgba(99,102,241,0.2);}.mc-info-backdrop{position:fixed;inset:0;z-index:200;}.mc-info-panel{position:absolute;top:20px;right:0;left:auto;z-index:201;width:300px;background:var(--card);border:1px solid var(--border);border-radius:12px;box-shadow:0 8px 24px rgba(0,0,0,0.12);padding:14px;display:flex;flex-direction:column;gap:10px;max-height:420px;overflow-y:auto;}.mc-info-title{font-size:13px;font-weight:700;color:var(--text);border-bottom:1px solid var(--divider);padding-bottom:8px;}.mc-info-section{display:flex;flex-direction:column;gap:3px;}.mc-info-head{font-size:10px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:var(--accent);}.mc-info-body{font-size:11px;color:var(--muted);line-height:1.55;}.align-wrap{position:relative;width:100%;}.align-closed{display:flex;align-items:center;justify-content:space-between;width:100%;text-align:left;cursor:pointer;font-family:'DM Sans',system-ui;font-size:13px;font-weight:600;color:var(--text);}.align-closed:hover{border-color:var(--border-focus);}.align-caret{font-size:10px;color:var(--muted);margin-left:4px;}.align-open{width:100%;}.hdr-field-lbl{font-size:8px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:var(--muted);}.hdr-field-in{background:var(--card);border:1px solid var(--border);border-radius:6px;padding:4px 8px;font-size:12px;color:var(--text);outline:none;width:100%;transition:border-color .15s;}.hdr-field-in:focus{border-color:var(--border-focus);}.hdr-field-in::placeholder{color:var(--subtle);}.hdr-field-sel{cursor:pointer;}.hdr-field-sel option{background:#fff;}.hdr-row4{display:flex;flex-direction:column;gap:3px;padding:4px 12px 5px;background:var(--surface);border-bottom:1px solid var(--border);}.hdr-xp-bar-row{display:flex;flex-direction:column;gap:4px;}.hdr-xp-bar-labels{display:flex;justify-content:space-between;align-items:baseline;}.hdr-xp-seg-lbl{font-size:10px;font-weight:600;color:var(--muted);}.hdr-xp-fields{display:flex;gap:14px;align-items:flex-end;flex-wrap:wrap;}.hdr-xp-field-group{display:flex;flex-direction:column;gap:3px;}.hdr-xp-lbl{font-size:9px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);}.hdr-xp-in{width:72px;background:var(--card);border:1px solid var(--border);border-radius:8px;padding:3px 6px;font-size:12px;font-family:'DM Mono',monospace;font-weight:600;color:var(--text);text-align:center;outline:none;}.hdr-xp-in:focus{border-color:var(--border-focus);}.hdr-xp-add-row{display:flex;gap:5px;align-items:center;}.hdr-xp-add-in{width:90px;}.hdr-xp-add-btn{padding:3px 10px;border-radius:8px;font-size:12px;font-weight:600;background:rgba(99,102,241,0.1);border:1px solid rgba(99,102,241,0.25);color:var(--accent);cursor:pointer;transition:all .15s;font-family:inherit;white-space:nowrap;}.hdr-xp-add-btn:hover:not(:disabled){background:rgba(99,102,241,0.18);}.hdr-xp-add-btn:disabled{opacity:0.35;cursor:default;}.hdr-xp-inline{display:flex;align-items:center;gap:6px;flex-wrap:nowrap;}.hdr-xp-plus{font-size:14px;font-weight:700;color:var(--muted);line-height:1;}.levelup-toast{background:linear-gradient(90deg,rgba(99,102,241,0.15),rgba(34,197,94,0.12));border-top:1px solid rgba(99,102,241,0.25);border-bottom:1px solid rgba(99,102,241,0.25);padding:8px 16px;text-align:center;font-size:13px;font-weight:700;color:var(--accent);cursor:pointer;animation:toastIn .3s ease;letter-spacing:.02em;}.levelup-modal-backdrop{position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9999;display:flex;align-items:center;justify-content:center;animation:fadeIn .2s ease;}.levelup-modal{background:var(--surface);border:1px solid rgba(99,102,241,0.35);border-radius:16px;padding:24px 20px;width:min(320px,92vw);box-shadow:0 8px 32px rgba(0,0,0,0.4);display:flex;flex-direction:column;align-items:center;gap:12px;}.levelup-modal-title{font-size:22px;font-weight:800;color:var(--accent);letter-spacing:.01em;}.levelup-modal-sub{font-size:13px;color:var(--muted);font-weight:500;}.levelup-modal-btns{display:flex;gap:12px;width:100%;}.levelup-class-btn{flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;padding:14px 8px;border-radius:12px;border:2px solid rgba(99,102,241,0.3);background:rgba(99,102,241,0.07);cursor:pointer;transition:all .15s ease;}.levelup-class-btn:hover{background:rgba(99,102,241,0.18);border-color:rgba(99,102,241,0.6);transform:translateY(-1px);}.levelup-class-btn:active{transform:translateY(0);}.levelup-class-btn-multi{border-color:rgba(168,85,247,0.3);background:rgba(168,85,247,0.07);}.levelup-class-btn-multi:hover{background:rgba(168,85,247,0.18);border-color:rgba(168,85,247,0.6);}.levelup-class-name{font-size:15px;font-weight:700;color:var(--text);}.levelup-class-die{font-family:'DM Mono',monospace;font-size:18px;font-weight:800;color:var(--accent);}.levelup-class-btn-multi .levelup-class-die{color:#9333ea;}.levelup-modal-hint{font-size:10px;color:var(--muted);opacity:.7;}@keyframes toastIn{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:translateY(0)}}.hdr-xp-bar{height:6px;background:var(--divider);border-radius:3px;overflow:hidden;}.hdr-xp-fill{height:100%;background:linear-gradient(90deg,var(--accent),#818cf8);border-radius:3px;transition:width .4s ease;}.hdr-xp-next{font-size:10px;color:var(--accent);font-weight:600;text-align:right;}.hdr-insp-btn{font-size:20px;color:var(--amber);background:var(--card);border:1px solid var(--border);border-radius:8px;padding:4px 10px;transition:all .15s;flex-shrink:0;cursor:pointer;}.hdr-insp-btn:hover{border-color:var(--amber);}.hdr-insp-on{background:rgba(245,158,11,0.1)!important;border-color:var(--amber)!important;}.core-vitals{display:grid;grid-template-columns:1fr auto;gap:20px;align-items:start;}.core-hp{flex:1;}.core-ds{min-width:160px;padding-left:16px;border-left:1px solid var(--divider);}.hp-label{font-size:9px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--red);margin-bottom:5px;}.hp-row{display:flex;align-items:center;gap:8px;}.hp-cur{font-family:'DM Mono',monospace;font-size:28px;font-weight:800;color:var(--red);background:transparent;border:none;outline:none;width:64px;text-align:center;}.hp-slash{color:var(--subtle);font-size:22px;}.hp-max{font-family:'DM Mono',monospace;font-size:18px;color:var(--muted);background:transparent;border:none;outline:none;width:50px;text-align:center;}.hp-temp-wrap{display:flex;align-items:center;gap:4px;margin-left:10px;}.hp-temp-lbl{font-size:9px;font-weight:700;letter-spacing:.07em;color:var(--mana);text-transform:uppercase;}.hp-temp{font-family:'DM Mono',monospace;font-size:16px;color:var(--mana);background:var(--input);border:1px solid var(--border);border-radius:6px;outline:none;width:44px;text-align:center;padding:2px 4px;}.hp-bar{height:4px;background:var(--divider);border-radius:2px;margin-top:8px;overflow:hidden;}.hp-fill{height:100%;background:linear-gradient(90deg,var(--blood),var(--red));border-radius:2px;transition:width .3s;}.ds-title{font-size:9px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);margin-bottom:7px;}.pip-row{display:flex;align-items:center;gap:8px;margin-bottom:5px;}.pip-lbl{font-size:11px;color:var(--text);min-width:48px;}.pips{display:flex;gap:4px;}.pip{width:14px;height:14px;border-radius:50%;border:2px solid var(--border);cursor:pointer;transition:all .15s;}.pip:hover{border-color:var(--muted);}.pip-succ{background:var(--green);border-color:var(--green)!important;}.pip-fail{background:var(--red);border-color:var(--red)!important;}.insp-btn{display:flex;flex-direction:column;align-items:center;gap:3px;background:var(--card);border:1px solid var(--border);border-radius:10px;box-shadow:0 1px 3px rgba(0,0,0,0.07);padding:8px 12px;cursor:pointer;transition:all .2s;}.insp-btn:hover{border-color:var(--amber);}.insp-on{border-color:var(--amber)!important;background:rgba(245,158,11,0.08)!important;}.insp-star{font-size:22px;color:var(--amber);}.insp-lbl{font-size:9px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);text-align:center;line-height:1.4;}.tabs{flex-shrink:0;display:flex;overflow-x:auto;background:var(--surface);border-bottom:1px solid var(--border);padding:0 10px;min-height:0;}.tab{padding:10px 14px;font-size:12px;font-weight:600;white-space:nowrap;color:var(--muted);border-bottom:2px solid transparent;text-transform:capitalize;background:none;transition:color .15s;}.tab:hover{color:var(--text);}.tab-on{color:var(--accent)!important;border-bottom-color:var(--accent)!important;}.panel-core{display:grid;grid-template-columns:240px minmax(0,1fr);gap:10px;align-items:start;}.cls-skill-card{background:var(--card);border:1px solid var(--border);border-radius:10px;padding:10px 14px;display:flex;flex-direction:column;gap:8px;}.cls-skill-hdr{display:flex;align-items:center;justify-content:space-between;}.cls-skill-title{font-size:9px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--text);}.cls-skill-count{font-size:11px;font-weight:600;color:var(--accent);}.cls-skill-grid{display:flex;flex-wrap:wrap;gap:5px;}.cls-skill-opt{font-size:11px;font-weight:500;padding:4px 10px;border-radius:7px;background:var(--input);border:1px solid var(--border);color:var(--text);cursor:pointer;font-family:inherit;transition:all .15s;}.cls-skill-opt:hover{border-color:var(--accent);color:var(--accent);}.cls-skill-opt-on{background:rgba(99,102,241,0.1)!important;border-color:var(--accent)!important;color:var(--accent)!important;font-weight:700;}.cls-skill-opt-dim{opacity:0.4;cursor:default;}.cls-skill-opt-bg{background:rgba(59,130,246,0.08)!important;border-color:var(--mana)!important;color:var(--mana)!important;cursor:default;}.cls-skill-opt-race{background:rgba(34,197,94,0.08)!important;border-color:var(--green)!important;color:var(--green)!important;cursor:default;}.cls-skill-src-tag{font-size:8px;font-weight:700;margin-left:4px;background:rgba(59,130,246,0.15);border-radius:3px;padding:0 3px;}.cls-skill-src-race{background:rgba(34,197,94,0.15)!important;}.ab-sk-dot-cls{background:rgba(99,102,241,0.5);border-color:var(--accent);}.ab-sk-cls-tag{font-size:8px;font-weight:700;color:var(--accent);background:rgba(99,102,241,0.1);border:1px solid rgba(99,102,241,0.25);border-radius:4px;padding:1px 4px;letter-spacing:.04em;flex-shrink:0;}.core-left{display:flex;flex-direction:column;gap:6px;}.core-right{display:flex;flex-direction:column;gap:8px;min-width:0;overflow:hidden;}.ab-stat-card{background:var(--card);border:1px solid var(--border);border-radius:14px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,0.07);}.ab-stat-primary{border-color:rgba(99,102,241,0.35)!important;}.ab-stat-title{text-align:center;font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);padding:7px 10px 5px;border-bottom:1px solid var(--divider);}.ab-stat-body{display:flex;align-items:center;justify-content:center;gap:0;padding:8px 10px 6px;}.ab-stat-pill{display:flex;flex-direction:column;align-items:center;justify-content:center;background:var(--input);border:1px solid var(--border);border-radius:10px;padding:6px 10px;min-width:52px;flex-shrink:0;margin-right:10px;gap:1px;cursor:default;}.ab-stat-pill-primary{background:rgba(99,102,241,0.08)!important;border-color:rgba(99,102,241,0.3)!important;}.ab-stat-abbr{font-size:9px;font-weight:800;letter-spacing:.08em;color:var(--accent);}.ab-stat-mod-big{font-family:'DM Mono',monospace;font-size:22px;font-weight:900;color:var(--text);line-height:1.05;}.ab-stat-score-in{font-family:'DM Mono',monospace;font-size:12px;font-weight:600;color:var(--muted);background:transparent;border:none;outline:none;width:32px;text-align:center;cursor:pointer;}.ab-stat-score-in:focus{color:var(--accent);}.ab-racial-bonus{font-size:9px;font-weight:700;color:var(--green);letter-spacing:.04em;margin-top:1px;}.ab-stat-noskills{flex:1;}.ab-stat-skills{flex:1;display:flex;flex-direction:column;justify-content:center;gap:0;}.ab-sk-row{display:flex;align-items:center;gap:7px;padding:4px 2px;cursor:pointer;border-radius:6px;transition:background .1s;}.ab-sk-row:hover{background:rgba(99,102,241,0.05);}.ab-sk-on{background:transparent;}.ab-sk-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0;border:1.5px solid #cbd5e1;transition:all .15s;}.ab-sk-dot-empty{background:transparent;border-color:#cbd5e1;}.ab-sk-dot-p{background:var(--accent);border-color:var(--accent);}.ab-sk-dot-bg{background:rgba(59,130,246,0.5);border-color:var(--mana);}.ab-sk-dot-race{background:rgba(34,197,94,0.5);border-color:var(--green);}.ab-sk-race-tag{font-size:8px;font-weight:700;color:var(--green);background:rgba(34,197,94,0.1);border:1px solid rgba(34,197,94,0.25);border-radius:4px;padding:1px 4px;letter-spacing:.04em;flex-shrink:0;}.ab-sk-bg-tag{font-size:8px;font-weight:700;color:var(--mana);background:rgba(59,130,246,0.1);border:1px solid rgba(59,130,246,0.25);border-radius:4px;padding:1px 4px;letter-spacing:.04em;flex-shrink:0;}.ab-sk-dot-ex{background:var(--accent-dark);border-color:var(--accent-dark);}.ab-sk-name{flex:1;font-size:12px;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.ab-sk-bonus{font-family:'DM Mono',monospace;font-size:12px;font-weight:700;color:var(--accent);min-width:28px;text-align:right;}.ab-save-row{display:flex;align-items:center;gap:7px;padding:6px 10px 7px;cursor:pointer;border-top:1px solid var(--divider);background:var(--surface);transition:background .1s;}.ab-save-row:hover{background:rgba(99,102,241,0.04);}.ab-save-prof{background:rgba(99,102,241,0.14)!important;}.ab-save-label{flex:1;font-size:11px;color:var(--muted);}.ab-hit-die-row{display:flex;align-items:center;justify-content:flex-end;gap:4px;padding:3px 8px 3px 8px;margin-top:1px;}.ab-hit-die-label{font-size:9px;font-weight:600;color:var(--muted);letter-spacing:.06em;text-transform:uppercase;}.ab-hit-die-val{font-family:'DM Mono',monospace;font-size:12px;font-weight:700;color:var(--accent);background:rgba(99,102,241,0.1);border:1px solid rgba(99,102,241,0.2);border-radius:4px;padding:1px 5px;}.ab-save-class-tag{font-size:8px;font-weight:700;color:var(--accent);background:rgba(99,102,241,0.1);border:1px solid rgba(99,102,241,0.2);border-radius:4px;padding:1px 4px;letter-spacing:.04em;text-transform:uppercase;flex-shrink:0;margin-right:3px;}.hp-card-dimmed{opacity:0.2;pointer-events:none;user-select:none;}.ds-overlay{position:absolute;inset:0;background:rgba(220,38,38,0.12);border:1.5px solid rgba(239,68,68,0.45);border-radius:10px;padding:10px 12px;display:flex;flex-direction:column;justify-content:space-between;animation:fadeUp .2s ease;backdrop-filter:blur(2px);}.ds-overlay-hdr{display:flex;align-items:center;gap:6px;}.ds-overlay-title{font-size:12px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:rgba(239,68,68,0.85);flex:1;}.ds-overlay-reset{width:26px;height:26px;border-radius:7px;background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.25);color:rgba(239,68,68,0.8);font-size:15px;cursor:pointer;display:flex;align-items:center;justify-content:center;font-family:inherit;}.ds-overlay-reset:hover{background:rgba(239,68,68,0.2);}.ds-overlay-body{display:flex;align-items:center;gap:8px;flex:1;}.ds-overlay-rows{flex:1;display:flex;flex-direction:column;gap:10px;justify-content:center;}.ds-overlay-row{display:flex;align-items:center;gap:8px;}.ds-overlay-lbl{font-size:13px;font-weight:600;color:rgba(100,116,139,0.9);min-width:70px;}.ds-overlay-pips{display:flex;gap:8px;}.ds-pip{width:22px;height:22px;border-radius:50%;border:2px solid rgba(203,213,225,0.8);background:rgba(255,255,255,0.9);cursor:pointer;transition:all .15s;}.ds-pip:hover{border-color:rgba(239,68,68,0.4);transform:scale(1.1);}.ds-pip-succ{background:rgba(34,197,94,0.3)!important;border-color:rgba(34,197,94,0.6)!important;}.ds-pip-fail{background:rgba(239,68,68,0.3)!important;border-color:rgba(239,68,68,0.6)!important;}.ds-overlay-d20{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;background:rgba(255,255,255,0.9);border:1px solid rgba(203,213,225,0.6);border-radius:10px;padding:8px 10px;min-width:56px;cursor:pointer;}.ds-overlay-d20-lbl{font-size:11px;font-weight:700;letter-spacing:.08em;color:rgba(100,116,139,0.8);}.ds-overlay-d20-result{font-family:'DM Mono',monospace;font-size:30px;font-weight:900;line-height:1;}.ds-death-notice{text-align:center;font-size:11px;font-weight:700;color:rgba(239,68,68,0.9);background:rgba(239,68,68,0.08);border:1px solid rgba(239,68,68,0.25);border-radius:7px;padding:6px 10px;letter-spacing:.03em;}.hp-card{background:var(--card);border:1px solid var(--border);border-radius:10px;box-shadow:0 1px 3px rgba(0,0,0,0.07);padding:8px 10px;display:flex;flex-direction:column;gap:5px;}.hp-card-title{font-size:9px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--text);}.hp-card-bar{height:8px;background:var(--divider);border-radius:4px;overflow:hidden;}.hp-card-fill{height:100%;border-radius:4px;transition:width .3s ease,background .3s ease;}.hp-card-meta{display:flex;justify-content:space-between;font-size:9px;color:var(--muted);margin-top:-1px;}.hp-card-fields{display:grid;grid-template-columns:1fr 1fr 1fr;gap:4px;}.hp-card-field{display:flex;flex-direction:column;align-items:center;gap:3px;}.hp-card-field-lbl{font-size:8px;font-weight:600;color:var(--muted);display:flex;align-items:center;gap:3px;flex-wrap:wrap;justify-content:center;}.hp-card-base{font-size:9px;font-weight:600;color:var(--green);background:rgba(34,197,94,0.1);border:1px solid rgba(34,197,94,0.25);border-radius:4px;padding:1px 5px;}.hp-card-in{width:100%;background:var(--input);border:1px solid var(--border);border-radius:7px;padding:5px 2px;font-size:14px;font-weight:800;font-family:'DM Mono',monospace;color:var(--text);text-align:center;outline:none;transition:border-color .15s;}.hp-card-in:focus{border-color:var(--border-focus);}.hp-card-in::placeholder{color:var(--subtle);font-size:20px;}.hp-card-action-row{display:flex;gap:8px;align-items:center;}.hp-card-amount{flex:1;min-width:0;background:var(--input);border:1px solid var(--border);border-radius:7px;padding:5px 6px;font-size:12px;font-family:'DM Mono',monospace;font-weight:600;color:var(--text);outline:none;transition:border-color .15s;}.hp-card-amount::placeholder{color:var(--subtle);font-size:11px;font-family:'DM Sans',system-ui;font-weight:400;}.hp-card-amount:focus{border-color:var(--border-focus);}.hp-card-heal{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:5px 8px;border-radius:9px;background:rgba(34,197,94,0.1);border:1px solid rgba(34,197,94,0.3);cursor:pointer;transition:all .15s;gap:0;font-family:inherit;}.hp-card-heal:hover{background:rgba(34,197,94,0.18);}.hp-card-dmg{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:5px 8px;border-radius:9px;background:rgba(239,68,68,0.08);border:1px solid rgba(239,68,68,0.25);cursor:pointer;transition:all .15s;gap:0;font-family:inherit;}.hp-card-dmg:hover{background:rgba(239,68,68,0.15);}.hp-btn-plus{font-size:11px;font-weight:800;color:var(--green);line-height:1;}.hp-btn-minus{font-size:11px;font-weight:800;color:var(--red);line-height:1;}.hp-btn-lbl{font-size:10px;font-weight:700;color:var(--text);}.core-stats-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;}.cstat-card-btn{cursor:pointer;transition:border-color .15s,box-shadow .15s;}.cstat-card-btn:hover{border-color:var(--accent);box-shadow:0 0 0 2px rgba(99,102,241,0.15);}.cstat-card{background:var(--card);border:1px solid var(--border);border-radius:8px;box-shadow:0 1px 2px rgba(0,0,0,0.06);padding:4px 6px;display:flex;flex-direction:column;align-items:center;gap:1px;}.cstat-wide{grid-column:1/-1;}.cstat-label{font-size:8px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);display:flex;align-items:center;gap:4px;}.cstat-auto{font-size:8px;font-weight:700;color:var(--green);background:rgba(34,197,94,0.1);border:1px solid rgba(34,197,94,0.25);border-radius:4px;padding:1px 5px;letter-spacing:.05em;}.cstat-val{font-family:'DM Mono',monospace;font-size:15px;font-weight:900;color:var(--text);line-height:1.1;text-align:center;}.cstat-val-lg{font-size:18px;}.cstat-input{background:transparent;border:none;outline:none;width:44px;cursor:text;font-family:'DM Mono',monospace;font-size:15px;font-weight:900;color:var(--text);text-align:center;}.cstat-input:focus{color:var(--accent);}.tab-body{flex:1;min-height:0;overflow-y:auto;overflow-x:hidden;padding:14px;}.tab-body-core{padding:10px;}.ri-card{background:var(--card);border:1px solid var(--border);border-radius:10px;box-shadow:0 1px 3px rgba(0,0,0,0.06);padding:10px 12px;display:flex;flex-direction:column;gap:8px;}.ri-card-hdr{display:flex;align-items:center;justify-content:space-between;}.ri-card-title{font-size:10px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--text);}.ri-add-btn{font-size:11px;font-weight:600;color:var(--accent);background:rgba(99,102,241,0.08);border:1px solid rgba(99,102,241,0.2);border-radius:7px;padding:4px 10px;cursor:pointer;font-family:inherit;transition:all .15s;}.ri-add-btn:hover{background:rgba(99,102,241,0.15);}.ri-add-form{display:flex;gap:5px;flex-wrap:wrap;}.ri-sel{flex:1;min-width:0;background:var(--input);border:1px solid var(--border);border-radius:6px;padding:4px 6px;font-size:11px;color:var(--text);outline:none;font-family:inherit;}.ri-sel:focus{border-color:var(--border-focus);}.ri-confirm-btn{padding:4px 10px;border-radius:6px;font-size:11px;font-weight:600;background:rgba(99,102,241,0.1);border:1px solid rgba(99,102,241,0.25);color:var(--accent);cursor:pointer;font-family:inherit;flex-shrink:0;}.ri-confirm-btn:disabled{opacity:0.35;cursor:default;}.ri-preview{display:flex;align-items:center;gap:8px;}.ri-preview-hint{font-size:10px;color:var(--subtle);font-style:italic;}.ri-empty{font-size:11px;color:var(--subtle);font-style:italic;padding:2px 0;}.ri-entries{display:flex;flex-wrap:wrap;gap:4px;}.ri-tag{display:inline-flex;align-items:center;gap:4px;font-size:10px;font-weight:600;border-radius:5px;padding:3px 7px;}.ri-tag-type{font-size:8px;font-weight:800;letter-spacing:.06em;opacity:0.7;}.ri-tag-x{background:none;border:none;cursor:pointer;font-size:10px;color:inherit;padding:0;opacity:0.6;font-family:inherit;line-height:1;}.ri-tag-x:hover{opacity:1;}.adv-card{display:flex;gap:8px;align-items:stretch;}.adv-checks{flex:1;display:flex;flex-direction:column;gap:5px;}.adv-row{display:flex;align-items:center;gap:10px;background:var(--card);border:1px solid var(--border);border-radius:9px;padding:8px 10px;cursor:pointer;transition:all .15s;text-align:left;font-family:inherit;width:100%;}.adv-row:hover{border-color:var(--accent);}.adv-on-adv{background:rgba(34,197,94,0.08)!important;border-color:rgba(34,197,94,0.35)!important;}.adv-on-dis{background:rgba(239,68,68,0.08)!important;border-color:rgba(239,68,68,0.35)!important;}.adv-chk{width:16px;height:16px;border-radius:3px;border:2px solid var(--border);flex-shrink:0;transition:all .15s;}.adv-chk-on-adv{background:var(--green);border-color:var(--green);}.adv-chk-on-dis{background:var(--red);border-color:var(--red);}.adv-lbl{font-size:12px;font-weight:500;color:var(--text);}.adv-dice-box{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;background:var(--card);border:1px solid var(--border);border-radius:9px;padding:8px;min-width:56px;flex-shrink:0;transition:border-color .15s;cursor:pointer;}.adv-dice-box:hover{border-color:var(--accent);}.adv-dice-lbl{font-size:10px;font-weight:700;color:var(--muted);letter-spacing:.05em;text-align:center;}.adv-results{display:flex;gap:5px;align-items:center;}.adv-result-box{width:34px;height:34px;border-radius:7px;border:2px solid var(--border);background:var(--input);display:flex;align-items:center;justify-content:center;font-family:'DM Mono',monospace;font-size:16px;font-weight:900;transition:all .15s;}.adv-result-win{background:rgba(0,0,0,0.03);font-size:20px!important;}.adv-reroll{font-size:9px;font-weight:700;color:var(--accent);background:rgba(99,102,241,0.07);border:1px solid rgba(99,102,241,0.2);border-radius:5px;padding:2px 7px;cursor:pointer;font-family:inherit;transition:all .15s;white-space:nowrap;}.adv-reroll:hover{background:rgba(99,102,241,0.15);}.iad-card{background:var(--card);border:1px solid var(--border);border-radius:10px;padding:10px 12px;display:flex;flex-direction:column;gap:8px;}.iad-title{font-size:9px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--text);}.iad-row{display:flex;gap:8px;align-items:center;}.iad-insp{flex:1;display:flex;align-items:center;gap:8px;background:var(--input);border:1px solid var(--border);border-radius:8px;padding:8px 10px;cursor:pointer;transition:all .15s;font-family:inherit;}.iad-insp:hover{border-color:var(--accent);}.iad-insp-on{background:rgba(99,102,241,0.07)!important;border-color:rgba(99,102,241,0.3)!important;}.iad-chk{width:16px;height:16px;border-radius:3px;border:2px solid var(--border);flex-shrink:0;transition:all .15s;}.iad-chk-on{background:var(--accent);border-color:var(--accent);}.iad-insp-lbl{font-size:12px;font-weight:500;color:var(--text);}.iad-counter{display:flex;align-items:center;gap:4px;}.iad-counter-sub,.iad-counter-add{width:28px;height:34px;border-radius:7px;background:var(--input);border:1px solid var(--border);font-size:16px;font-weight:700;color:var(--muted);cursor:pointer;display:flex;align-items:center;justify-content:center;font-family:inherit;transition:all .15s;}.iad-counter-sub:hover,.iad-counter-add:hover{border-color:var(--accent);color:var(--accent);}.iad-counter-num{width:34px;height:34px;border-radius:7px;background:var(--input);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .15s;font-family:'DM Mono',monospace;}.iad-counter-num:hover{border-color:var(--amber);}.iad-hint{font-size:9px;color:var(--subtle);font-style:italic;}.rest-card{background:var(--card);border:1px solid var(--border);border-radius:10px;padding:10px 12px;display:flex;flex-direction:column;gap:8px;}.rest-title{font-size:9px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--text);}.rest-row{display:flex;gap:8px;}.rest-btn{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;border-radius:9px;padding:10px 12px;cursor:pointer;transition:all .15s;font-family:inherit;text-align:center;}.rest-short{background:rgba(245,158,11,0.07);border:1px solid rgba(245,158,11,0.25);}.rest-short:hover{background:rgba(245,158,11,0.13);}.rest-long{background:rgba(99,102,241,0.07);border:1px solid rgba(99,102,241,0.25);}.rest-long:hover{background:rgba(99,102,241,0.13);}.rest-accent{width:3px;height:36px;border-radius:2px;flex-shrink:0;}.rest-btn-title{font-size:13px;font-weight:800;}.rest-btn-sub{font-size:10px;color:var(--muted);margin-top:1px;}.core-sheet-footer{text-align:center;font-size:10px;color:var(--subtle);letter-spacing:.06em;margin-top:24px;padding:8px 0 4px;border-top:1px solid var(--divider);}.panel{animation:fadeUp .18s ease;}@keyframes fadeUp{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}.two-col{display:grid;grid-template-columns:1fr 1fr;gap:14px;}.three-col{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;}.card-wrap{background:var(--card);border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,0.07);padding:12px 14px;margin-bottom:12px;}.flbl{font-size:10px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:var(--muted);margin-bottom:3px;display:block;}.gi{width:100%;background:var(--input);border:1px solid var(--border);border-radius:8px;color:var(--text);font-size:13px;padding:7px 10px;outline:none;transition:border-color .15s;}.gi::placeholder{color:var(--subtle);}.gi-sm{padding:4px 7px;font-size:12px;}.gi-center{text-align:center;}.gi-narrow{max-width:44px;}.gi-area{min-height:60px;line-height:1.6;}.muted-text{font-size:12px;color:var(--subtle);}.sec-head{display:flex;align-items:center;gap:7px;margin:12px 0 8px;}.sec-rune{font-size:13px;color:var(--accent);}.sec-title{font-size:10px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:var(--muted);white-space:nowrap;}.sec-rule{flex:1;height:1px;background:var(--divider);}.ab-row{display:grid;grid-template-columns:repeat(6,1fr);gap:8px;margin-bottom:8px;}.ab-box{background:var(--card);border:1px solid var(--border);border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,0.07);padding:8px 4px 6px;text-align:center;}.ab-primary{border-color:var(--accent)!important;background:rgba(99,102,241,0.05);}.ab-name{font-size:9px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);margin-bottom:2px;}.ab-mod{font-family:'DM Mono',monospace;font-size:20px;font-weight:800;color:var(--text);line-height:1.1;}.ab-score{font-family:'DM Mono',monospace;font-size:12px;color:var(--text);background:var(--input);border:1px solid var(--border);border-radius:6px;outline:none;width:36px;text-align:center;margin:3px 0 1px;padding:2px;}.ab-bonus{font-size:9px;color:var(--green);font-weight:600;margin-top:1px;}.species-bonus-row{display:flex;gap:6px;flex-wrap:wrap;align-items:center;margin-bottom:12px;}.sb-tag{background:rgba(34,197,94,0.1);border:1px solid rgba(34,197,94,0.2);color:var(--green);font-size:10px;font-weight:600;padding:2px 7px;border-radius:4px;}.sb-from{font-size:11px;color:var(--subtle);}.sv-row{display:flex;align-items:center;gap:6px;padding:4px 2px;cursor:pointer;border-bottom:1px solid var(--divider);transition:background .1s;}.sv-row:hover{background:rgba(99,102,241,0.04);}.sv-prof{background:rgba(99,102,241,0.05)!important;}.sv-dot{width:10px;height:10px;border-radius:50%;border:2px solid var(--border);flex-shrink:0;}.sv-dot-on{background:var(--accent);border-color:var(--accent)!important;}.sv-key{font-size:9px;font-weight:700;color:var(--accent);min-width:26px;letter-spacing:.04em;}.sv-label{font-size:11px;color:var(--text);flex:1;}.sv-bonus{font-family:'DM Mono',monospace;font-size:12px;font-weight:700;color:var(--text);}.sk-group{margin-bottom:2px;}.sk-row{display:flex;align-items:center;gap:6px;padding:4px 2px 4px 14px;cursor:pointer;border-bottom:1px solid var(--divider);transition:background .1s;}.sk-row:hover{background:rgba(99,102,241,0.04);}.sk-on{background:rgba(99,102,241,0.04);}.sk-chk{width:10px;height:10px;border-radius:50%;border:2px solid var(--border);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:6px;color:#fff;transition:all .15s;}.sk-p{background:var(--accent)!important;border-color:var(--accent)!important;}.sk-ex{background:var(--accent-dark)!important;border-color:var(--accent-dark)!important;}.sk-ab{font-size:9px;color:var(--subtle);min-width:26px;font-weight:600;}.sk-name{flex:1;font-size:11px;color:var(--text);}.sk-bonus{font-family:'DM Mono',monospace;font-size:12px;font-weight:700;color:var(--text);min-width:26px;text-align:right;}.prof-section{display:grid;grid-template-columns:1fr 1fr;gap:12px;}.tag{display:inline-block;font-size:10px;font-weight:500;padding:2px 8px;margin:2px 2px 2px 0;border-radius:5px;}.tag-blue{background:rgba(59,130,246,0.08);color:var(--mana);border:1px solid rgba(59,130,246,0.2);}.tag-red{background:rgba(239,68,68,0.08);color:var(--red);border:1px solid rgba(239,68,68,0.2);}.feat-list{display:flex;flex-direction:column;gap:10px;}.ft-card{background:var(--card);border:1px solid var(--border);border-radius:14px;box-shadow:0 1px 3px rgba(0,0,0,0.06);cursor:pointer;overflow:visible;}.ft-card-hdr{display:flex;align-items:center;justify-content:space-between;padding:14px 16px;}.ft-card-title{font-size:18px;font-weight:800;color:var(--text);}.ft-card-sub{font-size:12px;color:var(--muted);margin-top:2px;}.ft-chev{font-size:14px;color:var(--muted);font-weight:300;}.ft-chips{display:flex;flex-wrap:wrap;gap:8px;padding:0 16px 14px;}.ft-chip{font-size:13px;font-weight:500;color:var(--accent);background:rgba(99,102,241,0.07);border:1px solid rgba(99,102,241,0.2);border-radius:8px;padding:5px 12px;}.ft-expand{border-top:1px solid var(--divider);}.ft-expand-row{display:flex;align-items:center;flex-wrap:wrap;gap:6px;padding:10px 16px;border-bottom:1px solid var(--divider);cursor:pointer;}.ft-expand-row:last-child{border-bottom:none;}.ft-expand-name{flex:1;font-size:13px;font-weight:600;color:var(--text);}.ft-expand-chev{font-size:12px;color:var(--muted);}.ft-card-race{cursor:default!important;}.ft-lib-section-hdr{font-size:9px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);padding:8px 14px;background:var(--surface);border-bottom:1px solid var(--divider);border-radius:14px 14px 0 0;}.ft-lib-section-hdr-btn{cursor:pointer;display:flex;align-items:center;justify-content:space-between;}.ft-lib-section-hdr-btn:hover{background:var(--input);}.ft-hdr-chev{font-size:10px;color:var(--muted);}.ft-feature-list{margin-top:8px;display:flex;flex-direction:column;border-top:1px solid var(--divider);}.ft-cls-stat-row{display:flex;flex-wrap:wrap;gap:6px;margin:6px 0 4px;}.ft-cls-stat-tag{font-size:10px;font-weight:700;color:var(--accent);background:rgba(99,102,241,0.1);border:1px solid rgba(99,102,241,0.25);border-radius:5px;padding:2px 8px;white-space:nowrap;}.ft-feature-row-info{background:rgba(99,102,241,0.04)!important;}.feat-badge-info{background:rgba(99,102,241,0.12);color:var(--accent);border:1px solid rgba(99,102,241,0.2);}.ft-feature-divider{height:1px;background:var(--divider);margin:4px 0;}.ft-feature-row{display:flex;align-items:center;flex-wrap:wrap;gap:8px;padding:7px 0;border-bottom:1px solid var(--divider);}.ft-feature-row:last-child{border-bottom:none;}.ft-feature-row-click{cursor:pointer;}.ft-feature-row-click:hover .ft-feature-name{color:var(--accent);}.ft-feature-name{flex:1;font-size:12px;font-weight:600;color:var(--text);}.ft-feature-chev{font-size:10px;color:var(--muted);}.ft-feature-detail{width:100%;font-size:11px;color:var(--muted);font-style:italic;padding-top:3px;}.ft-lib-entry{padding:12px 14px;border-bottom:1px solid var(--divider);border-radius:0 0 14px 14px;}.ft-lib-entry:last-child{border-bottom:none;}.ft-lib-entry-hdr{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;}.ft-lib-entry-title{font-size:14px;font-weight:700;color:var(--text);display:flex;align-items:center;gap:6px;}.ft-lib-chev{font-size:9px;color:var(--muted);}.ft-lib-phb{font-size:10px;font-weight:700;color:#b45309;}.ft-lib-desc{font-size:13px;color:var(--text);line-height:1.6;margin-bottom:6px;}.ft-lib-notes{font-size:12px;color:var(--muted);font-style:italic;line-height:1.6;margin-bottom:8px;}.ft-subraces-tag{display:flex;flex-direction:column;align-items:flex-end;gap:1px;font-size:9px;color:var(--subtle);font-style:italic;margin-top:6px;padding-top:4px;border-top:1px solid var(--divider);}.ft-note-list{display:flex;flex-direction:column;gap:4px;margin:6px 0;}.ft-note-list-row{display:flex;align-items:center;}.ft-note-tags{display:flex;flex-wrap:wrap;gap:5px;}.ft-detail-row{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;position:relative;}.ft-detail-wrap{position:relative;}.ft-note-tag{font-size:11px;color:var(--text);background:var(--input);border:1px solid var(--border);border-radius:6px;padding:3px 9px;flex-shrink:0;display:inline-flex;align-items:center;gap:5px;}.ft-note-tag-clickable{cursor:pointer;border-color:var(--accent);color:var(--accent);background:rgba(99,102,241,0.06);}.ft-note-tag-asi-on{border-color:var(--green)!important;color:var(--green)!important;background:rgba(34,197,94,0.08)!important;}.ft-note-tag-clickable:hover{background:rgba(99,102,241,0.12);}.ft-info-icon{display:inline-flex;align-items:center;justify-content:center;width:14px;height:14px;border-radius:50%;background:var(--accent);color:#fff;font-size:9px;font-weight:800;font-style:normal;flex-shrink:0;}.ft-info-backdrop{position:fixed;inset:0;z-index:200;}.ft-info-popup{position:absolute;bottom:calc(100% + 6px);left:50%;transform:translateX(-50%);z-index:201;background:var(--card);border:1px solid var(--border);border-radius:10px;padding:10px 12px;box-shadow:0 6px 20px rgba(0,0,0,0.14);min-width:180px;max-width:240px;}.ft-info-popup-title{font-size:12px;font-weight:700;color:var(--text);margin-bottom:4px;}.ft-info-popup-body{font-size:11px;color:var(--muted);line-height:1.55;}.ft-lib-trait-row{display:flex;gap:6px;margin-bottom:4px;font-size:12px;}.ft-lib-trait-name{font-weight:700;color:var(--text);flex-shrink:0;}.ft-lib-trait-desc{color:var(--muted);}.ft-lib-tags{display:flex;flex-wrap:wrap;gap:5px;margin-top:6px;}.ft-lib-tag{font-size:11px;color:var(--muted);background:var(--input);border:1px solid var(--border);border-radius:5px;padding:2px 8px;}.ft-expand-body{width:100%;font-size:12px;color:var(--muted);line-height:1.55;padding:4px 0 2px;white-space:pre-wrap;}.feat-unified-card{background:var(--card);border:1px solid var(--border);border-radius:12px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,0.07);}.feat-section{display:flex;flex-direction:column;}.feat-section+.feat-section{border-top:2px solid var(--divider);}.feat-section-hdr{font-size:10px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);padding:8px 14px;background:var(--surface);border-bottom:1px solid var(--divider);}.feat-card-flat{border:none!important;border-left:none!important;border-right:none!important;border-top:none!important;border-radius:0!important;box-shadow:none!important;margin:0!important;background:transparent!important;border-bottom:1px solid var(--divider)!important;}.feat-card-flat:last-child{border-bottom:none!important;}.feat-card{background:var(--card);border:1px solid var(--border);border-radius:10px;box-shadow:0 1px 2px rgba(0,0,0,0.05);margin-bottom:6px;overflow:hidden;}.feat-card:hover{box-shadow:0 2px 6px rgba(0,0,0,0.1);}.feat-hdr{display:flex;align-items:center;gap:8px;padding:9px 12px;cursor:pointer;}.feat-badge{font-size:9px;font-weight:700;color:var(--accent);background:rgba(99,102,241,0.1);border:1px solid rgba(99,102,241,0.2);border-radius:5px;padding:1px 6px;flex-shrink:0;}.feat-badge-species{font-size:9px;font-weight:700;color:var(--amber);background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.25);border-radius:5px;padding:1px 6px;flex-shrink:0;}.feat-badge-dim{opacity:.4;}.feat-name{font-size:12px;font-weight:500;color:var(--text);flex:1;}.feat-gold{color:var(--amber)!important;font-weight:600;}.feat-chev{font-size:11px;color:var(--subtle);}.feat-body{padding:4px 12px 10px;font-size:12px;color:var(--muted);line-height:1.5;border-top:1px solid var(--divider);}.upcoming-label{font-size:9px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:var(--subtle);margin:16px 0 8px;}.feat-upcoming{display:flex;align-items:center;gap:8px;padding:6px 8px;opacity:.4;font-size:12px;color:var(--text);}.spell-stats{display:flex;align-items:center;gap:12px;}.ss-cell{text-align:center;flex:1;}.ss-divider{width:1px;background:var(--divider);align-self:stretch;}.ss-val{font-family:'DM Mono',monospace;font-size:16px;font-weight:800;color:var(--accent);}.ss-lbl{font-size:8px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:var(--muted);margin-top:2px;}.slot-levels{display:flex;flex-direction:column;gap:5px;margin-top:8px;}.slot-row{display:flex;align-items:center;gap:7px;}.slot-lvl{font-family:'DM Mono',monospace;font-size:11px;font-weight:700;color:var(--accent);min-width:14px;}.slot-pips{display:flex;gap:5px;flex-wrap:wrap;}.slot-pip{width:16px;height:16px;border:2px solid var(--border);border-radius:4px;cursor:pointer;transition:all .15s;position:relative;background:var(--card);}.slot-pip::before{content:'';position:absolute;inset:2px;background:transparent;transition:background .15s;border-radius:2px;}.slot-pip:hover{border-color:var(--accent);}.slot-used{border-color:var(--accent)!important;}.slot-used::before{background:var(--accent)!important;}.slot-rem{font-size:10px;color:var(--subtle);margin-left:4px;}.spell-tabs{display:flex;gap:5px;flex-wrap:wrap;margin:10px 0 10px;}.sp-tab{font-size:11px;font-weight:600;padding:5px 12px;background:var(--card);border:1px solid var(--border);border-radius:7px;color:var(--muted);cursor:pointer;transition:all .15s;}.sp-tab:hover{border-color:var(--accent);color:var(--text);}.sp-tab-on{border-color:var(--accent)!important;background:rgba(99,102,241,0.08)!important;color:var(--accent)!important;font-weight:700;}.sp-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:4px;}.sp-item{display:flex;align-items:center;gap:6px;padding:5px 8px;font-size:11px;color:var(--text);background:var(--card);border:1px solid var(--border);border-radius:7px;cursor:pointer;transition:all .12s;box-shadow:0 1px 2px rgba(0,0,0,0.04);}.sp-item:hover{border-color:var(--accent);}.sp-item-racial{border-color:rgba(34,197,94,0.4)!important;background:rgba(34,197,94,0.05)!important;}.sp-dot-racial{background:var(--green)!important;}.sp-item-domain{background:rgba(168,85,247,0.08)!important;border-color:rgba(168,85,247,0.35)!important;}.sp-dot-domain{background:rgba(168,85,247,0.8)!important;border-color:rgba(168,85,247,0.9)!important;}.sp-domain-tag{font-size:8px;font-weight:700;color:#9333ea;background:rgba(168,85,247,0.12);border:1px solid rgba(168,85,247,0.25);border-radius:3px;padding:1px 4px;margin-left:auto;flex-shrink:0;}.sp-racial-tag{font-size:8px;font-weight:700;color:var(--green);background:rgba(34,197,94,0.1);border:1px solid rgba(34,197,94,0.25);border-radius:4px;padding:1px 4px;margin-left:auto;flex-shrink:0;}.sp-on{border-color:var(--accent)!important;background:rgba(99,102,241,0.08)!important;color:var(--accent)!important;}.sp-dot{width:6px;height:6px;border-radius:50%;border:2px solid var(--border);flex-shrink:0;}.sp-on .sp-dot{background:var(--accent);border-color:var(--accent)!important;}.currency-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:4px;}.cur-cell{text-align:center;background:var(--input);border:1px solid var(--border);border-radius:6px;padding:4px 2px;}.cur-in{font-family:'DM Mono',monospace;font-size:13px;font-weight:700;color:var(--text);background:transparent;border:none;outline:none;width:100%;text-align:center;}.cur-lbl{font-size:8px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--amber);margin-top:3px;}.conv-title{font-size:9px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:var(--amber);margin-bottom:6px;}.conv-row{display:flex;justify-content:space-between;font-size:10px;color:var(--subtle);padding:3px 0;border-bottom:1px solid var(--divider);}.conv-row:last-child{border-bottom:none;}.conv-row span:first-child{color:var(--text);font-weight:500;}.shield-row{display:flex;align-items:center;gap:7px;cursor:pointer;font-size:13px;color:var(--text);}.shield-chk{width:14px;height:14px;border:2px solid var(--border);border-radius:4px;background:var(--card);display:flex;align-items:center;justify-content:center;font-size:8px;color:var(--accent);transition:all .15s;}.shield-on{background:rgba(99,102,241,0.1)!important;border-color:var(--accent)!important;}.photo-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:10px;}.photo-item{position:relative;height:140px;border-radius:10px;overflow:hidden;border:1px solid var(--border);}.photo-del{position:absolute;top:4px;right:4px;width:22px;height:22px;border-radius:50%;background:rgba(0,0,0,0.55);color:#fff;font-size:14px;display:flex;align-items:center;justify-content:center;line-height:1;}.photo-del:hover{background:rgba(239,68,68,0.8);}.photo-add{height:140px;border:2px dashed var(--border);border-radius:10px;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;transition:border-color .15s;}.photo-add:hover{border-color:var(--accent);}.condition-grid{display:flex;flex-wrap:wrap;gap:5px;}.condition-chip{font-size:11px;font-weight:500;padding:4px 10px;border-radius:6px;border:1px solid var(--border);background:var(--input);color:var(--text);cursor:pointer;transition:all .15s;}.condition-chip:hover{border-color:var(--accent);}.condition-on{background:rgba(239,68,68,0.1)!important;border-color:var(--red)!important;color:var(--red)!important;font-weight:700;}.empty-state{text-align:center;padding:48px 20px;color:var(--subtle);font-size:13px;}.skill-roll-tag{font-size:10px;font-weight:800;letter-spacing:.08em;padding:3px 10px;border-radius:6px;text-transform:uppercase;}.roll-crit-tag{background:rgba(34,197,94,0.12);color:var(--green);border:1px solid rgba(34,197,94,0.3);}.roll-fail-tag{background:rgba(239,68,68,0.1);color:var(--red);border:1px solid rgba(239,68,68,0.3);}.dt-popover-backdrop{position:fixed;inset:0;z-index:400;background:rgba(15,20,35,0.3);backdrop-filter:blur(2px);}.dt-popover{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);width:min(340px,92vw);max-height:calc(100dvh - 60px);z-index:401;display:flex;flex-direction:column;background:var(--card);border:1px solid var(--border);border-radius:18px;box-shadow:0 20px 60px rgba(0,0,0,0.22),0 4px 12px rgba(0,0,0,0.1);overflow:hidden;animation:dtPop .18s ease;}@keyframes dtPop{from{opacity:0;transform:translate(-50%,-52%) scale(0.96)}to{opacity:1;transform:translate(-50%,-50%) scale(1)}}.dt-popover-slim{width:min(280px,88vw)!important;}.dt-wrap{display:flex;flex-direction:column;height:100%;overflow:hidden;}.dt-hdr{display:flex;align-items:center;justify-content:space-between;padding:11px 14px;background:var(--surface);border-bottom:1px solid var(--border);flex-shrink:0;}.dt-title{font-size:15px;font-weight:700;color:var(--text);}.dt-body{flex:1;overflow-y:auto;padding:12px 14px;display:flex;flex-direction:column;gap:10px;}.dt-colors{display:flex;justify-content:center;gap:6px;flex-wrap:wrap;}.dt-swatch{width:22px;height:22px;border-radius:50%;cursor:pointer;padding:0;transition:transform .1s;}.dt-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;}.dt-die-btn{border-radius:10px;background:var(--input);border:1px solid var(--border);padding:10px 4px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .15s;font-family:inherit;}.dt-die-btn:hover{border-color:var(--accent);background:rgba(99,102,241,0.05);}.dt-die-active{background:rgba(99,102,241,0.1)!important;border-color:rgba(99,102,241,0.3)!important;}.dt-die-lbl{font-size:13px;font-weight:800;color:var(--text);font-family:'DM Mono',monospace;}.dt-die-active .dt-die-lbl{color:var(--accent);}.dt-tray{min-height:54px;background:var(--input);border-radius:9px;padding:7px 9px;border:1px solid var(--border);display:flex;align-items:center;flex-wrap:wrap;gap:5px;}.dt-tray-empty{font-size:11px;color:var(--subtle);font-style:italic;}.dt-tray-die{cursor:pointer;border-radius:7px;background:var(--card);border:1px solid rgba(99,102,241,0.2);padding:3px;transition:all .15s;}.dt-tray-die:hover{border-color:var(--red);background:rgba(239,68,68,0.05);}.dt-actions{display:flex;gap:7px;}.dt-roll-btn{flex:1;padding:8px;border-radius:9px;font-size:13px;font-weight:700;background:rgba(99,102,241,0.1);border:1px solid rgba(99,102,241,0.25);color:var(--accent-dark);cursor:pointer;transition:all .15s;font-family:inherit;}.dt-roll-btn:hover{background:rgba(99,102,241,0.18);}.dt-clear-btn{padding:8px 12px;border-radius:9px;font-size:12px;background:var(--input);border:1px solid var(--border);color:var(--muted);cursor:pointer;font-family:inherit;}.dt-results{text-align:center;border-top:1px solid var(--border);padding-top:10px;}.dt-results-breakdown{font-size:11px;color:var(--subtle);margin-bottom:3px;}.dt-results-total{font-size:44px;font-weight:900;color:var(--text);font-family:'DM Mono',monospace;line-height:1;}.dt-reroll-btn{margin-top:7px;font-size:11px;color:var(--accent);font-weight:600;padding:4px 12px;border-radius:6px;background:rgba(99,102,241,0.06);border:1px solid rgba(99,102,241,0.2);cursor:pointer;font-family:inherit;}.dt-reroll-btn:hover{background:rgba(99,102,241,0.12);}.hdr-lib-btn{display:flex;align-items:center;justify-content:center;background:rgba(34,197,94,0.07);border:1px solid rgba(34,197,94,0.25);border-radius:12px;color:var(--green);width:40px;height:40px;flex-shrink:0;transition:all .15s;cursor:pointer;}.hdr-lib-btn:hover{background:rgba(34,197,94,0.14);border-color:var(--green);}.hdr-collapse-btn{display:flex;align-items:center;justify-content:center;width:30px;height:30px;background:var(--input);border:1px solid var(--border);border-radius:8px;color:var(--muted);cursor:pointer;transition:all .15s;flex-shrink:0;}.hdr-collapse-btn:hover{border-color:var(--accent);color:var(--accent);}.lib-backdrop{position:fixed;inset:0;background:rgba(15,20,35,0.45);backdrop-filter:blur(3px);z-index:400;}.lib-panel{position:fixed;top:0;right:0;bottom:0;width:min(480px,100%);z-index:401;display:flex;flex-direction:column;background:var(--bg);box-shadow:-6px 0 32px rgba(0,0,0,0.18);animation:lpSlide .22s ease;}@keyframes lpSlide{from{opacity:0;transform:translateX(20px)}to{opacity:1;transform:translateX(0)}}.lp-wrap{display:flex;flex-direction:column;height:100%;overflow:hidden;}.lp-hdr{display:flex;align-items:center;justify-content:space-between;padding:13px 16px;background:var(--surface);border-bottom:1px solid var(--border);flex-shrink:0;}.lp-title{font-size:17px;font-weight:700;color:var(--text);}.lp-sub{font-size:11px;color:var(--subtle);margin-top:1px;}.lp-add{padding:7px 14px;border-radius:8px;font-size:12px;font-weight:600;background:rgba(99,102,241,0.1);border:1px solid rgba(99,102,241,0.25);color:var(--accent);cursor:pointer;transition:all .15s;font-family:inherit;}.lp-add:hover{background:rgba(99,102,241,0.18);}.lp-close{width:30px;height:30px;border-radius:7px;font-size:15px;color:var(--muted);background:var(--input);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .15s;}.lp-close:hover{color:var(--red);border-color:rgba(239,68,68,0.35);}.lp-toolbar{display:flex;gap:6px;padding:9px 12px;background:var(--surface);border-bottom:1px solid var(--border);flex-shrink:0;}.lp-search{flex:1;background:var(--card);border:1px solid var(--border);border-radius:7px;padding:7px 10px;font-size:13px;color:var(--text);outline:none;font-family:inherit;}.lp-search:focus{border-color:var(--border-focus);}.lp-filter{background:var(--card);border:1px solid var(--border);border-radius:7px;padding:7px 8px;font-size:13px;color:var(--text);cursor:pointer;outline:none;font-family:inherit;}.lp-list{flex:1;overflow:hidden;padding:12px 10px;display:flex;flex-direction:column;gap:10px;min-height:0;}.lp-empty{text-align:center;padding:40px;color:var(--subtle);font-size:13px;}.lp-shelf{position:relative;display:flex;align-items:flex-end;gap:3px;padding:10px 10px 0;background:linear-gradient(180deg,#f5ede0 0%,#ede0cc 100%);border-radius:10px 10px 0 0;min-height:130px;border:1px solid #c9b89a;border-bottom:none;flex-wrap:nowrap;overflow-x:auto;overflow-y:visible;scrollbar-width:thin;scrollbar-color:#c9b89a transparent;}.lp-shelf-board{position:absolute;bottom:-8px;left:-1px;right:-1px;height:12px;background:linear-gradient(180deg,#8b6914 0%,#6b4f10 100%);border-radius:0 0 6px 6px;box-shadow:0 4px 8px rgba(0,0,0,0.25);z-index:2;}.lp-shelf-end{width:10px;align-self:stretch;flex-shrink:0;background:linear-gradient(90deg,#8b6914,#6b4f10);border-radius:0 4px 4px 0;margin-bottom:0;}.lp-book{display:flex;flex-direction:column;align-items:stretch;width:44px;flex-shrink:0;cursor:pointer;border:none;padding:0;position:relative;transition:transform .2s ease,filter .2s ease;transform-origin:bottom center;}.lp-book:hover{transform:translateY(-8px) scale(1.04);filter:brightness(1.08);}.lp-book-open{transform:translateY(-14px) scale(1.06)!important;filter:brightness(1.12);}.lp-book-open .lp-book-spine::after{content:'';position:absolute;bottom:-2px;left:0;right:0;height:3px;background:rgba(255,255,255,0.6);border-radius:0 0 3px 3px;}.lp-book-head{height:8px;width:100%;background:var(--top);border-radius:3px 3px 0 0;box-shadow:inset 0 -2px 4px rgba(0,0,0,0.2);}.lp-book-spine{flex:1;min-height:90px;background:var(--spine);display:flex;flex-direction:column;justify-content:center;align-items:center;position:relative;box-shadow:inset -3px 0 6px rgba(0,0,0,0.2),inset 2px 0 4px rgba(255,255,255,0.08);gap:6px;padding:8px 2px;}.lp-book-spine::before{content:'';position:absolute;left:4px;top:0;bottom:0;width:2px;background:rgba(255,255,255,0.12);border-radius:1px;}.lp-book-title{writing-mode:vertical-rl;text-orientation:mixed;transform:rotate(180deg);font-size:10px;font-weight:700;color:rgba(30,41,59,0.85);letter-spacing:.06em;text-transform:uppercase;opacity:.95;max-height:80px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-shadow:0 1px 2px rgba(0,0,0,0.4);}.lp-book-count{font-size:9px;font-weight:700;color:rgba(30,41,59,0.85);opacity:.7;background:rgba(0,0,0,0.2);border-radius:10px;padding:1px 5px;min-width:18px;text-align:center;}.lp-book-contents{background:var(--card);border:1px solid var(--border);border-radius:0 0 10px 10px;padding:0;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.08);margin-top:8px;flex:1;display:flex;flex-direction:column;min-height:0;}.lp-book-contents-hdr{display:flex;align-items:center;gap:8px;padding:9px 14px;background:var(--surface);border-bottom:1px solid var(--divider);flex-shrink:0;position:sticky;top:0;z-index:2;}.lp-book-contents-entries{overflow-y:auto;flex:1;min-height:0;}.lp-book-contents-cat{font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.07em;color:var(--text);}.lp-book-contents-count{font-size:11px;color:var(--subtle);}.lp-contents-close{width:24px;height:24px;border-radius:6px;font-size:14px;color:var(--muted);background:var(--input);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;cursor:pointer;margin-left:auto;transition:all .15s;font-family:inherit;}.lp-contents-close:hover{color:var(--red);border-color:rgba(239,68,68,0.35);}.lp-folder{border-radius:9px;overflow:hidden;}.lp-folder-hdr{display:flex;align-items:center;gap:7px;padding:8px 12px;cursor:pointer;user-select:none;background:var(--card);border:1px solid var(--border);border-radius:9px;transition:all .15s;}.lp-folder-open{background:rgba(99,102,241,0.06)!important;border-color:rgba(99,102,241,0.22)!important;border-radius:9px 9px 0 0!important;}.lp-folder-name{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;flex:1;}.lp-folder-count{font-size:11px;color:var(--subtle);}.lp-chev{font-size:13px;color:var(--muted);flex-shrink:0;display:inline-block;transition:transform .18s;}.lp-folder-body{border:1px solid rgba(99,102,241,0.2);border-top:none;border-radius:0 0 9px 9px;padding:5px;display:flex;flex-direction:column;gap:4px;}.lp-entry{background:var(--card);border-radius:0;padding:8px 14px;box-shadow:none;border-bottom:1px solid var(--divider);}.lp-entry:last-child{border-bottom:none;}.lp-entry-row{display:flex;align-items:center;gap:6px;cursor:pointer;user-select:none;}.lp-entry-title{font-size:13px;font-weight:600;color:var(--text);flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.lp-phb-badge{font-size:9px;color:#b45309;font-weight:700;flex-shrink:0;}.lp-tce-badge{font-size:9px;color:var(--accent);font-weight:700;flex-shrink:0;}.lp-tce-lbl{font-size:9px;color:var(--accent);font-weight:600;}.lp-entry-body{margin-top:8px;padding-top:8px;border-top:1px solid var(--divider);}.lp-desc{font-size:12px;color:var(--muted);line-height:1.55;margin-bottom:5px;}.lp-notes{font-size:11px;color:var(--subtle);font-style:italic;margin-bottom:5px;white-space:pre-wrap;}.lp-tags{display:flex;flex-wrap:wrap;gap:3px;margin-bottom:6px;}.lp-tag{font-size:9px;color:var(--subtle);background:var(--input);border:1px solid var(--border);border-radius:4px;padding:1px 5px;}.lp-entry-foot{display:flex;justify-content:flex-end;margin-top:4px;gap:8px;}.lp-phb-lbl{font-size:9px;color:#b45309;font-weight:600;}.lp-edit-link{font-size:11px;font-weight:600;color:var(--accent);cursor:pointer;background:none;border:none;padding:0;font-family:inherit;}.lp-edit-link:hover{text-decoration:underline;}.lp-form{display:flex;flex-direction:column;gap:7px;}.lp-in{background:var(--input);border:1px solid var(--border);border-radius:7px;padding:6px 9px;font-size:12px;color:var(--text);outline:none;width:100%;font-family:inherit;}.lp-in:focus{border-color:var(--border-focus);}.lp-in-title{font-size:13px;font-weight:600;}.lp-ta{resize:vertical;min-height:60px;}.lp-form-btns{display:flex;gap:6px;}.lp-btn{flex:1;padding:7px;border-radius:7px;font-size:12px;font-weight:600;cursor:pointer;border:none;transition:all .15s;font-family:inherit;}.lp-done{background:rgba(99,102,241,0.08);border:1px solid rgba(99,102,241,0.25)!important;color:var(--accent);}.lp-done:hover{background:rgba(99,102,241,0.16);}.lp-del{background:rgba(239,68,68,0.08);border:1px solid rgba(239,68,68,0.25)!important;color:var(--red);flex:0;padding:7px 14px;}.lp-del:hover{background:rgba(239,68,68,0.16);}.lp-foot{padding:9px 14px;font-size:10px;color:var(--subtle);text-align:center;border-top:1px solid var(--border);flex-shrink:0;background:var(--surface);}.lightbox-backdrop{position:fixed;inset:0;background:rgba(15,15,25,0.85);backdrop-filter:blur(6px);z-index:1000;display:flex;align-items:center;justify-content:center;padding:20px;animation:lbFadeIn .2s ease;}@keyframes lbFadeIn{from{opacity:0}to{opacity:1}}.lightbox-panel{position:relative;border-radius:16px;overflow:hidden;max-width:480px;width:100%;box-shadow:0 24px 60px rgba(0,0,0,0.5);animation:lbSlideUp .22s ease;line-height:0;}@keyframes lbSlideUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}.lightbox-img{width:100%;max-height:80vh;object-fit:cover;display:block;}.lightbox-overlay{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:space-between;padding:14px;background:linear-gradient(180deg,rgba(0,0,0,0.45) 0%,transparent 35%,transparent 60%,rgba(0,0,0,0.6) 100%);}.lightbox-overlay-info{display:flex;flex-direction:column;gap:2px;}.lightbox-name{font-size:18px;font-weight:700;color:#fff;text-shadow:0 1px 4px rgba(0,0,0,0.6);}.lightbox-sub{font-size:12px;color:rgba(255,255,255,0.8);text-shadow:0 1px 3px rgba(0,0,0,0.5);}.lightbox-actions{display:flex;gap:8px;justify-content:flex-end;flex-wrap:wrap;}.lightbox-btn{font-size:12px;font-weight:600;padding:7px 14px;border-radius:8px;cursor:pointer;border:none;transition:all .15s;backdrop-filter:blur(4px);}.lightbox-btn-primary{background:rgba(255,255,255,0.2);color:#fff;border:1px solid rgba(255,255,255,0.3)!important;}.lightbox-btn-primary:hover{background:rgba(255,255,255,0.3);}.lightbox-btn-ghost{background:rgba(255,255,255,0.15);color:#fff;border:1px solid rgba(255,255,255,0.25)!important;}.lightbox-btn-ghost:hover{background:rgba(255,255,255,0.25);}.lightbox-btn-danger{background:rgba(239,68,68,0.4);color:#fff;border:1px solid rgba(239,68,68,0.5)!important;}.lightbox-btn-danger:hover{background:rgba(239,68,68,0.6);}input[type=number]{-moz-appearance:textfield;}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;}@media(max-width:700px){.hdr-stats{display:none;}.hdr-top-row{flex-wrap:wrap;}.ab-row{grid-template-columns:repeat(3,1fr);}.two-col{grid-template-columns:1fr;}.sp-grid{grid-template-columns:1fr 1fr;}}`;


// Mount the app (only when ReactDOM is available, i.e. outside Claude artifact)
if (typeof ReactDOM !== "undefined" && ReactDOM.createRoot) {
  const _root = ReactDOM.createRoot(document.getElementById('root'));
  _root.render(React.createElement(App));
}
