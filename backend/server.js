import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import recipeRoutes from '../backend/routes/recipeRoute.js';

const port = process.env.PORT || 8000; //port for the back end is set in .env file with PORT=5500

connectDB();

const app = express();
app.get('/', (req, res)=>{
    res.send('API is running in cookbook app...')
});




// GET ALL RECIPES
app.use('/api/recipes', recipeRoutes);



//GET SINGLE RECIPE
// app.get('/api/recipes/:id', (req, res)=>{
//     const recipe= recipes.find((r)=>r._id === req.params.id);
//     res.json(recipe);
// })

app.listen(port, () => console.log(`server running on ${port}`));