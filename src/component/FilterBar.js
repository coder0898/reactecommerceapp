import React from 'react'

const FilterBar = ({queryInput, setQueryInput, setSortInput}) => {
    return (
        <div>
            <div className="filter-bar">
                <input type="search" onChange={(e) => setQueryInput(e.target.value)} value={queryInput} placeholder='search a product' />
                <br />
                <div className="sort-bar">
                    <label htmlFor="sort By">Sort By:</label>
                    <select name='sort By' onChange={(e) => setSortInput(e.target.value)}>
                        <option value="LowToHigh">Price(Low to High)</option>
                        <option value="HighToLow">Price(High to Low)</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default FilterBar
