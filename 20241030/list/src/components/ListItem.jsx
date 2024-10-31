import React from 'react'
import styled from 'styled-components'

const StyledLi = styled.li`
    padding : 12px;
    border : 1px solid #c4c4c4;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    & + li {
        margin-top: 12px;
    }

    & > p:first-child { 
        font-weight: bold;
}`

export default function ListItem({contry, population}) {
  return (
    <StyledLi>
        <p>{contry}</p>
        <p>{population}</p>
    </StyledLi>
  )
}
