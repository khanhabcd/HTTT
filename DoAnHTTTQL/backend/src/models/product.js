const mongoose = require("mongoose");
const schema = mongoose.Schema;
const productsSchema = new schema({
  name: String,
  count: Number,
  money: Number,
  status: {
    type: Number,
    default: 0,
  },
  created_at: {
    type: Number,
    default: Date.now(),
  },
});

module.exports = mongoose.model("product", productsSchema);
