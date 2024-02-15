import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cartCount, cart, setCart }) => {
    return (
        <div className='list-container'>
            {
                cartCount === 0 ? (<>
                    <div className='empty-cart'>
                        <div className="back-box">
                            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}><i className="fa-solid fa-arrow-left"></i> Back to Home</Link>
                        </div>
                        <h1>Welcome to cart!!!</h1>
                        <p>You don't have any Item in cart</p>
                    </div>
                </>) : (
                    <>
                        <div className='cart-content'>
                            <div className="back-box">
                                <Link to="/" style={{ textDecoration: "none", color: "inherit" }}><i className="fa-solid fa-arrow-left"></i> Back to Home</Link>
                            </div>

                            {
                                cart.map((product, i) => {
                                    const { brand, image, price } = product
                                    return (
                                        <div className="cart-container" key={i}>
                                            <div className="cart-list">
                                                <img src={image} alt="404" />
                                                <h2>{brand}</h2>
                                                <p>Rs {price}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className="btn-group">
                                <button onClick={() => setCart([])}><i className="fa-solid fa-trash"></i> Clear Cart</button>
                            </div>

                        </div>
                    </>
                )
            }

        </div>

    )
}

export default Cart;
