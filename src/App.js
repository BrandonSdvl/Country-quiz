import './App.css';
import Quiz from './components/Quiz/Quiz';
import Results from './components/Resutls/Results';

function App() {
  return (
    <div className="App">
      <h1 >Country Quiz</h1>
      <Quiz />
      <Results />
    </div>
  );
}

export default App;
