import React from 'react'
import styled from 'styled-components'

const StyledRoundBtn = styled.button`
    border : 1px solid black;
    border-radius: 10px;
    padding : 8px;
    cursor: pointer;
`
export const RoundButton = (props) => {  
    return (
    <StyledRoundBtn onClick={props.onClick}>{props.children}</StyledRoundBtn>
  )
}
