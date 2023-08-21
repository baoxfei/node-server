import user from './user'
import admin from './admin'
import verfyController from '../controller/jwt'
import { expressjwt } from 'express-jwt'
import config from '../config/default'


export default (app) => {
  app.use(expressjwt({
    secret: config.session.secret,
    algorithms:['HS256']
  }).unless({ path: ['/login', '/register'] }))
  app.use('/user', user)
  app.use('/admin', admin)
}