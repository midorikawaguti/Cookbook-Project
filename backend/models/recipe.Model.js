import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    }, 
    name:{
        type: String,
        required: true,
    },
    rating:{
        type: Number,
        required: true,
    },
    comment:{
        type: String,
        required: true,
    },
},
{
    timestamps: true,
});

const recipeSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    name: {
        type: String,
        required: true,
    },
    image:{
        type:String,
        required: true,
    },
    ingredients:[{
        type: String,
        required: true,
    }],
    cookingTime:{
        type: Number,
        required: true,
        default: 0,
    },
    servingSize:{
        type: Number,
        required: true,
        default: 0,
    },
    recipeType:{
        type: String,
        required: true,
    },
    rating:{
        type: Number,
        required: true,
        default: 0,
    },
    category:{
        type: String,
        required: true,
    },
    numReviews:{
        type: Number,
        required: true,
        default: 0,
    },
    instructions:[{
        type: String,
        required: true,
    }],
    description:{
        type: String,
        required: true,
    },
     difficulty:{
        type: String,
        required: true,
    },
    diet:{
        type: String,
        required: true,
    },
    reviews:[reviewSchema],
  
},
{
    timestamps: true,
}
);

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;