import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './component/Card';

const base_url_api = 'https://fake-store-api.mock.beeceptor.com/api/products';

const App = () => {

    const [productData, setProductData] = useState([]);
    const [queryInput, setQueryInput] = useState('');

    useEffect(() => {
        getAPIData();
    }, [])

    const getAPIData = async () => {
        const response = await fetch(base_url_api);

        const data = await response.json();

        setProductData(data);
    }


    // search filter code
    const filterProductData = productData.filter(items=>{
        return items.brand.toLowerCase().includes(queryInput.toLowerCase());
    })

    return (
        <div className='App'>
            <main>
                <h1>Product Listing Page</h1>
                <div className="filter-bar">
                    <input type="search" value={queryInput} onChange={(e)=> setQueryInput(e.target.value)} placeholder='search a product'/>
                </div>
                <div className="card-container">
                    {
                        productData &&
                        filterProductData.map((products, i) => {
                            return (
                               <Card product={products} key={i}/>
                            )
                        })
                    }
                </div>
            </main>
        </div>
    )
}

export default App;
