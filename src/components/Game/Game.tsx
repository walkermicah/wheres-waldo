import Scoreboard from '../Scoreboard';
import GameOver from '../GameOver';
import TimerContext from '../../context/TimerContext';
import scene from '../../assets/scene.jpg';
import styles from './Game.module.scss';
import { useState } from 'react';

type GameProps = {
  status: string;
};

const Game = ({ status }: GameProps): JSX.Element => {
  const [time, setTime] = useState<string>('0:00');

  const incrementTime = (): void => {
    // increment 1 second
    // call setTime(incremented time)
    console.log('increment time');
  };

  const gameContainer: string = styles['game-container'];
  const game: string =
    status === 'active' ? styles['game-active'] : styles['game-over'];

  return (
    <div className={gameContainer}>
      <TimerContext.Provider value={{ time, incrementTime }}>
        <Scoreboard />
        <div className={game}>
          <img src={scene} alt="scene" />
        </div>
        {status === 'over' && <GameOver />}
      </TimerContext.Provider>
    </div>
  );
};

export default Game;
