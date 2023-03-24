import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import Scoreboard from '../Scoreboard';
import Game from '../Game';
import GameOver from '../GameOver';
import TimerContext from '../../context/TimerContext';
import styles from './GameContainer.module.scss';
import { useState } from 'react';

const GameContainer = (): JSX.Element => {
  const { gameStatus } = useContext(AppContext);
  const [time, setTime] = useState<number>(0);

  const incrementTime = (): void => {
    // increment 1 second
    // call setTime(incremented time)
    console.log('increment time');
  };

  const gameContainer: string = styles['game-container'];

  return (
    <div className={gameContainer}>
      <TimerContext.Provider value={{ time, incrementTime }}>
        <Scoreboard />
        <Game />
        {gameStatus === 'over' && <GameOver />}
      </TimerContext.Provider>
    </div>
  );
};

export default GameContainer;
