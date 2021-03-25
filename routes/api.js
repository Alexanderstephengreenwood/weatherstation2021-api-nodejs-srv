var express = require('express');
var router = express.Router();

// Require controller modules.
var device_controller = require('../controllers/deviceController');

/// DEVICE ROUTES ///
// GET device home page.
router.get('/', device_controller.device_list);

//Post sensor data using the device id
router.post('/:devid/', device_controller.device_create_post);

//Post sensor data using the device id
router.get('/:devid/', device_controller.device_create_get);

// get request for all temperatures of a given device
router.get('/:devid/temperature', device_controller.device_temperature_get);

// get request for all temperatures of a given device
router.get('/:devid/pressure', device_controller.device_pressure_get);

// get request for all temperatures of a given device
router.get('/:devid/humidity', device_controller.device_humidity_get);

// get request for all temperatures of a given device
router.get('/:devid/airquality', device_controller.device_airquality_get);

// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get('/:devid/luminosity', device_controller.device_luminosity_get);

module.exports = router;
