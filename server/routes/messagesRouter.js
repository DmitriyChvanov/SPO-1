const Router = require('express')
const router = new Router()
const messagesController = require('../controllers/messagesController')

// router.get('/getUserMessages', messagesController.getUserMessages)
router.post('/getUserMessages', messagesController.getUserMessages)
router.post('/addUserMessage', messagesController.addUserMessage)


module.exports = router