const mongoose = require('mongoose');

const countryShema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
      },
    code: {
        type: String,
        required: true,
      },
});

module.exports = mongoose.model('countries', countryShema);