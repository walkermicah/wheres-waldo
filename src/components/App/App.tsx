import { useState, createContext } from 'react';
import { Target } from '../../types/types';
import GameIntro from '../GameIntro';
import Game from '../Game';
import styles from './App.module.scss';
import waldo from '../../assets/waldo.jpg';
import wizard from '../../assets/wizard.jpg';
import odlaw from '../../assets/odlaw.jpg';

export const TargetListContext = createContext<Target[]>([
  { name: 'Waldo', imgUrl: waldo, found: false },
  { name: 'Wizard', imgUrl: wizard, found: false },
  { name: 'Odlaw', imgUrl: odlaw, found: false },
]);

const App = (): JSX.Element => {
  const [targetList, setTargetList] = useState<Target[]>([
    { name: 'Waldo', imgUrl: waldo, found: false },
    { name: 'Wizard', imgUrl: wizard, found: false },
    { name: 'Odlaw', imgUrl: odlaw, found: false },
  ]);

  const [gameStatus, setGameStatus] = useState<string>('active');

  return (
    <TargetListContext.Provider value={targetList}>
      <div className={styles.App}>
        {gameStatus === 'start' ? <GameIntro /> : <Game status={gameStatus} />}
      </div>
    </TargetListContext.Provider>
  );
};

export default App;
