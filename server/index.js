require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')

const app = express()
const { SESSION_SECRET, SERVER_PORT, CONNECTION_STRING } = process.env
const auth = require('./controllers/userController')
const prac = require('./controllers/practiceController')
const apt = require('./controllers/appointmentController')

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
app.post('/auth/login', auth.login)
app.post('/auth/logout', auth.logout)
app.get('/auth/user', auth.getUserSession)

app.post('/api/practice', prac.addPractice)
app.put('/api/practice/:practice_id', prac.updatePractice)
app.delete('/api/practice/:practice_id', prac.deletePractice)
app.get('/api/practice', prac.getPractice)

app.post('/api/appointment', apt.addAppointment)
app.put('/api/appointment/:appointment_id', apt.updateAppointment)
app.delete('/api/appointment/:appointment_id', apt.deleteAppointment)
app.get('/api/appointment', apt.getAppointment)

app.listen(SERVER_PORT, () => console.log(`Connected on Port ${SERVER_PORT}`))