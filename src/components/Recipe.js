import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../images/bibimbap.jpg';
import img2 from '../images/gimbap.jpeg';
import img3 from '../images/bulgogi.webp';

const Recipe = () => {
  return (
  <>
  <div class="card mb-3 mt-5 ml-5">
    <div class="row g-0">
    <div class="col-md-4">
      <img src={img1} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title text-center mb-5 fw-bold fs-1">Bibimbap </h5>
        <p class="card-text">Bibimbap is a traditional Korean dish that is both visually appealing and delicious. The name "bibimbap" translates to "mixed rice" and it typically consists of warm white rice topped with an assortment of vegetables, meats, and a fried egg, all mixed together with a flavorful gochujang (Korean red chili paste) sauce</p>
        <Link to="/bibimbap">
    <button type="button" class="btn btn-dark">Read Recipe</button>
    </Link>
      </div>
    </div>
    </div>
  </div>

<br></br>
  <div class="card mb-3 mt-5 ml-5">
    <div class="row g-0">
    <div class="col-md-4">
      <img src={img2} class="img-fluid rounded-start" alt="..." style={{ height: '300px', width: '400px' }}/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title text-center mb-5 fw-bold fs-1">Gimbap</h5>
        <p class="card-text">Gimbap, also spelled as "kimbap," is a popular Korean dish made from steamed white rice and various ingredients rolled in sheets of dried seaweed (gim) and served in bite-sized slices. The name "gimbap" literally translates to "seaweed rice," with "gim" meaning seaweed and "bap" meaning rice. It’s a versatile and portable food, often enjoyed as a snack, picnic food, or lunch box item.</p>
        <Link to="/gimbap">
    <button type="button" class="btn btn-dark">Read Recipe</button>
    </Link>
      </div>
    </div>
    </div>
  </div>
  <br></br>
  <div class="card mb-3 mt-5 ml-5">
    <div class="row g-0">
    <div class="col-md-4">
      <img src={img3} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title text-center mb-5 fw-bold fs-1">Bulgogi</h5>
        <p class="card-text">Bulgogi, literally meaning "fire meat" in Korean, is a popular Korean barbecue dish that features thinly sliced beef marinated in a mixture of soy sauce, sugar, sesame oil, garlic, and other flavorful ingredients. The meat is typically grilled or stir-fried, resulting in a sweet, savory, and slightly smoky dish. It is often served with rice, lettuce wraps, and various Korean side dishes known as "banchan."</p>
        <Link to="/bulgogi">
    <button type="button" class="btn btn-dark">Read Recipe</button>
    </Link>
      </div>
    </div>
    </div>
  </div>
  </>
  )
}

export default Recipe
