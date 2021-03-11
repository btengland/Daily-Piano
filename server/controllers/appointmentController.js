let cron = require('node-cron')

module.exports = {
    addAppointment: async (req, res) => {
        const { date, phone_number } = req.body
        const { user_id } = req.session.user
        const db = req.app.get('db')
        const [add] = await db.appointment.add_appointment([`${date}-${new Date(date).getTimezoneOffset()/60}`, phone_number, user_id])
        console.log(date)
        // cron.schedule(`* * `, () => {

        // })
        return res.status(201).send(add)
    },
    deleteAppointment: async (req, res) => {
        const { user_id } = req.session.user
        const db = req.app.get('db')
        const del = await db.appointment.delete_appointment(user_id)
        return res.sendStatus(200)
    },
    getAppointment: async (req, res) => {
        const { user_id } = req.session.user
        const db = req.app.get('db')
        const [get] = await db.appointment.get_appointment(user_id)
        return res.status(200).send(get)
    }
}