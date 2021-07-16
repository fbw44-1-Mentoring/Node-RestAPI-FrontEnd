import React, { useState } from 'react'

export default function Products() {

    const [products,setProducts]= useState([])

    const fetchAllProducts=()=>{
            fetch("http://localhost:4000/products") //get request
            .then(res=>res.json())
            .then(result=>setProducts(result.products))
    }

    return (
        <div style={{width:"33%"}}>
            <h2>Products</h2>
            <button onClick={fetchAllProducts}>get all Products</button>
            <details>
            <summary>
                All Products
            </summary>
            {products.map(product=>{
                return(
                    <div key={product._id}>
                        <p>Id: {product._id}</p>
                        <p>Item Name: {product.itemname}</p>
                        <p>Price: $ {product.price}</p>
                        <p>Quantity: {product.quantity}</p>

                    </div>
                )
            })}
            </details>
        </div>
    )
}
