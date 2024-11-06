import React from 'react'
// import { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Recipe from '../components/Recipe.jsx'
// import axios from 'axios'
import { useGetRecipesQuery } from '../slices/recipeApiSlice.js'
import Message from '../components/Message.jsx'
import Loader from '../components/Loader.jsx'

function HomeScreen() {
  const { data: recipes, isLoading, error } = useGetRecipesQuery();

  return (
    <>
      {isLoading ? (
        <Loader>Loading..</Loader>
      ): error?(
        <Message variant='danger'>
          error?.data.message || error.error 
        </Message>) : (<> 
          <h1>Recipes</h1>
        <Row>
            {recipes.map((recipe)=>(
                <Col key={recipe._id} sm={12} md={6} lg={4} xl={3}>
                    <Recipe recipe={recipe}></Recipe>
                </Col>
            ))}
        </Row>
      </>) }
    </>
  )
};

export default HomeScreen;
  // const[recipes, setRecipes] = useState([]);

  // useEffect(()=>{
  //   const fetchRecipes = async() =>{
  //     try{
  //       const{data} = await axios.get('/api/recipes');
  //       setRecipes(data);
  //     }
  //     catch(error){
  //       console.error('Error fetching recipes:', error);
  //     }
  //   };

  //     fetchRecipes();
  // },[]);



  // return (
  //   <>
  //       <h1>Recipes</h1>
  //       <Row>
  //           {recipes.map((recipe) => (
  //           <Col sm={12} md={6} lg={4} xl={3} key={recipe._id}>
  //               <Recipe recipe={recipe} />
  //           </Col>
  //       ))}
  //       </Row>
      
  //   </>
  // )
// }

// export default HomeScreen
