import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

export default function CartTotal() {
  const {cartData} = useContext(CartContext)
  return (
    <strong> 총 금액: {cartData.cart.totalPrice}</strong>
  )
}
