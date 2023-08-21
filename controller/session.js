// @ts-nocheck
import session from "express-session";
import config from '../config/default'
import connection from "../mysql";
import MySqlStore from "express-mysql-session";

const MySQLStore =  MySqlStore(session)

const {  secret  } = config.session
const sessionStore = new MySQLStore({}, connection);

export default session({
	name: "token",
	secret: secret,
  cookie: {
    maxAge: 30 * 24 * 60 * 60,
  },
	store: sessionStore,
	resave: false,
	saveUninitialized: false
}) 