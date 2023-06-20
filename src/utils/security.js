import { generalResponse } from '../utils/generalResponse.js'
import { authService } from '../services/auth.service.js'

const verifyJWT = (req, res, next) => {
  const result = authService.verify(req.headers.authorization)
  if (result) next()
  else res.status(401).send(generalResponse.error('Unauthorized: invalid or missing token'))
}

export const security = { verifyJWT }
