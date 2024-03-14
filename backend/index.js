const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserSchema = require("./models/UserSchema");
const DoctorSchema = require("./models/DoctorSchema");
const path = require("path");
const multer = require("multer");
const bodyParser = require("body-parser");
dotenv.config();

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("server is connected"))
  .catch((_error) => console.log("not connected to the db"));

// app.post('/api/newuser', async (req,res)=>{
//    try {

//     const user = await UserSchema.create(req.body)
//     res.status(200).json({
//         success:true,
//         user,
//         message:'user is created'
//     })
//    } catch (error) {
//     console.log(error);
//    }
// })

// login
// app.post("/api/login", async (req,res)=>{

//     const {email,password} = req.body

//         UserSchema.findOne({email:email}).then(
//             user=>{
//                 if(user.password == password){
//                     res.json({
//                         success:true,
//                         user
//                     })
//                 }else{
//                     res.json("invallid pass word")
//                 }
//             }
//         )

// })

app.post("/api/newuser", (req, res) => {
  const { email, password, name, number } = req.body;
  bcrypt
    .hash(password, 10)
    .then((hash) => {
      UserSchema.create({ name, email, number, password: hash })
        .then((_user) => res.json("success"))
        .catch((err) => res.json(err));
    })
    .catch((err) => res.json(err));
});

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  UserSchema.findOne({ email: email }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, (_err, response) => {
        if (response) {
          const token = jwt.sign({ email: user.email }, "jwt-secret-key", {
            expiresIn: "1d",
          });
          res.cookie("token", token);
          user.token = token;
          user.save();

          // return res.json({
          //     status: "success",
          //     role: user.role,
          //     token: token
          // });
          return res.json({
            Status: "success",
            role: user.role,
            token: token,
          });
        } else {
          return res.json("The Password id incorrect");
        }
      });
    }
  });
});

// app.post("/api/getUser", (req,res)=>{
//     const {token} = req.body;
//     UserSchema.findOne({token:token}).then(
//         user=>{
//             if(token === user.token){
//                 return res.json({
//                     Status: "success",
//                    user

//                 })
//             }
//         }
//     )
// })

// Endpoint to get user based on token
app.post("/api/getUser", (req, res) => {
  const { token } = req.body;

  // Verify and decode the token
  jwt.verify(token, "jwt-secret-key", (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Invalid token" });
    }

    // Extract user email from decoded token
    const userEmail = decoded.email;

    // Find user in the database based on the email
    UserSchema.findOne({ email: userEmail })
      .then((user) => {
        if (!user) {
          return res.status(404).json({ error: "User not found" });
        }
        return res.json({
          Status: "success",
          user,
        });
      })
      .catch((error) => {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
      });
  });
});
// remove the token frome the db

app.post("/api/removeToken", (req, res) => {
  const { token } = req.body;

  // Verify and decode the token
  jwt.verify(token, "jwt-secret-key", (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Invalid token" });
    }

    // Extract user email from decoded token
    const userEmail = decoded.email;

    // Find user in the database based on the email
    UserSchema.findOne({ email: userEmail })
      .then((user) => {
        if (!user) {
          return res.status(404).json({ error: "User not found" });
        }

        // Remove the token from the user document
        user.token = ""; // or you can use user.token = null;
        user.save(); // Save the updated user document

        return res.json({
          status: "success",
          message: "Token removed successfully",
        });
      })
      .catch((error) => {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
      });
  });
});

// admin panel api

app.get("/api/getAlluser", (_req, res) => {
  let users = UserSchema.find()
    .then((result) => res.json(result))
    .catch((err) => err);
});

// add docter in docter schema
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, "public/img"); // Specify the directory where uploaded images will be stored
  },
  filename: (_req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    ); // Generate unique filename for the uploaded image
  },
});

const upload = multer({ storage: storage });

//   app.post("/upload",upload.single('file'),(req,res)=>{
//     console.log(req.file);
//     DoctorSchema.create({image: req.file.fieldname})
//     .then(result=>res.json({result}))
//     .catch(err=>err)
//   })

app.post("/api/add/doctor", upload.single("file"), (req, res) => {
  const {
    email,
    name,
    phone,
    price,
    specialization,
    about,
    experiences,
    totalRating,
    totalPatients,
    qualifications,
    averageRating,
    hospital,
  } = req.body;
  const imagePath = req.file?.filename; // Retrieve the path of the uploaded image

  DoctorSchema.create({
    email,
    name,
    phone,
    price,
    specialization,
    about,
    qualifications,
    experiences,
    totalRating,
    totalPatients,
    hospital,
    averageRating,
    image: imagePath, // Store the image path in the 'image' field of the doctor schema
  })
    .then((docter) =>
      res.json({
        Status: "success",
        docter,
      })
    )
    .catch((err) => res.json(err));
});

//

app.get("/api/get/allDocters", (_req, res) => {
  let docters = DoctorSchema.find()
    .then((result) => res.json(result))
    .catch((err) => err);
});

