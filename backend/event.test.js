const getEventList = require('./controller/eventController').getEventList
const createEvent = require('./controller/eventController').createEvent
const searchEvent = require('./controller/eventController').searchEvent
const eventList = require('./model/eventModel')
const supertest = require('supertest')
const app = require('./server')
const request = supertest(app)

test('Fetch All Events Test', async () => {
    const response = await request.get('/events')
    expect(response.status).toBe(200)
    expect(response.body[0].name).toBe(eventList[0].name)
})

test('Search Events Test', async () => {
    const response = await request.get('/search/Picnic')
    const filteredEvents = eventList.filter(event => event.name == 'Picnic')

    expect(response.status).toBe(200)
    expect(response.body[0].name).toBe(filteredEvents[0].name)
})

test('Create Event Test', async () => {
    const eventBody = {
        name: '123',
        host: '123',
        date: new Date(),
        location: '123'
    }
    const response1 = await request.post('/createEvent').send(eventBody)
    const response2 = await request.get('/search/123')
    console.log(response2.body)
    expect(response1.status).toBe(200)
    expect(response2.body[0].name).toBe(eventBody.name)
})