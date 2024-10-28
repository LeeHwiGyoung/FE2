import styled from "styled-components";

export const StyleButton = styled.button`
    padding : 16px;
    border : 4px gray solid;
    color : white;
    background-color: blue;
    font-size: 24px;
    box-shadow:  0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`

export const StyleButton2 = styled(StyleButton)`
    color : blue;
    border-radius : 10px;
    border : none;
`