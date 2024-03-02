const Router = require('express')
const router = new Router()
const controller = require('./authController.js')
const{check} = require('express-validator')
const authMiddleware = require('./middlewaree/authMiddleware.js')
const roleMiddleware = require('./middlewaree/roleMiddleware')

router.post('/registration', [
    check('username', 'Імя користувача не може бути пустим').notEmpty(),
    check('password', 'Пароль повинен бути більше 4 і менше 10 символів').isLength({min:4, max:10})
], controller.registration)
router.post('/login', controller.login)
router.get('/users', roleMiddleware(['USER', "ADMIN"]), controller.getUsers)

module.exports = router