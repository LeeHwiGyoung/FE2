import React from 'react'
import ListItem from './ListItem';
import styled from 'styled-components';

const StyledUl = styled.ul`
    width : 100%;
    padding : 12px;
    list-style: none;
    box-sizing: border-box;
`

export default function List({ListItemData}) {
  return (
    <StyledUl>
        {ListItemData.map((item) =>{ 
            return (
                <ListItem key={item.id} contry={item.title} population={item.population}/>
            )
        })}
    </StyledUl>
  )
}
