const registerSchema = require("../model/registrationSchema")

module.exports.form = async (req, res) => {
    console.log(req.body)
    
    let result = await registerSchema.create(req.body)
    console.log(result)

    res.status(201).send({ data: result })
    
    // res.render(`submition`, {
    //     firstName,lastName,email,gender,dob,age
    // })
}