// delete doc
app.delete("/api/doc/delete/:id", async (req, res) => {
  try {
    let deletedoc = await DoctorSchema.findByIdAndDelete(req.params.id);

    if (!deletedoc) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found",
      });
    }

    res.status(200).json({
      success: true,
      deletedoc,
    });
  } catch (error) {
    // Handle any errors that occur during the deletion
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// update doc
// app.put("/api/update/doctor/:id", upload.single("file"), (req, res) => {
//   const doctorId = req.params.id;
//   const {
//     // email,
//     // name,
//     // phone,
//     // price,
//     specialization,
//     // about,
//     // experiences,
//     // totalRating,
//     // totalPatients,
//     // qualifications,
//     // averageRating,
//     // hospital,
//   } = req.body;
//   const imagePath = req.file?.filename; // Retrieve the path of the uploaded image

//   // Construct the updated doctor object
//   const updatedDoctor = {
//     // email,
//     // name,
//     // phone,
//     // price,
//     specialization,
//     // about,
//     // qualifications,
//     // experiences,
//     // totalRating,
//     // totalPatients,
//     // hospital,
//     // averageRating,
//   };

//   // If a new image is uploaded, update the image path in the doctor object
//   if (imagePath) {
//     updatedDoctor.image = imagePath;
//   }

//   // Find the doctor by ID and update its information
//   DoctorSchema.findByIdAndUpdate(doctorId, updatedDoctor, { new: true })
//     .then((updatedDoctor) => {
//       if (!updatedDoctor) {
//         return res.status(404).json({
//           success: false,
//           message: "Doctor not found",
//         });
//       }
//       res.status(200).json({
//         success: true,
//         updatedDoctor,
//       });
//     })
//     .catch((err) => res.status(500).json({ success: false, error: err.message }));
// });

app.put("/api/update/doctor/:id", upload.single("file"), async (req, res) => {
  try {
    console.log(req.body, req.file);
    let updateDoc = await DoctorSchema.findById(req.params.id);
    const image = req.file?.filename;
    // Update other fields
    updateDoc = await DoctorSchema.findByIdAndUpdate(
      req.params.id,
      { image, ...req.body },
      {
        new: true,
        useFindAndModify: false,
        runValidators: true,
      }
    );

    res.status(200).json({
      success: true,
      updateDoc,
    });
  } catch (error) {
    console.error("Error updating doctor:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});
// make appountment |======>
// panding
// Assuming you have already set up your Express router and Doctor model

app.put("/api/doctor/appointments/:id", async (req, res) => {
  try {
    // console.log(name)
    const { email, name, number } = req.body;
    const doctorId = req.params.id;

    // Find the doctor by ID
    const doctor = await DoctorSchema.findById(doctorId);
    if (!doctor) {
      return res
        .status(404)
        .json({ success: false, message: "Doctor not found" });
    }

    // Add appointment details to the doctor's appointments array

    // updateDoc = await DoctorSchema.findByIdAndUpdate(req.params.id)
    doctor.appointments.push({
      user: { email, name, number },
    });

    // Save the updated doctor document
    await doctor.save();

    res
      .status(200)
      .json({ success: true, message: "Appointment added successfully" });
  } catch (error) {
    console.error("Error adding appointment:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// appointment delete api

app.delete("/api/delete/appointment/:appointmentId", async (req, res) => {
  const appointmentId = req.params.appointmentId;

  try {
    // Find the doctor by appointment ID
    const doctor = await DoctorSchema.findOne({
      "appointments._id": appointmentId,
    });

    if (!doctor) {
      return res
        .status(404)
        .json({ success: false, message: "Doctor not found" });
    }

    // Remove the appointment from the doctor's appointments array
    doctor.appointments = doctor.appointments.filter(
      (appointment) => appointment._id.toString() !== appointmentId
    );

    // Save the updated doctor document
    await doctor.save();

    return res
      .status(200)
      .json({ success: true, message: "Appointment deleted successfully" });
  } catch (error) {
    console.error("Error deleting appointment:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
});
// get all appointsment
app.get("/api/get/appointments/:id", async (req, res) => {
  try {
    const docId = req.params.id;
    const doctor = await DoctorSchema.findById(docId);
    if (!doctor) {
      return res
        .status(404)
        .json({ success: false, message: "Doctor not found" });
    }
    const doctorAppointments = doctor.appointments;

    res.status(201).json({
      success: true,
      appointments: doctorAppointments,
    });
  } catch (error) {
    error;
  }
});

app.listen(process.env.PORT, () => {
  console.log("server is running https://doctor-app-s401.onrender.com/");
});

// for online
// mongoose.set('strictQuery', false)
// const connectDb = async ()=>{

//     try {
//       await  mongoose.connect(process.env.MONGO_URL,{
//             useNewUrlParser:true,
//             useUnifiedTopology:true
//         })
//         console.log("DB is connected");

//     } catch (error) {
//        console.log("DB connection is failed");
//     }
// }
