require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const path = require('path')

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
}).then(db => {
    app.set('db', db)
    console.log('Connected to db')
})

app.post('/auth/register', auth.emailMiddleware, auth.nameMiddleware, auth.register)
app.post('/auth/login', auth.login)
app.post('/auth/logout', auth.logout)
app.get('/auth/user', auth.getUserSession)
app.get('/auth/getuser', auth.adminOnly, auth.getAllUsers)

app.put('/api/practice/', prac.updatePractice)
app.put('/api/practice/', prac.resetPractice)
app.get('/api/practice/', prac.getPractice)

app.post('/api/appointment/', apt.addAppointment)
app.delete('/api/appointment/', apt.deleteAppointment)
app.get('/api/appointment/', apt.getAppointment)

app.use( express.static( `${__dirname}/../build`));

app.get('*', (req, res)=> {
    res.sendFile(path.join(__dirname, '../build/index.html'))
})

app.listen(SERVER_PORT, () => console.log(`Connected on Port ${SERVER_PORT}`))