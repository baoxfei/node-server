import mysql from 'mysql'
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  database: 'test2',
  password: '123456'
})

connection.connect()

export default connection