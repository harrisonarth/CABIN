if (Platform.isLoaded("computercraft")) {
    ServerEvents.recipes(event => {
        event.replaceInput({ id: "computercraft:cable" }, "minecraft:redstone", "projectred_core:red_ingot")
        event.replaceInput({ id: "computercraft:wired_modem" }, "minecraft:redstone", "projectred_core:red_ingot")

        event.remove({ id: "computercraft:turtle_advanced" })
        event.remove({ id: "computercraft:turtle_advanced_upgrade" })
        event.remove({ id: "computercraft:turtle_normal" })

        leadMachine(event, "computercraft:computer_normal", "projectred_core:red_ingot")
        leadMachine(event, "computercraft:computer_advanced", "minecraft:netherite_scrap")
        leadMachine(event, "computercraft:disk_drive", "computercraft:disk")
        leadMachine(event, "computercraft:printer", "minecraft:paper")

        createMachine("computercraft:computer_normal", event, "computercraft:turtle_normal", "thermal:invar_gear")
        createMachine("computercraft:computer_advanced", event, "computercraft:turtle_advanced", "thermal:invar_gear")
        createMachine("computercraft:computer_normal", event, "computercraft:monitor_normal", "minecraft:glass_pane")
        createMachine("computercraft:computer_advanced", event, "computercraft:monitor_advanced", "minecraft:glass_pane")
    })
}
