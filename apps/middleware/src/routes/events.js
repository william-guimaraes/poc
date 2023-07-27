const express = require("express")
const handoff = require("../actions/handoff")
const linkMessage = require("../actions/send-link")
const formMessage = require("../actions/send-form")
const pinMessage = require("../actions/send-pin")
const textMessage = require("../actions/send-text")
const urlMessage = require("../actions/send-url")

const router = express.Router()

router.post('/', async (req, res) => {
    console.log('PAYLOAD:\n', JSON.stringify(req.body, null, 4));
    const conversationId = req.body.events[0].payload.conversation.id
    const authorType = req.body.events[0].payload.message.author.type

    if (authorType === 'business') {
        return res.status(200).end()
    }

    urlMessage.post(conversationId)

    const user = req.body.events[0].payload.message.author.user
    const isAuthenticated = !!user.externalId
    const replyPayload = req.body.events[0].payload.message.content.payload
    const quotedMessage = req.body.events[0].payload.message.quotedMessage

    if(isAuthenticated) {
        await handoff.post(conversationId)
        return res.status(200).end()
    }

    if(replyPayload === 'MissingCredentials') {
        await formMessage.post(conversationId)
        return res.status(200).end()
    }

    if(quotedMessage) {
        const formType = quotedMessage.message.metadata['form-type']
 
        if(formType === 'basic-info') {
            const name = quotedMessage.message.content.fields[0].text
            const email = quotedMessage.message.content.fields[1].email

            //Call the PIN service to send the email
            await pinMessage.post(conversationId)
            return res.status(200).end()
        }

        if(formType === 'pin-request') {
            //Call PIN service to get the correct pin
            const pin = quotedMessage.message.content.fields[0].text
            //Compare pin
            await textMessage.post(conversationId)
            await handoff.post(conversationId)
            return res.status(200).end()
        }
    }
    
    linkMessage.post(conversationId)
    return res.status(200).end()
});

exports.router = router