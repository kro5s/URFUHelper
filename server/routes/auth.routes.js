const Router = require('express')
const authController = require('../controllers/auth.controller')
const { check } = require('express-validator')

const authMiddleware = require('../middlewares/authMiddleware')

const router = new Router()

router.post('/registration', [
    check("username", "Incorrect username").notEmpty(),
    check("username", "Incorrect username").isLength({ min: 5, max: 20 }),
    check("password", "Password can not be smaller than 8 symbols").isLength({ min: 8, max: 20 })
], authController.registration)
router.post('/login', authController.login)
router.get('/users', authMiddleware, authController.getUsers)

module.exports = router