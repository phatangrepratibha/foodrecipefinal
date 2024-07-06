import React from 'react';
import { Link } from 'react-router-dom';
import im1 from "../images/register.jpeg"


const Register = () => {
  return (
    <>
      
      <h2 >Register Here</h2>
        <div className="container ">
  <div className="row">
    <div className="col ">
   
      <img src={im1} width="500px" height="450px" />
    </div>
    <div className="col">
   
    <form>

        <div className="form-floating mb-3 mt-4">
               <input type="name" className="form-control" id="floatingInput" placeholder="xyz"/>
               <label htmlFor="floatingInput">Username</label>
           </div>
           <div className="form-floating mb-3 mt-3">
               <input type="email" className="form-control"  id="floatingInput" placeholder="name@example.com"/>
               <label htmlFor="floatingInput">Email address</label>
           </div>
           <div className="form-floating mb-3 mt-3">
               <input type="password" className="form-control"  id="floatingPassword" placeholder="Password"/>
               <label htmlFor="floatingPassword">Password</label>
           </div>
           <div className="form-floating mb-3 mt-3">
               <input type="number" className="form-control"  id="floatingPassword" placeholder="Password"/>
               <label htmlFor="floatingPassword">Mobile Number</label>
           </div>
           <div className="form-floating mb-3 mt-3">
               <textarea className="form-control"  placeholder="Address" id="floatingTextarea" style={{height:"100px"}}></textarea>
               <label htmlFor="floatingTextarea">Address</label>
           </div>
           <Link to="/login">
          
           <button type="submit" className="btn btn-primary mb-3 mt-3" >Register</button>
           </Link>

          
        
      </form>
    </div>
    
  </div>
</div>


   
    
    </>
  )
}

export default Register
