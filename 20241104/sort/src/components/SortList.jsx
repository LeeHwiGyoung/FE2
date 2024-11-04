import React from 'react'

export default function SortList({setSorted}) {

  const handleOnChange = ()=> {
    setSorted((prev)=> {
        
    })

  } 

  return (
    <select name='category'>
        <option value=''>카테고리 없음</option>
        <option value= "전자기기">전자기기</option>
        <option value= "의류">의류</option>
        <option value= "식품">식품</option>
        <option value= "도서">도서</option>
    </select>
  )
}
