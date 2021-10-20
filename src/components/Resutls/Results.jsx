import { useContext } from "react";
import { ReactComponent as Logo } from "../../assets/undraw_winners_ao2o 2.svg";
import StatusContext from "../../context/StatusContext";

const Results = ({ generateQuestion }) => {
  const { score, reset } = useContext(StatusContext);

  const handleClick = () => {
    reset();
    generateQuestion();
  };
  return (
    <div className={"results"}>
      <Logo />
      <h2>Results</h2>
      <p>
        You got <span>{score}</span> correct answers
      </p>
      <button onClick={handleClick}>Try Again</button>
    </div>
  );
};

export default Results;
