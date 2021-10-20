import { createContext, useState } from "react";

const StatusContext = createContext();

const StatusProvider = ({ children }) => {
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [continueGame, setContinueGame] = useState(true);
  const [correct, setCorrect] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(null);

  const reset = () => {
    setAnswered(false);
    setScore(0);
    setContinueGame(true);
    setCorrect(null);
    setLoading(false);
    setSelected(null);
  };

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
    selected,
    setSelected,
    reset,
  };

  return (
    <StatusContext.Provider value={data}>{children}</StatusContext.Provider>
  );
};

export { StatusProvider };
export default StatusContext;
