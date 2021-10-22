import { useContext } from "react";
import { ReactComponent as Icon } from "../../assets/undraw_winners_ao2o 2.svg";
import StatusContext from "../../context/StatusContext";
import "./Results.scss";

const Results = ({ generateQuestion }) => {
  const { score, reset } = useContext(StatusContext);

  const handleClick = () => {
    reset();
    generateQuestion();
  };
  return (
    <div className={"results"}>
      <Icon className={"results__icon"} />
      <h2 className={"results__title"}>Results</h2>
      <p className={"results__text"}>
        You got <span className={"results__score"}>{score}</span> correct
        answers
      </p>
      <button onClick={handleClick} className={"results__button"}>
        Try Again
      </button>
    </div>
  );
};

export default Results;
