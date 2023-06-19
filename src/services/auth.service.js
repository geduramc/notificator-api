import jwt from 'jsonwebtoken'

const auth = ({ paramName, paramUser, paramKey }) => {
  return new Promise((resolve, reject) => {
    if (paramKey !== process.env.API_KEY) reject('invalid or missing api key')
    resolve({
      token: jwt.sign({
        name: paramName,
        user: paramUser
      }, process.env.TOKEN_SECRET, null)
    })
  })
}

const verify = (token) => {
  let res = true
  try {
    if (!token) res = false
    jwt.verify(token.split(' ')[1], process.env.TOKEN_SECRET)
  } catch (error) {
    res = false
  }

  return res
}

export const authService = { auth, verify }
