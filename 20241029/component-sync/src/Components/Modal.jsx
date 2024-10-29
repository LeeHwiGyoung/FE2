import React from 'react'
import CloseButton from './CloseButton';


export default function Modal({title, content, onClose}) {    
    return (
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <CloseButton text="Close" onClick={onClose} />
      </div>
    );
}
