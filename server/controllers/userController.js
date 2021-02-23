const bcrypt = require('bcrypt')

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db')
        const { email, password, first_name, last_name } = req.body
        const [foundUser] = await db.check_user(email)
        if (foundUser) {
            return res.status(400).send("Email already exists")
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const [newUser] = await db.add_user([email, first_name, last_name, hash])
        req.session.user = {
            userId: newUser.user_id,
            email: newUser.email,
            first_name: newUser.first_name,
            last_name: newUser.last_name
        }
        res.status(200).send(req.session.user)
    },
    login: async (req, res) => {
        const db = req.app.get('db')
        const { email, password } = req.body
        const [foundUser] = await db.check_user(email)
        if (!foundUser) {
            return res.status(401).send("Incorrect login information")
        }
        const authenticated = bcrypt.compareSync(password, foundUser.password)
        if (authenticated) {
            req.session.user = {
                userId: foundUser.user_id,
                email: foundUser.email,
                first_name: foundUser.first_name,
                last_name: foundUser.last_name
            }
            res.status(200).send(req.session.user)
        } else {
            res.status(401).send("Incorrect login information")
        }
    },
    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    },
    getUserSession: (req, res) => {
        if (req.session.user){
            res.status(200).send(req.session.user)
        } else {
            res.status(404).send('Please Log In')
        }
    }
}