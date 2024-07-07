import React from 'react'
// import { Link } from 'react-router-dom'
import im2 from "../images/login.jpeg"


const Login = () => {
  return (
   <>
   
        <h2 >Login Here</h2>
        <div className="container ">
  <div className="row">
    <div className="col ">
   
      <img src={im2} width="500px" height="300px" />
    </div>
    <div className="col">
   
    <form >

        <div className="form-floating mb-3 mt-4">
               <input type="name" className="form-control" id="floatingInput" placeholder="xyz"/>
               
               <label htmlFor="floatingInput">Username</label>
           </div>
           
           
           <div className="form-floating mb-3 mt-3">
               <input type="password" className="form-control"  id="floatingPassword" placeholder="Password"/>
               
               <label htmlFor="floatingPassword">Password</label>
           </div>
           
           
           {/* <Link to="/"> */}
          
           <button type="submit" className="btn btn-primary mb-3 mt-3" >Login</button>
           {/* </Link> */}

          
        
      </form>
    </div>
    
  </div>
</div>


   </>
  )
}

export default Login
