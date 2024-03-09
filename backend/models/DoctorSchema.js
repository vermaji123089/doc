const mongoose = require("mongoose")
const multer = require('multer');

const DoctorSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  // password: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: Number }, 
  price: { type: Number },
  image: { type: String }, // Store image URL
  // Fields for doctors only
  specialization: { type: String },
  qualifications: {
    type: Array,
  },

  experiences: {
    type: Array,
  },

  // bio: { type: String, maxLength: 50 },
  about: { type: String },
  timeSlots: { type: Array },
  hospital: { type: Array },
  reviews: [{ type: mongoose.Types.ObjectId, ref: "Review" }],
  averageRating: {
    type: Number,
    default: 0,
  },
  totalRating: {
    type: Number,
    default: 0,
  },
  totalPatients: {
    type: Number,
    default: 0,
  },
  isApproved: {
    type: String,
    enum: ["pending", "approved", "cancelled"],
    default: "pending",
  },
  appointments: [
    {
      user: {
        email: { type: String, required: true },
        name: { type: String, required: true },
        number: { type: String, required: true },
      },
      appointmentDetails: { type: String }, // Add any additional details you need for appointments
    },
  ],

}
);

module.exports= mongoose.model("Doctor", DoctorSchema);
