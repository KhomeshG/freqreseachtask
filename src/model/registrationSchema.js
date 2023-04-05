const mongoose = require("mongoose")

const register = new mongoose.Schema(
{
    firstName: { type: String , required:true},
    lastName: { type: String , required:true},
    email: { type: String , required:true},
    country: { type: String , },
    state: { type: String },
    city: { type: String },
    gender: { type: String, enum: ["male", "female", "others"] ,required:true},
    dob: { type: Date ,required:true},
    age:{type:Number },
    },
    { timestamps: true }
);

module.exports = mongoose.model("register", register);