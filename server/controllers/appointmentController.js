module.exports = {
    addAppointment: async (req, res) => {
        const { date } = req.body
        const { user_id } = req.session.user
        const db = req.app.get('db')
        const add = await db.appointment.add_appointment([date, user_id])
        return res.status(201).send(add)
    },
    updateAppointment: async (req, res) => {
        const { date } = req.body
        const { appointment_id } = req.params
        const db = req.app.get('db')
        const update = await db.appointment.update_appointment([date, appointment_id])
        return res.status(200).send(update)
    },
    deleteAppointment: async (req, res) => {
        const { appointment_id } = req.params
        const db = req.app.get('db')
        const del = await db.appointment.delete_appointment(appointment_id)
        return res.status(200).send(del)
    },
    getAppointment: async (req, res) => {
        const db = req.app.get('db')
        const get = await db.appointment.get_appointment([user_id])
        return res.status(200).send(get)
    }
}