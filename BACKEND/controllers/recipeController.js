import Recipe from '../models/Recipe.js';

export const getRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find().populate('user', 'username');
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createRecipe = async (req, res) => {
    try {
        const { title, ingredients, instructions, cookingTime, image } = req.body;
        const recipe = await Recipe.create({
            title,
            ingredients,
            instructions,
            cookingTime,
            image,
            user: req.user._id,
        });
        res.status(201).json(recipe);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getUserRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find({ user: req.user._id });
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}; 