const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  item: {
    type: String,
  },
});

module.exports = mongoose.model("Order", OrderSchema);
