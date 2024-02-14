import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ product, AddToCart }) => {

    const { product_id, image, brand, price, availability } = product;

    return (
        <div>
            <div className="card" >
                <img src={image} alt="image" />
                <h2>{brand}</h2>
                <p>{price}</p>
                <p>{availability ? "in-Stock" : "out-of-Stock"}</p>
                <div className="button-group">
                <Link to={`/details/${product_id}`} style={{textDecoration:"none", color:"inherit"}}><button>View Details </button></Link> 
                <button onClick={()=> AddToCart(product_id, image, brand, price)} id='cart'>Add to Cart</button> 
                </div>
            </div>
        </div>
    )
}

export default Card;
