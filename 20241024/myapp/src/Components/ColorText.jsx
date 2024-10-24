import React from 'react'

export default function ColorText({color}) {
  const colorTextStyle = { color : color , fontWeight : "bold" , fontSize : "24px" };
  return (
    <p style={colorTextStyle}>색이 바뀌어요!</p>
  )
}
