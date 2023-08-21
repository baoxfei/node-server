import express from 'express'
import Admin from '../controller/admin'

const router = express.Router()

router.post('/login', Admin.login)
router.get('/signout', Admin.signout)
router.post('/register', Admin.register)

export default router