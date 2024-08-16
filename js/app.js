import loading from './ui/loading.js'

document.addEventListener('DOMContentLoaded', async () => {
  const year = document.querySelector('small')
  const messageContainer = document.querySelector('#message-container')
  year.textContent = `~ ${new Date().getFullYear()}`

  try {
    loading(true)
    const url = 'https://api.npoint.io/9780e5acedfafd28b950'
    const { message } = await fetch(url).then((data) => data.json())
    messageContainer.innerHTML = message
  } catch {
    messageContainer.textContent = '¡Oops! algo salió mal con el mensaje :('
  } finally {
    messageContainer.classList.add('fade-in')
    loading(false)
  }
})
