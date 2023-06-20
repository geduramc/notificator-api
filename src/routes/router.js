import { generalResponse } from '../utils/generalResponse.js'
import { authRouter } from './auth.route.js'
import { messageRouter } from './message.route.js'

export function router (app) {
  app.get('/', (req, res) => {
    res.send(generalResponse.ok('🚀'))
  })

  app.get('/ping', (req, res) => {
    res.send(generalResponse.ok('🚀'))
  })

  app.use('/api/auth', authRouter)
  app.use('/api/message', messageRouter)
}
