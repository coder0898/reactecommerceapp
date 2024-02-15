import React from 'react';
import "./Navbar.css";

import { Link } from 'react-router-dom';

const NavBar = ({cartCount}) => {
    return (
        <div>
            <nav>
                <div className="title-logo">
                    <h1>React E-Cart</h1>
                </div>
                <div className="carts-container">
                    <Link to='/cart'>
                        <button className='cart-btn'>
                            <span><i className="fa-solid fa-cart-shopping"></i> :</span> {cartCount}
                        </button>
                    </Link>
                </div>
            </nav>

        </div>
    )
}

export default NavBar;
