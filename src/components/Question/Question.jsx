import "./Question.scss";

const Question = ({ question, answer }) => {
  return (
    <div className={"question"}>
      {question.type === 1 && (
        <>
          <img src={answer[0].flag} alt="flag" className={"question__image"} />
          <h2 className={"question__text"}>{question.question}</h2>
        </>
      )}

      {question.type === 2 && (
        <h2 className={"question__text"}>
          {answer[0].capital + " "}
          {question.question}
        </h2>
      )}
    </div>
  );
};

export default Question;
