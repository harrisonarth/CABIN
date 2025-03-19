// priority: 1
ServerEvents.recipes(event => {
    // unify the output
    event.replaceOutput({ id: OC("crushing/obsidian_dust") }, OC("obsidian_dust"), CR("powdered_obsidian"))

    // Remove unwanted ore miner ores
    event.remove({ id: OC("miner/ores/redstone_ore") })
    event.remove({ id: OC("miner/ores/aluminum_ore") })
    event.remove({ id: OC("miner/ores/tin_ore") })
    event.remove({ id: OC("miner/ores/silver_ore") })
    event.remove({ id: OC("miner/deeps/deepslate_redstone_ore") })
    event.remove({ id: OC("miner/deeps/deepslate_aluminum_ore") })
    event.remove({ id: OC("miner/deeps/deepslate_tin_ore") })
    event.remove({ id: OC("miner/deeps/deepslate_silver_ore") })

    // Silver replacements
    event.replaceInput({ id: OC("crafting/magic_lamp_empty") }, F("#ingots/silver"), F("#ingots/iron"))
    event.replaceInput({ id: OC("crafting/lens_frame") }, F("#ingots/silver"), F("#ingots/zinc"))
    
    event.replaceInput({ type: "occultism:ritual" }, F("#dusts/silver"), F("#dusts/zinc"))
    event.replaceInput({ type: "occultism:ritual" }, F("#ingots/silver"), F("#ingots/zinc"))
    event.replaceInput({ type: "occultism:ritual" }, F("#storage_blocks/silver"), F("#storage_blocks/zinc"))

    // use dust instead of raw ore for ritual recipes
    event.replaceInput({ type: "occultism:ritual" }, "#forge:raw_materials/silver", "#forge:dusts/zinc")
    event.replaceInput({ type: "occultism:ritual" }, "#forge:raw_materials/iron", "#forge:dusts/iron")
    event.replaceInput({ type: "occultism:ritual" }, "#forge:raw_materials/gold", "#forge:dusts/gold")
    event.replaceInput({ type: "occultism:ritual" }, "#forge:raw_materials/copper", "#forge:dusts/copper")


    // crushing unification
    event.replaceOutput({ type: OC("crushing") }, OC("iron_dust"), TE("iron_dust"))
    event.replaceOutput({ type: OC("crushing") }, OC("gold_dust"), TE("gold_dust"))
    event.replaceOutput({ type: OC("crushing") }, OC("copper_dust"), TE("copper_dust"))
    event.replaceOutput({ type: OC("crushing") }, OC("iron_dust"), TE("iron_dust"))
    event.replaceOutput({ type: OC("crushing") }, OC("gold_dust"), TE("gold_dust"))
    event.replaceOutput({ type: OC("crushing") }, OC("silver_dust"), TE("silver_dust"))
})

// PlayerEvents.loggedIn(event => {

//     if (!global.occultism_reload) {
//         global.occultism_reload = true 
//         event.server.runCommandSilent(`reload`)
//     }

// })