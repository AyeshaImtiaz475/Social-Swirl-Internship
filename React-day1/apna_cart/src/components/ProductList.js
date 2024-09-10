import React from "react";
import Product from './Product';

export default function ProductList(props) {

  return (
    // if the product not found
    props.productList.length > 0 ?
    props.productList.map((product, i) => {
        return <Product product={product} key={i} 
        incrementQuantity={props.incrementQuantity} index={i}
        decrementQuantity={props.decrementQuantity} removeItem = {props.removeItem}/>
    })
    : <h1>Oops!No Products exists in the Carts</h1>
  )
}
