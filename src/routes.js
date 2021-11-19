const router = require('express').Router();
const controller = require('./controllers/usersController')

router.get('/', controller.findUser)

router.get('/createNewUser', (req, res) => {
    res.render('createUser', { err: false, body: {} ,title:'Create User'})
})

router.get('/editUser/:id', controller.loadUser)
router.post('/editUser/:id', controller.editUser)
router.post('/createNewUser', controller.createUser)

router.delete('/:id', controller.deleteUser)

module.exports = router