// Importing eventList from Model
const eventList = require('../model/eventModel')

// Exporting controller functions for router to use
module.exports = {
    getEventList,
    createEvent,
    searchEvent
}

// Controllers:
// - getEventList()
// - createEvent()
// - searchEvent()
function getEventList(request, response) {
    response.json(eventList)
}

function createEvent(request, response) {
    try {
        const newEvent = request.body // request.body will have the form data from frontend for new event
        eventList.push(newEvent) // add newEvent to our eventList
        response.status(200).json({
            message: "Successfully created event"
        })
    } catch (err) {
        response.status(400).json({
            message: err
        })
    }
}

function searchEvent(request, response) {
    const searchParam = request.params.searchParam
    // The filter below will return only the events whose name property match the search parameter
    const filteredEventList = eventList.filter(event => event.name == searchParam)
    response.json(filteredEventList)
}