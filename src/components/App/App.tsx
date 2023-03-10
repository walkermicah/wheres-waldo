import { useState } from 'react';
import AppContext from '../../context/AppContext';
import { Target } from '../../types/types';
import GameIntro from '../GameIntro';
import GameContainer from '../GameContainer';
import styles from './App.module.scss';
import waldo from '../../assets/waldo.jpg';
import wizard from '../../assets/wizard.jpg';
import odlaw from '../../assets/odlaw.jpg';

const App = (): JSX.Element => {
  const [targetList, setTargetList] = useState<Target[]>([
    { name: 'Waldo', imgUrl: waldo, found: false },
    { name: 'Wizard', imgUrl: wizard, found: false },
    { name: 'Odlaw', imgUrl: odlaw, found: false },
  ]);

  const [gameStatus, setGameStatus] = useState<string>('over');

  const markTargetFound = (targetName: string): void => {
    const newTargetList = targetList.map((t): Target => {
      return t.name === targetName ? { ...t, found: true } : t;
    });
    setTargetList(newTargetList);
  };

  const updateGameStatus = (newStatus: string): void => {
    setGameStatus(newStatus);
  };

  return (
    <div className={styles.App}>
      <AppContext.Provider
        value={{ targetList, gameStatus, markTargetFound, updateGameStatus }}
      >
        {gameStatus === 'start' ? <GameIntro /> : <GameContainer />}
      </AppContext.Provider>
    </div>
  );
};

export default App;
