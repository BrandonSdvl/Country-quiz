import "./Answer.scss";
import { useContext } from "react";
import { ReactComponent as Correct } from "../../assets/correct.svg";
import { ReactComponent as Incorrect } from "../../assets/incorrect.svg";
import StatusContext from "../../context/StatusContext";

const Answer = ({ data, id, letter }) => {
  const { correct, setScore, setCorrect, setSelected, selected } =
    useContext(StatusContext);

  const handleClick = () => {
    if (correct !== null) {
      return;
    }
    setSelected(id);
    if (data.correct) {
      setScore((score) => score + 1);
      setCorrect(true);
    } else {
      setCorrect(false);
    }
  };
  return (
    <div
      className={`answer ${
        correct !== null && data.correct
          ? "answer--correct"
          : selected === id
          ? "answer--incorrect"
          : ""
      } ${correct === null ? "answer--active" : ""}`}
      onClick={handleClick}
    >
      <div className={"answer__container"}>
        <span className={"answer__letter"}>{letter}</span>
        <span className={"answer__name"}>{data.name}</span>
      </div>
      {correct !== null && data.correct ? (
        <Correct className={"answer__icon"} />
      ) : (
        selected === id && <Incorrect className={"answer__icon"} />
      )}
    </div>
  );
};

export default Answer;
