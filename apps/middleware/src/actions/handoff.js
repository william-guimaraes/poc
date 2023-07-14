const sunco = require("../lib/sunshine")

const appId = process.env.APP_ID
const integrationId = process.env.AW_ID
const switchboardInstance = new sunco.client.SwitchboardActionsApi()

const handoff = async (conversationId) => {
    try {
        await switchboardInstance.passControl(appId, conversationId, {
            switchboardIntegration: integrationId,
        })
    } catch (e) {
        console.log(e.body.errors)
    }
}

exports.post = handoff