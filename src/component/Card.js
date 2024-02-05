import React from 'react';

const Card = ({ product, index }) => {

    const { image, brand, price, availability } = product;

    return (
        <div key={index}>
            <div className="card">
                <img src={image} alt="image" />
                <h2>{brand}</h2>
                <p>{price}</p>
                <p>{availability ? "in-Stock" : "out-of-Stock"}</p>
                <button>Add to cart</button>
            </div>
        </div>
    )
}

export default Card;
