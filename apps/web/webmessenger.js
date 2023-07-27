Smooch.on('ready', function () {
    const conversations = Smooch.getConversations()
    const webMessenger = document.getElementById('web-messenger-container')
    const messengerContent = webMessenger.contentDocument

    createCustomCSS(messengerContent)

    if(conversations.length === 0) {
        createWelcomeMessage(messengerContent)
    }

    messengerContent.addEventListener('click', (event) => {
        const target = event.target
        const text = target.textContent || target.innerText
        if(text === 'New Conversation') {
            createWelcomeMessage(messengerContent)
        }
    })
});

Smooch.init({
    integrationId: '6283cd8c71d3bd00f6d393ac',
    integrationOrder: [],
});
