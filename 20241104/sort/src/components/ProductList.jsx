import React from 'react'
import styled from 'styled-components'

export default function ProductList({products}) {
  const StyledUl = styled.ul`
    list-style: none;
    padding : 0;
    & > li {
        display: flex;
        border : 1px solid #c4c4c4;
        justify-content: space-between;
        padding : 20px;

        & .name {
            font-weight: bold;
            font-size: 24px;
        }
    }

    & > li+li {
        margin-top : 20px; 
    }
  `
  const makeProduct = () => {
    return products.map((product) => {
        return (
            <li key={product.id}>
                <div>
                    <p className='name'>{product.name}</p>
                    <p>{product.category}</p>
                </div>
                <div>
                    <p>{product.price}</p>
                    <p>{product.rating}</p>
                </div>
            </li>
        )
    })
  } 
  return (
    <StyledUl>
        {makeProduct()}
    </StyledUl>
  )
}
