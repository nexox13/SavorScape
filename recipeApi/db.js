const mongoose = require('mongoose');

mongoose.connect('root:example@mongo_container:27017/savorscape', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
