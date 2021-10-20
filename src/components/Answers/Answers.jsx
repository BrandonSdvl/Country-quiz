import { useState } from "react";
import Answer from "../Answer/Answer";

const Answers = ({ answers }) => {
  const [selected, setSelected] = useState(null);

  return (
    <div className={"quiz__answers"}>
      {answers.map((el, index) => {
        return (
          <Answer
            data={el}
            key={index}
            id={index}
            selected={selected}
            setSelected={setSelected}
          />
        );
      })}
    </div>
  );
};

export default Answers;
