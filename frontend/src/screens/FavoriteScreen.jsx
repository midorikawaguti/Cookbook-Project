import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { removeFromFav } from '../slices/favoriteSlice';
import {Row, Col, ListGroup, Image, Button} from 'react-bootstrap';
import Message from '../components/Message';
import { FaTrash } from 'react-icons/fa';

function FavoriteScreen() {

    const dispatch = useDispatch();

    const favorite = useSelector( (state) => state.favorite);
    const {favoriteItems} = favorite;
    

    const removeFavHandler = async(id) =>{
        dispatch(removeFromFav(id));
    }
  return (

    <Row> 
          <h1>Favorites</h1>
          {favoriteItems.length ===0 ?(
            <Message>
                Favorite Selection is empty <Link to="/">Go Back</Link>
            </Message>
          ):(
            <Col md={8}>
                <ListGroup variant='flush'>
                    {favoriteItems.map((item) =>(
                        <ListGroup.Item key={item._id}>
                            <Row>
                                <Col md={2}>
                                    <Image style={{ width: '9rem', height: '7rem' }} src={item.image} alt={item.name} fluid rounded/>
                                </Col>
                                <Col md={2}>
                                    <Link to ={`/recipe/${item._id}`}>{item.name}</Link>
                                </Col>
                                <Col md={4}>
                                    {item.description}
                                </Col>
                                <Col md={2}>
                                    {item.rating}
                                </Col>
                                <Col md={2}>
                                    <Button
                                    className="favorite-icon"
                                    variant="link"  // The link variant removes the background color but doesn't fully eliminate the border
                                    // checked={isFavorite}
                                    onClick={() => removeFavHandler(item._id)}
                                    > 
                                    <FaTrash size={24} />
                                    </Button>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    ))}

                </ListGroup>
            </Col>
        )}
            
    </Row>
) }

export default FavoriteScreen
