const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  item: {
    type: []
  },
  device_id: {
    type: String,
  },
}); 

module.exports = mongoose.model("Order", OrderSchema);
