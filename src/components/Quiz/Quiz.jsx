import "./Quiz.scss";
import Answers from "../Answers/Answers";
import Question from "../Question/Question";
import { useContext, useEffect, useState } from "react";
import { getRandomInt } from "../../utils/getRandomInt";
import StatusContext from "../../context/StatusContext";
import Results from "../Resutls/Results";
import Loader from "../Loader/Loader";

const initialQuestion = {
  type: "",
  question: "",
};

const Quiz = () => {
  const [data, setData] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [question, setQuestion] = useState(initialQuestion);
  const {
    correct,
    setCorrect,
    setSelected,
    reset,
    continueGame,
    setContinueGame,
  } = useContext(StatusContext);

  useEffect(() => {
    let ignore = false;

    let url = "https://restcountries.com/v3.1/all?fields=name,capital,flags";

    const getData = async (url) => {
      let res = await fetch(url),
        json = await res.json();

      if (!ignore) {
        setData(json);
      }
    };

    getData(url);

    return () => {
      ignore = true;
    };
  }, []);

  useEffect(() => {
    if (data.length !== 0) {
      generateQuestion();
    }
  }, [data]);

  const generateQuestion = () => {
    setQuestion(initialQuestion);
    setAnswers([]);

    const type = getRandomInt(1, 3);
    const newQuestion = {
      type,
      question:
        type === 1
          ? "Which country does this flag belong to?"
          : "is the capital of",
    };

    setQuestion(newQuestion);
    generateAnswers();
  };

  const generateAnswers = () => {
    let correctIndex = getRandomInt(1, 5);
    let newAnswers = [];

    for (let i = 1; i <= 4; i++) {
      const randomIndex = getRandomInt(0, data.length);

      const answer = {
        name: data[randomIndex].name.common,
        correct: i === correctIndex,
      };

      if (i === correctIndex) {
        answer.capital = data[randomIndex].capital[0];
        answer.flag = data[randomIndex].flags.svg;
      }
      newAnswers.push(answer);
    }

    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (correct) {
      setCorrect(null);
      setSelected(null);
      generateQuestion();
    } else {
      setContinueGame(false);
    }
  };

  const handleTryAgain = () => {
    reset();
    setContinueGame(true);
    generateQuestion();
  };

  return (
    <main className={"quiz"}>
      {(data.length === 0 || answers.length === 0) && <Loader />}
      {continueGame ? (
        <>
          <Question
            question={question}
            answer={answers.find((answer) => answer.correct)}
          />
          <Answers answers={answers} />
          {correct !== null && (
            <button className={"quiz__button"} onClick={handleNext}>
              Next
            </button>
          )}
        </>
      ) : (
        <Results handleTryAgain={handleTryAgain} />
      )}
    </main>
  );
};

export default Quiz;
