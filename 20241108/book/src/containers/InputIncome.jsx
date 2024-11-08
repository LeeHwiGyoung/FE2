import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setIncomeAction } from '../store/income/incomeSlice';

export default function InputIncome() {
  const dispatch = useDispatch();
  const income = useSelector((store)=> store.INCOME.income)
  
  const handleOnChange = (e) => {
    dispatch(setIncomeAction(e.target.value));
  }
  return (
    <label>
        나의 수익:
        <input  type='text' onChange={handleOnChange} value={income}/>
    </label>
  )
}
