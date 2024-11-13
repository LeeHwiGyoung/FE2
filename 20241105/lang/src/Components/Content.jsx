import React, { useContext } from 'react'
import useLanguage from '../Hooks/useLanguage.js';

export default function Content() {
  const {getContent} = useLanguage();
  
  const makeContent = () => {
    const content = getContent();
    return (
        <>
            <h2>{content.title}</h2>
            <p>{content.greeting}</p>
            <p>{content.description}</p>
        </>
    )
  }
  return (
    <div>{makeContent()}</div>
  )
}
