import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ product }) => {

    const { product_id, image, brand, price, availability } = product;

    return (
        <div>
            <div className="card" >
                <img src={image} alt="image" />
                <h2>{brand}</h2>
                <p>{price}</p>
                <p>{availability ? "in-Stock" : "out-of-Stock"}</p>
                <button><Link to={`/details/${product_id}`} style={{textDecoration:"none", color:"inherit"}}>View Details</Link> </button>
            </div>
        </div>
    )
}

export default Card;
