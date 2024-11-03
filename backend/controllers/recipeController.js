import asyncHandler from "../middleware/asyncHandler.js";
import Recipe from '../models/recipeModel.js';

//@desc Fetch All Recipes
//@route GET/api/recipes
//@access Public
const getRecipes = asyncHandler(async(req, res)=>{
    const recipes = await Recipe.find({});
    res.json(recipes);
});


//@desc Fetch single Recipe
//@route GET/api/recipes/:id
//@access Public

const getRecipeById = asyncHandler(async(req,res) =>{
    
    const recipe = await Recipe.findById(req.params.id);

    if(recipe){
        return res.json(recipe);
    } else{
        res.status(404);
        throw new Error ('Resource not found');
    }
    
})

export{getRecipes, getRecipeById};