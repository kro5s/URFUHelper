const db = require('../db')
const bcrypt = require('bcryptjs')
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const { secret } = require('../config')

function generateAccessToken(id, role) {
    const payload = {
        id,
        role
    }

    return jwt.sign(payload, secret, { expiresIn: role === "admin" ? "4h" : "24h" })
}

class AuthController {
    async registration(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) return res.status(400).json({ message: "Registration error" })

            const { username, password } = req.body

            const candidate = await db.query("SELECT * FROM users WHERE username = $1", [ username ])

            if (candidate.rows.length !== 0) {
                return res.status(400).json({ message: "A user with that name already exists" })
            }

            const hashPassword = bcrypt.hashSync(password, 7)
            await db.query("INSERT INTO users (username, password, role) values ($1, $2, $3)", [username, hashPassword, "user"])

            res.json({ message: "Successfully registered" })
        } catch (e) {
            console.log(e)
            res.status(400).json({ message: "Registration error" })
        }
    }

    async login(req, res) {
        try {
            const { username, password } = req.body
            const user = await db.query("SELECT * FROM users WHERE username = $1", [ username ])
            if (user.rows.length === 0) return res.status(400).json({ message: "There is no user with this name" })

            const validPassword = bcrypt.compareSync(password, user.rows[0].password)
            if (!validPassword) return res.status(400).json({ message: "Wrong password" })

            const token = generateAccessToken(user.rows[0].id, user.rows[0].role)
            return res.json({ token })
        } catch (e) {
            console.log(e);
            res.status(400).json({ message: "Login error" })
        }
    }

    async getUsers(req, res) {
        try {
            res.json("ok")
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new AuthController()