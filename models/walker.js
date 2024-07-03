const mongoose = require('mongoose');

const wakerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  experience: { type: String, required: true },
  availableTime: { type: String,  },
  description: { type: String, required: true },
});

module.exports = mongoose.model('Walker', wakerSchema);
