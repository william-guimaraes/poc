const sunco = require("../lib/sunshine")

const appId = process.env.APP_ID
const messagesInstance = new sunco.client.MessagesApi()

const postPin = async (conversationId) => {
    const messagePost = new sunco.client.MessagePost();
    messagePost.setAuthor({ type: 'business' });
    messagePost.setContent({
        type: 'form',
        fields: [
            {
                type: 'text',
                name: 'pin',
                label: 'Enter PIN',
                placeholder: 'PIN Number'
            }
        ]
    });
    messagePost.setMetadata({
        'form-type': 'pin-request'
    })
    
    try {
        await messagesInstance.postMessage(appId, conversationId, messagePost);
    } catch (e) {
        console.log(e)
    }
}

exports.post = postPin