const Router = require('express')
const serviceController = require('../controllers/service.controller')

const router = new Router()

router.post("/services", serviceController.createService)
router.post("/services/:id", serviceController.addTranslation)
router.get("/services", serviceController.getAllServices)
router.get("/services/:id", serviceController.getOneService)
router.put("/services", serviceController.updateService)
router.delete("/services/:id", serviceController.deleteService)

module.exports = router