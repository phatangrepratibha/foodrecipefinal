import React from 'react';
import img from "../images/tteo.avif";
import backgroundImage from "../images/bg.jpg";

const Tteo = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
  };
  return (
    <>
    <div classNameName="kimchi-background" style={backgroundStyle}>
    <h1 classNameName='text-center'>Tteokbokki Recipe</h1>
      <div classNameName="mx-5 mt-5">
        <div classNameName="row">
          <div classNameName="col-md-6">
            <img
              src={img}
              classNameName="card-img-top"
              alt="Delicious Kimchi"
              style={{ height: '400px', width: '470px' }}
            />
          </div>
          <div classNameName="col-md-6 d-flex align-items-center">
            <div>
              <h1 classNameName="mb-5">Ingredients</h1> 
              <ul>
                <li>1 pound Korean rice cakes (tteok)</li>
                <li>4 cups water or anchovy broth</li>
                <li>2 tablespoons gochujang (Korean red chili paste)</li>
                <li>1 tablespoon gochugaru (Korean red chili flakes)</li>
                <li>2 tablespoons soy sauce</li>
                <li>1 tablespoon sugar (or adjust to taste)</li>
                <li>2 cloves garlic, minced</li>
                <li>1/2 onion, sliced</li>
                <li>2 green onions, chopped</li>
                <li>1 boiled egg, halved (optional)</li>
                <li>1 tablespoon sesame oil</li>
                <li>Sesame seeds for garnish</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h1 classNameName='text-center mt-5'>Instructions To Cook</h1>
        <div> 
          <ul style={{ listStyleType: 'decimal' }}>
            <li style={{ fontWeight: 'bold',fontSize: '1.2rem'  }}>Prepare the Rice Cakes:</li>If the rice cakes are hard or frozen, soak them in warm water for about 10-15 minutes until they are softened.

            <li style={{ fontWeight: 'bold',fontSize: '1.2rem'  }}>Make the Broth:</li>In a large pot, bring 4 cups of water or anchovy broth to a boil. (Anchovy broth can be made by boiling a few dried anchovies with kelp in water for 10 minutes.)

            <li style={{ fontWeight: 'bold',fontSize: '1.2rem'  }}>Make the Sauce:</li>Once the water is boiling, reduce the heat to medium and add 2 tablespoons of gochujang, 1 tablespoon of gochugaru, 2 tablespoons of soy sauce, and 1 tablespoon of sugar. Stir well until the gochujang is dissolved.
            
            <li style={{ fontWeight: 'bold',fontSize: '1.2rem'  }}>Add Vegetables and Rice Cakes:</li>Add the minced garlic and sliced onions to the broth.
            Add the softened rice cakes and fish cakes (if using) to the pot. Stir occasionally to prevent the rice cakes from sticking to the bottom.

            <li style={{ fontWeight: 'bold',fontSize: '1.2rem'  }}>Simmer and Cook:</li>Let the mixture simmer for about 10-15 minutes until the sauce thickens and the rice cakes become chewy and soft. Stir occasionally.
            Add the chopped green onions during the last 2-3 minutes of cooking.

            <li style={{ fontWeight: 'bold',fontSize: '1.2rem'  }}>Serve:</li>Remove the pot from heat. Drizzle sesame oil over the Tteokbokki and sprinkle with sesame seeds.Arrange the boiled egg halves on top if using.

            <li style={{ fontWeight: 'bold',fontSize: '1.2rem'  }}>Garnish:</li>Serve hot, optionally garnished with additional green onions or sesame seeds.
          </ul>
        </div>
        <div className="container">
        <div className="row">
        <div className="col">
            <div className="card border-dark">
                <div className="card-body">
                    <h5 className="card-title">Tips:</h5>
                    You can adjust the spice level by altering the amount of gochujang and gochugaru.
                    For a non-spicy version, you can omit the gochugaru and use a milder chili paste or none at all.
                    You can add various ingredients like cabbage, carrots, or even ramen noodles to the Tteokbokki for a more filling dish.                </div>
            </div>
        </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Tteo


