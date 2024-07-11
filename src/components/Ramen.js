import React from 'react';
import img from "../images/ramen1.jpeg";
import backgroundImage from "../images/bg.jpg";

const Ramen = () => {
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
    <h1 classNameName='text-center'>Ramen Recipe</h1>
      <div classNameName="mx-5 mt-5">
        <div classNameName="row">
          <div classNameName="col-md-6">
            <img
              src={img}
              classNameName="card-img-top"
              alt="Delicious Kimchi"
              style={{ height: '400px', width: '400px' }}
            />
          </div>
          <div classNameName="col-md-6 d-flex align-items-center">
            <div>
              <h1 classNameName="mb-5">Ingredients</h1> 
              <ul>
                <li>4 cups chicken or vegetable broth</li>
                <li>2 packs of ramen noodles (discard the seasoning packets if using your own broth)</li>
                <li>2 cloves garlic, minced</li>
                <li>1-inch piece of ginger, grated</li>
                <li>2 tablespoons soy sauce</li>
                <li>1 tablespoon miso paste (optional, for added flavor)</li>
                <li>1 tablespoon sesame oil</li>
                <li>Sliced vegetables (such as carrots, mushrooms, bok choy, spinach)</li>
                <li>Sliced cooked chicken, pork, or tofu (optional)</li>
                <li>Soft-boiled eggs, halved (optional)</li>
                <li>Green onions, chopped, for garnish</li>
                <li>Nori (seaweed sheets), shredded (optional)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h1 classNameName='text-center mt-5'>Instructions To Cook</h1>
        <div> 
          <ul style={{ listStyleType: 'decimal' }}>
            <li style={{ fontWeight: 'bold',fontSize: '1.2rem'  }}>Prepare the Broth:</li>In a large pot, heat sesame oil over medium heat. Add minced garlic and grated ginger, sauté for 1-2 minutes until fragrant.
            Pour in the broth and bring to a simmer. Add soy sauce and miso paste (if using), stirring until miso is dissolved.
            
            <li style={{ fontWeight: 'bold',fontSize: '1.2rem'  }}>Cook Noodles and Vegetables:</li>Add ramen noodles to the broth and cook according to package instructions (usually about 3-4 minutes).
            Add sliced vegetables and any protein (like cooked chicken or tofu) during the last 2 minutes of cooking, until noodles are tender and vegetables are cooked.

            <li style={{ fontWeight: 'bold',fontSize: '1.2rem'  }}>Serve:</li>Divide the ramen into bowls. Arrange soft-boiled egg halves on top, if using.
            Garnish with chopped green onions and shredded nori.
            
            <li style={{ fontWeight: 'bold',fontSize: '1.2rem'  }}>Customize:</li>You can adjust the flavors by adding more soy sauce, a dash of rice vinegar for tanginess, or a pinch of sugar for sweetness.
          </ul>
        </div>
        <div className="container">
        <div className="row">
        <div className="col">
            <div className="card border-dark">
                <div className="card-body">
                    <h5 className="card-title">Tips:</h5>
                    This recipe is quite versatile, so feel free to experiment with different vegetables, proteins, or toppings to suit your preferences!
                </div>
            </div>
        </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Ramen
