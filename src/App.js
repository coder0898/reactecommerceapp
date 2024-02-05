import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './component/Card';

const base_url_api = 'https://fake-store-api.mock.beeceptor.com/api/products';

const App = () => {

    const [productData, setProductData] = useState('');

    useEffect(() => {
        getAPIData();
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
                        productData.map((product,index) => {
                            return (
                               <Card product={product} index={index}/>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default App;
