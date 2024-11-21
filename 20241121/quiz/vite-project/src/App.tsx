import styled from "styled-components";
import { QuizConfig, QuizQuestion } from "./interfaces";
import { useState } from "react";
import QuizSetup from "./Components/QuizSetup";
import QuizQuestions from "./Components/QuizQuestions";
const AppContainer = styled.div`
max-width: 800px;
margin: 0 auto;
padding: 2rem;

header {
  margin-bottom: 2rem;
  
  h1 {
    text-align: center;
    font-size: 2.5rem;
    color: #333;
  }
}

main {
  background-color: #fff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
`;

enum QuizStep {
  SETUP,
  PLAYING,
  RESULT
}

function App() {
  const [step, setStep] = useState<QuizStep>(QuizStep.SETUP);
  const [questions , setQuestions] = useState<QuizQuestion[]>([]);
 const startQuiz = async(config: QuizConfig) => {
  try {
    if(config.amount < 0){
      throw new Error('1 이상이어야 합니다.')
    }
    if(config.category < 9 || config.category > 32){
      throw new Error('카테고리가 잘못되었습니다 9 ~ 32');
    }
    if (!['easy', 'medium', 'hard'].includes(config.difficulty)) {
      throw new Error("difficulty는 'easy', 'medium', 'hard' 중 하나여야 합니다.");
    }

    const url = 'https://opentdb.com/api.php';
    const params = new URLSearchParams([...Object.entries(config)]).toString();
    const res = await fetch(`${url}?${params}`);
    if(!res.ok){
      throw new Error('네트워크 에러')
    }
    const json = await res.json();
    setQuestions(json.results);
    setStep(QuizStep.PLAYING);
    return json
  }
  catch(error : unknown) {
    console.error((error as Error).message)
  }
 }

 return (
    <AppContainer>
      <header>
        <h1>퀴즈 퀴즈 챌린지</h1>
      </header>
      <main>
        {step === QuizStep.SETUP &&<QuizSetup onStart={startQuiz} />}
        {step === QuizStep.PLAYING && <QuizQuestions quizzes={questions} />}
      </main>
    </AppContainer>
  )
}

export default App
