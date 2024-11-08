import React from 'react'
import { useSelector } from 'react-redux'

export default function ExpenseList() {
  const expenseList = useSelector((store)=> store.EXPENSE.expenseList) 
    return (
    <ul>
      {
        expenseList.map((data,idx)=> {
          return <li key ={idx}>이름 : {data.name} / 가격 : {data.price}</li>
        })
      }

    </ul>
  )
}
