const express = require("express")
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const dotenv = require("dotenv")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const body_parser = require("body-parser")
const UserSchema = require('./models/UserSchema')
const DoctorSchema = require('./models/DoctorSchema')
const UserSession = require("./models/UserSession")
dotenv.config()

const app = express();

app.use(express.json())
app.use(cors({
    origin:["http://localhost:5173"],
    methods:['GET','POST'],
    credentials:true
}))
app.use(cookieParser())  
app.use(body_parser.urlencoded({extended:false}))


// 


// 


mongoose.connect('mongodb://localhost:27017')
.then(()=>console.log("server is connected"))
.catch(error=>console.log("noot connected to the db"))



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

app.post('/api/newuser',  (req,res)=>{
    const {email,password,name,number} = req.body;
    bcrypt.hash(password,10).then(hash =>{
        UserSchema.create({name,email,number,password:hash})
        .then(user =>   res.json("success"))
        .catch(err=> res.json(err))
    }).catch(err=> res.json(err))

    
 })
 
 app.post("/api/login",  (req,res)=>{
    const {email,password} = req.body;
    UserSchema.findOne({email:email}).then(
        user=>{
            if(user){
                bcrypt.compare(password,user.password,(err,response)=>{
                if(response){

                    const token = jwt.sign({email:user.email},"jwt-secret-key", {expiresIn:'1d'})
                    res.cookie('token',token)
                    user.token = token;
                    user.save();

                    // return res.json({
                    //     status: "success",
                    //     role: user.role,
                    //     token: token
                    // });
                    return res.json({
                        Status: "success",
                        role:user.role,
                        token: token
                    })
                }else{
                    return res.json("The Password id incorrect")
                }

                })
                      }
        }
    )

 })

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
    jwt.verify(token, 'jwt-secret-key', (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Invalid token' });
        }

        // Extract user email from decoded token
        const userEmail = decoded.email;

        // Find user in the database based on the email
        UserSchema.findOne({ email: userEmail }).then(user => {
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            return res.json({
                Status: "success",
                user
            });
        }).catch(error => {
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
        });
    });
});
// remove the token frome the db 



app.post("/api/removeToken", (req, res) => {
    const { token } = req.body;

    // Verify and decode the token
    jwt.verify(token, 'jwt-secret-key', (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Invalid token' });
        }

        // Extract user email from decoded token
        const userEmail = decoded.email;

        // Find user in the database based on the email
        UserSchema.findOne({ email: userEmail }).then(user => {
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            // Remove the token from the user document
            user.token = ""; // or you can use user.token = null;
            user.save(); // Save the updated user document

            return res.json({ status: "success", message: "Token removed successfully" });
        }).catch(error => {
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
        });
    });
});

// admin panel api

app.get("/api/getAlluser", (req,res)=>{
    let users = UserSchema.find()
    .then(result=>res.json(result))
    .catch(err=>err)
})

// add docter in docter schema

app.post("/api/add/docter",(req,res)=>{
    const {email,name,phone,ticketPrice,specialization,experiences,bio,about,averageRating} = req.body;
    DoctorSchema.create({email,name,phone,ticketPrice,specialization,experiences,bio,about,averageRating}).then(docter => res.json({
        Status: "success",
        docter
    })).catch(err=> res.json(err))


})

// make appountment |======>
// panding
app.post("api/make/appointment", (req,res)=>{
    const {email,name,dr_name} = req.body;

})

app.listen(3001 ,()=>{
 
    console.log("server is running http://localhost:3001/"); 
    
})


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

