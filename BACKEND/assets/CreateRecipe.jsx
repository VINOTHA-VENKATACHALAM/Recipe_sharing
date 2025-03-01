import { useState } from "react";

function CreateRecipe() {
  const [recipe, setRecipe] = useState({
    name: "",
    description: "",
    ingredients: [],
    newIngredient: "",
    cookingTime: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  // Add ingredient to the list
  const addIngredient = () => {
    if (recipe.newIngredient.trim() !== "") {
      setRecipe({
        ...recipe,
        ingredients: [...recipe.ingredients, recipe.newIngredient],
        newIngredient: "",
      });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!recipe.name || !recipe.description || recipe.ingredients.length === 0 || !recipe.cookingTime) {
      alert("Please fill in all fields.");
      return;
    }
    alert("Recipe Created!");
    setRecipe({ name: "", description: "", ingredients: [], newIngredient: "", cookingTime: "" });
  };

  return (
    <div style={{ padding: "30px", maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
      <h2>Create a New Recipe</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        
        {/* Recipe Name Input */}
        <input type="text" name="name" value={recipe.name} onChange={handleChange} placeholder="Recipe Name" required />
        
        {/* Description Box (Textarea) */}
        <textarea
          name="description"
          value={recipe.description}
          onChange={handleChange}
          placeholder="Enter recipe description..."
          rows="4"
          style={{ resize: "vertical", width: "100%", padding: "10px" }}
          required
        ></textarea>

        {/* Add Ingredients Section */}
        <div>
          <input type="text" name="newIngredient" value={recipe.newIngredient} onChange={handleChange} placeholder="Add Ingredient" />
          <button type="button" onClick={addIngredient} style={{ backgroundColor: "#55CBCD", color: "white", padding: "8px", border: "none", cursor: "pointer" }}>
            Add
          </button>
        </div>
        <ul>{recipe.ingredients.map((item, index) => <li key={index}>{item}</li>)}</ul>

        {/* Cooking Time Input */}
        <input type="number" name="cookingTime" value={recipe.cookingTime} onChange={handleChange} placeholder="Cooking Time (minutes)" required />

        {/* Submit Button */}
        <button type="submit" style={{ padding: "12px", fontSize: "18px", fontWeight: "bold", color: "white", backgroundColor: "#55CBCD", border: "none", cursor: "pointer" }}>
          Create Recipe
        </button>
      </form>
    </div>
  );
}

export default CreateRecipe;
