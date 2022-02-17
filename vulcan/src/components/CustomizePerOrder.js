import React from 'react'

function CustomizePerOrder() {
  return (
    <div className='CustomizePerOrder-wrapper'>
        <div className='title'>
        <h2>PRODUCT ADVISOR</h2>
        <p>Find your project's perfect fit.</p>
        </div>
        <div className='products-services-select'>
        <label for="products">PRODUCT TYPE</label>        
        <select name="product-type" className='product-services-select'>
          <option value="product">Select</option>
          <option value="product1">Another machine</option>
          <option value="product2">Another machine</option>
          <option value="product3">Another machine</option>
        </select>

        <label for="products">SCREEN LOCATION</label>
        <select name="product-type" className='product-services-select' disabled>
          <option value="product">Select</option>          
        </select>

        <label for="products">FLOW TYPE</label>
        <select name="product-type" className='product-services-select' disabled>
          <option value="product">Select</option>         
        </select>

        <label for="products">CHANNEL DEPTH</label>
        <select name="product-type" className='product-services-select' disabled>
          <option value="product">Select</option>         
        </select>

        <label for="products">CHANNEL WIDTH</label>
        <select name="product-type" className='product-services-select' disabled>
          <option value="product">Select</option>         
        </select>
        </div>
    <button className='find-my-product'>FIND MY PRODUCT</button>
    </div>
  )
}

export default CustomizePerOrder