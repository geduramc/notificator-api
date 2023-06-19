import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'
import { router } from './routes/router.js'

dotenv.config()
const app = express()

app.set('port', process.env.PORT || 3000)

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

// routes
router(app)

app.listen(app.get('port'), () => {
  console.log(`🚀 [port: ${app.get('port')}] server running...`)
})
