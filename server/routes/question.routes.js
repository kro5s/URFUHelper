const Router = require('express')
const questionController = require('../controllers/question.controller')

const router = new Router()

router.post('/questions', questionController.create)
router.get('/questions', questionController.getAll)

module.exports = router