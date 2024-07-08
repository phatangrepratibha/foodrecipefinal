

const jwt = require('jsonwebtoken');
const Users = require('../models/userSchema');

const authenticate = async (req, res, next) =>{
    try{
        //get cookies
        const token = req.cookies.jwt;
        if(!token){
            res.status(401).send("No Token")
        }else{
            const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
            const rootUser = await Users.findOne({_id : verifyToken._id, "tokens.token" : token});

            if(!rootUser){
                res.status(401).send("User Not Found")
            }else{
                res.status(200).send("Authorized User")
            }
        }
        next()
    }catch(error){
        res.status(401).send("Error")
        console.log(error)
    }
}

module.exports = authenticate;