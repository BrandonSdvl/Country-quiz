import { useContext } from "react";
import "./App.scss";
import { ReactComponent as Logo } from "./assets/undraw_adventure_4hum 1.svg";
import Quiz from "./components/Quiz/Quiz";
import StatusContext from "./context/StatusContext";

function App() {
  const { continueGame } = useContext(StatusContext);

  return (
    <div className="app">
      <header className={"app__header"}>
        <h1 className="app__title">Country Quiz</h1>
        {continueGame && <Logo className="app__logo" />}
      </header>
      <Quiz />
    </div>
  );
}

export default App;
