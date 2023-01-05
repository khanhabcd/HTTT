const mongoose = require("mongoose");
const schema = mongoose.Schema;
const billsSchema = new schema({
  amount: String,
  status: {
    type: Number,
    default: 0,
  },
  created_at: {
    type: Number,
    default: Date.now(),
  },
  quantily: Number,
  product_id: [
    {
      type: schema.Types.ObjectId,
      ref: "product",
    },
  ],
});

module.exports = mongoose.model("bill", billsSchema);
