import Answer from "../Answer/Answer";

const Answers = ({ answers }) => {
  const letters = ["A", "B", "C", "D"];
  return (
    <div className={"answers"}>
      {answers.map((el, index) => {
        return (
          <Answer data={el} key={index} id={index} letter={letters[index]} />
        );
      })}
    </div>
  );
};

export default Answers;
