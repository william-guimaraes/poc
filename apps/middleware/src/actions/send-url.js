const sunco = require("../lib/sunshine")

const appId = process.env.APP_ID
const messagesInstance = new sunco.client.MessagesApi()

const postURL = async (conversationId) => {
    const messagePost = new sunco.client.MessagePost();
    messagePost.setAuthor({ type: 'business' });
    messagePost.setContent({
        type: 'text',
        text: 'Please, choose one the following options:',
        actions: [
            {
                type: 'link',
                text: 'WhatsApp',
                uri: 'https://wa.me//14384760143?text=2224680198%20is%20my%20code,%20I%20want%20to%20continue%20my%20conversation%20on%20WhatsApp'
            }
        ]
    });

    try {
        await messagesInstance.postMessage(appId, conversationId, messagePost);
    } catch (e) {
        console.log(e);
    }
}

exports.post = postURL