import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import DetailCard from '../component/DetailCard/DetailCard';

const SingleProduct = ({ productData, AddToCart }) => {

    const { id } = useParams();

    const [productDetails, setProductDetails] = useState([]);

    useEffect(() => {
        const filterDetails = productData.filter((item) => item.product_id == id);
        // console.log(filterDetails);

        setProductDetails(filterDetails);
    }, [id])

    return (
        <div>
            <div className="back-box">
                <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>Back to Home</Link>
            </div>
            {
                productDetails &&
                productDetails.map((product, index) => {
                    return (
                        <DetailCard product={product} key={index} AddToCart={AddToCart} />
                    )
                })
            }
        </div>
    )
}

export default SingleProduct;
