const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  number: { type: Number },
  role: { type: String, default: 'user' }, // Adding role field with default value
  token: { type: String , default:''}
  // token: { type: String, required: true }

});

module.exports  = mongoose.model("User", UserSchema);
