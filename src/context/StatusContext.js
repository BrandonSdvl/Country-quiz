import { createContext, useState } from "react";

const StatusContext = createContext();

const StatusProvider = ({ children }) => {
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [continueGame, setContinueGame] = useState(true);
  const [correct, setCorrect] = useState(null);
  const [loading, setLoading] = useState(false);

  let data = {
    answered,
    setAnswered,
    score,
    setScore,
    continueGame,
    setContinueGame,
    correct,
    setCorrect,
    loading,
    setLoading,
  };

  return (
    <StatusContext.Provider value={data}>{children}</StatusContext.Provider>
  );
};

export { StatusProvider };
export default StatusContext;
