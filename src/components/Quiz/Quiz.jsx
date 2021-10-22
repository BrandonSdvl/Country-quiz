import "./Quiz.scss";
import Answers from "../Answers/Answers";
import Question from "../Question/Question";
import { useContext, useEffect, useState } from "react";
import { getRandomInt } from "../../utils/getRandomInt";
import StatusContext from "../../context/StatusContext";
import Results from "../Resutls/Results";

const initialQuestion = {
  type: "",
  question: "",
};

const Quiz = () => {
  const [data, setData] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [question, setQuestion] = useState(initialQuestion);
  const {
    answered,
    setAnswered,
    setLoading,
    correct,
    setCorrect,
    continueGame,
    setContinueGame,
    setSelected,
  } = useContext(StatusContext);

  useEffect(() => {
    setLoading(true);
    let url = "https://restcountries.com/v3.1/all?fields=name,capital,flags";

    const getData = async (url) => {
      let res = await fetch(url),
        json = await res.json();

      setData(json);
    };

    getData(url);
  }, []);

  useEffect(() => {
    if (data.length !== 0) {
      setLoading(false);
      generateQuestion();
    }
  }, [data]);

  const generateQuestion = () => {
    setLoading(true);
    let newQuestion = {};
    newQuestion.type = getRandomInt(1, 3);
    if (newQuestion.type === 1) {
      newQuestion.question = "Which country does this flag belong to?";
    } else if (newQuestion.type === 2) {
      newQuestion.question = `is the capital of`;
    }
    setQuestion(newQuestion);
    generateAnswers();
  };

  const generateAnswers = () => {
    let correct = getRandomInt(1, 5);
    let newAnswers = [];
    let random = 0;

    for (let i = 1; i <= 4; i++) {
      random = getRandomInt(0, data.length);
      if (i === correct) {
        newAnswers.push({
          name: data[random].name.common,
          capital: data[random].capital[0],
          flag: data[random].flags.svg,
          correct: i === correct,
        });
      } else {
        newAnswers.push({
          name: data[random].name.common,
          correct: i === correct,
        });
      }
    }

    setAnswers(newAnswers);
    setLoading(false);
  };

  const handleNext = () => {
    if (correct) {
      setAnswered(false);
      setCorrect(null);
      setSelected(null);
      generateQuestion();
    } else {
      setContinueGame(false);
    }
  };

  return (
    <main className={"quiz"}>
      {continueGame ? (
        <>
          <Question
            question={question}
            answer={answers.filter((answer) => answer.correct)}
          />
          <Answers answers={answers} />
          {answered && (
            <button className={"quiz__button"} onClick={handleNext}>
              Next
            </button>
          )}
        </>
      ) : (
        <Results generateQuestion={generateQuestion} />
      )}
    </main>
  );
};

export default Quiz;
