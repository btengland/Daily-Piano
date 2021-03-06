require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const twilio = require('twilio')
const {google} = require('googleapis')

const app = express()
const { SESSION_SECRET, SERVER_PORT, CONNECTION_STRING, AUTH_TOKEN } = process.env
const auth = require('./controllers/userController')
const prac = require('./controllers/practiceController')
const apt = require('./controllers/appointmentController')
const {oAuth2} = google.auth

const phoneNumber = '+12623933161'
const accountSid = 'ACdda3433573b6d1e51f480fb16d25ef03'
const client = new twilio(accountSid, AUTH_TOKEN)

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
}).then(db => {
    app.set('db', db)
    console.log('Connected to db')
})

app.post('/auth/register', auth.emailMiddleware, auth.register)
app.post('/auth/login', auth.login)
app.post('/auth/logout', auth.logout)
app.get('/auth/user', auth.getUserSession)

app.put('/api/practice/', prac.updatePractice)
app.put('/api/practice/', prac.resetPractice)
app.get('/api/practice/', prac.getPractice)

app.post('/api/appointment/', apt.addAppointment)
app.delete('/api/appointment/', apt.deleteAppointment)
app.get('/api/appointment/', apt.getAppointment)

app.listen(SERVER_PORT, () => console.log(`Connected on Port ${SERVER_PORT}`))