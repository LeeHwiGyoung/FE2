import React from 'react'

export default function ImageListItem({src, alt}) {

  return (
    <img style={{width: '100%', objectFit : "cover"}}src={src} alt = {alt}/>
  )
}
