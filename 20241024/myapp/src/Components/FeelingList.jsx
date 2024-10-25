import React, { useState } from 'react';
import BtnFeeling from './BtnFeeling';
import '../CSS/FeelingList.css';
export default function FeelingList({setFeeling}) {
  const list = [
    { id: 1, feeling: "좋아요!😄" },
    { id: 2, feeling: "정말 좋아요!🤭" },
    { id: 3, feeling: "최고에요!😄" },
    { id: 4, feeling: "미쳤어요!😋" },
  ];
  const [activeId, setActiveId] = useState(null); // 현재 활성화된 버튼의 id를 저장

  function handleButtonClick(id, feeling) {
    if (activeId === id) {
      setActiveId(null); // 같은 버튼을 다시 누르면 비활성화
      setFeeling(""); 
    } else {
      setActiveId(id); // 새로운 버튼을 활성화
      setFeeling(feeling);
    }
  }

/*   function handelOnClick (e) {
    const changeTarget = e.target.closest('li');
    if(e.target.nodeName === 'BUTTON') {
        e.currentTarget.childNodes.forEach((item)=> {
            if(item !== changeTarget){
                item.classList.remove('active');
            }
        });
        changeTarget.classList.toggle('active');
        changeTarget.classList.contains('active') ? setFeeling(e.target.lastChild.textContent) : setFeeling("");
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
 */

  function feelingBtnReact() {
    return list.map((item) => (
      <li key={item.id} className={activeId === item.id ? 'active' : ''}>
        <BtnFeeling
          feelingText={item.feeling}
          onClick={() => handleButtonClick(item.id, item.feeling)} // BtnFeeling에 onClick 전달
        />
      </li>
    ));
  }
 
  return (
    <ul className='feeling-list'>

        {feelingBtnReact()}
    </ul>
  )
}
