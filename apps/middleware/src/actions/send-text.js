const sunco = require("../lib/sunshine")

const appId = process.env.APP_ID
const messagesInstance = new sunco.client.MessagesApi()

const postText = async (conversationId, text) => {
    const messagePost = new sunco.client.MessagePost();
    messagePost.setAuthor({ type: 'business' });
    messagePost.setContent({
        type: 'text',
        text
    });
    
    try {
        await messagesInstance.postMessage(appId, conversationId, messagePost);
    } catch (e) {
        console.log(e)
    }
}

exports.post = postText