const mongoose = require('mongoose');

// Define UserSession schema
const UserSessionSchema = new mongoose.Schema({
  email: { type: String, required: true },
  token: { type: String}
});

// Create and export UserSession model
module.exports = mongoose.model('UserSession', UserSessionSchema);
