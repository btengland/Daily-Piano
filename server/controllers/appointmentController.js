const twilio = require('twilio')
const { AUTH_TOKEN } = process.env
const myPhoneNumber = '2623933161'
const accountSid = 'ACdda3433573b6d1e51f480fb16d25ef03'
const client = new twilio(accountSid, AUTH_TOKEN)

module.exports = {
    addAppointment: async (req, res) => {
        const { date, phone_number } = req.body
        const { user_id } = req.session.user
        const db = req.app.get('db')
        await client.messages.create({
            to: phone_number,
            from: myPhoneNumber,
            body: `Reminder: Your piano lesson is ${new Date(date).toDateString()}`
        }).then(async (message) => {
            const [add] = await db.appointment.add_appointment([`${date}-${new Date(date).getTimezoneOffset() / 60}`, phone_number, user_id])
            return res.status(201).send(add)
        }).catch(err => {
            console.log(err)
            res.sendStatus(500)
        })
    },
    deleteAppointment: async (req, res) => {
        const { user_id } = req.session.user
        const db = req.app.get('db')
        await db.appointment.delete_appointment(user_id)
        return res.sendStatus(200)
    },
    getAppointment: async (req, res) => {
        const { user_id } = req.session.user
        const db = req.app.get('db')
        const [get] = await db.appointment.get_appointment(user_id)
        return res.status(200).send(get)
    }
}