import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext';

export default function UpdateButton() {
  const {updateCartTotal} = useContext(CartContext);
  return (
    <button onClick={()=> updateCartTotal(10)}>UpdateButton</button>
  )
}
