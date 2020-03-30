const jwt = require('jsonwebtoken')

const secretKey = 'kkofjow78310ifjl'

const getToken = req => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(' ')[0] === 'Bearer' ) {
    return req.headers.authorization.split(' ')[1]
  }

  return null
}

const createToken = user => {
  return jwt.sign(user, secretKey, { expiresIn: '30s' })
}

const verifyToken = req => {
  const result = {}

  const token = getToken(req)

  jwt.verify(token, secretKey, (err, decoded) => {
    result.user = decoded
    result.err = err
  })

  return result
}

module.exports = {
  createToken,
  verifyToken
}