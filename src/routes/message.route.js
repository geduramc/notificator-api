import express from 'express'
import { generalResponse } from '../utils/generalResponse.js'
import { messageService } from '../services/message.service.js'

export const messageRouter = express.Router()

messageRouter.post('/t', (req, res) => {
  const { sender, message } = req.body
  messageService.sendTelegramMessage({ _sender: sender, _message: message })
    .then((data) => {
      res.send(generalResponse.ok(data))
    }).catch(err => {
      console.error(err)
      res.status(400).send(generalResponse.error('Error sending message'))
    })
})
