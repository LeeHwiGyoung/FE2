import React, { useState } from 'react'
import { QuizConfig } from '../interfaces'
import styled from 'styled-components';

interface QuizSetupProps {
    onStart: (config : QuizConfig) => void;
}

const categories = [
      {
        "id": 9,
        "name": "General Knowledge"
      },
      {
        "id": 10,
        "name": "Entertainment: Books"
      },
      {
        "id": 11,
        "name": "Entertainment: Film"
      },
      {
        "id": 12,
        "name": "Entertainment: Music"
      },
      {
        "id": 13,
        "name": "Entertainment: Musicals & Theatres"
      },
      {
        "id": 14,
        "name": "Entertainment: Television"
      },
      {
        "id": 15,
        "name": "Entertainment: Video Games"
      },
      {
        "id": 16,
        "name": "Entertainment: Board Games"
      },
      {
        "id": 17,
        "name": "Science & Nature"
      },
      {
        "id": 18,
        "name": "Science: Computers"
      },
      {
        "id": 19,
        "name": "Science: Mathematics"
      },
      {
        "id": 20,
        "name": "Mythology"
      },
      {
        "id": 21,
        "name": "Sports"
      },
      {
        "id": 22,
        "name": "Geography"
      },
      {
        "id": 23,
        "name": "History"
      },
      {
        "id": 24,
        "name": "Politics"
      },
      {
        "id": 25,
        "name": "Art"
      },
      {
        "id": 26,
        "name": "Celebrities"
      },
      {
        "id": 27,
        "name": "Animals"
      },
      {
        "id": 28,
        "name": "Vehicles"
      },
      {
        "id": 29,
        "name": "Entertainment: Comics"
      },
      {
        "id": 30,
        "name": "Science: Gadgets"
      },
      {
        "id": 31,
        "name": "Entertainment: Japanese Anime & Manga"
      },
      {
        "id": 32,
        "name": "Entertainment: Cartoon & Animations"
      }
    ]


    // 스타일 컴포넌트 정의
const SetupForm = styled.form`
fieldset {
  border: none;
  padding: 0;
}
legend {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-align: center;
}
`;

const FormGroup = styled.div`
margin-bottom: 1.5rem;

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

select, input {
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

select {
  padding: 0.5rem;
}

input[type="range"] {
  margin-top: 0.5rem;
}
`;

const StartButton = styled.button`
width: 100%;
padding: 1rem;
background-color: #4CAF50;  // 초록색 배경
color: white;
border: none;
border-radius: 4px;
font-size: 1.1rem;
cursor: pointer;
transition: background-color 0.2s;

&:hover {
  background-color: #45a049;  // 호버 시 더 어두운 초록색
}
`;
export default function QuizSetup({onStart}: QuizSetupProps) {
  const [amount , setAmount] = useState(3);
  const [category , setCategory] = useState(9);
  const [difficulty , setDifficulty] = useState<'easy'|'medium'|'hard'>('easy');

  const makeCategorySelect = (categories:{id: number , name:string}[]) => {
    return categories.map((category)=> {
        return <option key={category.id} value={category.id}>{category.name}</option>
    })
  }

  const handleQuizNum = (e:React.ChangeEvent) => {
    const inp = e.target as HTMLInputElement
    setAmount(Number(inp.value));
  }

  const handleCategory = (e:React.ChangeEvent) => {
    const option = e.target as HTMLOptionElement;
    setCategory(Number(option.value));
  }

  const handleDifficulty = (e:React.ChangeEvent) => {
    const option = e.target as HTMLOptionElement;
    setDifficulty(option.value as 'easy' | 'medium' | 'hard');
  }

  function handleSubmit(event: React.FormEvent){
    event.preventDefault();
    onStart({ amount, category, difficulty });
  }

 

  return (
    <SetupForm onSubmit={handleSubmit}>
        <FormGroup>
            <h2>퀴즈 설정</h2>
            <label htmlFor="amount">문제 수: {amount}개</label>
            <input onChange={handleQuizNum} type="range" name="amount" id="amount" min={3} max={10}  value={amount}/>
            <label htmlFor="category">카테고리</label>
            <select name="category" id="category" onChange={handleCategory}>
                {makeCategorySelect(categories)}
            </select>
            <label htmlFor="difficulty">난이도</label>
            <select name="difficulty" id="difficulty" onChange={handleDifficulty}>
                <option value="easy">쉬움</option>
                <option value="medium">보통</option>
                <option value="hard">어려움</option>
            </select>
        <StartButton type='submit' >퀴즈 시작하기</StartButton>
        </FormGroup>
    </SetupForm>
  )
}
