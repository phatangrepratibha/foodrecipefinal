import React from 'react';
import img from "../images/home.jpg";
import img1 from "../images/kimchi.jpg";
import img2 from "../images/ramen.jpg";
import img3 from "../images/tt2.jpg";
import Lottie from "lottie-react";
import anim from "../Animations/abt3.json";
import { Link } from 'react-router-dom';


const Land = () => {
  return (
    <>
    <img src={img} height="500px" width="1338px"/><hr/>

    <h2>Free Recipes</h2>

    <div>
     <div class="container">
  <div class="row">
    <div class="col">
    <div class="card">
  <img src={img1} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Kimchi</p><hr/>
    <Link to="/kimchi">
    <button type="button" class="btn btn-dark">Read Recipe</button>
    </Link>

  </div>
</div>
    </div>
    <div class="col">
    <img src={img2} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Ramen</p><hr/>
    <Link to="/ramen">
    <button type="button" class="btn btn-dark">Read Recipe</button>
    </Link>
  </div>
    </div>
    <div class="col">
    <img src={img3} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Tteokbokki</p><hr/>
    <Link to="/tteo">
    <button type="button" class="btn btn-dark">Read Recipe</button>
    </Link>
  </div>
    </div>
  </div>
</div>
     </div>


  <div>
    <h4>About Us</h4>
  <div class="container1 mt-5">
  <div class="row">
    <div class="col">
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
    <div class="col">
    <Lottie animationData={anim} loop={true}  />
    </div>
    
  </div>
</div>
</div>
       
    
    
    


    
   
    </>
    
  )
}

export default Land
