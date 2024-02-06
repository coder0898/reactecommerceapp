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
        // console.log(data);

        setProductData(data);
    }


    return (
        <div className='App'>
            <main>
                <h1>Product Listing Page</h1>
                <div className="filter-bar">
                    <input type="search" id="searchFilter" placeholder='search a product'/>
                </div>
                <div className="card-container">
                    {
                        productData &&
                        productData.map((product, i) => {
                            return (
                               <Card product={product} key={i}/>
                            )
                        })
                    }
                </div>
            </main>
        </div>
    )
}

export default App;
