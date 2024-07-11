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
     <div className="container">
  <div className="row">
    <div className="col">
    <div className="card">
  <img src={img1} className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Kimchi</p><hr/>
    <Link to="/kimchi">
    <button type="button" className="btn btn-dark">Read Recipe</button>
    </Link>

  </div>
</div>
    </div>
    <div className="col">
    <img src={img2} className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Ramen</p><hr/>
    <Link to="/ramen">
    <button type="button" className="btn btn-dark">Read Recipe</button>
    </Link>
  </div>
    </div>
    <div className="col">
    <img src={img3} className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Tteokbokki</p><hr/>
    <Link to="/tteo">
    <button type="button" className="btn btn-dark">Read Recipe</button>
    </Link>
  </div>
    </div>
  </div>
</div>
     </div>


  <div>
    <h4>About Us</h4>
  <div className="container1 mt-5">
  <div className="row">
    <div className="col">
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
    <div className="col">
    <Lottie animationData={anim} loop={true}  />
    </div>
    
  </div>
</div>
</div>
       
    
    
    


    
   
    </>
    
  )
}

export default Land
