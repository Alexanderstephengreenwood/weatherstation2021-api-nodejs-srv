var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var DeviceSchema = new Schema(
  {
    name: {type: String, required: true},
    temperature: {type: Number},
    humidity: {type: Number},
    pressure: {type: Number},
    airquality: {type: Number},
    luminosity: {type: Number},
    battery: {type: Number}
  }
);

// Virtual for book's URL
DeviceSchema
.virtual('url')
.get(function () {
  return '/api/device/' + this._id;
});

//Export model
module.exports = mongoose.model('Device', DeviceSchema);
