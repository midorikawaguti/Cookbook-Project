import express from 'express';
import recipes from '../backend/data/recipes.js';

const port = 5500;
const app = express();
app.get('/', (req, res)=>{
    res.send('API is running in cookbook app...')
});

app.listen(port, () => console.log(`server running on ${port}`));


// GET ALL RECIPES
app.get('/api/recipes', (req, res) =>{
    res.json(recipes);
})


//GET SINGLE RECIPE
app.get('/api/recipes/:id', (req, res)=>{
    const recipe= recipes.find((r)=>r._id === req.params.id);
    res.json(recipe);
})