import React from 'react'

export default function CloseButton({text, onClick }) {
    return (
       <button onClick={onClick}>{text}</button>
    );
}
