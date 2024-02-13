import React from 'react'
import FilterBar from '../component/FilterBar';
import Card from '../component/Card';

const ProductList = ({ productData, transformProduct, queryInput, setQueryInput, setSortInput }) => {
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
                                <Card product={products} key={i} />
                            )
                        })
                    }
                </div>
            </main>
        </div>
    )
}

export default ProductList;