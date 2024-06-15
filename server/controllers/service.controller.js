const db = require("../db")
const uuid = require('uuid')
const path = require('path')

class ServiceController {
    async createService(req, res) {
        const { name, institute } = req.body
        const { img } = req.files

        let fileName = uuid.v4() + ".jpg"

        img.mv(path.resolve(__dirname, '..', 'static', fileName))

        const newService = await db.query("INSERT INTO service (name, img, institute) values ($1, $2, $3) RETURNING *", [ name, fileName, institute ])

        res.json(newService.rows[0])
    }

    async getAllServices(req, res) {
        const { language } = req.query

        const services = await db.query("SELECT * FROM service CROSS JOIN service_translation WHERE service_translation.service_id = service.id and service_translation.language = $1", [language])

        res.set('Access-Control-Allow-Origin', 'http://localhost:3000').json(services.rows)
    }

    async addTranslation(req, res) {
        const serviceId = req.params.id

        const { language, content } = req.body

        const newTranslation = await db.query("INSERT INTO service_translation (service_id, language, content) values ($1, $2, $3) RETURNING *", [serviceId, language, content])

        res.json(newTranslation.rows[0])
    }

    async getOneService(req, res) {
        const id = req.params.id

        const { language } = req.query

        const service = await db.query("SELECT * FROM service CROSS JOIN service_translation WHERE service_translation.service_id = service.id and service_id = $1 and service_translation.language = $2", [ id, language ])

        res.set('Access-Control-Allow-Origin', 'http://localhost:3000').json(service.rows[0])
    }

    async updateService(req, res) {
        const { id, name, content, img, institute, language } = req.body
        const service = await db.query("UPDATE service set name = $1, content = $2, img = $3, institute = $4, language = $5 where id = $6 RETURNING *", [name, content, img, institute, language, id])

        res.json(service.rows[0])
    }

    async deleteService(req, res) {
        const id = req.params.id
        const service = await db.query("DELETE FROM service where id = $1", [id])

        res.json(service.rows[0])
    }
}

module.exports = new ServiceController()