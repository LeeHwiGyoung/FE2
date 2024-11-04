import React, { useContext } from 'react'
import { ProductInfo } from './Context'
import { CartContext } from '../context/CartContext';

export default function ProductList() {
  const {products} = useContext(ProductInfo);
  const {addToCart} = useContext(CartContext);

  
  return (
    <section>
        <h2>상품 목록</h2>
        <ul>
            {products.map((product) => {
                return (
                    <li key = {product.id}>
                        <span>{product.name} - \{product.price}</span>
                        <button onClick={()=> addToCart(product)}>카트에 추가</button>
                    </li>
                )
            })}
        </ul>
    </section>
  )
}
