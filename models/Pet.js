const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  breed: { type: String, required: true },
  age: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model('Pet', petSchema);
