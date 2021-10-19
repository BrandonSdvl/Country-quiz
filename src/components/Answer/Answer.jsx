import { ReactComponent as Correct } from "../../assets/correct.svg";
import { ReactComponent as Incorrect } from "../../assets/incorrect.svg";

const Answer = ({ data }) => {
  return (
    <div className="quiz__answer">
      <button>{data.name}</button>
      <Correct />
      <Incorrect />
    </div>
  );
};

export default Answer;
