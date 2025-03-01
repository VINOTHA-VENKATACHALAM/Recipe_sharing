import { useState } from "react";
import CreateRecipe from "./CreateRecipe"; // Import CreateRecipe component

function Recipe() {
  const [recipes] = useState([
    {
      id: 1,
      title: "Choco Lava Cake",
      description: "A rich, molten chocolate cake with a gooey center.",
      image: "https://source.unsplash.com/400x300/?chocolate,cake",
      video: "https://www.youtube.com/watch?v=gW3JtHpuzrk",
    },
    {
      id: 2,
      title: "Biryani",
      description: "Aromatic and flavorful rice dish with spices and meat.",
      image: "https://source.unsplash.com/400x300/?biryani,food",
      video: "https://www.youtube.com/watch?v=hrtr7mi7gZA",
    },
    {
        id: 3,
        title: "Shawarma",
        description: "A delicious Middle Eastern wrap with grilled meat and veggies.",
        image: "https://source.unsplash.com/400x300/?shawarma,food",
        video: "https://www.youtube.com/watch?v=lrb_cJBPzLM",
      },
      {
        id: 4,
        title: "Brownie",
        description: "A dense and fudgy chocolate dessert.",
        image: "https://source.unsplash.com/400x300/?brownie,dessert",
        video: "https://www.youtube.com/watch?v=X9hKRIQ3uxc",
      },
      {
        id: 5,
        title: "Chocolate Mousse",
        description: "A light and airy chocolate dessert with a creamy texture.",
        image: "https://source.unsplash.com/400x300/?chocolate,mousse",
        video: "https://www.youtube.com/watch?v=owPD4FR2aXU",
      },
      {
        id: 6,
        title: "Mojito",
        description: "A refreshing mint and lime-based drink.",
        image: "https://source.unsplash.com/400x300/?mojito,drink",
        video: "https://www.youtube.com/watch?v=zJOt6ROx-68",
      },
    ]);

  return (
    <div style={{ padding: "30px", backgroundColor: "#f7f7f7", minHeight: "100vh" }}>
      <h2 style={{ textAlign: "center" }}>Recipe Page</h2>

      {/* Recipe List */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
        {recipes.map((recipe) => (
          <div key={recipe.id} style={{ backgroundColor: "white", padding: "20px", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", textAlign: "center" }}>
            <img src={recipe.image} alt={recipe.title} style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "10px" }} />
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <button onClick={() => window.open(recipe.video, "_blank")} style={{ marginTop: "10px", padding: "10px", backgroundColor: "#3498db", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
              Watch Video
            </button>
          </div>
        ))}
      </div>

      {/* Add Recipe Form */}
      <div style={{ marginTop: "30px" }}>
        <CreateRecipe /> {/* Importing CreateRecipe Component */}
      </div>
    </div>
  );
}

export default Recipe;
