import React from 'react';
import BtnFeeling from './BtnFeeling';
import '../CSS/FeelingList.css';
export default function FeelingList({setFeeling}) {
  const list = [
    { id: 1, feeling: "좋아요!😄" },
    { id: 2, feeling: "정말 좋아요!🤭" },
    { id: 3, feeling: "최고에요!😄" },
    { id: 4, feeling: "미쳤어요!😋" },
  ];
  
  function handelOnClick (e) {
    const changeTarget = e.target.closest('li');
    if(e.target.nodeName === 'BUTTON') {
        e.currentTarget.childNodes.forEach((item)=> {
            if(item !== changeTarget){
                item.classList.remove('active');
            }
        });
        changeTarget.classList.toggle('active');
        setFeeling(e.target.lastChild.textContent)
    }
  }

  function feelingBtn () {
    const listItem =  list.map((item)=> {
        return (
        <li key={item.id}>
            <BtnFeeling  feelingText={item.feeling}/>
        </li>
        )
    })
    return listItem;
  } 

  return (
    <ul className='feeling-list' onClick={handelOnClick}>
        {feelingBtn()}
    </ul>
  )
}
