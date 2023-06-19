import express from 'express'
import { generalResponse } from '../utils/generalResponse.js'
import { authService } from '../services/auth.service.js'

export const authRouter = express.Router()

authRouter.post('/', async (req, res) => {
  try {
    const { name, user, key } = req.body
    const data = await authService.auth({ paramName: name, paramUser: user, paramKey: key })
    res.send(generalResponse.ok(data))
  } catch (error) {
    console.error(error)
    res.status(400).send(generalResponse.error(error))
  }
})
