import express from "express";
const router = express.Router();
//import recipes from '../data/recipes.js'
import asyncHandler from "../middleware/asyncHandler.js"
import Recipe from '../models/recipeModel.js'

//ALL RECIPES
router.get('/', asyncHandler (async(req, res) => {
    const recipes = await Recipe.find({});
    res.json(recipes);
}));

//SINGLE PRODUCT
router.get('/:id', asyncHandler (async(req, res) =>{
    //const recipe = Recipe.find((r) => r._id === req.params.id);
    const recipe = await Recipe.findById(req.params.id);

    //res.json(recipe);

     if (recipe){
         return res.json(recipe);
     }
     res.status(404).json({message: 'Recipe not found'});
     })
    );

export default router;