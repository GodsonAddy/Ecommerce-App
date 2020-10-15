import React from 'react';

const Filter = ({sort, size, handleChangeSize, handleChangeSort, count, product}) => {
    
        return (
            <div className="row">
                <div className="col-md-4">
                  {count} products found
                </div>
                <div className="col-md-4">
                    <label>
                      Order by
                        <select className="form-control" value={sort}
                            onChange={(e) => handleChangeSort(e, product)}>
                            <option value="">Select</option>
                            <option value="lowest">lowest to highest</option>
                            <option value="highest">highest to lowest</option>
                        </select>
                    </label>
                </div>
                <div className="col-md-4">
                    <label>
                        Filter size
                        <select className="form-control" value={size}
                            onChange={(e) => handleChangeSize(e, product)}>
                            <option value="">ALL</option>
                            <option value="xs">XS</option>
                            <option value="s">S</option>
                            <option value="m">M</option>
                            <option value="l">L</option>
                            <option value="xl">XL</option>
                            <option value="xxl">XXL</option>
                        </select>
                    </label>
                </div>  
            </div>
        )
    }




export default Filter;