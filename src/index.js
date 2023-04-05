const express = require("express")
const route= require("./route/routes")
const mongoose = require("mongoose")


require("dotenv").config()
let app = express()

app.use(express.json())

app.use(express.urlencoded()) //this is basically to decode the data send through html form
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://Adesh:LnDEhxK0maoDwQD9@cluster0.r3pzigx.mongodb.net/Frequent_Research_Registration", {
    useNewUrlParser: true,
}
)
.then(() => console.log("mongoDB is Connected"))
.catch((err) => err);

app.use("/",route)
app.listen(process.env.PORT ||3000, () => {
    console.log("Express server is running -->" ,process.env.PORT || 3000)
})