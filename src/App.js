import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './component/Card';
import FilterBar from './component/FilterBar';

const base_url_api = 'https://fake-store-api.mock.beeceptor.com/api/products';

const App = () => {

    const [productData, setProductData] = useState([]);
    const [queryInput, setQueryInput] = useState('');
    const [sortInput, setSortInput] = useState('LowToHigh');

    useEffect(() => {
        getAPIData();
    }, [])

    const getAPIData = async () => {
        const response = await fetch(base_url_api);

        const data = await response.json();

        setProductData(data);
    }

    const transformProduct = () => {
        let sortedProduct = productData;

        if (sortInput !== '') {
            sortedProduct = sortedProduct.sort((a, b) =>
                sortInput === "LowToHigh" ? a.price - b.price : b.price - a.price
            );
        }

        // search filter
        if (queryInput !== "") {
            sortedProduct = sortedProduct.filter(items => {
                return items.brand.toLowerCase().includes(queryInput.toLowerCase());
            })
        }

        return sortedProduct;
    }


    return (
        <div className='App'>
            <main>
                <h1>Product Listing Page</h1>
                <FilterBar queryInput = {queryInput} setQueryInput={setQueryInput} setSortInput={setSortInput}/>
                <div className="card-container">
                    {
                        productData &&
                        transformProduct().map((products, i) => {
                            return (
                                <Card product={products} key={i} />
                            )
                        })
                    }
                </div>
            </main>
        </div>
    )
}

export default App;
