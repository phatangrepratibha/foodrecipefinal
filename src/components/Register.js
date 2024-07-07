// import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';
// import im1 from "../images/register.jpeg"
//  import { useNavigate } from 'react-router-dom';



// const Register = () => {

//     const navigate=useNavigate();

//   const [user,setUser]=useState({
//     username:"",
//     email:"",
//     password:"",
//     mobile:"",
//     address:""

//   });

//   const handleInput=(event)=>{
//     let name=event.target.name;
//     let value=event.target.value;

//     setUser({...user,[name]:value})
//   }

//   const handleSubmit=async(event)=>{
  
//   event.preventDefault();
//   const{username,email,password,mobile,address}=user;
//   try{
//    const res=await fetch("/signup",{
//     method:"POST",
//     headers:{
//       "Content-Type":"application/json"
//     },
//     body:JSON.stringify({
//       username,email,password,mobile,address
//     })
//    })
     
//    if(res.status==400 || !res){
//       window.alert("Already used details");
//    }
//    else
//    {
//     window.alert("Registered successfully");
//      navigate("/login");
//    }

//   }catch(error){
//      console.log(error);
//   }

//   }

//   return (
//     <>
      
//       <h2 >Register Here</h2>
//         <div className="container ">
//   <div className="row">
//     <div className="col ">
   
//       <img src={im1} width="500px" height="450px" />
//     </div>
//     <div className="col">
   
//     <form onSubmit={handleSubmit} method="POST">

//         <div className="form-floating mb-3 mt-4">
//                <input type="name" className="form-control" name="username" value={user.username} onChange={handleInput} id="floatingInput" placeholder="xyz"/>
//                <label htmlFor="floatingInput">Username</label>
//            </div>
//            <div className="form-floating mb-3 mt-3">
//                <input type="email" className="form-control" name="email" value={user.email} onChange={handleInput} id="floatingInput" placeholder="name@example.com"/>
//                <label htmlFor="floatingInput">Email address</label>
//            </div>
//            <div className="form-floating mb-3 mt-3">
//                <input type="password" className="form-control" name="password" value={user.password} onChange={handleInput} id="floatingPassword" placeholder="Password"/>
//                <label htmlFor="floatingPassword">Password</label>
//            </div>
//            <div className="form-floating mb-3 mt-3">
//                <input type="number" className="form-control" name="mobile" value={user.mobile} onChange={handleInput} id="floatingPassword" placeholder="Password"/>
//                <label htmlFor="floatingPassword">Mobile Number</label>
//            </div>
//            <div className="form-floating mb-3 mt-3">
//                <textarea className="form-control"  placeholder="Address" name="address" value={user.address} onChange={handleInput} id="floatingTextarea" style={{height:"100px"}}></textarea>
//                <label htmlFor="floatingTextarea">Address</label>
//            </div>
//            {/* <Link to="/login"> */}
          
//            <button type="submit" className="btn btn-primary mb-3 mt-3" >Register</button>
//            {/* </Link> */}

          
        
//       </form>
//     </div>
    
//   </div>
// </div>


   
    
//     </>
//   )
// }

// export default Register

import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
function Register() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfully");
          navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className=" w-[600px] ">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Signup</h3>
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("fullname", { required: true })}
                />
                <br />
                {errors.fullname && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Email */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Password */}
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your password"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Button */}
              <div className="flex justify-around mt-4">
                <button className="bg-pink-500 text-black rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  Register
                </button>
                {/* <p className="text-xl">
                  Have account?{" "}
                  <button
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>{" "}
               
                </p> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
