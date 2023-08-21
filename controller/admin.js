import chalk from 'chalk'
import _ from 'lodash'
import connection from '../mysql'
import { query, md5 } from '../utils'

class Admin {
  static async login(req, res, next) {
    try {
      const { account, password } = req.body
      const user = await query(`select * from user where [account] = "${account}" and [password] = "${password}"`);
      if (user) {
        // TODO 设置token
      } else {
        throw new Error('没有该用户')
      }
    } catch (error) {
      console.log(chalk.red(error.toString()))
    }
  }

  static signout() {

  }

  static async register(req, res, next) {
    try {
      const { account, password }  = req.body
      if (!account) {
        throw new Error('手机号不能为空')
      }
      if (!password) {
        throw new Error('密码不能为空')
      }
      const user = await query(`select * from user where name like "%${account}%"`)
      if (_.isEmpty(user)) {
        await query(`insert into user set ?`, { name: account, password: md5(password) })
        res.json({
          code: 200,
          data: null,
          message: '操作成功',
          success: true
        })
      } else {
        res.json({
          code: 101004,
          message: '改手机号已注册',
          data: null,
          success: false
        })
      }
    } catch (error) {
      console.log(chalk.red(error.toString()))
    }
  }

}


export default Admin