import { useContext } from "react";
import "./App.css";
import Quiz from "./components/Quiz/Quiz";
import Results from "./components/Resutls/Results";
import StatusContext from "./context/StatusContext";
function App() {
  const { continueGame } = useContext(StatusContext);

  return (
    <div className="App">
      <h1>Country Quiz</h1>
      {continueGame ? <Quiz /> : <Results />}
    </div>
  );
}

export default App;
