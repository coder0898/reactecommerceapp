import React from 'react'
import FilterBar from '../component/FilterBar/FilterBar';
import Card from '../component/Card/Card';

const ProductList = ({ productData, transformProduct, queryInput, setQueryInput, setSortInput, AddToCart}) => {

    return (
        <div>
            <main>
                <h1>Product Listing Page</h1>
                <FilterBar queryInput={queryInput} setQueryInput={setQueryInput} setSortInput={setSortInput} />
                <div className="card-container">
                    {
                        productData &&
                        transformProduct().map((products, i) => {
                            return (
                                <Card product={products} key={i} AddToCart={AddToCart} />
                            )
                        })
                    }
                </div>
            </main>
        </div>
    )
}

export default ProductList;
