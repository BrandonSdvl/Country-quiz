import Answer from "../Answer/Answer";

const Answers = ({ answers }) => {
  return (
    <div className={"quiz__answers"}>
      {answers.map((el, index) => {
        return <Answer data={el} key={index} />;
      })}
    </div>
  );
};

export default Answers;
