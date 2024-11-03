import express from "express";
const router = express.Router();
//import recipes from '../data/recipes.js'
// import asyncHandler from "../middleware/asyncHandler.js"
// import Recipe from '../models/recipeModel.js'
import { getRecipes, getRecipeById } from "../controllers/recipeController.js";

//ALL RECIPES
router.route('/').get(getRecipes);

//SINGLE PRODUCT
router.route('/:id').get(getRecipeById);

export default router;