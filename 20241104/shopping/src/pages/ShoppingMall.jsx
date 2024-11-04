import React, { useState } from 'react'
import ProductList from '../components/ProductList'
import Header from '../components/Header';
import Shoppingcart from '../components/Shoppingcart';
import { CartProvider } from '../context/CartContext';

export default function ShoppingMall() {

  return (
    <>
    <CartProvider>
        <article>
            <Header/>
            <ProductList />
            <Shoppingcart/>
        </article>
    </CartProvider>
    </>
  )
}
