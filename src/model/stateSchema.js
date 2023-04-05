const mongoose = require("mongoose")

const stateSchema = new mongoose.Schema(
    {
        name:{type:String ,required:true},
        code:{type:String ,required:true}
    },
    { timestamps: true }
);

module.exports = mongoose.model("state", stateSchema);