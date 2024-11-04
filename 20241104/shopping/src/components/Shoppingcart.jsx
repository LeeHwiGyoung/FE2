import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export default function Shoppingcart() {
  const { removeFromCart , cart } = useContext(CartContext);

  return (
    <section>
        <h2>장바구니</h2>
        <p> 장바구니가 비었습니다.</p> 
        <ul>
            {cart.map((item)=> {
                return (
                    <li key={item.id}>{item.name}- 수량 : {item.count}
                        <button type='button' onClick={() => removeFromCart(item.id)}>삭제하기</button>
                    </li>
                )})
            }        
        </ul>     
    </section>
  )
}
