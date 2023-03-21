const mongoose = require("mongoose");

const DeviceSchema = new mongoose.Schema({
  name: {
    type: String,
  },
});

module.exports = mongoose.model("Device",DeviceSchema)