const PR_T = (id, x) => MOD("projectred_transmission", id, x)
if (Platform.isLoaded("projectred_transmission")) {
    ServerEvents.recipes(event => {
        event.remove({ id: "projectred_transmission:wired_plate" })
        event.remove({ id: "projectred_transmission:bundled_plate" })
    })
}
