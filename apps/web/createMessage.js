const createWelcomeMessage = (messageParent) => {
    const messagesContainer = messageParent.querySelector(".messages")

    const wrapper = document.createElement("div")
    wrapper.classList.add("row", "left-row", "row-other-user-first")

    const messagesList = document.createElement("div")
    messagesList.classList.add('msg-wrapper')

    const avatar = document.createElement('div')
    avatar.classList.add('msg-avatar-placeholder')

    const container = document.createElement("div")
    container.classList.add('msg')

    const message = document.createElement('span')
    message.innerText = `Hello, user!
      We are here to help, let us know what you can do for you.
    `
    message.classList.add('message-item', 'message-text', 'last-item')
    
    messagesContainer.appendChild(wrapper)
    wrapper.appendChild(messagesList)
    messagesList.appendChild(avatar)
    messagesList.appendChild(container)
    container.appendChild(message)
}

window.createWelcomeMessage = createWelcomeMessage