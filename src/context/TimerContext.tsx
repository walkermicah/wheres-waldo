import { createContext, useState, PropsWithChildren } from 'react';

type TimerContextProviderProps = {};

interface ITimerContext {
  time: number;
  incrementTime: () => void;
  startTimer: () => void;
  stopTimer: () => void;
  clearTimer: () => void;
  timerOn: boolean;
}

const defaultState = {
  time: 0,
  incrementTime: () => {},
  startTimer: () => {},
  stopTimer: () => {},
  clearTimer: () => {},
  timerOn: false,
};

const TimerContext = createContext<ITimerContext>(defaultState);

export default TimerContext;

export const TimerContextProvider = (
  props: PropsWithChildren<TimerContextProviderProps>
) => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  const incrementTime = (): void => {
    const newTime = time + 1;
    setTime(newTime);
  };

  const clearTimer = (): void => {
    setTime(0);
  };

  const startTimer = (): void => {
    setTimerOn(true);
  };

  const stopTimer = (): void => {
    setTimerOn(false);
  };

  return (
    <TimerContext.Provider
      value={{
        time,
        incrementTime,
        startTimer,
        stopTimer,
        timerOn,
        clearTimer,
      }}
    >
      {props.children}
    </TimerContext.Provider>
  );
};
