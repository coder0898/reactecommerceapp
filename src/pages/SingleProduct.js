import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const SingleProduct = ({ productData }) => {

    const { id } = useParams();

    const [productDetails, setProductDetails] = useState([]);

    useEffect(()=>{
        const filterDetails = productData.filter((item)=> item.product_id == id);
        // console.log(filterDetails);

        setProductDetails(filterDetails);
    },[id])

    return (
        <div>
            <div className="back-box">
                <Link to="/" style={{textDecoration:"none", color:"inherit"}}>Back to Home</Link>
            </div>
            {
                productDetails &&
                productDetails.map((product)=>{

                   const { image, brand, name, category, description, price, availability, product_id } = product

                    return(
                        <div className="product_container" key={product_id}>
                        <div className="left">
                            <img src={`${image}`} alt="404" />
                        </div>
                        <div className="right">
                            <h2>{brand}</h2>
                            <h3>{name}</h3>
                            <p>Category: {category}</p>
                            <p>{description}</p>
                            <p>Rs {price}</p>
                            <p className={availability? "green":"red"}>{availability? "In-Stock":"Out of Stock"}</p>
                        </div>
                    </div>
                    )
                })
            }
        </div>
    )
}

export default SingleProduct;
