import React, { useEffect, useState } from 'react'
import { QuizQuestion } from '../interfaces'

interface QuizQuestionProps { 
    quizzes : QuizQuestion[];
}

export default function QuizQuestions({quizzes} : QuizQuestionProps) {
  const [currentQuizId, setCurrentQuizId] =useState(0);
  const [shuffledQuiz , setShffledQuiz] = useState<string[][]>([])
  const [answers , setAnswers] = useState<string[]>([]);

  const handleAnswer = (e) => {
    setAnswers((prev)=> { 
      const newAnswer = [...prev];
      newAnswer[currentQuizId] = e.target.value;
      return newAnswer; 
    })
  }
  const handleNext = () => {
    if(currentQuizId >= quizzes.length - 1){
      return
    } 

    setCurrentQuizId((prev)=> prev + 1)
  }
  
  const handlePrev = () => {
    if(currentQuizId <= 0){
      return
    }
    setCurrentQuizId((prev)=> prev - 1)
  }


  const makeQuestion = (id : number) => {
    return shuffledQuiz[id].map((q, idx)=> {
      return <React.Fragment key={idx}>
        <label htmlFor={`question${idx}`}>{q}</label>
        <input type="radio" name={`question${id}`} id={`question${idx}`} value={q} onChange={handleAnswer}/>
      </React.Fragment> 
  })}

  

  useEffect(()=> {
    const shuffled = quizzes.map((question) => {
      return [...question.incorrect_answers, question.correct_answer].sort(() => Math.random() - 0.5);
  });
    setShffledQuiz(shuffled);
  },[])

  if(shuffledQuiz.length === 0){
    return <div>Loading</div>
  }
 
  return (
    <form>
     <p>문제 {currentQuizId + 1}/{quizzes.length}</p>
     <p>{quizzes[currentQuizId].question}</p>
     {makeQuestion(currentQuizId)}
     <button type='button' onClick={handlePrev}>이전</button>
     <button type='button' onClick={handleNext}>이후</button>
     </form>
  )
}
