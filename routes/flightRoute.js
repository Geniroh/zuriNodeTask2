const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router.get('/', controller.home)

router.post('/book', controller.bookFlight)

router.get('/book', controller.allFlights)


module.exports = router;

