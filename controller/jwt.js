import { verifyToken } from '../utils/index'

const verfyController = async (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.json({ code: 401, message: 'Unauthorized' })
  }
  
  try {
    const user =  await verifyToken(token)
    req.user = user
    next()
  } catch (error) {
    res.json({ code: 403, message: 'Invalid token' })
  }
}

export default verfyController