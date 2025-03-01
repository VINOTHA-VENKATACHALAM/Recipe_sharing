import express from 'express';
import { getRecipes, createRecipe, getUserRecipes } from '../controllers/recipeController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getRecipes);
router.post('/', protect, createRecipe);
router.get('/myrecipes', protect, getUserRecipes);

export default router; 