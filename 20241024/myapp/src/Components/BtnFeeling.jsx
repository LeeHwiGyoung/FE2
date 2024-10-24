import React from 'react'
import '../CSS/BtnFeeling.css';

export default function BtnFeeling({feelingText}) {
  return (
    <button className='btn-feeling'>
        기분이:{feelingText}
    </button>
  )
}
