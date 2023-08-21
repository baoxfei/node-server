import express from 'express'
import chalk from 'chalk'
// import bodyParser from 'body-parser'
import router from './router'
import sessionController from './controller/session.js'

const app = express()

app.all('*', (req, res, next) => {
  const { Origin, reference,  } = req.headers
  const all = Origin || reference || '*'
  res.setHeader('Access-Control-Allow-Origin', all)
  res.setHeader('Access-Control-Allow-Headers', "Content-Type, Authorization, X-Request-With")
  res.setHeader('Access-Control-Allow-Options', "OPTION,POST,GET,DELETE")
  res.setHeader("Access-Control-Allow-Credential", 'true') // 可以携带cookie
  res.setHeader('X-Powered-By', 'Express') // 坏处：增加响应头的大小 让攻击者可以识别 开发的技术
  if (req.method === 'OPTIONS') {
    res.sendStatus(200)
  } else {
    next()
  }
})

app.use(sessionController)

// application: x-www-urlencode key=value
app.use(express.urlencoded({ extended: false }))
// application/json
app.use(express.json())

router(app)

const port = process.env.PORT || 5000
const server = app.listen(port)

server.on('request', () => {
  console.log(chalk.green('测试监听'))
})

