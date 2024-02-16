import React from 'react';
import "./DetailCard.css";

const DetailCard = ({ product, index, AddToCart }) => {

    const { image, brand, name, category, description, price, availability, product_id } = product

    return (
        <div>
            <div className="product_container" key={index}>
                <div className="left">
                    <img src={`${image}`} alt="404" />
                </div>
                <div className="right">
                    <h2>{brand}</h2>
                    <h3>{name}</h3>
                    <p>Category: {category}</p>
                    <p>{description}</p>
                    <p>Rs {price}</p>
                    <p className={availability ? "green" : "red"}>{availability ? "In-Stock" : "Out of Stock"}</p>
                <button onClick={()=> AddToCart(product_id, image, brand, price)}><i className="fa-solid fa-cart-plus"></i> Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default DetailCard;
