const express = require('express')

const router = express.Router()
// importing controller functions
const eventController = require('../controller/eventController')

// Routes:
// - GET /events - get Event List
// - POST /createEvent - create a new event
// - GET /search/:searchParam - filter/search
router.get('/events', eventController.getEventList)
router.post('/createEvent', eventController.createEvent)
router.get('/search/:searchParam', eventController.searchEvent)

// exporting router
module.exports = router