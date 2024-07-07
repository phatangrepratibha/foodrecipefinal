import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";
export const signup=async(req,res)=>{

    try{
        const{ username, email ,password ,mobile, address}=req.body;
        const user=await User.findOne({email});
        if(user)
        {
            return res.status(400).json({message:"User already exist"})
        }

        
        const hashPassword=await bcryptjs.hash(password,10);
        const createdUser=new User({
           username: username,
            email:email,
            password:hashPassword,
            mobile:mobile,
            address:address,
        });

        await createdUser.save();
        res.status(201).json({message:"User created successfully"});

    }catch(error){

        console.log("Error:"+error.message);
        res.status(500).json({message:"User cannot created"});
    }
};

export const login=async(req,res)=>{

    try{

        const{email,username,password}=req.body;
        const user=await User.findOne({email});
        const isMatch=await bcryptjs.compare(password,user.password);
        if(!user || !isMatch)
        {
            return res.status(400).json({message:"Invalid Credentials"});
        }
        else
        {
             res.status(200).json({message:"Login Successfull",
                user:{
                _id:user._id,
                username:user.username,
                email:user.email,
                password:user.password,
            },
        });
        }
    }catch(error)
    {
        console.log("Error:"+error.message);
        return res.status(500).json({message:"Internal Server Error"});
    }
}
