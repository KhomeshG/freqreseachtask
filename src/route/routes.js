const express = require("express")


const router = express.Router()
const data = require("../controller/data")
const userController= require("../controller/form")

router.get("/country" , data.getCountry)
router.get("/state/:countryId" , data.getState)
router.get("/city/:stateId/:countryId" ,data.getCity)
router.get("/register" ,data.register)

//user
router.post("/user" ,userController.form )
module.exports= router