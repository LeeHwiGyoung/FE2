import React, { useState } from 'react'

export default function PetForm({setPetInfo}) {
  const [name, setName] = useState('');
  const [species,setSpecies] = useState('');
  const [age, setAge] = useState('');
 
  const labelStyle = {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: "0",
    margin: "-1px",
    overflow: "hidden",
    clipPath: "inset(50%)",
    border: "0",
    clip: "rect(0 0 0 0)"
  }

  const addPetInfo = (e) => {
    e.preventDefault();
    if(name === ""){
        alert("이름을 입력해주세요")
        return
    }
    
    if(species === "") {
        alert('종을 입력해주세요')
        return
    }

    if(age === ""){ 
        alert("나이를 입력해주세요.")
        return
    }

    setPetInfo((prev)=>{
        const id = Date.now()
        return [...prev , { name , species, age , id}]
    })

    setName("");
    setAge("");
    setSpecies("");
  }
  
  const handleNameInput = (e) => {
    setName(e.target.value);
  }

  const handleSpeciesInput = (e) => {
    setSpecies(e.target.value);
  }
    
  const handleAgeInput = (e) => {
    setAge(e.target.value);
  }

  return (
    <form onSubmit={addPetInfo}>
        <fieldset>
            <legend>새로운 애완동물을 추가해보세요!</legend>
            <label style={labelStyle} htmlFor='name'>이름</label>
            <input onChange={handleNameInput} type="text" name="name" id="name" placeholder='이름' value={name}/>
            <label style={labelStyle} htmlFor='species'>종</label>
            <input onChange={handleSpeciesInput} type="text" name="species" id="species" placeholder='species' value={species}/>
            <label style={labelStyle} htmlFor='age'>나이</label>
            <input onChange={handleAgeInput} type="text" name="age" id="age" placeholder='나이'value={age}/>
            <button type='submit'>추가하기</button>   
        </fieldset>
    </form>
  )
}
