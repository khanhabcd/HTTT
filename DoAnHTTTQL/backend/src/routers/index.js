const express = require("express");
const router = express.Router();
const billRoute = require("./billRoute");
const productRoute = require("./productRoute");
// api bill

router.use("/api", billRoute);

// api product

router.use("/api", productRoute);

module.exports = router;
