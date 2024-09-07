import React from 'react'
import { useParams } from 'react-router-dom'
import recipes from '../recipes'
import {Row, Col, Image, ListGroup, Card, Button, Badge} from 'react-bootstrap';
import { FaUsers, FaClock, FaPaperPlane} from 'react-icons/fa';

const RecipeScreen = () => {

    const {id: recipeId} = useParams();
    const recipe = recipes.find((r)=>r._id === recipeId)
    console.log(recipe);

  return (
    <>
    <Row className="justify-content-center mb-4 main-content">
      <Col md={9}>
        <Card className="p-3 mb-3 card-recipe">
          <Row className="text-center">
            <h1>{recipe.name}</h1>
          </Row>

           {/* Category Badges */}
            <Row className="justify-content-center mb-3 badge-row">
              <Col xs="auto" className="text-center">
                <Badge className="badge-custom bg-light text-dark">
                  {recipe.category}
                </Badge>
              </Col>
              <Col xs="auto" className="text-center">
                <Badge className="badge-custom bg-light text-dark">
                  {recipe.diet}
                </Badge>
              </Col>
              <Col xs="auto" className="text-center">
                <Badge className="badge-custom bg-light text-dark">
                  {recipe.recipeType}
                </Badge>
              </Col>
            </Row>

            {/* Additional Details */}
            <Row className="justify-content-center">
              <Col xs="auto" className="text-center mb-2">
                <FaClock /> {recipe.cookingTime} min
              </Col>
              <Col xs="auto" className="text-center mb-2">
                <FaUsers /> {recipe.servingSize}
              </Col>
              <Col xs="auto" className="text-center mb-2">
                <FaPaperPlane />
              </Col>
            </Row>


          <Row>
            {/* Ingredients */}
            <Col md={6}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>Ingredients</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <ul>
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </ListGroup.Item>
            </ListGroup>
            </Col>

            {/* Recipe Image */}
            <Col md={6} className="d-flex align-items-center justify-content-center">
                <Image src={recipe.image} alt={recipe.name} fluid style={{ maxHeight: '300px' }} />
              </Col>
          </Row>
        </Card>
        <Card className="p-3 mb-3 card-recipe">
          <Row className="text-left">
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>Instructions</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <ol>
                  {recipe.instructions.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </ListGroup.Item>
            </ListGroup>
          </Row>
        </Card>
      </Col>

      {/* Full height image on the right */}
        <Col md={3} className="image-full-height p-0">
          <Image src={recipe.image} alt={recipe.name} fluid className="full-height-image" />
        </Col>
    </Row>

             
    </>
  )
}

export default RecipeScreen