import { createContext } from 'react';
import { Target } from '../types/types';
import waldo from '../assets/waldo.jpg';
import wizard from '../assets/wizard.jpg';
import odlaw from '../assets/odlaw.jpg';

interface ITargetContext {
  targetList: Target[];
  markTargetFound?: (targetName: string) => void;
}

const defaultState = {
  targetList: [
    { name: 'Waldo', imgUrl: waldo, found: false },
    { name: 'Wizard', imgUrl: wizard, found: false },
    { name: 'Odlaw', imgUrl: odlaw, found: false },
  ],
};

const TargetContext = createContext<ITargetContext>(defaultState);

export default TargetContext;
