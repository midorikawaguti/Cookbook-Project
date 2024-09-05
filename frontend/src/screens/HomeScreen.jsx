import React from 'react'
import { Row, Col } from 'react-bootstrap'
import recipes from '../recipes.js'
import Recipe from '../components/Recipe.jsx'

function HomeScreen() {
  return (
    <>
        <h1>Recipes</h1>
        <Row>
            {recipes.map((recipe) => (
            <Col sm={12} md={6} lg={4} xl={3} key={recipe._id}>
                <Recipe recipe={recipe} />
            </Col>
        ))}
        </Row>
      
    </>
  )
}

export default HomeScreen
