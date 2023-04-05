let Country = require('country-state-city').Country;
let State = require('country-state-city').State;
let City = require('country-state-city').City;


module.exports.getCountry = async (req,res) => {
    try{let data = await Country.getAllCountries()

//    let result= data.map((ele, index) => {
//         return [ele.isoCode,ele.name]
//     })
    
        res.status(200).send({ data: data, status: true })
    }
    catch (err) {
        return res.status(500).send({msg:"Server Error!! " , status:false})
    }
}

module.exports.register = async (req,res) => {
   try {let data = await Country.getAllCountries()

   let result= data.map((ele, index) => {
        return  ele.isoCode 
   })
    
    let data1 = await State.getStatesOfCountry(result)
    
//     console.log(result)
    // res.send(data[0])
    
    return res.render(`register.ejs`, {
       country:data , state:data1
    });
    }
    
    catch (err) {
        return res.status(500).send({msg:"Server Error!! " , status:false})
    }
    
    // res.status(200).send({data:data,status:true})
}

module.exports.getState = async (req,res) => {
    try{let data = await State.getStatesOfCountry(req.params.countryId)

//    let result= data.map((ele, index) => {
//         return ele.name
//     })
    
        res.status(200).send({ data: data, status: true })
    }
    catch (err) {
        return res.status(500).send({msg:"Server Error!! " , status:false})
    }
}


module.exports.getCity = async (req, res) => {
  
    try{let data = await City.getCitiesOfState(req.params.countryId,req.params.stateId)

//    let result= data.map((ele, index) => {
//         return [ele.isoCode,ele.name]
//     })
    
        res.status(200).send({ data: data, status: true })
    }
    catch (err) {
        return res.status(500).send({msg:"Server Error!! " , status:false})
    }
}