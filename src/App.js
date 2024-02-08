import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './component/Card';

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

    const transformProduct = ()=>{
        let sortedProduct = productData;

        if (sortInput === '') {
            return sortedProduct;
          }else{
            sortedProduct = sortedProduct.sort((a, b) =>
               sortInput === "LowToHigh" ? a.price - b.price : b.price - a.price
            );
          }

        if (queryInput !=="") {
            sortedProduct = sortedProduct.filter(items=>{
                    return items.brand.toLowerCase().includes(queryInput.toLowerCase());
                })
        }

        return sortedProduct;
    }

    // search filter code
    // const filterProductData = productData.filter(items=>{
    //     return items.brand.toLowerCase().includes(queryInput.toLowerCase());
    // })

     return (
        <div className='App'>
            <main>
                <h1>Product Listing Page</h1>
                <div className="filter-bar">
                    <input type="search" onChange={(e)=> setQueryInput(e.target.value)} value={queryInput} placeholder='search a product'/>
                    <br />
                    <div className="sort-bar">
                        <label htmlFor="sort By">Sort By:</label>
                    <select name='sort By'  onChange={(e)=> setSortInput(e.target.value)}>
                        <option value="LowToHigh">Price(Low to High)</option>
                        <option value="HighToLow">Price(High to Low)</option>
                    </select>
                    </div>
                </div>
                <div className="card-container">
                    {
                        productData &&
                        transformProduct().map((products, i) => {
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
