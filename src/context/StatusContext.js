import { createContext, useState } from "react";

const StatusContext = createContext();

const StatusProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [continueGame, setContinueGame] = useState(true);
  const [correct, setCorrect] = useState(null);
  const [selected, setSelected] = useState(null);

  const reset = () => {
    setScore(0);
    setCorrect(null);
    setSelected(null);
  };

  let data = {
    score,
    setScore,
    continueGame,
    setContinueGame,
    correct,
    setCorrect,
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
