module.export = {
    addPractice: async (req, res) => {
        const { time_practiced, day } = req.body
        const { user_id } = req.session
        const db = req.app.get('db')
        const add = await db.add_practice([time_practiced])
        return res.status(200).send(add)
    }
}