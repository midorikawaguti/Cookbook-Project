import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import { Card, ToggleButton } from 'react-bootstrap'
import { FaHeart } from 'react-icons/fa'
import { addToFav, removeFromFav } from '../slices/favoriteSlice'
import { useDispatch} from 'react-redux'

const Recipe = ({ recipe }) => {
  // State to track whether the recipe is marked as favorite
  const [isFavorite, setIsFavorite] = useState(false);

  const dispatch = useDispatch();

  // Function to Add to favorite
  const addToFavHandler = (recipe) => {
    dispatch(addToFav({...recipe, isFavorite}));
    setIsFavorite((isFavorite) => !isFavorite);
    console.log("Added to Fav");
  };

  const removeFavHandler = async (id) =>{
    dispatch(removeFromFav(id));
    setIsFavorite((isFavorite) => !isFavorite);
    console.log("Removed from Fav");
  }

  return (
    <div className="d-flex justify-content-around">
      <Card className="mb-4" style={{ width: '18rem', height: '25rem' }}>
        <Card.Img style={{ width: '18rem', height: '13rem' }} variant="top" src={recipe.image} />
        
        <Card.Body>
          <div className="d-flex justify-content-around">
            <Link to={`/recipe/${recipe._id}`}>
              <Card.Title>{recipe.name}</Card.Title>
            </Link>

            <ToggleButton
              type="checkbox"
              className="favorite-icon"
              variant="link"  // The link variant removes the background color but doesn't fully eliminate the border
              // checked={isFavorite}
              onClick={() => isFavorite? removeFavHandler(recipe._id): addToFavHandler(recipe)}
            > 
              <FaHeart color={isFavorite ? "#63E6BE" : "#E6E6E6"} size={24} />
            </ToggleButton>
          </div>

          <Card.Text className="mb-3">
            {recipe.description}
          </Card.Text>
          
        </Card.Body>

      </Card>
    </div>
  );
};

export default Recipe;
