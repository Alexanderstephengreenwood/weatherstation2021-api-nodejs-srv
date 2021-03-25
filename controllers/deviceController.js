var Device = require('../models/device');

// Display all devices by id
exports.device_list = function(req, res) {
    res.send('NOT IMPLEMENTED: device list');
};

// Display detail page for a specific Author.
exports.device_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: inserts a new weather sample ' + req.params.devid);
};

// Display detail page for a specific Author.
exports.device_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Gets all the mesures for a given device sample ' + req.params.devid);
};

// Display detail page for a specific Author.
exports.device_temperature_get = function(req, res) {
    res.send('NOT IMPLEMENTED: returns all the temperatures gathered by the device: ' + req.params.devid);
};

// Display detail page for a specific Author.
exports.device_pressure_get = function(req, res) {
    res.send('NOT IMPLEMENTED: returns all the pressure gathered by the device: ' + req.params.devid);
};

// Display detail page for a specific Author.
exports.device_humidity_get = function(req, res) {
    res.send('NOT IMPLEMENTED: returns all the humidity gathered by the device: ' + req.params.devid);
};

// Display detail page for a specific Author.
exports.device_airquality_get = function(req, res) {
    res.send('NOT IMPLEMENTED: returns all the air quality gathered by the device: ' + req.params.devid);
};

// Display detail page for a specific Author.
exports.device_luminosity_get = function(req, res) {
    res.send('NOT IMPLEMENTED: returns all the temperatures gathered by the device: ' + req.params.devid);
};
