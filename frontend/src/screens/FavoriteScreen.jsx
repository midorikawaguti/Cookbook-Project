import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { addToFav, removeFromFav } from '../slices/favoriteSlice';
import {Row, Col} from 'react-bootstrap';
import Message from '../components/Message';
import Recipe from '../components/Recipe';

function FavoriteScreen() {

    // const dispatch = useDispatch();

    const favorite = useSelector( (state) => state.favorite);
    const {favoriteItems} = favorite;
    
    // const addToFavHandler = async (recipe, qty) =>{
    //     dispatch(addToFav({...recipe, qty}));
    // } 

    // const removeFromFavHandler = async(id) =>{
    //     dispatch(removeFromFav(id));
    // }
  return (

    <Row> 
          <h1>Favorites</h1>
          {favoriteItems.length ===0 ?(
            <Message>
                Favorite Selection is empty <Link to="/">Go Back</Link>
            </Message>
          ):(
            <Row>
            {favoriteItems.map((recipe)=>(
                <Col key={recipe._id} sm={12} md={6} lg={4} xl={3}>
                    <Recipe recipe={recipe}></Recipe>
                </Col>
            ))}
            </Row>
          )}
            
    </Row>
) }

export default FavoriteScreen
