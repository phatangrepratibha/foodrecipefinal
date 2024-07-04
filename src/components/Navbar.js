import React from 'react'
import logi from "../images/logo.jpg"

const Navbar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid " >
    <img src={logi} height="30px" width="30px" />
    <a class="navbar-brand ms-3 " href="#">KORECIPE</a>      
   
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">      
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Recipe</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" href="#">Register</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" href="#">Login</a>
        </li>
       
       
      </ul>
      
    </div>
  </div>
</nav>
    
    </>
  )
}

export default Navbar