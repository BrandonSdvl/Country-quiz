import Answers from "../Answers/Answers";
import Question from "../Question/Question";
import { ReactComponent as Logo } from "../../assets/undraw_adventure_4hum 1.svg";
import { useContext, useEffect, useState } from "react";
import { getRandomInt } from "../../utils/getRandomInt";
import StatusContext from "../../context/StatusContext";

const initialQuestion = {
  type: "",
  question: "",
};

const Quiz = () => {
  const [data, setData] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [question, setQuestion] = useState(initialQuestion);
  const { answered, setAnswered, loading, setLoading } =
    useContext(StatusContext);

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
    let questionCopy = question;
    questionCopy.type = getRandomInt(1, 3);
    if (questionCopy.type === 1) {
      questionCopy.question = "Which country does this flag belong to?";
    } else if (questionCopy.type === 2) {
      questionCopy.question = `is the capital of`;
    }
    setQuestion(questionCopy);
    generateAnswers();
  };

  const generateAnswers = () => {
    let correct = getRandomInt(1, 5);
    let answersCopy = [];
    let random = 0;

    for (let i = 1; i <= 4; i++) {
      random = getRandomInt(0, data.length);
      if (i === correct) {
        answersCopy.push({
          name: data[random].name.common,
          capital: data[random].capital[0],
          flag: data[random].flags.svg,
          correct: i === correct,
        });
      } else {
        answersCopy.push({
          name: data[random].name.common,
          correct: i === correct,
        });
      }
    }

    setAnswers(answersCopy);
    setLoading(false);
  };

  const handleClick = () => {
    setAnswered(!answered);
    console.log(answered);
  };

  return (
    <div className={"quiz"}>
      <Logo />
      <Question
        question={question}
        answer={answers.filter((answer) => answer.correct)}
      />
      <Answers answers={answers} />
      {answered && <button onClick={handleClick}>Next</button>}
      {loading && <p>Loading</p>}
    </div>
  );
};

export default Quiz;
