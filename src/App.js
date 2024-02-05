import React, { useEffect, useState } from 'react';
import './App.css';

const base_url_api = 'https://fake-store-api.mock.beeceptor.com/api/products';

const App = () => {

    const [productData, setProductData] = useState('');

    useEffect(() => {
        getAPIData();
        // console.log(productData);
    }, [])

    const getAPIData = async () => {
        const response = await fetch(base_url_api);

        const data = await response.json();
        console.log(data);

        setProductData(data);
    }


    return (
        <div className='App'>
            <section>
                <h1>Product Listing Page</h1>
                <div className="card-container">
                    {
                        productData &&
                        productData.map((product, index) => {

                            const { image, brand, price, availability } = product;

                            return (
                                <div className="card" key={index}>
                                    <img src={image} alt="image" />
                                    <h2>{brand}</h2>
                                    <p>{price}</p>
                                    <p>{availability ? "in-Stock" : "out-of-Stock"}</p>
                                    <button>Add to cart</button>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default App;
