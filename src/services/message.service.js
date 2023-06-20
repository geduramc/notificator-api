const sendTelegramMessage = async ({ _sender, _message }) => {
  if (!_sender || _sender.length <= 0) throw new Error('invalid or missing sender')
  if (!_message || _message.length <= 0) throw new Error('invalid or missing message')

  const date = new Date().toISOString().slice(0, 10).replace(/-/g, '')
  const message = `${date} [${(_sender.length > 0) ? _sender : 'user'}] : ${_message}`

  return await new Promise((resolve, reject) => {
    try {
      fetch(`${process.env.TELEGRAM_API_URL}${process.env.TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${process.env.TELEGRAM_CHAT_ID}&text=${message}`)
        .then(response => response.json())
        .then(data => resolve(data))
    } catch (err) { reject(err) }
  })
}

export const messageService = { sendTelegramMessage }
