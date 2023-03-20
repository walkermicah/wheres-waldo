import { createContext } from 'react';
import { Target } from '../types/types';
import waldo from '../assets/waldo.jpg';
import wizard from '../assets/wizard.jpg';
import odlaw from '../assets/odlaw.jpg';

interface IAppContext {
  targetList: Target[];
  gameStatus: string;
  markTargetFound: (targetName: string) => void;
  updateGameStatus: (newStatus: string) => void;
}

const defaultState = {
  targetList: [
    { name: 'Waldo', imgUrl: waldo, found: false },
    { name: 'Wizard', imgUrl: wizard, found: false },
    { name: 'Odlaw', imgUrl: odlaw, found: false },
  ],
  gameStatus: 'start',
  markTargetFound: () => {},
  updateGameStatus: () => {},
};

const AppContext = createContext<IAppContext>(defaultState);

export default AppContext;
