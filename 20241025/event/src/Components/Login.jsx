import React, { useState } from 'react'

export default function Login({userData , setLogined}) {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
  
    const handleLoginSubmit = (e) => {
      e.preventDefault();
      console.log("submit");
      if (id === "") {
        alert("아이디를 입력하지 않았습니다.");
      }
      if (pw === "") {
        alert("패스워드를 입력하지 않았습니다.");
      }
      correctUserData();
    };

    const correctUserData = () => {
        console.log(id , pw)
        if(userData.idUser === id && userData.pwUser.toString() === pw){
            setLogined(true);
            return
        } 
        setLogined(false);
        alert('아이디 또는 패스워드가 일치하지 않습니다.')
    }

    const handleLoginInput = (e) => {
      setId(e.target.value);
    };
  
    const handlePasswordInput = (e) => {
      setPw(e.target.value);
    };
  
    return (
      <form onSubmit={handleLoginSubmit}>
        <label>
          아이디 : <input type="text" onChange={handleLoginInput} value={id} />
        </label>
        <br />
        <label>
          비밀번호 :
          <input type="password" onChange={handlePasswordInput} value={pw} />
        </label>
        <button type="submit">로그인</button>
      </form>
    );
}
