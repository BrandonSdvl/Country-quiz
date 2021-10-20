import { useContext } from "react";
import { ReactComponent as Correct } from "../../assets/correct.svg";
import { ReactComponent as Incorrect } from "../../assets/incorrect.svg";
import StatusContext from "../../context/StatusContext";

const Answer = ({ data, id }) => {
  const {
    setScore,
    score,
    answered,
    setAnswered,
    setCorrect,
    setSelected,
    selected,
  } = useContext(StatusContext);

  const handleClick = () => {
    setSelected(id);
    if (data.correct) {
      setScore(score + 1);
      setAnswered(true);
      setCorrect(true);
    } else {
      setAnswered(true);
      setCorrect(false);
    }
  };
  return (
    <div className="quiz__answer">
      <button onClick={handleClick}>{data.name}</button>
      {answered && data.correct ? (
        <Correct />
      ) : (
        selected === id && <Incorrect />
      )}
    </div>
  );
};

export default Answer;
