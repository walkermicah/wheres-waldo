import { createContext } from 'react';

interface IGameStatusContext {
  gameStatus: string;
  updateGameStatus?: (newStatus: string) => void;
}

const defaultState = {
  gameStatus: 'start',
};

const GameStatusContext = createContext<IGameStatusContext>(defaultState);

export default GameStatusContext;
