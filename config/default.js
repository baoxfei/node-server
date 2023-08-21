
export default {
  port: process.env.PORT || 5000,
  url: 'localhost',
  dbPort: 3306,
  user: 'root',
  password: '123456',
  database: 'test2',
	session: {
		name: 'SID',
		secret: 'SID',
		cookie: {
			httpOnly: true,
	    secure: false,
	    maxAge: 365 * 24 * 60 * 60 * 1000,
		}
	}
}