const mongoose = require("mongoose")

const citySchema = new mongoose.Schema(
    {
        name:{type:String ,required:true},
        code:{type:String ,required:true}
    },
    { timestamps: true }
);

module.exports = mongoose.model("city", citySchema);