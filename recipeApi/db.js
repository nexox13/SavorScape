const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();

const link = process.env.DB_LINK

function loadDb(){
  mongoose.connect(link, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log("Connected to MongoDB");
  }).catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
}

module.exports = { loadDb };