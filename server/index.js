require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')

const app = express()
const { SESSION_SECRET, SERVER_PORT, CONNECTION_STRING } = process.env
const auth = require('./controllers/userController')

app.use(express.json())
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then( db => {
    app.set('db', db)
    console.log('Connected to db')
})

app.post('/auth/register', auth.register)

app.listen(SERVER_PORT, () => console.log(`Connected on Port ${SERVER_PORT}`))