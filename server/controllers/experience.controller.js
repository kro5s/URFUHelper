const db = require('../db')
const uuid = require('uuid')
const path = require('path')

class ExperienceController {
    async create(req, res) {
        const { name, content, language } = req.body
        const { img } = req.files

        const fileName = uuid.v4() + '.jpg'

        img.mv(path.resolve(__dirname, '..', 'static', fileName))

        const newExperience = await db.query("INSERT INTO experience (name, img, content, language) values ($1, $2, $3, $4) RETURNING *", [name, fileName, content, language])

        res.json(newExperience.rows[0])
    }

    async getAll(req, res) {
        const { language } = req.query

        const experiences = await db.query("SELECT * FROM experience where language = $1", [ language ])

        res.set("Access-Control-Allow-Origin", 'http://localhost:3000').json(experiences.rows)
    }
}

module.exports = new ExperienceController()