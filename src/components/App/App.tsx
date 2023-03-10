import { useState } from 'react';
import TargetContext from '../../context/TargetContext';
import { Target } from '../../types/types';
import GameIntro from '../GameIntro';
import Game from '../Game';
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

  const [gameStatus, setGameStatus] = useState<string>('start');

  const markTargetFound = (targetName: string): void => {
    const newTargetList = targetList.map((t) => {
      if (t.name === targetName) {
        return { ...t, found: true };
      }
      return t;
    });
    setTargetList(newTargetList);
  };

  return (
    <div className={styles.App}>
      <TargetContext.Provider value={{ targetList, markTargetFound }}>
        {gameStatus === 'start' ? <GameIntro /> : <Game status={gameStatus} />}
      </TargetContext.Provider>
    </div>
  );
};

export default App;
