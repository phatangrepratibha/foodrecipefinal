import React from 'react'
import logi from "../images/logo.jpg"

const Navbar = (props) => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid " >
    <img src={logi} height="30px" width="30px" />
    <a className="navbar-brand ms-3 " href="#">KORECIPE</a>      
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">      
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/recipe">Recipe</a>
        </li>

       {props.auth ?
       <>
        <li className="nav-item">
          <a className="nav-link active" href="/register">Register</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" href="/login">Login</a>
        </li>
        </>
         :
         
        <>
        <li className="nav-item">
          <a className="nav-link active" href="/logout">Logout</a>
        </li>
        </>
}
      </ul>
         
    </div>
  </div>
</nav>
    
    </>
  )
}

export default Navbar
