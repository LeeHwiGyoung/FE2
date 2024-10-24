import React from 'react'

export default function Resume({hello, name , hobby, food, color}) {
  const articleStyle = {border : "1px solid black" , width : "500px"}
  const colorStyle = {color: color}
  return (
    <article style = {articleStyle}>
        <h2>{name} 자기소개서</h2>
        <p>{hello}</p>
        <p>취미 : {hobby}</p>
        <p>좋아하는 음식 : {food}</p>
        <p style={colorStyle}>좋아하는 색 : {color}</p>
    </article>
  )
}
