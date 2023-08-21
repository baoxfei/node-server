import connection from '../mysql'
import crypto from 'crypto'
import jwt from 'jsonwebtoken';
import config from '../config/default'

const { verify, sign } = jwt

const query = (sql, value) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, value, (error, results, fields) => {
      if (error) {
        reject(error)
      }
      resolve(results)
    })
  })
}

const md5 = (password) => {
  const md5 = crypto.createHash('md5')
  return md5.update(password).digest("base64")
}

const setToken = async ({ userName, password }) => {
  return new Promise((resolve, reject) => {
    const { secret, maxAge } = config.session
    const token = sign({ user_name: userName }, secret, { expiresIn: maxAge });
    resolve(token)
  })
}

const verifyToken = async (token) => {
  return new Promise((resolve, reject) => {
    verify(token, config.session.secret, (err, decoded) => {
      if (err) reject('Invalid token')
      resolve(decoded)
    })
  })
}


export {
  query,
  md5,
  setToken,
  verifyToken
}