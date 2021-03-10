const bcrypt = require('bcrypt')

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db')
        const { email, first_name, last_name, password, is_admin } = req.body
        const [foundUser] = await db.users.check_user(email)
        if (foundUser) {
            return res.status(400).send("Email already exists")
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const [newUser] = await db.users.add_user(email, first_name, last_name, hash, is_admin)
        req.session.user = {
            user_id: newUser.user_id,
            email: newUser.email,
            first_name: newUser.first_name,
            last_name: newUser.last_name,
            is_admin: newUser.is_admin
        }
        const [add] = await db.practice.add_practice(0, 0, 0, 0, 0, 0, 0, 0, newUser.user_id)
        if(add)
        res.status(200).send(req.session.user)
        else{res.sendStatus(500)}
    },
    login: async (req, res) => {
        const db = req.app.get('db')
        const { email, password } = req.body
        const [foundUser] = await db.users.check_user(email)
        if (!foundUser) {
            return res.status(401).send("Incorrect login information")
        }
        const authenticated = bcrypt.compareSync(password, foundUser.password)
        if (authenticated) {
            req.session.user = {
                user_id: foundUser.user_id,
                email: foundUser.email,
                first_name: foundUser.first_name,
                last_name: foundUser.last_name,
                is_admin: foundUser.is_admin
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
        if (req.session.user) {
            res.status(200).send(req.session.user)
        } else {
            res.status(401).send('Please Log In')
        }
    },
    emailMiddleware: (req, res, next) => {
        if (req.body.email.includes("@")) {
            return next()
        } else {
            res.status(500).send("Invalid email")
        }
    },
    nameMiddleware: (req, res, next) => {
        if (req.body.last_name) {
            return next()
        } else {
            res.status(502).send("Please enter a name")
        }
    },
    adminOnly: (req, res, next) => {
        if(!req.session.user.is_admin){
            return res.status(403).send('You are not an admin')
        }
        next()
    },
    getAllUsers: async (req, res) => {
        const db = req.app.get('db')
        const get = await db.users.all_users()
        return res.status(200).send(get)
    }
}