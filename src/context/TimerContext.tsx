import { createContext } from 'react';

interface ITimerContext {
  time: string;
  incrementTime: () => void;
}

const defaultState = {
  time: '0:00',
  incrementTime: () => {},
};

const TimerContext = createContext<ITimerContext>(defaultState);

export default TimerContext;
