import React, { useState } from 'react'
import { Card, ToggleButton } from 'react-bootstrap'
import { FaStar } from 'react-icons/fa'

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
              className="mb-2"
              variant={isFavorite ? "success" : "outline-success"}
              checked={isFavorite}
              onClick={handleFavoriteToggle}
            >
              <FaStar />
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
