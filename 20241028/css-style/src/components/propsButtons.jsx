import React from 'react'
import styled from "styled-components";

const StyledButton =  styled.button`
    padding: 10px 20px;
    border:none;
    border-radius: 5px;
    cursor: pointer;
    font-size : ${(props)=> props.size==='large' ? '20px' : '16px'};
    background-color : ${(props)=> {
        switch (props.color) {
            case 'danger':
                return 'red';
            case'basic': 
                return 'black';
            case 'success':
                return 'green';
            case 'fail':
                return 'grey';
            default:
                return'white'
        }}};
    width: ${((props)=> props.fullWidth ? "100%" : "auto")};
`;


export default function PropsButtons() {
  return (
    <div>
        <StyledButton fullWidth="true" color='danger' size='large'>버튼1</StyledButton>
        <StyledButton color='success'>버튼2</StyledButton>
    </div>
  )
}
