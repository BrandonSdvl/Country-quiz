const Question = ({ question, answer }) => {
  return (
    <div className={"quiz__question"}>
      {question.type === 1 && (
        <div>
          <h2>{question.question}</h2>
          <img src={answer[0].flag} alt="flag" />
        </div>
      )}

      {question.type === 2 && (
        <div>
          <h2>
            {answer[0].capital + " "}
            {question.question}
          </h2>
        </div>
      )}
    </div>
  );
};

export default Question;
