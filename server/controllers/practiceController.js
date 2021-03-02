module.exports = {
    updatePractice: async (req, res) => {
        const { monday, tuesday, wednesday, thursday, friday, saturday, sunday, goal } = req.body
        const { user_id } = req.session.user
        const db = req.app.get('db')
        const [update] = await db.practice.update_practice(monday, tuesday, wednesday, thursday, friday, saturday, sunday, goal, user_id)
        return res.status(200).send(update)
    },
    deletePractice: async (req, res) => {
        const { user_id } = req.session.user
        const db = req.app.get('db')
        const [del] = await db.practice.delete_practice(user_id)
        return res.status(200).send(del)
    },
    getPractice: async (req, res) => {
        const { user_id } = req.session.user
        const db = req.app.get('db')
        const [get] = await db.practice.get_practice(user_id)
        return res.status(200).send(get)
    }
}