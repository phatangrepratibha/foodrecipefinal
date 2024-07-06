import React from 'react';
import img from "../images/bulgogi1.jpeg";
import backgroundImage from "../images/bg.jpg";

const Bulgogi = () => {
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
    <h1 className='text-center'>Bulgogi Recipe</h1>
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
              <li style={{ fontWeight: 'bold',fontSize: '1.2rem'  }}>For the Marinade:</li>
                <ul>
                  <li>1/2 cup soy sauce</li>
                  <li>2 tbsp sugar</li>
                  <li>1 tbsp honey (optional for extra sweetness)</li>
                  <li>2 tbsp sesame oil</li>
                  <li>4 cloves garlic, minced</li>
                  <li>1 small onion, grated or finely chopped</li>
                  <li>1 pear or apple, grated (for tenderizing and sweetness)</li>
                  <li>2 tbsp mirin or rice wine (optional)</li>
                  <li>1 tbsp sesame seeds</li>
                  <li>1 tsp freshly ground black pepper</li>
                  <li>2 green onions, finely chopped</li>
                </ul>  
              <li style={{ fontWeight: 'bold',fontSize: '1.2rem'  }}>For the Beef:</li>
              <ul>
                <li>500g (1 lb) beef rib-eye or sirloin, thinly sliced against the grain</li>
                <li>1 small carrot, julienned (optional for color and texture)</li>
                <li>1 small onion, sliced</li>
                <li>2-3 shiitake mushrooms, thinly sliced (optional)</li>
                <li>2 tbsp vegetable oil (for cooking if stir-frying)</li>
              </ul>
              <li style={{ fontWeight: 'bold',fontSize: '1.2rem'  }}>For Serving:</li>
              <ul>
                <li>Cooked rice</li>
                <li>Lettuce or perilla leaves (for wrapping)</li>
                <li>Kimchi and other banchan (Korean side dishes)
                </li>
              </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h1 className='text-center mt-5'>Instructions To Cook</h1>
        <div> 
          <ul>
            <li style={{ fontWeight: 'bold',fontSize: '1.2rem'  }}>Preparing the Beef</li>
            <ul style={{ listStyleType: 'decimal' }} className='mt-3'>
              <li style={{fontSize: '1.2rem'}}>Freeze the Beef: </li>Partially freeze the beef for about 1 hour to make it easier to slice thinly.
              <li style={{fontSize: '1.2rem'}}>Slice the Beef: </li>Thinly slice the beef against the grain. Aim for slices that are about 1/8-inch thick.
            </ul>
          </ul>

          <ul>
            <li style={{ fontWeight: 'bold',fontSize: '1.2rem'  }}>Making the Marinade</li>
            <ul style={{ listStyleType: 'decimal' }} className='mt-3'>
              <li style={{fontSize: '1.2rem'}}>Combine Ingredients: </li>In a large mixing bowl, combine soy sauce, sugar, honey, sesame oil, minced garlic, grated onion, grated pear or apple, mirin, sesame seeds, black pepper, and green onions. Mix well.
              <li style={{fontSize: '1.2rem'}}>Add the Beef: </li>Add the sliced beef to the marinade. Make sure all pieces are well-coated.
              <li style={{fontSize: '1.2rem'}}>Marinate: </li>Cover the bowl with plastic wrap and let the beef marinate in the refrigerator for at least 30 minutes, preferably 2-3 hours, or overnight for the best flavor.
            </ul>
          </ul>

          <ul>
            <li style={{ fontWeight: 'bold',fontSize: '1.2rem'  }}>Cooking the Bulgogi</li>
            <ul style={{ listStyleType: 'decimal' }} className='mt-3'>
              <li style={{fontSize: '1.2rem'}}>Grill Option: </li>Preheat a grill or grill pan over medium-high heat. Grill the marinated beef slices for about 1-2 minutes on each side, until fully cooked and slightly charred.
              <li style={{fontSize: '1.2rem'}}>Stir-Fry Option: </li>Heat 2 tablespoons of vegetable oil in a large skillet or wok over medium-high heat. Add the marinated beef along with the julienned carrot, sliced onion, and shiitake mushrooms. Stir-fry for 4-5 minutes until the beef is fully cooked and vegetables are tender.
            </ul>
          </ul>

          <ul>
            <li style={{ fontWeight: 'bold',fontSize: '1.2rem'  }}>Serving</li>
            <ul style={{ listStyleType: 'decimal' }} className='mt-3'>
              <li style={{fontSize: '1.2rem'}}>Serve Hot: </li>Serve the bulgogi hot with a bowl of steamed rice and lettuce or perilla leaves for wrapping.
              <li style={{fontSize: '1.2rem'}}>Add Sides: </li>Enjoy with a variety of Korean side dishes like kimchi, pickled radish, or other banchan.
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
                      <li>Variations: You can add other vegetables like bell peppers or zucchini to the stir-fry for extra texture and flavor.</li>
                      <li>Vegan Option: Substitute beef with tofu or mushrooms, and use a soy-based marinade..</li>
                      <li>Tenderizing the Meat: The grated pear or apple in the marinade helps to tenderize the meat and adds a subtle sweetness.</li>
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

export default Bulgogi


