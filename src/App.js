import React, { useEffect, useState } from 'react';
import './App.css';
import ProductList from './pages/ProductList';
import SingleProduct from './pages/SingleProduct';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import NavBar from './component/Navbar/NavBar';
import ErrorPage from './pages/ErrorPage';

const base_url_api = 'https://fake-store-api.mock.beeceptor.com/api/products';



const App = () => {

    const [productData, setProductData] = useState([]);
    const [queryInput, setQueryInput] = useState('');
    const [sortInput, setSortInput] = useState('LowToHigh');
    const [cart, setCart] = useState([]);

    let cartCount = cart.length;

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


    // adding to cart function
    const AddToCart = (product_id, image, brand, price) => {
        const Obj = {
            product_id, image, brand, price
        };

        console.log(Obj);

        setCart([...cart, Obj]);
        //   console.log("Cart = ",cart);
    }


    return (
        <div className='App'>
                <NavBar cartCount={cartCount} />
                <Routes>
                    <Route path='/' element={<ProductList productData={productData} transformProduct={transformProduct} queryInput={queryInput} setQueryInput={setQueryInput} setSortInput={setSortInput} AddToCart={AddToCart}  cartCount={cartCount}/>} />
                    <Route path='/details/:id' element={<SingleProduct productData={productData} AddToCart={AddToCart}/>} />
                    <Route path='/cart' element={<Cart cartCount={cartCount} cart={cart} setCart={setCart}/>} />
                    <Route path='*' element={<ErrorPage/>}/>
                </Routes>
        </div>
    )
}

export default App;
