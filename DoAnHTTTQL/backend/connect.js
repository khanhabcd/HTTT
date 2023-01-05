require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const route = require("./src/routers");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json({ limit: "50mb" }));

async function connectDB() {
  try {
    let connect = await mongoose.connect('mongodb://127.0.0.1:27017/myapp');
    if (connect) {
      console.log("Kết nối thành công !");
    }
  } catch (error) {
    console.log(error);
    process.exit();
  }
}

connectDB();

app.use(route);

const PORT = 12345 || process.env.PORT ;
app.listen(PORT, () => console.log(`API server run on port: http://localhost:12345`));
