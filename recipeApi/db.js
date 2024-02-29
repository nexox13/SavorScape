const mongoose = require('mongoose');

function loadDb(){
  mongoose.connect('mongodb://root:example@mongo_container:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log("Connected to MongoDB");
  }).catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
}

module.exports = { loadDb };