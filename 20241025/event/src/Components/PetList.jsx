import React from 'react'

export default function PetList({petData}) {
 return (
    <ul>
      {petData?.map((pet)=> {
        return (
            <li key={pet.id}>
                {pet.name}는 {pet.species}입니다. 그리고 {pet.age}살 입니다.
            </li>
        ) 
      })}
    </ul>
  )
}
