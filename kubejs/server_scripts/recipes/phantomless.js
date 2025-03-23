ServerEvents.recipes(event => {
    // phantom membrane replacements
    if (Platform.isLoaded("railways")) {
        event.recipes.createFilling("railways:track_phantom", [CR("track"), Fluid.of(CR("potion"), 50, '{Potion:"minecraft:invisibility"}')])
        event.recipes.createFilling("railways:track_phantom", [CR("track"), Fluid.of(CR("potion"), 50, '{Potion:"minecraft:long_invisibility"}')])
        event.recipes.createFilling("railways:track_phantom", [CR("track"), Fluid.of("cofh_core:potion", 50, '{Potion:"minecraft:invisibility"}')])
        event.recipes.createFilling("railways:track_phantom", [CR("track"), Fluid.of("cofh_core:potion", 50, '{Potion:"minecraft:long_invisibility"}')])
    }

    if (Platform.isLoaded("moreminecarts")) {
        event.replaceInput({}, 'minecraft:phantom_membrane', TE("blitz_powder"))
        event.recipes.createCrushing([Item.of("moreminecarts:levitation_powder"), Item.of("moreminecarts:levitation_powder", 1).withChance(.5)], TE("blitz_powder"))
    }    
    // alternate double jump recipe
    event.custom({
        "type": "tconstruct:modifier",
        "inputs": [
            { "item": "minecraft:piston" },
            { "item": "tconstruct:sky_slime" },
            { "item": "minecraft:piston" },
            { "item": "trials:wind_charge" },
            { "item": "trials:wind_charge" }
        ],
        "result": "tconstruct:double_jump",
        "slots": {
            "abilities": 1
        },
        "tools": {
            "tag": "tconstruct:modifiable/armor/boots"
        }
    }).id("tconstruct:tools/modifiers/ability/double_jump")
    // slow fall potion is in startup script potions.js
})

ServerEvents.loaded(event => {
    if (!event.server.persistentData.insomniaDisabled) {
        event.server.runCommandSilent("/gamerule doInsomnia false")
        event.server.persistentData.insomniaDisabled = true;
    }
})
