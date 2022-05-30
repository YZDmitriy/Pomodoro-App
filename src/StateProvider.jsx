/* eslint-disable default-case */
import React, { createContext, useEffect, useState } from 'react';

export const StateContext = createContext();

function StateProvider({ children }) {
  const [workTime, setWorkTime] = useState(25 * 60);
  const [shortBreakTime, setShortBreakTime] = useState(5 * 60);
  const [longBreakTime, setLongBreakTime] = useState(30 * 60);

  const [initTime, setInitTime] = useState(0);

  const [activeTag, setActiveTag] = useState(0);
  const [progress, setProrgess] = useState(99);
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    switch (activeTag) {
      case 0:
        setTime(workTime);
        setInitTime(workTime);
        break;
      case 1:
        setTime(shortBreakTime);
        setInitTime(shortBreakTime);
        break;
      case 2:
        setTime(longBreakTime);
        setInitTime(longBreakTime);
        break;
    }
  }, [activeTag, workTime, shortBreakTime, longBreakTime]);

  return (
    <StateContext.Provider
      value={{
        activeTag,
        setActiveTag,
        progress,
        setProrgess,
        time,
        setTime,
        isActive,
        setIsActive,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

export default StateProvider;
