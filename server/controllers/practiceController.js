module.exports = {
    addPractice: async (req, res) => {
        const { day, time_practiced } = req.body
        const { user_id } = req.session.user
        const db = req.app.get('db')
        const add = await db.practice.add_practice([day, time_practiced, user_id])
        return res.status(201).send(add)
    },
    updatePractice: async (req, res) => {
        const { time_practiced } = req.body
        const { pratice_id } = req.params
        const db = req.app.get('db')
        const update = await db.practice.update_practice([time_practiced, pratice_id])
        return res.status(200).send(update)
    },
    deletePractice: async (req, res) => {
        const { pratice_id } = req.params
        const db = req.app.get('db')
        const del = await db.practice.delete_practice(pratice_id)
        return res.status(200).send(del)
    },
    getPractice: async (req, res) => {
        const { start, end } = req.body
        const db = req.app.get('db')
        const get = await db.practice.get_practice([user_id, start, end])
        return res.status(200).send(get)
    }
}