const Router = require('express')
const experienceController = require('../controllers/experience.controller')

const router = new Router()

router.get('/experiences', experienceController.getAll)
router.post('/experiences', experienceController.create)

module.exports = router