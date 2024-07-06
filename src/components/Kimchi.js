import React from 'react';
import img from "../images/kim.jpeg";
import backgroundImage from "../images/bg.jpg";

const Kimchi = () => {
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
    <h1 className='text-center'>Kimchi Recipe</h1>
      <div className="mx-5 mt-5">
        <div className="row">
          <div className="col-md-6">
            <img
              src={img}
              className="card-img-top"
              alt="Delicious Kimchi"
              style={{ height: '400px', width: '400px' }}
            />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div>
              <h1 className="mb-5">Ingredients</h1> 
              <ul>
                <li>Napa Cabbage: 1 large head</li>
                <li>Kosher Salt: 1/2 cup</li>
                <li>Water: 6 cups</li>
                <li>Garlic: 6 cloves, minced</li>
                <li>Ginger: 1 tablespoon, grated</li>
                <li>Korean Red Pepper Flakes (Gochugaru): 1/4 cup</li>
                <li>Fish Sauce: 3 tablespoons</li>
                <li>Sugar: 1 tablespoon</li>
                <li>Green Onions: 6, chopped</li>
                <li>Carrots: 2, julienned</li>
                <li>Radish: 1 small, julienned</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h1 className='text-center mt-5'>Instructions To Cook</h1>
        <div> 
          <ul style={{ listStyleType: 'decimal' }}>
            <li style={{ fontWeight: 'bold',fontSize: '1.2rem'  }}>Prepare the Cabbage:</li>Cut the cabbage lengthwise into quarters. Remove the core and chop into bite-sized pieces.
            <li style={{ fontWeight: 'bold',fontSize: '1.2rem'  }}>Brine the Cabbage:</li>In a large bowl, dissolve 1/2 cup of kosher salt in 6 cups of water. Submerge the cabbage in the salt water and let it sit for 1-2 hours, turning occasionally.
            <li style={{ fontWeight: 'bold',fontSize: '1.2rem'  }}>Prepare Seasonings:</li>In a small bowl, combine minced garlic, grated ginger, Korean red pepper flakes, fish sauce, and sugar. Mix well.
            <li style={{ fontWeight: 'bold',fontSize: '1.2rem'  }}>Rinse and Drain Cabbage:</li>Rinse the cabbage thoroughly under cold water to remove excess salt. Drain well.
            <li style={{ fontWeight: 'bold',fontSize: '1.2rem'  }}>Mix Ingredients:</li>In a large mixing bowl, combine the cabbage, green onions, carrots, radish, and the seasoning mixture. Mix thoroughly until well combined.
            <li style={{ fontWeight: 'bold',fontSize: '1.2rem'  }}>Pack into Jars:</li>Pack the kimchi mixture tightly into clean jars, pressing down firmly to remove any air pockets.
            <li style={{ fontWeight: 'bold',fontSize: '1.2rem'  }}>Fermentation:</li>Seal the jars loosely and let them sit at room temperature for 1-2 days to ferment. After fermenting, refrigerate to slow down the fermentation process.
            <li style={{ fontWeight: 'bold',fontSize: '1.2rem'  }}>Enjoy:</li>Kimchi is ready to eat! It can be served as a side dish, added to soups, stir-fries, or used in various recipes.

          </ul>
        </div>
        <div class="container">
        <div class="row">
        <div class="col">
            <div class="card border-dark">
                <div class="card-body">
                    <h5 class="card-title">Tips:</h5>
                      Adjust the amount of Korean red pepper flakes according to your spice preference.
                      The fermentation time can vary based on temperature and personal taste. Taste the kimchi after 1 day and ferment longer if a more tangy flavor is desired.
                </div>
            </div>
        </div>
        </div>
        </div>

   </div>
     </>
  );
};

export default Kimchi;
