import "./Answer.scss";
import { useContext } from "react";
import { ReactComponent as Correct } from "../../assets/correct.svg";
import { ReactComponent as Incorrect } from "../../assets/incorrect.svg";
import StatusContext from "../../context/StatusContext";

const Answer = ({ data, id, letter }) => {
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
    if (answered) {
      return;
    }
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
    <div
      className={`answer ${
        answered && data.correct
          ? "answer--correct"
          : selected === id
          ? "answer--incorrect"
          : ""
      } ${!answered ? "answer--active" : ""}`}
      onClick={handleClick}
    >
      <div className={"answer__container"}>
        <span className={"answer__letter"}>{letter}</span>
        <span className={"answer__name"}>{data.name}</span>
      </div>
      {answered && data.correct ? (
        <Correct className={"answer__icon"} />
      ) : (
        selected === id && <Incorrect className={"answer__icon"} />
      )}
    </div>
  );
};

export default Answer;
