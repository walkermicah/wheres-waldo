import { createContext } from 'react';

interface ITimerContext {
  time: number;
  incrementTime: () => void;
}

const defaultState = {
  time: 0,
  incrementTime: () => {},
};

const TimerContext = createContext<ITimerContext>(defaultState);

export default TimerContext;
