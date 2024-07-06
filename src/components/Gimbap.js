import React from 'react';
import img from "../images/gimbap1.avif";
import backgroundImage from "../images/bg.jpg";

const Gimbap = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
  };
  return (
    <>
    <div className="kimchi-background" style={backgroundStyle}>
    <h1 className='text-center'>Gimbap Recipe</h1>
      <div className="mx-5 mt-5">
        <div className="row">
          <div className="col-md-6">
            <img
              src={img}
              className="card-img-top"
              alt="Delicious Kimchi"
              style={{ height: '600px', width: '500px' }} 
            />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div>
              <h1 className="mb-5">Ingredients</h1> 
              <ul style={{ listStyleType: 'decimal' }}>
              <li style={{ fontWeight: 'bold',fontSize: '1.2rem'  }}>For the Rice:</li>
                <ul>
                  <li>2 cups short-grain white rice (sushi rice)</li>
                  <li>2 cups water</li>
                  <li>1 tbsp sesame oil</li>
                  <li>½ tsp salt</li>
                </ul>  
              <li style={{ fontWeight: 'bold',fontSize: '1.2rem'  }}>For the Filling:</li>
              <ul>
                <li>2 eggs, beaten</li>
                <li>1 carrot, julienned</li>
                <li>1 cucumber, julienned</li>
                <li>5-6 strips pickled radish (danmuji)</li>
                <li>1 cup spinach, blanched</li>
                <li>100g beef (or tofu for a vegetarian option), marinated and cooked</li>
                <li>1-2 tbsp soy sauce</li>
                <li>1 tbsp sugar</li>
                <li>1 tbsp sesame oil</li>
                <li>2-3 imitation crab sticks (optional)</li>
                <li>1 tbsp sesame seeds</li>
              </ul>
              <li style={{ fontWeight: 'bold',fontSize: '1.2rem'  }}>For the Roll:</li>
              <ul>
                <li>4-5 sheets of roasted seaweed (gim/nori)</li>
                <li>Soy sauce or pickled ginger for serving (optional)</li>
              </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h1 className='text-center mt-5'>Instructions To Cook</h1>
        <div> 
          <ul>
            <li style={{ fontWeight: 'bold',fontSize: '1.2rem'  }}>Preparing the Rice</li>
            <ul style={{ listStyleType: 'decimal' }} className='mt-3'>
              <li style={{fontSize: '1.2rem'}}>Cook the Rice: </li>Rinse the rice until the water runs clear, then cook it with 2 cups of water in a rice cooker or on the stovetop.
              <li style={{fontSize: '1.2rem'}}>Season the Rice: </li>Once cooked, let it cool slightly, then mix in the sesame oil and salt.
            </ul>
          </ul>

          <ul>
            <li style={{ fontWeight: 'bold',fontSize: '1.2rem'  }}>Preparing the Fillings</li>
            <ul style={{ listStyleType: 'decimal' }} className='mt-3'>
              <li style={{fontSize: '1.2rem'}}>Prepare the Eggs: </li>Cook the beaten eggs in a non-stick pan to make a thin omelet. Once cool, cut into thin strips.
              <li style={{fontSize: '1.2rem'}}>Cook the Carrot: </li>Sauté the julienned carrot in a little oil until tender, about 2-3 minutes. Season with a pinch of salt.
              <li style={{fontSize: '1.2rem'}}>Blanch the Spinach: </li>Blanch the spinach in boiling water for about 30 seconds, then rinse under cold water. Squeeze out excess water, and mix with sesame oil and a pinch of salt.
              <li style={{fontSize: '1.2rem'}}>Prepare the Beef: </li>Marinate the beef with soy sauce, sugar, and sesame oil. Cook it in a pan until done. Slice into thin strips.
              <li style={{fontSize: '1.2rem'}}>Prepare the Cucumber: </li>Julienne the cucumber, removing the seeds if it's very watery.
              <li style={{fontSize: '1.2rem'}}>Prepare the Pickled Radish: </li>Cut the pickled radish into long strips if they aren’t already pre-cut.
              <li style={{fontSize: '1.2rem'}}>Prepare the Crab Sticks: </li>(If using) Cut the imitation crab sticks into strips.
            </ul>
          </ul>

          <ul>
            <li style={{ fontWeight: 'bold',fontSize: '1.2rem'  }}>Assembling the Gimbap</li>
            <ul style={{ listStyleType: 'decimal' }} className='mt-3'>
              <li style={{fontSize: '1.2rem'}}>Lay Out the Seaweed: </li>Place a sheet of seaweed shiny side down on a bamboo sushi mat.
              <li style={{fontSize: '1.2rem'}}>Add Rice: </li>Spread a thin layer of rice evenly over the seaweed, leaving about an inch at the top uncovered.
              <li style={{fontSize: '1.2rem'}}>Add Fillings: </li>Arrange a small amount of each filling horizontally across the center of the rice.
              <li style={{fontSize: '1.2rem'}}>Roll the Gimbap: </li>Using the bamboo mat, carefully roll the seaweed and rice over the fillings, pressing firmly to form a tight roll. Seal the edge with a little water or a few grains of rice.
              <li style={{fontSize: '1.2rem'}}>Slice the Gimbap: </li>Brush the roll with a bit of sesame oil and sprinkle with sesame seeds. Cut into bite-sized pieces using a sharp, slightly wet knife.
            </ul>
          </ul>

          <ul>
            <li style={{ fontWeight: 'bold',fontSize: '1.2rem'  }}>Serving</li>
              <ul style={{ listStyleType: 'decimal' }} className='mt-3'>
              <li style={{fontSize: '1.2rem'}}>Serve the gimbap with soy sauce or pickled ginger if desired.</li>
              </ul>
          </ul>
          
          
        </div>
        <div class="container">
        <div class="row">
        <div class="col">
            <div class="card border-dark">
                <div class="card-body">
                    <h5 class="card-title">Tips:</h5>
                    <ul>
                      <li>Variations: You can substitute or add ingredients like kimchi, cheese, or different types of meat.</li>
                      <li>Vegan Option: Use tofu instead of beef and skip the crab sticks.</li>
                      <li>Storage: Gimbap is best enjoyed fresh but can be stored in the fridge for a day. To prevent the rice from drying out, wrap the rolls in plastic wrap.</li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Gimbap


