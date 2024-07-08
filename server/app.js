//import all dependencies
const dotenv = require('dotenv');
const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();

//Configure ENV File & Require Connection File
dotenv.config({path : './config.env'});
require('./db/conn');
const port = process.env.PORT;

//Require model
const Users = require('./models//userSchema');
const authenticate = require('./middleware//authenticate');

//these method is used to get data from front end
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.send("Hello World");
})

//registration
app.post('/register', async(req, res)=>{
    try{
        //get data
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;

        const createUser = new Users({
            username : username,
            email : email,
            password : password
        });

        //save method is use to create user or add user
        //but before saving or adding psw will hash
        //after hash it will save to DB
        const created = await createUser.save();
        console.log(created);
        res.status(200).send("Registered");

}catch (error){
    res.status(400).send(error)

}
})


//Login User
app.post('/login', async (req, res)=>{
    try{
        const email = req.body.email;
        const password = req.body.password;

        //find user if exist
        const user = await Users.findOne({email : email});
        if(user){
            const isMatch = await bcryptjs.compare(password, user.password);

            if(isMatch){
                //generate token which is define in user schema
                const token = await user.generateToken();
                res.cookie("jwt", token,{
                    //expires token in 24 hours
                    expires : new Date(Date.now() +86400000),
                    httpOnly : true
                })
                res.status(200).send("LoggedIn");
            }else{
                res.status(400).send("Invalid Credentials");
            }
        }else{
            res.status(400).send("Invalid Credentials");
        }

    } catch(error) {
        res.status(400).send(error);

    }
})



//Logout Page
// app.get('/logout', (req,res)=>{
//     res.clearCookie("jwt", {path : '/'})
//     res.status(200).send("User Logged Out")
// })


//Authentication
app.get('/auth', authenticate, (req,res)=>{

})
//Run Server
app.listen(port, ()=>{
    console.log("Server is Listening")
    
})