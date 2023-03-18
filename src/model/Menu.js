const mongoose = require("mongoose");

const MenuSchema = new mongoose.Schema({
  name: {
    type: String,
  },

  price: {
    type: Number,
  },

  code: {
    type:Number,
  },
});

module.exports = mongoose.model("Menu", MenuSchema);
