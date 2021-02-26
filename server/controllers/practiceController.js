module.exports = {
    addPractice: async (req, res) => {
        const { monday, tuesday, wednesday, thursday, friday, saturday, sunday, goal } = req.body
        const { user_id } = req.session.user
        const db = req.app.get('db')
        const add = await db.practice.add_practice([monday, tuesday, wednesday, thursday, friday, saturday, sunday, goal, user_id])
        return res.status(201).send(add)
    },
    updatePractice: async (req, res) => {
        const { monday, tuesday, wednesday, thursday, friday, saturday, sunday, goal } = req.body
        const { practice_id } = req.params
        const db = req.app.get('db')
        const update = await db.practice.update_practice([monday, tuesday, wednesday, thursday, friday, saturday, sunday, goal, practice_id])
        return res.status(200).send(update)
    },
    deletePractice: async (req, res) => {
        const { practice_id } = req.params
        const db = req.app.get('db')
        const del = await db.practice.delete_practice(practice_id)
        return res.status(200).send(del)
    },
    getPractice: async (req, res) => {
        const { practice_id } = req.body
        const db = req.app.get('db')
        const get = await db.practice.get_practice([practice_id])
        return res.status(200).send(get)
    }
}