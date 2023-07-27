const sunco = require("../lib/sunshine")

const appId = process.env.APP_ID
const messagesInstance = new sunco.client.MessagesApi()

const postLink = async (conversationId) => {
    const messagePost = new sunco.client.MessagePost();
    messagePost.setAuthor({ type: 'business' });
    messagePost.setContent({
        type: 'text',
        text: 'Please, choose one the following options:',
        actions: [
            {
                type: 'reply',
                text: 'Authenticate',
                payload: 'AuthAction'
            },
            {
                type: 'reply',
                text: "I don't know my credentials",
                payload: 'MissingCredentials'
            },
        ]
    });
    messagePost.setMetadata({
        'form-type': 'test'
    })

    try {
        await messagesInstance.postMessage(appId, conversationId, messagePost);
    } catch (e) {
        console.log(e);
    }
}

exports.post = postLink
