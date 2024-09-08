import React from 'react'
import { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Recipe from '../components/Recipe.jsx'
import axios from 'axios'

function HomeScreen() {
  const[recipes, setRecipes] = useState([]);

  useEffect(()=>{
    const fetchRecipes = async() =>{
      try{
        const{data} = await axios.get('/api/recipes');
        setRecipes(data);
      }
      catch(error){
        console.error('Error fetching recipes:', error);
      }
    };

      fetchRecipes();
  },[]);



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
