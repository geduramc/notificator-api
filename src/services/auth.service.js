import jwt from 'jsonwebtoken'

const auth = ({ _name, _user, _key }) => {
  return new Promise((resolve, reject) => {
    if (_key !== process.env.API_KEY) reject('invalid or missing api key')
    resolve({
      token: jwt.sign({
        name: _name,
        user: _user
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
