import React from 'react'
export const ProductImage = ({src, alt}) => {
    return <img src={src} alt={alt}/>
}

export const ProductTitle = ({children}) => {
    return (
        <h2>
            {children}
        </h2>
    )
}

export const ProductSubTitle = ({children}) => {
    return (
        <h3>
            {children}
        </h3>
    )
}

export const ProductDescription = ({children}) => {
    return (
        <div>
            {children}
        </div>
    )
}

export const ProductPrice = ({children}) => {
    return (
        <div>
            {children}
        </div>
    )
}

export const Contcard = (props) => {
  const {children} = props;
  return (
    <div>
        {children}
    </div>
  )
}
