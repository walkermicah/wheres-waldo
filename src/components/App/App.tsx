import { useState } from 'react';
import GameIntro from '../GameIntro';
import { Target } from '../../types/types';
import styles from './App.module.scss';
import waldo from '../../assets/waldo.jpg';
import wizard from '../../assets/wizard.jpg';
import odlaw from '../../assets/odlaw.jpg';

const App = (): JSX.Element => {
  const targetList: Target[] = [
    { name: 'Waldo', imgUrl: waldo },
    { name: 'Wizard', imgUrl: wizard },
    { name: 'Odlaw', imgUrl: odlaw },
  ];

  const [gameStatus, setGameStatus] = useState<string>('start');
  // found

  return (
    <div className={styles.App}>
      {gameStatus === 'start' && <GameIntro targetList={targetList} />}
    </div>
  );
};

export default App;
