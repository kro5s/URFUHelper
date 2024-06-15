const db = require('../db')

class QuestionController {
    async create(req, res) {
        const { question, answer, language } = req.body

        const newQuestion = await db.query("INSERT INTO question (question, answer, language) VALUES ($1, $2, $3)  RETURNING *", [question, answer, language])

        res.json(newQuestion.rows[0])
    }

    async getAll(req, res) {
        const { language } = req.query

        const questions = await db.query("SELECT * FROM question where language = $1", [ language ])

        res.set("Access-Control-Allow-Origin", 'http://localhost:3000').json(questions.rows)
    }
}

module.exports = new QuestionController()