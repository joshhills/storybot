global.space_story = {
    
    "items" : {
        "ration_pack" : {
            name : "Ration Pack",
            description : "Disgusting food, but enough to live on.",
            img : "http://messengerbot.jumbledjargon.website/bot-content/storybot/space-escape/item-ration-pack.png"
        },
        "emergency_card" : {
            name : "Emergency Card",
            description : "Might get me through a few doors.",
            img : "http://messengerbot.jumbledjargon.website/bot-content/storybot/space-escape/item-emergency-card.png"
        },
        "vial" : {
            name : "Strange Vial",
            description : "Looks like some sort of sciencey thing.",
            img : "http://messengerbot.jumbledjargon.website/bot-content/storybot/space-escape/item-vial.png"
        },
        "gun" : {
            name : "Empty Gun",
            description : "Menacing, but unfortunately functionally useless without bullets.",
            img : "http://messengerbot.jumbledjargon.website/bot-content/storybot/space-escape/gun.png"
        },
        "taser" : {
            name : "Taser",
            description : "It goes 'BZZT' and makes people jiggle for a bit.",
            img : "http://messengerbot.jumbledjargon.website/bot-content/storybot/space-escape/item-taser.png"
        },
        "none" : {
            name : "Nothing",
            description : "You haven't found anything useful.",
            img : "http://messengerbot.jumbledjargon.website/bot-content/storybot/space-escape/item-none.png"
        }
    },
    
    "1" : {
        content : [
            {
                img : "http://jumbledjargon.website/messengerbot/bot-content/storybot/space-escape/the-empty-room.png"
            },
            {
                text : "Placing your weathered hands against the glass, you steel yourself for a fleeting glance at the cosmos."
            }
        ],
        options : [
            {
                text : "Wonder",
                advance : [
                    {
                        node : "2"
                    }
                ]
            },
            {
                text : "Despair",
                advance : [
                    {
                        node : "3"
                    }
                ]
            }
        ]
    },
    "2" : {
        content : [
            {
                img : "http://jumbledjargon.website/messengerbot/bot-content/storybot/space-escape/escape-room-wonder.png"
            },
            {
                text : "You patter your fingers against the steam traces, lifting your tired eyes to the spectacle. Wisps alight of weather, stricken across the fish-eyed expanse paint a reverent canvas. You trace the planet’s contours in your mind, a mesh of deep orange hues, feeling a sleepless burden ease."
            },
            {
                text : "Even in solitary moments, you have to appreciate how rad life is."
            }
        ],
        continue : "4"
    },
    "3" : {
        content : [
            {
                img : "http://jumbledjargon.website/messengerbot/bot-content/storybot/space-escape/escape-room-despair.png"
            },
            {
                text : "Sighing, you come to glare beyond the giant, tumbling diorama of life, into the dark expanse gnawing at its edges. Spattered minutely with traces of contrast, you feel sombre in your solitary comprehension of your insignificance."
            },
            {
                text : "Not a good day, all thing’s considered."
            }
        ],
        continue : "4"
    },
    "4" : {
        content : [
            {
                text : "Stimuli register the mop you placed against the wall starting to slide away."
            }
        ],
        options : [
            {
                text : "Catch it",
                advance : [
                    {
                        node : "5"
                    }
                ]
            },
            {
                text : "Let it fall",
                advance : [
                    {
                        node : "6"
                    }
                ]
            }
        ]
    },
    "5" : {
        content : [
            {
                text : "With an inward groan, you lash an arm outward, preserving the silence with a firm grasp. Now, holding your familiarly dull apparatus, you feel condemned to make your return."
            }
        ],
        continue : "7"
    },
    "6" : {
        content : [
            {
                text : "An obnoxious clatter breaches your moment, skittering about the walls, finally amalgamating into the hum of the ship. You might as well start heading back."
            }
        ],
        continue : "7"
    },
    "7" : {
        content : [
            {
                text : "Floors below, an intercom marks the end of the awake-period. You don’t even have to hear it."
            }
        ],
        options : [
            {
                text : "Room",
                advance : [
                    {
                        node : "8"
                    }
                ],
                remove : true
            },
            {
                text : "Window",
                advance : [
                    {
                        node : "11"
                    }
                ],
                remove : true
            },
            {
                text : "Door",
                advance : [
                    {
                        node : "14"
                    }
                ]
            }
        ]
    },
    "8" : {
        content : [
            {
                text : "It’s a function room, utilised by the ill-begotten crew for negotiating trade deals on the ships ‘goods’. It’s now lit only by the blue lights that trail the skirting of every room, casting an eerie presence about the once again spotless decor."
            }
        ],
        options : [
            {
                text : "I like blue.",
                advance : [
                    {
                        node : "9"
                    }
                ]
            },
            {
                text : "I hate blue.",
                advance : [
                    {
                        node : "10"
                    }
                ]
            }
        ]
    },
    "9" : {
        content : [
            {
                text : "At least there’s that."
            }
        ],
        continue : "7"
    },
    "10" : {
        content : [
            {
                text : "Once, it reminded you of the seas on the life-rich planets you would fly over. Now, it’s just standard health and safety."
            }
        ],
        continue : "7"
    },
    "11" : {
        content : [
            {
                img : "http://jumbledjargon.website/messengerbot/bot-content/storybot/space-escape/space-escape-window.png"
            },
            {
                text : "Your nightly entertainment, a roulette of locales. Where were you now?"
            }
        ],
        options : [
            {
                text : "Stuck",
                advance : [
                    {
                        node : "12"
                    }
                ]
            },
            {
                text : "Home",
                advance : [
                    {
                        node : "13"
                    }
                ]
            }
        ]
    },
    "12" : {
        content : [
            {
                text : "Trapped, and forced to work. And the universe keeps its steady pace of entropy out there, unaware."
            }
        ],
        continue : "7"
    },
    "13" : {
        content : [
            {
                text : "The behemoth outside reminds you of home."
            }
        ],
        continue : "7"
    },
    "14" : {
        content : [
            {
                img : "http://jumbledjargon.website/messengerbot/bot-content/storybot/space-escape/empty-room-leave.png"
            },
            {
                text : "Defeated, you trudge toward the door. You note that your limp is more pronounced than it was before, but it doesn’t influence your mood."
            },
            {
                text : "Taking an instinctive inventory, you scan the room a final time; surfaces sparkling, floor fumigating."
            },
            {
                text : "Shooting a silent prayer to the vacuum of space, you step through the energy field into one of hundreds of unnamed airlock corridors connected to the main passageway across the ship."
            }
        ],
        continue : "15"
    },
    "15" : {
        content : [
            {
                text : "As you pass the force-field, the band on your ankle spits menacingly, sending vibrations shuddering up your leg."
            },
            {
                text : "Up ahead is the rationing station."
            }
        ],
        options : [
            {
                text : "Band",
                advance : [
                    {
                        node : "16"
                    }
                ],
                remove : true
            },
            {
                text : "Rationing Station",
                advance : [
                    {
                        node : "19"
                    }
                ],
                remove : true
            },
            {
                text : "Main Passage",
                advance : [
                    {
                        node : "27"
                    }
                ]
            }
        ]
    },
    "16" : {
        content : [
            {
                img : "http://jumbledjargon.website/messengerbot/bot-content/storybot/space-escape/airlock-corridor-band.png"
            },
            {
                text : "Itching under the device worriedly, you notice that the clasps are rattling in an unfamiliar way. You’re unsure what the material is, but you’ve never been able to pry it off."
            }
        ],
        options : [
            {
                text : "Purpose",
                advance : [
                    {
                        node : "17"
                    }
                ],
                remove : true
            },
            {
                text : "Broken",
                advance : [
                    {
                        node : "18"
                    }
                ],
                remove : true
            }
        ],
        continue : "15"
    },
    "17" : {
        content : [
            {
                text : "The band keeps you here, in check. It prevents you access to restricted areas, and it really flarging hurts your leg."
            }
        ],
        continue : "16"
    },
    "18" : {
        content : [
            {
                text : "You’ve been here so long, the damn thing’s wearing down."
            }
        ],
        continue : "16"
    },
    "19" : {
        content : [
            {
                img : "http://jumbledjargon.website/messengerbot/bot-content/storybot/space-escape/airlock-corridor-rationing.png"
            },
            {
                text : "You approach the rationing station apprehensively. A screen, a bulbous camera and a chute, simple architecture for a simple purpose. You feel less like a smart ape and more like a dumb quorg."
            }
        ],
        options : [
            {
                text : "Chute",
                advance : [
                    {
                        node : "20"
                    }
                ],
                remove : true
            },
            {
                text : "Screen",
                advance : [
                    {
                        node : "21"
                    }
                ],
                remove : true
            },
            {
                text : "Camera",
                advance : [
                    {
                        node : "22"
                    }
                ]
            }
        ]
    },
    "20" : {
        content : [
            {
                text : "Obedience goes in, food comes out."
            }
        ],
        continue : "19"
    },
    "21" : {
        content : [
            {
                text : "You’ve never seen it active, but you can only assume it serves a purpose."
            }
        ],
        continue : "19"
    },
    "22" : {
        content : [
            {
                text : "Edging closer to the camera, you squint defiantly at its omniscience."
            }
        ],
        continue : "23"
    },
    "23" : {
        content : [
            {
                text : "A voice permeates the mechanism. \"Vocalise identification.\""
            }
        ],
        options : [
            {
                text : "Identify",
                advance : [
                    {
                        node : "24"
                    }
                ]
            },
            {
                text : "Silence",
                advance : [
                    {
                        node : "25"
                    }
                ]
            },
            {
                text : "Curse",
                advance : [
                    {
                        node : "26"
                    }
                ]
            }
        ]
    },
    "24" : {
        content : [
            {
                text : "You droll the identification number lasered into your arm. Whirring pistons yield a ration-pack, spat out at the base of the chute with a displeasingly heavy thud. You take it nonetheless."
            }
        ],
        actions : [
            {
                type : "add",
                what : "item",
                which : "ration_pack"
            }
        ],
        continue : "15"
    },
    "25" : {
        content : [
            {
                text : "You stare silently, and after a margin of seconds, the camera droops into unconsciousness. You realise with dismay that since you’d spent so long ogling the outside, your window for food retrieval has now passed. You hope you wont wake the others with your stomach."
            }
        ],
        continue : "15"
    },
    "26" : {
        content : [
            {
                text : "You defiantly raise a rude gesture to the camera, daring punishment. It deserves this."
            },
            {
                text : "Waiting a few tense moments, you wince with a start as the machine responds."
            },
            {
                text : "\"Disobedience will not be tolerated. Infraction logged.\""
            },
            {
                text : "Your work band sputters and smokes curiously. Usually, this was a lot more painful, but regardless, you now have to endure another shift without food."
            }
        ],
        continue : "15"
    },
    "27" : {
        content : [
            {
                img : "http://jumbledjargon.website/messengerbot/bot-content/storybot/space-escape/main-pass.png"
            },
            {
                text : "The muffled chatter of robotics fills your ears as you step onto the main connecting pathway spanning the ships breadth. This walkway, reserved for maintenance and security personnel, spans translucent across the ceiling’s breadth of the merchant vessel."
            },
            {
                text : "It takes you directly to your work quarters, and ergo a measly 0.0002 parsecs of sleep before you have to tread in reverse."
            }
        ],
        options : [
            {
                text : "Keep walking",
                advance : [
                    {
                        node : "28"
                    }
                ]
            },
            {
                text : "Look down",
                advance : [
                    {
                        node : "29"
                    }
                ],
                remove : true
            },
            {
                text : "Monitor Room",
                advance : [
                    {
                        node : "32"
                    }
                ],
                remove : true
            }
        ]
    },
    "28" : {
        content : [
            {
                text : "You clatter along, shaking your thoughts free of the bustle below. Before long, you approach the entrance to the work-quarters."
            }
        ],
        continue : "36b"
    },
    "29" : {
        content : [
            {
                text : "Looking beneath you, you see spindlers gyrating mercilessly against the weight of freight containers. Darkened figures weave between the trenches. A haberdashery of stolen goods that power the ship more than its fuel repository ever could."
            }
        ],
        options : [
            {
                text : "Stolen",
                advance : [
                    {
                        node : "30"
                    }
                ],
                remove : true
            },
            {
                text : "Figures",
                advance : [
                    {
                        node : "31"
                    }
                ],
                remove : true
            }
        ],
        continue : "27"
    },
    "30" : {
        content : [
            {
                text : "Your captors run a tight ship. On many occasions, you’ve marvelled at the economic efficacy of a nomadic squadron of corrupt space-pirates, but you can appreciate that despite the ugly nature of their business, it was well orchestrated."
            }
        ],
        continue : "29"
    },
    "31" : {
        content : [
            {
                text : "Hypothesising their role has long since became a futile game of sport in your head. It’s likely they take inventory. Maybe, like you, they were hoisted from their world and forced to work. Or maybe they are automatons. No time to ponder tonight."
            }
        ],
        continue : "29"
    },
    "32" : {
        content : [
            {
                img : "http://jumbledjargon.website/messengerbot/bot-content/storybot/space-escape/monitor-room.png"
            },
            {
                text : "The ship is large, and needs more than a few sockets to keep track of its potentially volatile contents, you included. Unbelievably, the door is ajar."
            }
        ],
        options : [
            {
                text : "Enter",
                advance : [
                    {
                        node : "33"
                    }
                ]
            },
            {
                text : "Ignore",
                advance : [
                    {
                        node : "28"
                    }
                ]
            }
        ]
    },
    "33" : {
        content : [
            {
                text : "You poke your head through the crack with baited breath to face an empty room. The monitors are powered down, save for two. One presents an intermittent static, the other is clear."
            }
        ],
        options : [
            {
                text : "Clear Monitor",
                advance : [
                    {
                        node : "34"
                    }
                ],
                remove : true
            },
            {
                text : "Static Monitor",
                advance : [
                    {
                        node : "35"
                    }
                ],
                remove : true
            },
            {
                text : "Root Around",
                advance : [
                    {
                        node : "36"
                    }
                ],
                remove : true
            }
        ]
    },
    "34" : {
        content : [
            {
                text : "The clear picture is tracking the incoming and outgoing ships at the docking station. Smaller scavenger units cascade in and out intermittently, lauding their haul over the other crew members. It looks like there’s one coming in to land."
            }
        ],
        continue : "33"
    },
    "35" : {
        content : [
            {
                text : "Perplexed, you are able to make out a figure against a silver back-drop. Then, shakily defined rows of cages; the secret ‘goods’. Then, nothing. The feed seems to be on a split loop."
            }
        ],
        continue : "33"
    },
    "36" : {
        content : [
            {
                text : "Chest thudding, you frantically paw between the crevices of each desk looking for something useful. You pass on a few objects too large to endure a spot-inspection, and your hands grasp frantically at something useful. You feel the embers of rebellion, and pocket it before beating a swift retreat."
            }
        ],
        actions : [
            {
                type : "add",
                what : "item",
                which : "emergency_card"
            }
        ],
        continue : "27"
    },
    "36b" : {
        content : [
            {
                img : "http://jumbledjargon.website/messengerbot/bot-content/storybot/space-escape/work-quarters.png"  
            },
            {
                text : "Even now, you find the smell hard to comprehend. The stark juxtaposition of chemicals and cleaning agents to the ripe bodies of your dismal associates jars you, and does little to help the jumble of emotions in your head."
            },
            {
                text : "You target the nearest bunk, ready to succumb to the unknown. It’s right next to the door to the guard’s quarters, so it’s no wonder the stained sheets are absent a weary soul."
            }
        ],
        options : [
            {
                text : "Bed",
                advance : [
                    {
                        node : "37"
                    }
                ]
            },
            {
                text : "Door",
                advance : [
                    {
                        node : "56"
                    }
                ]
            }
        ]
    },
    "37" : {
        content : [
            {
                text : "You lower yourself into bed, stifling a groan. An acrylic cover extends over you, almost shrink-wrapping you into place, as a series of scanners log your bodily state."
            }
        ],
        options : [
            {
                text : "Scanners",
                advance : [
                    {
                        node : "38"
                    }
                ],
                remove : true
            },
            {
                text : "Sleep",
                advance : [
                    {
                        node : "39"
                    }
                ]
            }
        ]
    },
    "38" : {
        content : [
            {
                text : "Morbidly, you have come to realise that this is done to give the crew an understanding of how long you will be able to work for. Have to look after the work-force to some extent. It saves them cryptobits in the long run."
            }
        ],
        continue : "37"
    },
    "39" : {
        content : [
            {
                text : "You attempt to sleep. It’s going well, for a few minutes, until you feel an uneasy presence looming."
            },
            {
                img : "http://jumbledjargon.website/messengerbot/bot-content/storybot/space-escape/work-quarters-girl.png"  
            },
            {
                text : "\"Hey. You awake?\""
            }
        ],
        options : [
            {
                text : "I am now",
                advance : [
                    {
                        node : "40"
                    }
                ]
            },
            {
                text : "...",
                advance : [
                    {
                        node : "41"
                    }
                ]
            },
            {
                text : "No?",
                advance : [
                    {
                        node : "42"
                    }
                ]
            }
        ]
    },
    "40" : {
        content : [
            {
                text : "\"Oh, sorry. I need to speak to you.\""
            }
        ],
        continue : "43"
    },
    "41" : {
        content : [
            {
                text : "\"Not much of a talker, huh? I’ve seen you around; clean-up, right? Any really dirty shlop?\""
            }
        ],
        continue : "43"
    },
    "42" : {
        content : [
            {
                text : "\"Funny. I need to tell you something though.\""
            }
        ],
        continue : "43"
    },
    "43" : {
        content : [
            {
                text : "It’s a girl’s voice. She’s hanging over the edge of the bunk above, but you can only make out a silhouette in the darkness."
            }
        ],
        options : [
            {
                text : "Flarb off",
                advance : [
                    {
                        node : "44"
                    }
                ]
            },
            {
                text : "What do you want?",
                advance : [
                    {
                        node : "45"
                    }
                ]
            }
        ]
    },
    "44" : {
        content : [
            {
                text : "\"Fine. Your funeral.\""
            }
        ],
        actions : [
            {
                type : "add",
                what : "flag",
                which : "angry_girl"
            }
        ],
        continue : "63"
    },
    "45" : {
        content : [
            {
                text : "\"Your slave bracelet, it’s glowing red. And it’s keeping me up.\""
            }
        ],
        options : [
            {
                text : "Not a slave",
                advance : [
                    {
                        node : "46"
                    }
                ],
                remove : true
            },
            {
                text : "Broken",
                advance : [
                    {
                        node : "47"
                    }
                ]
            }
        ]
    },
    "46" : {
        content : [
            {
                text : "\"Yeah, and I’m Queen Molessa of System A. You’re as much a slave as the poor flarbs down in containment, just a different dress.\""
            }
        ],
        continue : "45"
    },
    "47" : {
        content : [
            {
                text : "You tell her about the band’s malfunctions."
            },
            {
                text : "\"Seriously?! Man, this could be your ticket out. I’m pretty good at fiddling with things. I’ve always wanted to be a mechanista. Want me to take a look?\""
            }
        ],
        options : [
            {
                text : "Yes",
                advance : [
                    {
                        node : "48",
                        constraints : [
                               {
                                    type : "flag",
                                    set : true,
                                    name : "happy_girl"
                               }
                        ]
                    },
                    {
                        node : "48",
                    }
                ]
            },
            {
                text : "No",
                advance : [
                    {
                        node : "53"
                    }
                ]
            },
            {
                text : "Mechanista?",
                advance : [
                    {
                        node : "54"
                    }
                ],
                remove : true
            }
        ]
    },
    "48" : {
        content : [
            {
                text : "She hops down with ease, and begins wiggling your leg. You still can’t see, and you’re a little taken aback by her forwardness. Amazingly, a few minutes later, her sleight of hand yields an unbound leg."
            },
            {
                text : "\"Tah-dah! Here, I’ll let you have this as a souvenir.\""
            }
        ],
        actions : [
            {
                type : "add",
                what : "item",
                which : "broken_band"
            }
        ],
        continue : "63"
    },
    "49" : {
        content : [
            {
                text : "\"Do I get anything in return?\""
            }
        ],
        options : [
            {
                text : "No",
                advance : [
                    {
                        node : "50"
                    }
                ]
            },
            {
                text : "Ration Pack",
                constraints : [
                    {
                        type : "item",
                        set : true,
                        name : "ration_pack"
                    }
                ],
                advance : [
                    {
                        node : "51"
                    }
                ]
            }
        ]
    },
    "50" : {
        content : [
            {
                text : "\"Hmm. It’s probably not worth the risk then. Forget I said anything okay?\""
            },
            {
                text : "\"She disappears, just as suddenly as she appeared.\""
            }
        ],
        continue : "63"
    },
    "51" : {
        content : [
            {
                text : "\"One ration pack? I don’t think that’s a fair trade.\""
            }
        ],
        options : [
            {
                text : "Nothing else",
                advance : [
                    {
                        node : "52"
                    }
                ]
            },
            {
                text : "Please?",
                advance : [
                    {
                        node : "52"
                    }
                ]
            }
        ]
    },
    "52" : {
        content : [
            {
                text : "Well... I guess it’ll have to do."
            }
        ],
        continue : "48"
    },
    "53" : {
        content : [
            {
                text : "\"Oh. Well, okay. They’ll just fit you with a new one when they notice. Forget I said anything okay?\""
            },
            {
                text : "She disappears, just as suddenly as she appeared."
            }
        ],
        continue : "63"
    },
    "54" : {
        content : [
            {
                text : "\"Yeah, but they’ve got me running kitchen duty. It’s absolute torture. They make me cook lavish meals, and then I’m stuck feeling hungry with these ridiculously tiny portions.\""
            },
            {
                text : "Even in her hushed tones, she seems happy to have somebody to confide in."
            }
        ],
        actions : [
            {
                type : "add",
                what : "flag",
                which : "happy_girl"
            }
        ],
        options : [
            {
                text : "Hear anything?",
                advance : [
                    {
                        node : "55"
                    }
                ]
            }
        ]
    },
    "55" : {
        content : [
            {
                text : "\"While I’m down there? Loads. Usually I shy away from it- whenever they ever notice me…\""
            },
            {
                text : "She looks away. Even purely verbally, you can tell there’s more to her than it seems, but worried by the implication, you don’t venture to pry. She recomposes herself."  
            },
            {
                text : "\"Something happened today. Didn’t get the full scoop, but one of the rotten merchants came back with nothing. Claims one of us must have sabotaged his ship or something, but I’m not sure how they’re taking it.\""
            },
            {
                text : "\"Personally, I think he’s full of quorb.\""
            }
        ],
        continue : "47"
    },
    "56" : {
        content : [
            {
                img : "http://jumbledjargon.website/messengerbot/bot-content/storybot/space-escape/work-quarters-door.png"  
            },
            {
                text : "You examine the door and its access port. Not controlled by an energy field, this security door like all others on board are proudly stamped with the emblem of Avanic’s Shipyard – “fire, pressure and intruder proof”."
            },
            {
                text : "Maybe there were riots before your forcible novitiate to the world of space janitor-ing. Maybe the ship’s inconsistent appearance harkens from its history – a sordid string of damage, salvage and repairs."
            },
            {
                text : "You know you’ve been dealt a rough hand when you can find a door so interesting."
            }
        ],
        options : [
            {
                text : "Access Port",
                advance : [
                    {
                    node : "57"
                    }
                ]
            }
        ]
    },
    "57" : {
        content : [
            {
                text : "Behind the door lies a corridor streaked with bright lights. Every time you’ve seen it, the rays have blinded you before being sucked back in again. The card-slot is usually accessed by those in power."
            }
        ],
        options : [
            {
                text : "Use Emergency Card",
                constraints : [
                    {
                        type : "item",
                        set : true,
                        name : "emergency_card"
                    }
                ],
                advance : [
                    {
                        node : "59"
                    }
                ]
            },
            {
                text : "Sigh",
                advance : [
                    {
                        node : "58"
                    }
                ]
            }
        ]
    },
    "58" : {
        content : [
            {
                text : "A valiant escape is something for legend. Fiction. Thoughts like this have only ever made you tired."
            }
        ],
        continue : "63"
    },
    "59" : {
        content : [
            {
                text : "Despite not being in a position of power, and making a snap decision, you creep past the heaving bodies, fumbling in your overalls for the card you found in the monitoring station."
            },
            {
                text : "Sliding it in with a slick, suction noise, the bolts on the door spin rapidly, and a fierce alarm erupts. You hear grubby, startled voice behind you, as you stare dumbfounded into a well-lit empty corridor."  
            },
            {
                img : "http://jumbledjargon.website/messengerbot/bot-content/storybot/space-escape/work-quarters-open.png"  
            }
        ],
        actions : [
            {
                type : "remove",
                what : "item",
                which : "emergency_card"
            }
        ],
        options : [
            {
                text : "Run Forward",
                advance : [
                    {
                        node : "60"
                    }
                ]
            },           
            {
                text : "Remove Card",
                advance : [
                    {
                        node : "61"
                    }
                ]
            },
            {
                text : "Run Back",
                advance : [
                    {
                        node : "62"
                    }
                ]
            }
        ]
    },
    "60" : {
        content : [
            {
                text : "Freeing yourself from your inhibitions, you stun the entire work force by pulsing your feet ahead into the guard’s sector. This is it, the end. You can taste freedom. It tastes surprisingly warm, and iron-like."
            },
            {
                text : "You gurgle blood as bullets serenading effortlessly from the parade of irate guards swarming the bend riddle your body, collapsing to your knees."
            },
            {
                img : "http://www.jumbledjargon.website/messengerbot/bot-content/storybot/space-escape/death-shot.png"  
            },
            {
                text : "Unfortunately, taking on several highly armed enemies with nothing but a limp and an optimistic spirit has not proved effective. But at least you died a martyr?"
            }
        ],
        options : [
            {
                text : "Start Over",
                advance : [
                    {
                        node : "1"
                    }
                ]
            }
        ]
    },
    "61" : {
        content : [
            {
                text : "Grabbing the emergency card again, you attempt to yank it out to silence the alarm. It seems to be held in place magnetically, but you manage to crack it with torsion, and flail backwards holding the majority of it’s micro-filmic innards."
            },
            {
                text : "As the card is removed, the door swings suddenly shut, slamming with a crunch against your ankle and breaking your band. You take some damage. You leap back into bed, filling with a terrified regret."
            },
            {
                text : "A sea of similarly shocked eyes sparkle back singularly at you, and you realise you might have just made an incredibly spontaneous mistake."
            }
        ],
        continue : "63"
    },
    "62" : {
        content : [
            {
                text : "You leap back into bed, filling with a terrified regret. A sea of similarly shocked eyes sparkle back singularly at you, and you realise you might have just made an incredibly spontaneous mistake."
            }
        ],
        continue : "63"
    },
    "63" : {
        content : [
            {
                text : "After a period of silence, sorting through the prior events in your mind, you hear aggressive voices on the other side of the guard door. A thud, then a clunk. Then, they’re in."
            },
            {
                text : "\"Okay, you’ve got ‘til the count of three to point some fingers.\""
            },
            {
                img : "http://jumbledjargon.website/messengerbot/bot-content/storybot/space-escape/work-quarters-guard.png"  
            },
            {
                text : "The barrels of laser rifles dart accusingly from worker to worker, each as exhausted and pale as the next."
            },
            {
                text : "\"Him.\" You glance up, frozen, to meet the illuminated face of your betrayer. Admittedly, you shouldn’t have been so terse, but you still very strongly want to punch her in this instance.",
                constraints : [
                    {
                        type : "flag",
                        set : true,
                        name : "angry_girl"
                    }
                ]
            },
            {
                text : "\"You!\". The other’s looks, coupled with the way you’re shaking tells the guard all he needs to know.",
                constraints : [
                    {
                        type : "flag",
                        set : false,
                        name : "angry_girl"
                    }
                ]
            },
            {
                text : "You’re dragged by your arms, stumbling away from the flabbergasted room-mates of the flop-house you’ve laid claim to for so long, to a probable death. "
            }
        ],
        continue : "64"
    },
    "64" : {
        content : [
            {
                text : "You’re thrown rather rudely into a holding room in the guard’s sector. Your vision is hazy, and you were kicked a few times on the way."
            }
        ],
        options : [
            {
                text : "Room",
                advance : [
                    {
                        node : "65"
                    }
                ]
            }
        ]
    },
    "65" : {
        content : [
            {
                img : "http://www.jumbledjargon.website/messengerbot/bot-content/storybot/space-escape/interrogation-room.png"  
            },
            {
                text : "A far cry from lavish living, the rickety chair in the corner, marooned by the stained floor gives you an impression of past events. You wonder if it’s soundproofed."
            },
            {
                text : "There’s a cheap-looking mirror, and an energy field leading back out into the white corridor."
            }
        ],
        options : [
            {
                text : "Mirror",
                advance : [
                    {
                        node : "66"
                    }
                ],
                remove : true
            },
            {
                text : "Door",
                advance : [
                    {
                        node : "67",
                        constraints : [
                               {
                                    type : "item",
                                    set : true,
                                    name : "ankle_band"
                               }
                        ]
                    },
                    {
                        node : "68",
                    }
                ]
            }
        ]
    },
    "66" : {
        content : [
            {
                text : "Your warped reflection peers nervously back. You wipe some blood from your head, and wink at yourself, for some reason."
            }
        ],
        continue : "65"
    },
    "67" : {
        content : [
            {
                text : "A quick back-and-forth between your malfunctioning ‘slave bracelet’ and the door gives you an inkling of hope. Perhaps trying to pass wont render you completely immobile."
            },
            {
                text : "It doesn’t look like you have much of a choice."
            }
        ],
        continue : "69"
    },
    "68" : {
        content : [
            {
                text : "A quick back-and-forth between your liberated ankle and the door leaves you feeling giddy. They mustn’t have noticed in the commotion, but you can walk out without injury. You feel very sneaky."
            }
        ],
        continue : "69"
    },
    "69" : {
        content : [
            {
                text : "It’s unclear why they left you alone so suddenly, but you can hear voices far away. You need to scarper."
            }
        ],
        options : [
            {
                text : "Leave",
                advance : [
                    {
                        node : "70",
                        constraints : [
                               {
                                    type : "item",
                                    set : true,
                                    name : "ankle_band"
                               }
                        ]
                    },
                    {
                        node : "73",
                    }
                ]
            }
        ]
    },
    "70" : {
        content : [
            {
                text : "Bracing yourself for a dart of faith, you grimace with pain as electrified bolts coarse unpleasantly throughout your body, emanating up your leg into your head. Slumping to the floor outside, and gasping sporadically, you can’t believe that worked. So much for galactic engineering."
            },
            {
                text : "You come to face the guard corridor, as your band finally gives up and drops off."
            },
            {
                text : "Do you pick it up?"
            }
        ],
        options : [
            {
                text : "No",
                advance : [
                    {
                        node : "71"
                    }
                ]
            },
            {
                text : "Yes",
                advance : [
                    {
                        node : "72"
                    }
                ]
            }
        ]
    },
    "71" : {
        content : [
            {
                text : "It probably wouldn’t make the best memento."
            }
        ],
        continue : "74"
    },
    "72" : {
        content : [
            {
                text : "Maybe one day I can hang it from the grill of a Y-Wing."
            }
        ],
        actions : [
            {
                type : "add",
                what : "item",
                which : "broken_band"
            }
        ],
        continue : "74"
    },
    "73" : {
        content : [
            {
                text : "Poking your finger through the buzzing, translucent sheet of improbable air in front of yourself with hesitation, your chest sags with delight. No pain, but gain. Striding through with a newfound confidence, green energy washing over your pores, you come to face the guard corridor."
            }
        ],
        continue : "74"
    },
    "74" : {
        content : [
            {
                text : "A stretch behind is the bend leading back to your work quarters; or, should you believe it, your previous work quarters. No matter the outcome, there’s no way you’ll ever be mopping a floor again. Ahead is… unknown."
            }
        ],
        options : [
            {
                text : "Back to work",
                advance : [
                    {
                        node : "75"
                    }
                ],
                remove : true
            },
            {
                text : "The unknown",
                advance : [
                    {
                        node : "76"
                    }
                ]
            }
        ]
    },
    "75" : {
        content : [
            {
                text : "You blame the terrible idea of going back on your new concussion, and shift your focus to the future."
            }
        ],
        continue : "74"
    },
    "76" : {
        content : [
            {
                text : "Boldly going where no worker has gone before, you tread with purpose down the guard corridor."
            },
            {
                img : "http://www.jumbledjargon.website/messengerbot/bot-content/storybot/space-escape/guard-corridor-shadow.png"  
            },
            {
                text : "Suddenly, shadows spring out of the corner, and you can hear the rumble of what you assume is more guards."
            }
        ],
        options : [
            {
                text : "Stand your ground",
                advance : [
                    {
                        node : "77"
                    }
                ]
            },
            {
                text : "Hide",
                advance : [
                    {
                        node : "82"
                    }
                ]
            }
        ]
    },
    "77" : {
        content : [
            {
                text : "Steeling yourself for conflict, a daunting figure approaches. Laden in scuffed armour, garish facemask framing his scarred eyes, you recognise this man as the chief of the guard aboard the crooked ship. Trailing him is a taller, wide-eyed individual in similar attire, who appears to be having trouble keeping pace."
            },
            {
                text : "\"This is ridiculous. It’s a liability, you should-\""
            },
            {
                text : "He spots you, and pauses. In an instant, he’s infuriated."
            },
            {
                text : "\"YOU. PRISONER, WHAT ARE YOU DOING OUT OF YOUR CELL. PUT YOUR HANDS WHERE I CAN SEE THEM.\""
            },
            {
                text : "Levelling his laser rifle, he screams bloody murder."
            },
            {
                text : "\"NOW.\""
            }
        ],
        options : [
            {
                text : "Put your hands up",
                advance : [
                    {
                        node : "78"
                    }
                ]
            },
            {
                text : "Run for it",
                advance : [
                    {
                        node : "81"
                    }
                ]
            }
        ]
    },
    "78" : {
        content : [
            {
                text : "You quiver as you raise your arms. The chief advances forward, menacingly. After a few tense seconds, he’s close enough to touch. Looming over you, he snarls."
            },
            {
                text : "\"You’re dead.\""
            }
        ],
        options : [
            {
                text : "Attack",
                advance : [
                    {
                        node : "79"
                    }
                ]
            },
            {
                text : "Kneel",
                advance : [
                    {
                        node : "80"
                    }
                ]
            }
        ]
    },
    "79" : {
        content : [
            {
                text : "He can’t be expecting you to put up a fight. You lunge forward, knocking the gun askew and slam your head into his. It hurts for both of you, but it’s enough to confuse him. He shrieks with surprise, and you stumble over him, sprinting towards the end of the corridor."
            },
            {
                text : "Glancing back with horror, you see his lackey training his sights on you."
            },
            {
                text : "A chorus of strange, piercing noises, and your arm sears with a burning pain."
            },
            {
                text : "You take a few different corners, lucky to not run into any others. Finally, pausing to inspect your wounds, you see that the energy beam has permeated your undershirt, and melded its material to the back of your forearm with a sickening black stamp. Flarb."
            }
        ],
        continue : "88"
    },
    "80" : {
        content : [
            {
                text : "Accepting your fate, you allow yourself to be shoved to the ground. Praying for pity, you take a final, searching look up to find your nose parallel to the intricate set of fritzing wires at the dangerous end of the chief’s rifle."
            },
            {
                img : "http://www.jumbledjargon.website/messengerbot/bot-content/storybot/space-escape/death-shot.png"  
            },
            {
                text : "\"This is what we do to trouble-makers on this ship.\""
            },
            {
                text : "Blackness."
            }
        ],
        options : [
            {
                text : "Start Over",
                advance : [
                    {
                        node : "1"
                    }
                ]
            }
        ]
    },
    "81" : {
        content : [
            {
                text : "Veins flowing thick and fast with adrenaline, you lurch in a zig-zag pattern towards the guards. You hear them chuckle as you splinter with pure, searing beams of energy. This is a sport for them, and as you collapse and take a final breath you’re a bit annoyed you didn’t have any better ideas."
            },
            {
                img : "http://www.jumbledjargon.website/messengerbot/bot-content/storybot/space-escape/death-shot.png"  
            }
        ],
        options : [
            {
                text : "Start Over",
                advance : [
                    {
                        node : "1"
                    }
                ]
            }
        ]
    },
    "82" : {
        content : [
            {
                text : "You fling yourself to the side, accidentally stumbling into a room and half-sprawling over a work-bench. You wish your job had demanded a nimbler physique."
            },
            {
                text : "Ducking down quietly, you hear a gradual amplification in the voices passing, until…"
            },
            {
                img : "http://www.jumbledjargon.website/messengerbot/bot-content/storybot/space-escape/guard-corridor-shadow.png"  
            },
            {
                text : "\"This is ridiculous. It’s a liability, you should have put them down.\""
            },
            {
                text : "\"But Chief-\""
            },
            {
                text : "\"Now, the whole ship? We have enough going awry as it is without a flarbing workforce protest. If you would do your job properly, and treat them the way they need to be, to understand-\""
            },
            {
                text : "\"Yes, Sir.\""
            },
            {
                text : "The voices are fading, now, but you can grasp one last remark."
            },
            {
                text : "\"There’s a reason we haven’t let them unionise. Idiot.\""
            },
            {
                text : "You gather that that must have been the chief of the guards, and you burst outwardly with unknowingly held breath. Regaining your senses, you check the room you’re in. It looks like a cast-off from the greater armoury – a weapon store."
            }
        ],
        actions : [
            {
                type : "add",
                what : "flag",
                which : "animal_late"
            }
        ],
        options : [
            {
                text : "Check Cupboards",
                advance : [
                    {
                        node : "83"
                    }
                ],
                remove : true
            },
            {
                text : "Leave",
                advance : [
                    {
                        node : "87"
                    }
                ]
            }
        ]
    },
    "83" : {
        content : [
            {
                text : "A sparing rummage later, and you observe a disappointing haul; on the workbench you place a hand-gun, one of the old type’s you’d see in atmospheric planets, where governing authorities would equip one to each body to keep the peace, or worse. Frustratingly, you don’t find any ammunition for it."
            },
            {
                text : "Next to it, you lay a taser, with one prong-canister."
            },
            {
                text : "You can only handle one."
            }
        ],
        options : [
            {
                text : "Take Gun",
                advance : [
                    {
                        node : "84"
                    }
                ]
            },
            {
                text : "Take Taser",
                advance : [
                    {
                        node : "85"
                    }
                ]
            },
            {
                text : "Abstain",
                advance : [
                    {
                        node : "86"
                    }
                ]
            }
        ]
    },
    "84" : {
        content : [
            {
                text : "Despite its lack of bullets, you opt for the heavier device. It feels menacing, and cold to clutch."
            },
            {
                text : "It’s more intimidating than a stun-gun, and frankly, you don’t want to hurt anybody if you don’t have to."
            }
        ],
        actions : [
            {
                type : "add",
                what : "item",
                which : "gun"
            }
        ],
        continue : "82"
    },
    "85" : {
        content : [
            {
                text : "More humane, and practical in this instance, you opt for the taser, hooking it onto your overalls."
            }
        ],
        actions : [
            {
                type : "add",
                what : "item",
                which : "taser"
            }
        ],
        continue : "82"
    },
    "86" : {
        content : [
            {
                text : "You decide against taking a weapon, which is courageous for a space janitor on the lamb. Hopefully you won’t need them."
            }
        ],
        continue : "82"
    },
    "87" : {
        content : [
            {
                text : "You leave the room now that the danger has passed, and slink closely to the walls towards the interchange."
            }
        ],
        continue : "88"
    },
    "88" : {
        content : [
            {
                text : "A little dazed, and acutely aware you’re likely being hunted this very second, you attempt to figure out your plan. If you make it to the transport bay, there’s a chance you’d be able to hijack a ship, which is pretty exciting. There are several hatches nearby. Looks like whichever you choose is a one-way trip. One is labelled ‘Animal Holding’, another ‘Private Goods’, and finally ‘Civics’."
            }
        ],
        options : [
            {
                text : "'Animal Holding'",
                advance : [
                    {
                        node : "89",
                        constraints : [
                           {
                                type : "flag",
                                set : true,
                                name : "animal_late"
                           }
                        ]
                    },
                    {
                        node : "90"
                    }
                ]
            },
            {
                text : "'Private Goods'",
                advance : [
                    {
                        node : "91"
                    }
                ]
            },
            {
                text : "'Civics'",
                advance : [
                    {
                        node : "92"
                    }
                ]
            }
        ]
    },
    "89" : {
        content : [
            {
                text : "You knew the ship transported alien life below-board; exotic creatures, dangerous and highly valuable for a number of medical and illustrious reasons. You knew, because you’ve had to clean up after them on a few occasions. Always heavily scrutinized, and never without fear for your own safety."
            },
            {
                text : "Unfortunately, the automatic timer subsystems running the ship’s access controls have already locked this area down."
            }
        ],
        continue : "88"
    },
    "90" : {
        content : [
            {
                text : "You knew the ship transported alien life below-board; exotic creatures, dangerous and highly valuable for a number of medical and illustrious reasons. You knew, because you’ve had to clean up after them on a few occasions. Always heavily scrutinized, and never without fear for your own safety."
            },
            {
                text : "Exploring here in the dark mightn’t be wise, but at least the animals would be locked down, and it might prevent the guards from finding you as you make your way to the loading."
            }
        ],
        options : [
            {
                text : "I love animals",
                advance : [
                    {
                        node : "93"
                    }
                ]
            },
            {
                text : "I'll pass",
                advance : [
                    {
                        node : "88"
                    }
                ]
            }
        ]
    },
    "91" : {
        content : [
            {
                text : "You’re pretty sure this is where they keep humans, and other intelligent ‘goods’. Slaver scum."
            }
        ],
        options : [
            {
                text : "Let's go",
                advance : [
                    {
                        node : "115"
                    }
                ]
            },
            {
                text : "No thanks",
                advance : [
                    {
                        node : "88"
                    }
                ]
            }
        ]
    },
    "92" : {
        content : [
            {
                text : "The part of the ship where the crew work – merchants keeping books, organising shady trade deals, and passing the time. The highest density of potential enemies, but perhaps the only way to your destination."
            }
        ],
        options : [
            {
                text : "Let's go",
                advance : [
                    {
                        node : "140"
                    }
                ]
            },
            {
                text : "Somewhere else",
                advance : [
                    {
                        node : "88"
                    }
                ]
            }
        ]
    },
    "93" : {
        content : [
            {
                img : "http://www.jumbledjargon.website/messengerbot/bot-content/storybot/space-escape/animal-quarters.png"  
            },
            {
                text : "You’re suctioned down onto the floor through the chute. Passing forward into discrete darkness, clicks and growls echo demonically about the walls. What a crazy ship."
            }
        ],
        options : [
            {
                text : "Progress",
                advance : [
                    {
                        node : "94"
                    }
                ]
            },
            {
                text : "Look for light",
                advance : [
                    {
                        node : "97"
                    }
                ]
            }
        ]
    },
    "94" : {
        content : [
            {
                text : "You decide to waylay the need for light. It’ll be easier to stay hidden this way. Tip-toeing through the darkness, you jump at each obstacle your feet brush. Eventually, you paw your way blindly into a room emanating with a low, green light."
            },
            {
                img : "http://www.jumbledjargon.website/messengerbot/bot-content/storybot/space-escape/animal-lab.png"  
            },
            {
                text : "On the counter, vials of science-experiments are smouldering gently."
            }
        ],
        options : [
            {
                text : "Vials",
                advance : [
                    {
                        node : "95"
                    }
                ],
                remove : true
            },
            {
                text : "Keep going",
                advance : [
                    {
                        node : "96"
                    }
                ]
            }
        ]
    },
    "95" : {
        content : [
            {
                text : "You hold one of the closed vials tentatively against the light skirting. It glows translucently, a similar effect to the darts used to tranquilise the animals you’d seen some of the guards use the last time you were on clean-up duty down here. It might come in useful."
            }
        ],
        actions : [
            {
                type : "add",
                what : "item",
                which : "vial"
            }
        ],
        continue : "94"
    },
    "96" : {
        content : [
            {
                text : "You decide that your luck needs to be stretched thinly if you’re going to escape, and playing with questionable chemicals in the secret cargo area of a corrupt and glorified pawn-shop might push it a bit."
            },
            {
                text : "Slowly hobbling into the darkness, you hear a frightening crack behind you."
            }
        ],
        continue : "101"
    },
    "97" : {
        content : [
            {
                text : "You trace along the nearest wall until your hands lie on what feels like a switch-box. You carefully make out two different large buttons."
            }
        ],
        options : [
            {
                text : "Push left button",
                advance : [
                    {
                        node : "98"
                    }
                ]
            },
            {
                text : "Push right button",
                advance : [
                    {
                        node : "98"
                    }
                ]
            }
        ]
    },
    "98" : {
        content : [
            {
                text : "You push the button – it offers a lot of resistance, and relents with a mighty ‘thunk’. You wait expectantly, but nothing happens."
            }
        ],
        options : [
            {
                text : "Push other button",
                advance : [
                    {
                        node : "99"
                    }
                ]
            }
        ]
    },
    "99" : {
        content : [
            {
                text : "The other button slides in easier, and vibrates slightly. You think this is a bit odd, and wonder if you’re even influencing anything at all, when you hear the screech of metal grating behind you. Spinning, light floods the room from high beams clasping the ceiling. Large containers, surrounded by interwoven metallic mesh are slowly being revealed."
            },
            {
                text : "You might be in trouble."
            }
        ],
        options : [
            {
                text : "Wait in awe",
                advance : [
                    {
                        node : "100"
                    }
                ]
            }
        ]
    },
    "100" : {
        content : [
            {
                text : "Wondering if it’s time to plead to a deity, you’re stunned as the shutters slowly unveil a carnival of illegally obtained alien life. Gnawing teeth, duplicitous eyes, and oodles of ooze, thankfully contained by thick sheets of hopefully impenetrable glass."
            },
            {
                text : "You progress past the unsightly bunch with determination, head flicking madly to check for threats. Curious, multi-limbed species claw their response, rattling against their containers, angry at being woken."
            },
            {
                text : "You hear a worrying crack behind you."
            }
        ]
    },
    "101" : {
        content : [
            {
                text : "You turn, and are greeted with a pretty spectacular if terrifying sight. A thousand incisors beset the gruelling jawline of the monstrosity, and glowing gills cast haphazard shadows over the rough, patterned vellum of the beast’s skin."
            },
            {
                img : "http://www.jumbledjargon.website/messengerbot/bot-content/storybot/space-escape/animal-slug.png"  
            },
            {
                text : "Yuck."
            },
            {
                text : "It lets out a guttural snarl, and rams its putrid head against its container. You’ve disturbed it, and you realize from the fractures etching their way across the glass that you’re not going to be able to run this time. "
            }
        ],
        options : [
            {
                text : "Run anyway",
                advance : [
                    {
                        node : "102"
                    }
                ]
            },
            {
                text : "Use Ration Pack",
                constraints : [
                    {
                        type : "item",
                        set : true,
                        name : "ration_pack"
                    }
                ],
                advance : [
                    {
                        node : "103"
                    }
                ]
            },
            {
                text : "Use Taser",
                constraints : [
                    {
                        type : "item",
                        set : true,
                        name : "taser"
                    }
                ],
                advance : [
                    {
                        node : "104"
                    }
                ]
            },
            {
                text : "Use Gun",
                constraints : [
                    {
                        type : "item",
                        set : true,
                        name : "gun"
                    }
                ],
                advance : [
                    {
                        node : "105"
                    }
                ],
                remove : true
            },
            {
                text : "Use Vial",
                constraints : [
                    {
                        type : "item",
                        set : true,
                        name : "vial"
                    }
                ],
                advance : [
                    {
                        node : "106"
                    }
                ],
                remove : true
            },
            {
                text : "Communicate",
                advance : [
                    {
                        node : "107"
                    }
                ]
            }
        ]
    },
    "102" : {
        content : [
            {
                text : "Not knowing what else to do, you attempt to beat a hasty retreat. Struggling to find a path through the haberdashery of horrific faces on their pedestals, at each turn whipping against fur and viscera, you hear an almighty shattering noise behind you."
            },
            {
                text : "A few moments later you’re yanked backwards, and everything becomes numb. You spend your final breaths gurgling against the weight of the space slug Vena Aurcapscasis, famed for the healing properties of it’s viscous trail. At least you can claim you died in the name of science."
            },
            {
                img : "http://www.jumbledjargon.website/messengerbot/bot-content/storybot/space-escape/animal-death.png"  
            }
        ],
        options : [
            {
                text : "Start Over",
                advance : [
                    {
                        node : "1"
                    }
                ]
            }
        ]
    },
    "103" : {
        content : [
            {
                text : "Thinking quickly, you unpack your sourdough and waggle it in front of the animal. It’s temporarily appeased, and you direct its attention by throwing the pack behind of you and beating a hasty retreat. Behind you, you hear the shatter of glass, and the disgusting sounds of the monster presumably slobbering over the treat. It wont last long."
            }
        ],
        actions : [
            {
                type : "remove",
                what : "item",
                which : "ration_pack"
            }
        ],
        continue : "111"
    },
    "104" : {
        content : [
            {
                text : "Unhooking it from your uniform, you raise your scavenged taser threateningly. The monster pays no heed, and you wait for an opportune moment to pull the trigger. As it rams the glass, you take a step back."
            },
            {
                text : "One, thud, two, thud…"
            },
            {
                text : "And then, as it bursts out, you let fly. It’s eyes bulge, and it slides spasming out of its cage, letting flood a torrent of noxious fluid. You drop the gun, and bolt to a cacophony of jungle sounds."
            }
        ],
        actions : [
            {
                type : "remove",
                what : "item",
                which : "taser"
            }
        ],
        continue : "111"
    },
    "105" : {
        content : [
            {
                text : "You wave the empty gun at the beast threateningly. It doesn’t seem to appreciate the gravity of the situation."
            }
        ],
        continue : "101"
    },
    "106" : {
        content : [
            {
                text : "You reach for the vial of science stuff in your pocket, uncorking it and getting a whiff of... almonds? Either way, you wait for the creature to make its inevitable escape. As it rams the glass, you take a step back."
            },
            {
                text : "One, thud, two, thud…"
            }, 
            {
                text : "And then, as it burst out, you let fly. The monster’s skin sizzles curiously, and then, just as sudden as it escaped, it disappears. Flabbergasted, you glare daggers at the space it previously inhabited, noticing the slime trail ebb closer to your feet. Before you’re ripped apart by your unseen foe, you lament that the unlabelled vial must be some sort experimental invisibility serum. In the end, life in space was too damn cutting edge."
            },
            {
                img : "http://www.jumbledjargon.website/messengerbot/bot-content/storybot/space-escape/animal-death.png"  
            }
        ],
        actions : [
            {
                type : "remove",
                what : "item",
                which : "vial"
            }
        ],
        options : [
            {
                text : "Start Over",
                advance : [
                    {
                        node : "1"
                    }
                ]
            }
        ]
    },
    "107" : {
        content : [
            {
                text : "\"Hey.. uh.. kitty. Don’t.. kill me?\""
            },
            {
                text : "It’s a poor effort, but you actually manage to stop it from thumping it’s way towards you."
            }
        ],
        options : [
            {
                text : "Sing",
                advance : [
                    {
                        node : "108"
                    }
                ]
            }
        ]
    },
    "108" : {
        content : [
            {
                text : "You try something a bit different. Clearing your throat, you croon a gentle melody; something you remember from your childhood. The monster looks irked, and rams the glass again. A triangle of glass spits at you, slashing your cheek. Rude."
            }
        ],
        options : [
            {
                text : "Sing better",
                advance : [
                    {
                        node : "109"
                    }
                ]
            },
            {
                text : "Give up",
                advance : [
                    {
                        node : "110"
                    }
                ]
            }
        ]
    },
    "109" : {
        content : [
            {
                text : "Not to be perturbed, you continue singing, adjusting the pitch of your melody and finding your groove. Staring death in it’s vile face in the underbelly of a volatile vessel, eons from the nearest piece of inhabitable land, you can’t help but muse over the comical nature of your situation."
            },
            {
                text : "The creature slowly slumps to sleep, and you keep the tune in your head as you advance towards the exit."
            }
        ],
        continue : "111"
    },
    "110" : {
        content : [
            {
                text : "You decide you aren’t vocally blessed, years of cleaning duty having stripped your rock-and-roll spirit."
            }
        ],
        continue : "101"
    },
    "111" : {
        content : [
            {
                text : "Finally reaching the floor’s exit, you come to another interchange, unlocking the door, and sliding the shutters down behind you with finality to prevent any malignant ne’er-do-wells following. If you make it out alive, you’re never visiting a petting zoo again."
            }
        ],
        continue : "112"
    },
    "112" : {
        content : [
            {
                text : "In another maze-like interchange now, you duck into a crevice as some angry looking crewmembers pad past. One spits on the floor as he struts, which you take offense to. Down a flight of stairs, you can detect the ambience of the docking bay. Behind you sits an alternate entrance to ‘private goods’, the supposed slave quarters."
            }
        ],
        options : [
            {
                text : "Docking bay",
                advance : [
                    {
                        node : "113"
                    }
                ]
            },
            {
                text : "'Private goods'",
                advance : [
                    {
                        node : "114"
                    }
                ]
            }
        ]
    },
    "113" : {
        content : [
            {
                text : "Deciding to save yourself, and with no time to spare, you rush forward to meet your destiny."
            }
        ],
        continue : "184"
    },
    "114" : {
        content : [
            {
                text : "Sighing, and unsure whether you’re motivated by suspicion or nobility, you decide to back-track apprehensively into the definitely really very off-limits section of the ship."
            }
        ],
        continue : "115"
    },
    "115" : {
        content : [
            {
                img : "http://www.jumbledjargon.website/messengerbot/bot-content/storybot/space-escape/slave-quarters.png"
            },
            {
                text : "Acrid, and reminiscent of a slaughterhouse, quiet moans sift between the rows of cells lining the walls of the room. The low, rubberized ceiling forces you to crouch slightly as you enter, and beady security cameras close to your face zip to attention. Oh dear."
            }
        ],
        options : [
            {
                text : "Self preservation",
                advance : [
                    {
                        node : "116"
                    }
                ]
            }
        ]
    },
    "116" : {
        content : [
            {
                text : "Foreseeably, alarms sound again and you feel a rumble advancing on your position. You lock the door from the inside, and prop a broken cell bar across the gear arc to buy you some time."
            }
        ],
        continue : "117"
    },
    "117" : {
        content : [
            {
                text : "Breathing heavily, you tread into the middle of the corridor, head down. The floor is filthy; you’ve never been sent here to clean. Looks like they could use a janitor. You take minor delight in imagining that that would be your superhero catch-phrase, like in the thin books back in the archive on Kepler 186-f. \"Looks like somebody needs… The Janitor!\""
            },
            {
                text : "With thuds behind, and whispers encompassing, you look up. Then to the left, then two the right. Only two souls at their bars, the rest, either asleep or..."
            },
            {
                text : "One is a girl. Her hands clutched at her chest, she looks through you - silently."
            },
            {
                text : "The other is a large brute of a being, with a bark-like exterior and green, shape-altering eyes."
            }
        ],
        options : [
            {
                text : "Girl",
                advance : [
                    {
                        node : "118"
                    }
                ],
                remove : true
            },
            {
                text : "Brute",
                advance : [
                    {
                        node : "125"
                    }
                ],
                remove : true
            },
            {
                text : "Console",
                advance : [
                    {
                        node : "133"
                    }
                ]
            }
        ],
        continue : "138"
    },
    "118" : {
        content : [
            {
                text : "You’ve always preferred girls to trees."
            },
            {
                img : "http://www.jumbledjargon.website/messengerbot/bot-content/storybot/space-escape/slave-quarters-girl.png"
            },
            {
                text : "As you step forward, her pale face shrinks back into the shadows of her cell. All you can see are the wisps of her dirt crusted hair. She was beautiful, once."
            }
        ],
        options : [
            {
                text : "Hello?",
                advance : [
                    {
                        node : "119"
                    }
                ]
            },
            {
                text : "Boo!",
                advance : [
                    {
                        node : "123"
                    }
                ]
            },
            {
                text : "Use Ration Pack",
                constraints : [
                    {
                        type : "item",
                        set : true,
                        name : "ration_pack"
                    }
                ],
                advance : [
                    {
                        node : "124"
                    }
                ],
                remove : true
            }
        ]
    },
    "119" : {
        content : [
            {
                text : "The girl’s eyelids flicker, but other than that, nothing changes."
            }
        ],
        options : [
            {
                text : "You",
                advance : [
                    {
                        node : "120"
                    }
                ],
                remove : true
            },
            {
                text : "Escape",
                advance : [
                    {
                        node : "122"
                    }
                ]
            },
            {
                text : "Deaf?",
                advance : [
                    {
                        node : "121"
                    }
                ],
                remove : true
            }
        ]
    },
    "120" : {
        content : [
            {
                text : "You tell her your name, and explain that you were a worker who recently took a demotion to dead-man-walking. She doesn’t respond."
            }
        ],
        continue : "119"
    },
    "121" : {
        content : [
            {
                text : "\"Not deaf, just contemplating.\""
            }
        ],
        continue : "119"
    },
    "122" : {
        content : [
            {
                text : "You ask her if she wants to escape."
            },
            {
                text : "Silence again."
            },
            {
                text : "You’re about to give up, when she mutters \"I have nowhere to go. But you...\". Her eyes roll back, and your skin tingles. Feeling an uneasy aura overwhelm you, you take a step back. \"You must go. They are squabbling in the pilot’s room. Feelings of disrespect. Your fate is not tied to them. Not yet.\"",
                constraints : [
                    {
                        type : "flag",
                        set : true,
                        name : "happy_prisoner"
                    }
                ]
            },
            {
                text : "Dumbfounded, she appears to be tasting the present moment in the air; you stammer out a question – how does she know? \"Hm. It matters not. There is a ship in the docking area that does not appear to be guarded. Opportune.\"",
                constraints : [
                    {
                        type : "flag",
                        set : true,
                        name : "happy_prisoner"
                    }
                ]
            },
            {
                text : "Thankful for her wisdom, but somewhat concerned for its authenticity, you nod in appreciation as she retreats fully into the shadows, as if slipping her mortal coil.",
                constraints : [
                    {
                        type : "flag",
                        set : true,
                        name : "happy_prisoner"
                    }
                ]
            }
        ],
        continue : "117"
    },
    "123" : {
        content : [
            {
                text : "You try to scare her for a reaction of any kind. She starts, and turns her back to you. Good job."
            },
            {
                text : "It doesn’t look like she’s going to talk any more. "
            }
        ],
        continue : "117"
    },
    "124" : {
        content : [
            {
                text : "The girl might be hungry, so you reach through the bars, extending your ration pack towards her. After a moment of thought, her own arm whips out to grab it, and she turns, shaking."
            }
        ],
        actions : [
            {
                type : "remove",
                what : "item",
                which : "ration_pack"
            },
            {
                type : "add",
                what : "flag",
                which : "happy_prisoner"
            }
        ],
        continue : "118"
    },
    "125" : {
        content : [
            {
                img : "http://www.jumbledjargon.website/messengerbot/bot-content/storybot/space-escape/slave-quarters-bark.png"
            },
            {
                text : "You unconsciously puff your chest as you face the imposing figure. You’re about to attempt some awkward form of discourse when its thick arm strains through the bars to grab your throat."
            }
        ],
        options : [
            {
                text : "Ugh-rm heghf!",
                advance : [
                    {
                        node : "126"
                    }
                ]
            },
            {
                text : "Use Taser",
                constraints : [
                    {
                        type : "item",
                        set : true,
                        name : "taser"
                    }
                ],
                advance : [
                    {
                        node : "127"
                    }
                ],
                remove : true
            },
            {
                text : "Use Gun",
                constraints : [
                    {
                        type : "item",
                        set : true,
                        name : "gun"
                    }
                ],
                advance : [
                    {
                        node : "128"
                    }
                ]
            },
            {
                text : "Use Broken Band",
                constraints : [
                    {
                        type : "item",
                        set : true,
                        name : "broken_band"
                    }
                ],
                advance : [
                    {
                        node : "129"
                    }
                ]
            }
        ]
    },
    "126" : {
        content : [
            {
                text : "You attempt to explain to the kind man that you could be able to help him, but his rough fingers are compressing just the wrong areas of your windpipe for said transaction to occur."
            },
            {
                text : "Your vision blackens, and the last thing you remember before you die is the smell of surface cleaner. Oh, the irony."
            }
        ],
        options : [
            {
                text : "Start Over",
                advance : [
                    {
                        node : "1"
                    }
                ]
            }
        ]
    },
    "127" : {
        content : [
            {
                text : "You fire your only bolt at the torso of the behemoth, but although it sticks true, nothing seems to occur other than a slight smouldering. You curse the existence of wood."
            }
        ],
        actions : [
            {
                type : "remove",
                what : "item",
                which : "taser"
            }
        ],
        continue : "125"
    },
    "128" : {
        content : [
            {
                text : "You raise the gun as seriously as you can muster to the thing’s chest, wobbling violently as you aim. This appears to warrant a reaction, and you drop to the ground with a painful gasp as your throat expands."
            },
            {
                text : "Spluttering, you scrape yourself to the opposite side of the room for recovery."
            }
        ],
        continue : "117"
    },
    "129" : {
        content : [
            {
                text : "Dangling limply, and with colourful spots appearing in your peripheral view, you just about manage to raise your broken work band in front of the alien’s face. It’s ignoring you, probably revelling in the violence, when a raspy voice croaks behind."
            },
            {
                text : "\"Eng. Eng, they’re one of us! Let them go, the can help.\""
            },
            {
                text : "Eng snarls."
            },
            {
                text : "\"Eng, don’t ruin it for the rest of us you woodhead.\""
            },
            {
                text : "No friend of insults, this appears to warrant a reaction, and you drop to the ground with a painful gasp as your throat expands."
            },
            {
                text : "Spluttering, you scrape yourself to the opposite side of the room for recovery."
            },
            {
                text : "\"Wun Wun Non Sen\" it grunts, throwing the full force of its weight onto the bars threateningly."
            },
            {
                text : "Petrified, you notice that the rest of the conscious slaves have shuffled closer to their cell doors, expectantly."
            }
        ],
        options : [
            {
                text : "'Wun' what?",
                advance : [
                    {
                        node : "130"
                    }
                ]
            }
        ]
    },
    "130" : {
        content : [
            {
                text : "\"One One Nine Seven\""
            },
            {
                text : "You meet the weathered eyes of a younger, white-haired human. His smooth features do nothing to offset the clear scarring lashed across his bare body."
            },
            {
                text : "\"Just because he’s strong doesn’t mean he’s dumb. You’re lucky you still had that.\""
            },
            {
                text : "He flicks his finger to your ankle-band, which tumbled into Eng’s cell during the commotion. As if prompted, Eng slams a mighty foot onto it, pulverizing what’s left and making you grateful it wasn’t your head under that tangle of roots."
            },
            {
                text : "\"It’s the code to the console. Unfortunately, we think you’d still need one of them access cards. Can you help? I’ve never co-ordinated a mutiny before, but now is as good a time as any.\""
            }
        ],
        actions : [
            {
                type : "remove",
                what : "item",
                which : "broken_band"
            },
            {
                type : "add",
                what : "flag",
                which : "eng_password"
            }
        ],
        options : [
            {
                text : "I'll try",
                advance : [
                    {
                        node : "131"
                    }
                ]
            },
            {
                text : "No",
                advance : [
                    {
                        node : "132"
                    }
                ]
            }
        ]
    },
    "131" : {
        content : [
            {
                text : "The prisoners mumble appreciatively."
            }
        ],
        continue : "117"
    },
    "132" : {
        content : [
            {
                text : "He tuts with disgust. Everybody hangs their head. Survival has to be selfish, sometimes."
            }
        ],
        continue : "117"
    },
    "133" : {
        content : [
            {
                text : "Whirring and beeping, taking the place of the last cell on the left is a contraption that looks to be a controller for the cell doors."
            }
        ],
        options : [
            {
                text : "Closer Look",
                advance : [
                    {
                        node : "134"
                    }
                ]
            },
            {
                text : "Return to cells",
                advance : [
                    {
                        node : "137"
                    }
                ]
            }
        ]
    },
    "134" : {
        content : [
            {
                text : "It appears to require a numeric password, and a key-card."
            }
        ],
        options : [
            {
                text : "Access",
                constraints : [
                    {
                        type : "flag",
                        set : true,
                        name : "eng_password"
                    },
                    {
                        type : "item",
                        set : true,
                        name : "emergency_card"
                    }
                ],
                advance : [
                    {
                        node : "135"
                    }
                ]
            },
            {
                text : "Whack",
                advance : [
                    {
                        node : "136"
                    }
                ],
                remove : true
            },
            {
                text : "Return to cells",
                advance : [
                    {
                        node : "137"
                    }
                ]
            }
        ]
    },
    "135" : {
        content : [
            {
                text : "You punch in the code as somebody punches the door you entered through, and their muffled shouts hasten your actions. The machine consumes your emergency card, and in a symbiosis of new and old technology, a series of beeps and clanks herald the escape of a full shipment of slaves."
            },
            {
                text : "You don’t have time to laud your ego, however, as they burst past without thought- a writhing mass of desperate, decrepit bodies. At the very least, as they seek their retribution, they will provide a good distraction."
            }
        ],
        actions : [
            {
                type : "add",
                what : "flag",
                which : "slaves_freed"
            }
        ],
        continue : "138"
    },
    "136" : {
        content : [
            {
                text : "You give the switchboard a playful thud with your elbow. Hm. You suppose that only works in the holograms."
            }
        ],
        continue : "134"
    },
    "137" : {
        content : [
            {
                text : "Unable to ignore the other beings in the room, you return your attention to them."
            }
        ],
        continue : "117"
    },
    "138" : {
        content : [
            {
                text : "Taking a risky reprieve, as the bar on the door begins to buckle, you stare in silence after the wake of your decisions. Humanity can be rough, but regardless of the outcome, your lucky and bizarre predicament at least incurred a positive outcome.",
                constraints : [
                    {
                        type : "flag",
                        set : true,
                        name : "slaves_freed"
                    }
                ]
            },
            {
                text : "You only see one feasible course of action."
            }
        ],
        options : [
            {
                text : "Leave",
                advance : [
                    {
                        node : "139"
                    }
                ]
            }
        ]
    },
    "139" : {
        content : [
            {
                text : "You dash out of the room as your temporary barricade falls, hoping they hadn’t seen you."
            },
            {
                text : "Hoping the girl who remained would slow them down somehow. Hoping she’d be okay.",
                constraints : [
                    {
                        type : "flag",
                        set : true,
                        name : "slaves_freed"
                    }
                ]
            },
            {
                text : "After another sequence of sharp corners, at one point bowling over an unsuspecting and henceforth dazed trader, you arrive breathlessly at the section of the ship named ‘Civics’ – at least, that’s what all of the crude signs described."
            }
        ],
        continue : "140"
    },
    "140" : {
        content : [
            {
                text : "You admire the handiwork of your new friends. A couple of bodies of slavers slumped against the walls, light chest movements indicating a frantic surge of action. Their guns appear to be missing, and you burn with hope.",
                constraints : [
                    {
                        type : "flag",
                        set : true,
                        name : "slaves_freed"
                    }
                ]
            },
            {
                img : "http://www.jumbledjargon.website/messengerbot/bot-content/storybot/space-escape/civics.png"
            },
            {
                text : "You’re in a large, circular space. Treading towards the centre, you twirl, looking for options. It’s empty, so clearly the action is elsewhere. Losing your bearings, you register a large, ornamented slope leading to a pair of slightly open doors, and hear the faint ruckus of laser spittle."
            },
            {
                text : "Another set of corridors seem to intersect with the offices within the ship, which are likely attached to the transport bay for ease of use."
            }
        ],
        options : [
            {
                text : "Ceiling",
                advance : [
                    {
                        node : "141"
                    }
                ],
                remove : true
            },
            {
                text : "Slope",
                advance : [
                    {
                        node : "144"
                    }
                ]
            },
            {
                text : "Offices"
            }
        ]
    },
    "141" : {
        content : [
            {
                img : "http://www.jumbledjargon.website/messengerbot/bot-content/storybot/space-escape/civics-up.png"
            },
            {
                text : "Craning your neck, you stare directly up at a shaft of light, as dust in the air floats, unheeding of the ship’s tensile gravitational locks. A perfect porthole to the stars, they appear to drift by. You imagine the silence, the countless lives slipping through time unaware."
            }
        ],
        options : [
            {
                text : "Things to do",
                advance : [
                    {
                        node : "142"
                    }
                ]
            },
            {
                text : "Just a little longer",
                advance : [
                    {
                        node : "143"
                    }
                ]
            }
        ]
    },
    "142" : {
        content : [
            {
                text : "That’s not for you. Not yet, you have things to take care of first."
            }
        ],
        continue : "140"
    },
    "143" : {
        content : [
            {
                text : "You hold onto the dream just a few moments longer, and are surprised by the thump of a large, white boot onto the window. Darkening your face in perspective, a suited figure trawls carefully across the exterior of the window, floating between points carefully. You wonder whether their job entails spacewalks, or if they just wanted a break from organized crime."
            }
        ],
        continue : "140"
    },
    "144" : {
        content : [
            {
                img : "http://www.jumbledjargon.website/messengerbot/bot-content/storybot/space-escape/captains-door.png"
            },
            {
                text : "It looks pretty grandiose. You’ve never been to this part of the ship before, having only cleaned unimportant function rooms, but you can tell this part of the greater ship, having been pieced together over the years from illicit hauls, has always existed. You’re at its heart, exploiting time and circumstance to escape unnoticed. Despite this, something compels you towards the pilot’s room. Do you go? If you do, you mightn’t come back."
            }
        ],
        options : [
            {
                text : "I have to",
                advance : [
                    {
                        node : "145"
                    }
                ]
            },
            {
                text : "I have to leave",
                advance : [
                    {
                        node : "146"
                    }
                ]
            }
        ]
    },
    "145" : {
        content : [
            {
                text : "You suppose this is what ‘destiny’ is. Advancing wearily up the slope, drawing closer to the flashes blitting through the slit in the doors, you wish you were a little better equipped."
            }
        ],
        continue : "150"
    },
    "146" : {
        content : [
            {
                text : "You feel paying the captain a visit would be suicidal."
            }
        ],
        continue : "140"
    },
    "147" : {
        content : [
            {
                text : "Undoubtedly, the bit-peddlers keeping track of their rougher peers’ escapades are largely asleep elsewhere in the ship. Nonetheless, you’ll have to progress through here without incident if you’re going to make it to the docking station to requisition a ship."
            }
        ],
        options : [
            {
                text : "Hurry",
                advance : [
                    {
                        node : "148"
                    }
                ]
            },
            {
                text : "Not just yet",
                advance : [
                    {
                        node : "149"
                    }
                ]
            }
        ]
    },
    "148" : {
        content : [
            {
                text : "With no time to spare, knowing that any minute a subset of the ship’s authoritative forces could converge on your position to oust your escape efforts, you press forward into the ships offices."
            }
        ],
        continue : "169"
    },
    "149" : {
        content : [
            {
                text : "You feel the pull of your conscience goading you elsewhere. Years of forced labour deserve closure."
            }
        ],
        continue : "140"
    },
    "150" : {
        content : [
            {
                text : "Peeking through the doors, you’re granted a spectacular front-row seat to the galaxy. Spiralling viewing ports enclose an array of panels and wheels. Flecked holograms sweeping forward to your position mark the position of potential targets and threats."
            },
            {
                text : "At the foot of the steps leading to the captain’s seat, stands a man looking worse for wear, and in front of him, a fallen figure. The other crewmembers in the room are stood angled towards the action, at an impasse."
            }
        ],
        options : [
            {
                text : "Shout",
                advance : [
                    {
                        node : "151"
                    }
                ]
            },
            {
                text : "Figure",
                advance : [
                    {
                        node : "167"
                    }
                ],
                remove : true
            },
            {
                text : "Confront",
                advance : [
                    {
                        node : "168"
                    }
                ]
            }
        ]
    },
    "151" : {
        content : [
            {
                text : "You attempt to make your presence known. Heads and guns spin to lock onto the most important parts of your anatomy, and you attempt to confidently announce your name. Unfortunately, your skills in public speaking have diminished somewhat since you were abducted, and your voice breaks a little. How embarrassing."
            },
            {
                text : "The captain’s look of confusion melts into a cocksure grin."
            }
        ],
        continue : "152"
    },
    "152" : {
        content : [
            {
                text : "\"Wow. The janitor, right? Did you want a raise? I should fire that incompetent quorg of a guard.\""
            },
            {
                text : "He swaggers towards you, the angry faces of his underlings unflinching."
            }
        ],
        options : [
            {
                text : "Freedom",
                advance : [
                    {
                        node : "153"
                    }
                ]
            },
            {
                text : "Revenge",
                advance : [
                    {
                        node : "153"
                    }
                ]
            }
        ]
    },
    "153" : {
        content : [
            {
                text : "\"You want to leave? I mean, job satisfaction is low, I can get that.\""
            },
            {
                text : "He’s within arm’s reach, but the hand at his waist totes a knife. No sudden movements."
            },
            {
                text : "\"I even empathise with that. Look around. Today has not been the best day for me either.\""
            },
            {
                text : "He spits on the floor, unhygienically. What is the deal with the spitting?"
            },
            {
                text : "\"We’ve had USELESS vagabonds like him over there causing trouble. Making us… restless. We have big shipments to manage. Top clients. It wont do.\""
            }
        ],
        options : [
            {
                text : "Use Gun",
                constraints : [
                    {
                        type : "item",
                        set : true,
                        name : "gun"
                    }
                ],
                advance : [
                    {
                        node : "154"
                    }
                ]
            },
            {
                text : "Use Taser",
                constraints : [
                    {
                        type : "item",
                        set : true,
                        name : "taser"
                    }
                ],
                advance : [
                    {
                        node : "155"
                    }
                ],
                remove : true
            },
            {
                text : "Use Vial",
                constraints : [
                    {
                        type : "item",
                        set : true,
                        name : "vial"
                    }
                ],
                advance : [
                    {
                        node : "158"
                    }
                ]
            },
            {
                text : "Insist to be let go",
                advance : [
                    {
                        node : "163"
                    }
                ]
            }
        ]
    },
    "154" : {
        content : [
            {
                text : "You reach for the gun at your belt, but due to the distance between the two of you, you don’t even pose a perceived threat. The deafening sound of bullets and lasers explode into your eardrums, as they ricochet between your ribs."
            },
            {
                img : "http://www.jumbledjargon.website/messengerbot/bot-content/storybot/space-escape/death-shot.png"  
            },
            {
                text : "The last thing you remember before dying is the grin on the captain’s face, as he shrugs and nonchalantly returns to ‘business’."
            }
        ],
        options : [
            {
                text : "Start Over",
                advance : [
                    {
                        node : "1"
                    }
                ]
            }
        ]
    },
    "155" : {
        content : [
            {
                text : "Rapidly unhooking the taser from your belt, you aim it squarely at the captain. You’re momentarily confused as to why this doesn’t prompt a vicious response from his counterparts. Is this working?"
            },
            {
                text : "A blank look envelopes his face, before suddenly bursting into a fit of laughter."
            },
            {
                text : "\"Is that- is that what I THINK it is?! Oh.. Oh. Oh man.\""
            },
            {
                text : "Wiping a tear from his desolate face, he levels a demand at you."
            },
            {
                text : "\"Shoot me. Please, I really, really dare you.\""
            },
            {
                text : "The man on the floor moans in objection."
            }
        ],
        options : [
            {
                text : "Shoot",
                advance : [
                    {
                        node : "156"
                    }
                ]
            },
            {
                text : "Different way",
                advance : [
                    {
                        node : "157"
                    }
                ]
            }
        ]
    },
    "156" : {
        content : [
            {
                text : "An electrified prong whips forth with cathartic joy. As the captain jitters wildly to his knees, the deafening sound of bullets and lasers explode into your eardrums. Balls of light and fire ricochet between your ribs."
            },
            {
                img : "http://www.jumbledjargon.website/messengerbot/bot-content/storybot/space-escape/death-shot.png"  
            },
            {
                text : "The last thing you remember before you die is the satisfaction of your actions. At least you went down with a fight."
            }
        ],
        options : [
            {
                text : "Start Over",
                advance : [
                    {
                        node : "1"
                    }
                ]
            }
        ]
    },
    "157" : {
        content : [
            {
                text : "This can only end badly, there has to be another way out of this mess."
            }
        ],
        continue : "153"
    },
    "158" : {
        content : [
            {
                text : "Thinking smart, you go to lob the mysterious vile from the lab at the captain. However, to your utter dismay, his lightning reflexes prevail, and he catches it. You gulp."
            },
            {
                text : "\"What is this? Something from our pets? Oh, no wonder they couldn’t find you. It is a big ship, after all.\""
            },
            {
                text : "He moves away."
            },
            {
                text : "\"Was this meant to kill me? The whipped little boys from the lab are holed up in bed, probably terrified by tonight’s events. All of the alarms…\""
            },
            {
                text : "The captain twirls, and in an arcing motion, strikes you with the vial. It bursts across your head, showering you in repulsive goop."
            },
            {
                text : "Seconds pass. You blink through the slime, and it seems to be evaporating."
            },
            {
                text : "\"I don’t believe it. This is… where did you go?\""
            },
            {
                text : "Glancing down at your body, you’re dumbfounded to observe that you are now completely invisible."
            }
        ],
        actions : [
            {
                type : "remove",
                what : "item",
                which : "vial"
            }
        ],
        options : [
            {
                text : "Attack",
                advance : [
                    {
                        node : "159"
                    }
                ]
            },
            {
                text : "Run",
                advance : [
                    {
                        node : "162"
                    }
                ]
            }
        ]
    },
    "159" : {
        content : [
            {
                text : "You realise you don’t have time to worry about side-effects, and decide to take advantage of your amazing and potentially very temporary coat of paint."
            },
            {
                text : "Spinning to knock the gun of the man behind you up into his jaw, blind adrenaline guides your sharp actions. Buckling behind him, you direct the gun at his peers, using his body as a shield and mowing them down. You feel little remorse."
            },
            {
                text : "You repeat this sequence, rolling around the room as it descends into panic and the captain screams, flailing his knife around wildly. Some crewmembers even shoot eachother in the fray."
            },
            {
                text : "Shortly, nobody is left standing but the captain. His gait has changed, and he sounds rather worried."
            },
            {
                text : "You approach him from behind as he glanced about, whimpering."
            }
        ],
        options : [
            {
                text : "Spare him",
                advance : [
                    {
                        node : "160"
                    }
                ]
            },
            {
                text : "Kill him",
                advance : [
                    {
                        node : "161"
                    }
                ]
            }
        ]
    },
    "160" : {
        content : [
            {
                text : "You’re a moment into your decision to be merciful, when with a sickening crack, he collapses. With much glorification, the beaten man is unveiled, standing in his place nursing a bloodied hand. Despite your invisibility, he manages to lock eyes with you, and nods."
            }
        ],
        continue : "162"
    },
    "161" : {
        content : [
            {
                text : "You’re a moment into the whole ‘killing him’ thing, when with a sickening crack, he collapses. With much glorification, the beaten man is unveiled, standing in his place, nursing a bloodied hand. Despite your invisibility, he manages to lock eyes with you, and nods."
            }
        ],
        continue : "162"
    },
    "162" : {
        content : [
            {
                text : "It’s time to leave."
            },
            {
                text : "Bones aching, you sprint back towards the offices."
            }
        ],
        actions : [
            {
                type : "add",
                what : "flag",
                which : "captain_down"
            }
        ],
        continue: "169"
    },
    "163" : {
        content : [
            {
                text : "\"You’re worthless. You’re getting old. You want to explore the galaxy? What makes you so sure you wont run into us again? Or the quadrillions of others like us, stealing our business? Here’s the safest place you can be.\" He laughs."
            }
        ],
        options : [
            {
                text : "Curse",
                advance : [
                    {
                        node : "164"
                    }
                ]
            },
            {
                text : "Plead",
                advance : [
                    {
                        node : "166"
                    }
                ]
            }
        ]
    },
    "164" : {
        content : [
            {
                text : "You snarl an expletive at the captain, lurching forward slightly and causing a ruffle of metallic clicks from the assorted slavers surrounding you."
            },
            {
                text : "Laughing again, and then suddenly sombre, the captain lowers his voice to a hush and speaks with a deadly enunciation."
            },
            {
                text : "\"I admire your stupidity right now, but I can’t allow it. But, we’ve all been gathered up here for quite some time. Fellas haven’t had any sleep, an’ I need to steer a course for Sector A to jack some real royal goods, despite the lack of intel from the clown who rolled his way back in here just earlier, all pretty.\""
            },
            {
                text : "The captain slowly turns away. You’re captivated by the weight of his words."
            },
            {
                text : "\"So here’s what I’m going to do. I’m going to kill this flarb over here, and I’m going to take my sweet time.\""
            },
            {
                text : "He lifts the head of the fallen man, who moans in protest."
            },
            {
                text : "\"I think we all need a bit of violence.\""
            },
            {
                text : "Smiles worm onto the torn faces of the ring of slavers."
            },
            {
                text : "\"And then, we’re going to come for you.\""
            }
        ],
        options : [
            {
                text : "Run",
                advance : [
                    {
                        node : "165"
                    }
                ]
            }
        ]
    },
    "165" : {
        content : [
            {
                text : "You heed his warning, backtracking nervously out of the room. The instant you clear the doors, you dart, faster than you ever have before, colliding with the wall in a few instances and missing steps. As you run blindly through the ship’s offices You hear sickening crunches fade into laughter in your wake. Monsters."
            }
        ],
        continue : "169"
    },
    "166" : {
        content : [
            {
                text : "You begin to beg for mercy. Jeers ring out from those around you."
            },
            {
                text : "The captain closes the distance, and grips your cheeks to his face. Sweat seeping, his reddened eyes maniacally darting about yours, probing for weakness, he whispers into your ear as a knife slides into your gut. You jerk wildly to no avail."
            },
            {
                img : "http://www.jumbledjargon.website/messengerbot/bot-content/storybot/space-escape/death-shot.png"  
            },
            {
                text : "\"On second though, there is no place for you.\""
            },
            {
                text : "Blackness."
            }
        ],
        options : [
            {
                text : "Start Over",
                advance : [
                    {
                        node : "1"
                    }
                ]
            }
        ]
    },
    "167" : {
        content : [
            {
                text : "You slink around the back of the room, peering forward to get a glimpse of the fallen figure. Your eyes aren’t what they used to be, but his long white hair, and naked appearance are telling – it’s the leader of the slave uprising.",
                constraints : [
                    {
                        type : "flag",
                        set : true,
                        name : "slaves_freed"
                    }
                ]
            },
            {
                text : "A man in flight gear lies coughing at the feet of the captain. This doesn’t bode well for you.",
                constraints : [
                    {
                        type : "flag",
                        set : false,
                        name : "slaves_freed"
                    }
                ]
            },
            {
                text : "The captain’s face is obfuscated by thick, black hair. He’s a stocky man, and strikes and imposing stance at the head of the ship. He’s responsible for you being here, so you’re predisposed to hate everything about him. Including his stupid hair."
            }
        ],
        continue : "150"
    },
    "168" : {
        content : [
            {
                text : "There’s no way you can do that without making yourself known. As you’re contemplating exactly which combo of attacks to unleash on your captors, the doors behind you, unstuck by your interference, slowly slide shut with a pervasive clank. Uh-oh."
            }
        ],
        continue : "152"
    },
    "169" : {
        content : [
            {
                text: "Colliding with sliding doors, you fixate on the end of the corridor, the hiss of pistons and airlocks growing louder. Holopads logging illicit trade activity scatter madly about your feet, and the wood-varnished walls and cosy interior are mere environmental blurs."
            },
            {
                text : "And then, just as quickly as it started, with one confusing frame you’re incapable of comprehending, you’re overcome with darkness."
            },
            {
                text : "..."
            },
            {
                text : "..."
            }
        ],
        options : [
            {
                text : "Wake up",
                advance : [
                    {
                        node : "170"
                    }
                ]
            }
        ]
    },
    "170" : {
        content : [
            {
                text : "You groan, vision swimming as you use what little force you have remaining to pry your eyelids apart. Slowly, you come to see a scared woman standing over you."
            },
            {
                img : "http://www.jumbledjargon.website/messengerbot/bot-content/storybot/space-escape/office-woman.png"
            }
        ],
        options : [
            {
                text : "Who?",
                advance : [
                    {
                        node : "171"
                    }
                ]
            },
            {
                text : "What?",
                advance : [
                    {
                        node : "171"
                    }
                ]
            }
        ]
    },
    "171" : {
        content : [
            {
                text : "She raises a black bat, menacingly. The end glows. You haven’t seen a weapon like that before."
            },
            {
                text : "Seeing you staring, she stammers."
            },
            {
                text : "\"E-e-exflow baton. It- it’s not as…\""
            },
            {
                text : "She appears reconsider her approach to that sentence."
            },
            {
                text : "\"I can k-kill you with it. I will. I- I will kill you.\""
            }
        ],
        options : [
            {
                text : "Why?",
                advance : [
                    {
                        node : "172"
                    }
                ]
            }
        ]
    },
    "172" : {
        content : [
            {
                text : "Again, you attempt to communicate, but this only makes her more nervous. Nervousness seems to be bad for the both of you."
            },
            {
                text : "\"You’re the j-j-janitor right? You’re not meant to be cleaning, here. Not here. So you’re th-the one who’s escaped. Or.. escaping. Caught, n-now.\""
            }
        ],
        options : [
            {
                text : "No?",
                advance : [
                    {
                        node : "173"
                    }
                ]
            },
            {
                text : "Yes",
                advance : [
                    {
                        node : "174"
                    }
                ]
            }
        ]
    },
    "173" : {
        content : [
            {
                text : "You shake your head hopefully, but she’s not buying it."
            }
        ],
        continue : "175"
    },
    "174" : {
        content : [
            {
                text : "You concede that point, nodding regretfully."
            }
        ],
        continue : "175"
    },
    "175" : {
        content : [
            {
                text : "\"I’m sorry but. I.. I h-have to kill you, or they’ll kill me for not- not killing you.\""
            },
            {
                text : "It’s a straightforward but poignant motivation."
            }
        ],
        options : [
            {
                text : "Come with me",
                advance : [
                    {
                        node : "176"
                    }
                ],
                return : true
            },
            {
                text : "Use Vial",
                constraints : [
                    {
                        type : "item",
                        set : true,
                        name : "vial"
                    }
                ],
                advance : [
                    {
                        node : "177"
                    }
                ]
            },
            {
                text : "They're busy",
                constraints : [
                    {
                        type : "flag",
                        set : true,
                        name : "slaves_freed"
                    }
                ],
                advance : [
                    {
                        node : "179"
                    }
                ]
            }
        ]
    },
    "176" : {
        content : [
            {
                text : "She jabs you in the stomach, yelping a little at your reaction. Clearly, trying to befriend her is not the best course of action."
            }
        ],
        continue : "175"
    },
    "177" : {
        content : [
            {
                text : "With no other option that won’t earn you a swift blow to the abdomen, you slowly reach into your pocket so as not to alarm her. She allows it, readjusting the grip on her baton, as you pull out the vial."
            },
            {
                text : "\"W-what’s that? What is that?\""
            }
        ],
        options : [
            {
                text : "Tranquiliser",
                advance : [
                    {
                        node : "178"
                    }
                ]
            },
            {
                text : "Love potion",
                advance : [
                    {
                        node : "178"
                    }
                ]
            },
            {
                text : "I'm not sure",
                advance : [
                    {
                        node : "178"
                    }
                ]
            }
        ]
    },
    "178" : {
        content : [
            {
                text : "Your eyes screw shut as she bats the vial from your hand. It smashes on impact, showering you both with the unknown substance."
            },
            {
                text : "You both gawk as you disappear."
            },
            {
                text : "She shrieks."
            },
            {
                text : "\"W-what?! Where did you go?! WHERE DID I GO?\""
            },
            {
                text : "It seems the serum makes you invisible. You muse that this must come in useful during illegal animal smuggling."
            }
        ],
        continue : "180"
    },
    "179" : {
        content : [
            {
                text : "You manage to convince her that the crew are too preoccupied with other matters to notice your absence. She considers this, checking the room for cameras. Eventually, sobbing quietly, she drops the baton and flounders back towards the entrance to the Civics."
            }
        ],
        continue : "180"
    },
    "180" : {
        content : [
            {
                text : "Now's your chance."
            }
        ],
        options : [
            {
                text : "Leave",
                advance : [
                    {
                        node : "181"
                    }
                ]
            }
        ]
    },
    "181" : {
        content : [
            {
                text : "You tip-toe away towards the docking station, still dazed, waiting for everything to wear off."
            }
        ],
        continue : "184"
    },
    "184" : {
        content : [
            {
                img : "http://www.jumbledjargon.website/messengerbot/bot-content/storybot/space-escape/docking.png"  
            },
            {
                text : "The bay pulses with robotic activity. Massive precision arms dart on tracks between incomprehensible piles of goods, and at the far end of the room darkened workmen operate pulleys obliviously, dancing around the exterior of smaller docked ships with their tools to a hail of fireworks."
            },
            {
                text : "Loud suction noises mark the eruption of steam from the countless grates scattered haphazardly about every surface, and you narrowly avoid being blistered as you tread down the stairs towards the unattended ship at the exit."
            },
            {
                text : "It seems your act of goodwill has helped you after all, as you spot some of the slaves high up in the main passageway wreaking havoc. However, scorch marks on the floor behind indicate that some decided not to take part in the mutiny, and instead escape. There’d better be fuel left in this one.",
                constraints : [
                    {
                        type : "flag",
                        set : true,
                        name : "slaves_freed"
                    }
                ]
            }
        ],
        options : [
            {
                text : "Ship",
                advance : [
                    {
                        node : "185"
                    }
                ],
                remove : true
            },
            {
                text : "Out there",
                advance : [
                    {
                        node : "186"
                    }
                ],
                remove : true
            }
        ],
        continue : "187"
    },
    "185" : {
        content : [
            {
                text : "A small vessel by comparison, but nonetheless fit for travel, the cockpit looks to hold two. Its arms extend marginally across the hold, casting a lonely shadow."
            },
            {
                text : "You grab the bars and hoist yourself up onto its hull, ready to duck in, wracked with anticipation as a siren drills. Sinking into the main room, you board just as bay floods with slavers and their paid shills."
            },
            {
                text : "Now would be a great time to learn to fly."
            }
        ],
        continue : "184"
    },
    "186" : {
        content : [
            {
                text : "You feel a gradual cold encompass your body. You’re unsure whether this effect is psychological, as you can’t tear your eyes away from the vast expanse before you. "
            },
            {
                text : "The outside."
            },
            {
                text : "Space, separated by a thin veneer of energy containing the internal atmospheric pressure of the ship. If you attempted to leave without one of your own, you’d be swallowed whole by physics."
            }
        ],
        continue : "184"
    },
    "187" : {
        content : [
            {
                text : "You drop down into a cool, dark room. The hole accessing the cockpit should be ahead, but instead there’s a very quizzical figure in the way, covered completely in an atmospheric flight suit."
            },
            {
                img : "http://www.jumbledjargon.website/messengerbot/bot-content/storybot/space-escape/cockpit-man.png"
            },
            {
                text : "To be fair, you look equally ridiculous. In the reflection on his helmet, you see somebody transformed, a separate entity to the person who, just hours prior, was knee-deep in pirate phlegm. In your stained work uniform, you remain motionless as the ship is besieged."
            },
            {
                text : "A blaster hangs on the wall next to the figure."
            }
        ],
        options : [
            {
                text : "Use Gun",
                constraints : [
                    {
                        type : "item",
                        set : true,
                        name : "gun"
                    }
                ],
                advance : [
                    {
                        node : "188"
                    }
                ],
                remove : true
            },
            {
                text : "Use Taser",
                constraints : [
                    {
                        type : "item",
                        set : true,
                        name : "taser"
                    }
                ],
                advance : [
                    {
                        node : "191"
                    }
                ],
                remove : true
            },
            {
                text : "Peace",
                advance : [
                    {
                        node : "194"
                    }
                ]
            },
            {
                text : "Violence",
                advance : [
                    {
                        node : "195"
                    }
                ]
            }
        ]
    },
    "188" : {
        content : [
            {
                text : "You raise your scavenged gun, hoping it comes in useful. The figure doesn’t respond."
            }
        ],
        options : [
            {
                text : "Shoot",
                advance : [
                    {
                        node : "189"
                    }
                ]
            },
            {
                text : "Lower gun",
                advance : [
                    {
                        node : "190"
                    }
                ]
            }
        ]
    },
    "189" : {
        content : [
            {
                text : "You cock the gun. Still nothing. Cursing, you pull the trigger with a useless clink. You lower the gun. Still nothing."
            }
        ],
        continue : "187"
    },
    "190" : {
        content : [
            {
                text : "Intimidated by the lack of response to your threatening actions, you begin to wonder whether Mr. Gagarin here actually poses a threat at all."
            }
        ],
        continue : "187"
    },
    "191" : {
        content : [
            {
                text : "You raise your taser. The figure shuffles away from the blaster on the wall, but otherwise does nothing."
            }
        ],
        advance : [
            {
                text : "Shoot",
                advance : [
                    {
                        node : "192"
                    }
                ]
            },
            {
                text : "Lower taser",
                advance : [
                    {
                        node : "193"
                    }
                ]
            }
        ]
    },
    "192" : {
        content : [
            {
                text : "You launch a prong at the figure’s stomach. It’s pierces the suit with a mighty sag, buzzing into the folds, but as air rushes out it’s apparent that there are too many layers. Even now, the figure does not react."
            }
        ],
        continue : "187"
    },
    "193" : {
        content : [
            {
                text : "Intimidated by the lack of response to your threatening actions, you begin to wonder whether Mr. Gagarin here actually poses a threat at all."
            }
        ],
        continue : "187"
    },
    "194" : {
        contents : [
            {
                text : "You tell the walking helmet you want to leave. It waves it’s arm at the entrance you came through."
            },
            {
                text : "You’re about to make a sarcastic retort, when another chorus of laser blasts rock the ship."
            },
            {
                text : "The figure seems to reconsider, and instead begrudgingly beckons you into the cockpit."
            }
        ],
        continue : "203"
    },
    "195" : {
        contents : [
            {
                text : "Deciding to strike first this time, you unleash your anger on the figure with a quick kick to the stomach. They tumble backwards."
            }
        ],
        actions : [
            {
                type : "add",
                what : "flag",
                which : "no_pilot"
            }
        ],
        options : [
            {
                text : "Stop",
                advance : [
                    {
                        node : "196"
                    }
                ]
            },
            {
                text : "Grab rocket pack"
            }
        ]
    },
    "196" : {
        content : [
            {
                text : "Deciding you’ve made your point, you push past into the cockpit, jamming the seal behind you."
            }
        ],
        continue : "199"
    },
    "197" : {
        content : [
            {
                text : "You grab the interconnecting tubes ventilating their suit, and yank downwards. De-pressurising Oxygen sprays generously into their helmet, and they finally make a noise – a deep, choking sound."
            }
        ],
        options : [
            {
                text : "Stop",
                advance : [
                    {
                        node : "196"
                    }
                ]
            },
            {
                text : "Finish it",
                advance : [
                    {
                        node : "198"
                    }
                ]
            }
        ]
    },
    "198" : {
        content : [
            {
                text : "Deciding to finish what you’ve started, and hyperventilating with anger, you go to grab the blaster on the wall."
            },
            {
                text : "A piercing whistle, crack, ping, then spurt, in hair-splitting succession, resound across the room. Light explodes against the back wall, and you follow it, burned into your iris, back into your chest, and behind you towards the window. The chief of the guard stands, yards outside of the ship with a large gun."
            },
            {
                text : "Clutching the decimated hole where your heart used to be, your head swims as you wheeze out a final breath."
            },
            {
                img : "http://www.jumbledjargon.website/messengerbot/bot-content/storybot/space-escape/death-shot.png"  
            },
            {
                text : "Into the puddle of your own blood. Blackness."
            }
        ],
        options : [
            {
                text : "Start Over",
                advance : [
                    {
                        node : "1"
                    }
                ]
            }
        ]
    },
    "199" : {
        content : [
            {
                img : "http://www.jumbledjargon.website/messengerbot/bot-content/storybot/space-escape/cockpit.png"
            },
            {
                text : "Feeling giddy in the proximity of freedom, you admire the cockpit, taking inventory. A plethora of foreign buttons and screens, and a display showing multiple red patches cast over a wireframe of the ship. You ignore this, praying she at least flies."
            },
            {
                text : "A shutter begins to drop from above; an attempt to seal you in, as if you weren’t already under enough pressure."  
            },
            {
                text : "How do you fly this thing?",
            }
        ],
        options : [
            {
                text : "Remember",
                advance : [
                    {
                        node : "200"
                    }
                ],
                remove : true
            },
            {
                text : "Attempt to fly",
                advance : [
                    {
                        node : "201"
                    }
                ]
            },
            {
                text : "Use Emergency Card",
                constraints : [
                    {
                        type : "item",
                        set : true,
                        name : "emergency_card"
                    }
                ],
                advance : [
                    {
                        node : "202"
                    }
                ]
            }
        ]
    },
    "200" : {
        content : [
            {
                text : "Trying to draw upon the flying lessons of your youth is futile. The ship groans and tips onto its nose, and you grab your seat in fear."
            }
        ],
        continue : "199"
    },
    "201" : {
        content : [
            {
                text : "Pushing every button in sight, and straining the flightstick towards you, veins bursting, the ship moves. Success!"
            },
            {
                text : "You shepherd the ship forward, edging painstakingly past the force-field. There’s nothing obviously labelled 'lightspeed'."
            },
            {
                text : "With horror, a loud crunch rips the ship in half. The shutter, rips through the hull, and your ears burst. Choking, and straining in the vacuum of space, you float forward. You die with your bulging face pressed to the front of a screen of space-debris, tantalisingly close to success."
            }
        ],
        options : [
            {
                text : "Start Over",
                advance : [
                    {
                        node : "1"
                    }
                ]
            }
        ]
    },
    "202" : {
        content : [
            {
                text : "You hold the emergency card up into the air expectantly. It’s whipped from your hand and into a nearby slot. You can’t believe that worked."
            },
            {
                text : "\"Autopilot engaging.\" A monotone voice is barely audible over the cacophony of the docking station. Your ship spins up, manoeuvring out into the depths. You scream as you tumble around, unbound by gravity but surprised, as a rocket whizzes past."
            },
            {
                text : "\"Evasion Successful\""
            },
            {
                text : "Excellent. Goosebumps raise on your skin, as a crackle of energy signifies warp preparation. And in an instant, with little fanfare, you blink into infinity."
            }
        ],
        continue : "204"
    },
    "203" : {
        content : [
            {
                img : "http://www.jumbledjargon.website/messengerbot/bot-content/storybot/space-escape/cockpit.png"
            },
            {
                text : "Feeling giddy in the proximity of freedom, you admire the cockpit, taking inventory. A plethora of foreign buttons and screens, and a display showing multiple red patches cast over a wireframe of the ship. You ignore this, praying she at least flies."
            },
            {
                text : "A shutter begins to drop from above; an attempt to seal you in, as if you weren’t already under enough pressure."
            },
            {
                text : "Your suited companion takes the helm, as you stare behind. The chief of the guard briefly appears at the back window, as lightning explodes your viewport. The pilot grunts."
            },
            {
                text : "\"Cockpit is blastproof. Sit down, or I’m throwing you out there.\""
            },
            {
                text : "You oblige, and with motorised arms preparations are made for a warp. Goosebumps raise on your skin to a crackle of energy. And in an instant, with little fanfare, you blink into the distance."
            }
        ],
        continue : "204"
    },
    "204" : {
        contents : [
            {
                text : "You sit in the awning of the ship, some days later, marvelling at the symphony of colours in the void. Despite the stolen years, you feel young, and, most importantly, alive. This is not the end of your story, it is finally the beginning. And there’s a lot of worlds that could use cleaning."
            }
        ]
    }
}