const createCustomCSS = (messageParent) => {
    const style = document.createElement('style')
    style.innerHTML = `
      #messenger-button {
        border-radius: 0;
      }
    `
    messageParent.body.prepend(style)
}

window.createCustomCSS = createCustomCSS