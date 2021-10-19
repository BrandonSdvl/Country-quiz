import { useState } from "react";
import "./App.css";
import Quiz from "./components/Quiz/Quiz";
import Results from "./components/Resutls/Results";

function App() {
  const [continueGame, setContinueGame] = useState(true);
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <h1>Country Quiz</h1>
      {continueGame ? (
        <Quiz setScore={setScore} setContinueGame={setContinueGame} />
      ) : (
        <Results score={score} />
      )}
    </div>
  );
}

export default App;
