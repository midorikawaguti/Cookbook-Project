import React, { useState } from 'react'
import { Card, ToggleButton } from 'react-bootstrap'
import { FaHeart } from 'react-icons/fa'

const Recipe = ({ recipe }) => {
  // State to track whether the recipe is marked as favorite
  const [isFavorite, setIsFavorite] = useState(false);

  // Function to toggle favorite state
  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="d-flex justify-content-around">
      <Card className="mb-4" style={{ width: '18rem', height: '25rem' }}>
        <Card.Img style={{ width: '18rem', height: '13rem' }} variant="top" src={recipe.image} />
        <Card.Body>
          <div className="d-flex justify-content-around">
            <a href={`/recipe/${recipe._id}`}>
              <Card.Title>{recipe.name}</Card.Title>
            </a>
            <ToggleButton
              type="checkbox"
              className="favorite-icon"
              variant="link"  // The link variant removes the background color but doesn't fully eliminate the border
              checked={isFavorite}
              onClick={handleFavoriteToggle}
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
