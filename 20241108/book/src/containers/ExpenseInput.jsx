import React from 'react'
import {useDispatch } from 'react-redux'
import { addExpenseAction } from '../store/expense/expenseSlice';
import { useState } from 'react';

export default function ExpenseInput() {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const dispatch = useDispatch()

  const submit = (e) => {
    e.preventDefault();
    if(productName !== "" && productPrice !== ""){
        dispatch(addExpenseAction({name : productName , price : parseInt(productPrice)}))
    }else {
        alert('물건의 이름 또는 가격을 입력해주세요')
    }
  }
 
  const handleChangeProductName = (e) => {
    setProductName(e.target.value)
  }

  const handleChangeProductPrice = (e) => {
    setProductPrice(e.target.value)
  }
  return (
    <form onSubmit={submit}>
        <label>
            물건 이름 :
            <input type="text" placeholder='예시: coffee' value = {productName} onChange={handleChangeProductName}/>
        </label>
        <label>
            물건 가격 :
            <input type="text" placeholder='예시: 1000' value={productPrice} onChange={handleChangeProductPrice}/>
        </label>
    <button type="submit"> 등록 </button>
    </form>
  )
}
