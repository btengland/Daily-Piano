module.exports = {
    updatePractice: async (req, res) => {
        const { monday, tuesday, wednesday, thursday, friday, saturday, sunday, goal } = req.body
        const { user_id } = req.session.user
        const db = req.app.get('db')
        const [update] = await db.practice.update_practice(monday, tuesday, wednesday, thursday, friday, saturday, sunday, goal, user_id)
        return res.status(200).send(update)
    },
    resetPractice: async (req, res) => {
        const { monday, tuesday, wednesday, thursday, friday, saturday, sunday, goal } = req.body
        const { user_id } = req.session.user
        const db = req.app.get('db')
        const [reset] = await db.practice.reset(monday, tuesday, wednesday, thursday, friday, saturday, sunday, goal, user_id)
        return res.status(200).send(reset)
    },
    getPractice: async (req, res) => {
        const { user_id } = req.session.user
        const db = req.app.get('db')
        const [get] = await db.practice.get_practice(user_id)
        return res.status(200).send(get)
    }
}