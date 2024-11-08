import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { sale, soldout} from '../modules/stockReducer'

export default function StockState() {
  const stock = useSelector((state)=> state.goodsReducer.stock);
  const message = useSelector((state)=> state.stockReducer.message )
  const dispatch = useDispatch()
  const isSale = () => {
    if(stock === 0) {
        dispatch(soldout())
        return
    }
    dispatch(sale());
  }

  useEffect(()=> {
    isSale()
  }, [stock])
  
  return (
    <strong>{message}</strong>
  )
}
