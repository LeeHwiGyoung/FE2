import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export default function Header() {
  const {getTotal} = useContext(CartContext)
  return (
    <header>
        <h1>쇼핑몰</h1>
        <p>
            카트에 있는 상품 개수 : {getTotal()}
        </p>
    </header>
  )
}
