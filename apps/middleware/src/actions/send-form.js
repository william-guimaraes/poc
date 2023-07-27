const sunco = require("../lib/sunshine")

const appId = process.env.APP_ID
const messagesInstance = new sunco.client.MessagesApi()

const postForm = async (conversationId) => {
    const messagePost = new sunco.client.MessagePost();
    messagePost.setAuthor({ type: 'business' });
    messagePost.setContent({
        type: 'form',
        fields: [
            {
                type: 'text',
                name: 'name',
                label: 'Name',
                placeholder: 'Enter your name...'
            },
            {
                type: 'email',
                name: 'email',
                label: 'Email',
                placeholder: 'Enter your email...'
            }
        ]
    });
    messagePost.setMetadata({
        'form-type': 'basic-info'
    })
    
    try {
        await messagesInstance.postMessage(appId, conversationId, messagePost);
    } catch (e) {
        console.log(e)
    }
}

exports.post = postForm