import React from 'react'
import useLanguage from '../Hooks/useLanguage.js';

export default function Header() {
  const {changeLanguage , getContent} = useLanguage()
  
  return (
    <header>
        <p>{getContent().languageSelector}</p>    
        <button onClick={()=> changeLanguage('en')}>English</button>
        <button onClick={()=> changeLanguage('ko')}>한국어</button>
        <button onClick={()=> changeLanguage('ja')}>日本語</button>
    </header>
  )
}
