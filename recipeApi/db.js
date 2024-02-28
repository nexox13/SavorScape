const mongoose = require('mongoose');

function loadDb(){
  mongoose.connect('mongodb://root:example@10.115.1.14:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log("Connected to MongoDB");
  }).catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
}

module.exports = { loadDb };