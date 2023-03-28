import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import Scoreboard from '../Scoreboard';
import Game from '../Game';
import GameOver from '../GameOver';

import styles from './GameContainer.module.scss';

const GameContainer = (): JSX.Element => {
  const { gameStatus } = useContext(AppContext);

  const gameContainer: string = styles['game-container'];

  return (
    <div className={gameContainer}>
      <Scoreboard />
      <Game />
      {gameStatus === 'over' && <GameOver />}
    </div>
  );
};

export default GameContainer;
