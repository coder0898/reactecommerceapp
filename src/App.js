import React, { useEffect, useState } from 'react';
import './App.css';
import ProductList from './pages/ProductList';
import SingleProduct from './pages/SingleProduct';
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';

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

    const router =  createBrowserRouter([
        {
            path:'/',
            element:<ProductList productData={productData} transformProduct={transformProduct} queryInput={queryInput} setQueryInput={setQueryInput} setSortInput={setSortInput}/>
        },
        {
            path:'/details',
            element:<SingleProduct/>,
        }
    ]);

    return (
        <div className='App'>
            <RouterProvider router={router}/>
        </div>
    )
}

export default App;
