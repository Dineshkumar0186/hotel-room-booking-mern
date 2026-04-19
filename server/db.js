// const mongoose = require("mongoose");



// var mongoDBURL='mongodb+srv://sravani:Sravs21@cluster0.cypnc.mongodb.net/Hotelrooms'

// mongoose.connect(mongoDBURL , {useUnifiedTopology:true , useNewUrlParser:true})

// var dbconnect = mongoose.connection

// dbconnect.on('error' , ()=>{
//     console.log(`Mongo DB Connection Failed`);
// })

// dbconnect.on('connected' , ()=>{
//     console.log(`Mongo DB Connection Successfull`);
// })

// module.exports = mongoose
// var mongoDBURL='mongodb+srv://sathya:sathyapr@cluster0.wrqpt.mongodb.net/sheyrooms'

///old code above////


const mongoose = require("mongoose");

const mongoDBURL = "mongodb://127.0.0.1:27017/Hotelrooms";

mongoose.connect(mongoDBURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const dbconnect = mongoose.connection;

dbconnect.on("error", (error) => {
  console.log("Mongo DB Connection Failed", error);
});

dbconnect.on("connected", () => {
  console.log("Mongo DB Connection Successful");
});

module.exports = mongoose;


