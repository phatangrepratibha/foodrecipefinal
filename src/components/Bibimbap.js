import React from 'react';
import img from "../images/bibimbap.jpg";
import backgroundImage from "../images/bg.jpg";

const Bibimbap = () => {
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
    <h1 className='text-center'>Bibimbap Recipe</h1>
      <div className="mx-5 mt-5">
        <div className="row">
          <div className="col-md-6">
            <img
              src={img}
              className="card-img-top"
              alt="Delicious Kimchi"
              style={{ height: '400px', width: '470px' }}
            />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div>
              <h1 className="mb-5">Ingredients</h1> 
              <ul>
                <li>2 cups short-grain white rice</li>
                <li>1 large carrot, julienned</li>
                <li>1 zucchini, julienned</li>
                <li>1 cup spinach, blanched</li>
                <li>1 cup soybean sprouts, blanched</li>
                <li>1 cup shiitake mushrooms, sliced</li>
                <li>1/2 cup cucumber, julienned</li>
                <li>200g beef, thinly sliced (or tofu for a vegetarian option)</li>
                <li>1 tablespoon soy sauce ,sesame oil ,sugar</li>
                <li>1 garlic clove, minced </li>
                <li>2 tablespoons gochujang</li>
                <li>4 eggs (one per serving)</li>
                <li>Sesame oil for drizzling</li>
                <li>Sesame seeds</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h1 className='text-center mt-5'>Instructions To Cook</h1>
        <div> 
          <ul style={{ listStyleType: 'decimal' }}>
            <li style={{ fontWeight: 'bold',fontSize: '1.2rem'  }}>Cook the Rice:</li>Cook 2 cups of rice. Keep warm.

            <li style={{ fontWeight: 'bold',fontSize: '1.2rem'  }}>Prepare Vegetables:</li>Sauté carrot, zucchini, and mushrooms separately until tender.
            Season spinach and soybean sprouts with sesame oil and salt.

            <li style={{ fontWeight: 'bold',fontSize: '1.2rem'  }}>Cook Protein:</li>Marinate beef or tofu with soy sauce, sesame oil, sugar, and garlic. Sauté until cooked.

            <li style={{ fontWeight: 'bold',fontSize: '1.2rem'  }}>Make Sauce: </li>Mix gochujang, sesame oil, sugar, water, and garlic.

            <li style={{ fontWeight: 'bold',fontSize: '1.2rem'  }}>Fry Eggs: </li>Cook eggs sunny-side up.

            <li style={{ fontWeight: 'bold',fontSize: '1.2rem'  }}>Assemble: </li> Place rice in bowls, top with vegetables, protein, and a fried egg.

            <li style={{ fontWeight: 'bold',fontSize: '1.2rem'  }}>Serve: </li>Drizzle with sesame oil and sprinkle with sesame seeds. Serve with gochujang sauce.
          </ul>
        </div>
        <div class="container">
        <div class="row">
        <div class="col">
            <div class="card border-dark">
                <div class="card-body">
                    <h5 class="card-title">Tips:</h5>
                    Use short-grain rice for a sticky texture.
                    Prepare each ingredient separately for distinct flavors.
                    Adjust gochujang for desired spice level.
                    Mix thoroughly before eating.</div>
            </div>
        </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Bibimbap


