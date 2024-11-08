import React from 'react'
import { useSelector } from 'react-redux'

export default function ExpenseTotal() {
   const totalExpense = useSelector((store)=> store.EXPENSE.expenseList.reduce((acc, cur) =>  acc + cur.price, 0));
   const remainIncome = useSelector((store)=> store.INCOME.income) - totalExpense;
   return (
    <>
        <p> 총 지출 : {totalExpense} </p>
        <p>계좌 잔고 : {remainIncome}</p>
    </>
  )
}
