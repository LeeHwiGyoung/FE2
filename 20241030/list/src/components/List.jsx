import React, { useState } from 'react'
import ListItem from './ListItem';
import styled from 'styled-components';

const StyledUl = styled.ul`
    width : 100%;
    padding : 12px;
    list-style: none;
    box-sizing: border-box;
`

export default function List({listItemData , type}) {

  function makeItem () {
    if(type === 'europe') {
      const filterData =  listItemData.filter((item)=> item.loc === 'europe');
      return filterData.map((item)=> {
        return (
          <ListItem key={item.id} contry={item.title} population={item.population}/>
        )
      })
    }

    return listItemData.map((item) =>{ 
      return (
          <ListItem key={item.id} contry={item.title} population={item.population}/>
      )
    })
  }
  
  return (
    <StyledUl>
       {makeItem()}
    </StyledUl>
  )
}
