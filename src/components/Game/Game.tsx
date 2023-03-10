import { useContext } from 'react';
import GameStatusContext from '../../context/GameStatusContext';
import styles from './Game.module.scss';
import scene from '../../assets/scene.jpg';

const Game = (): JSX.Element => {
  const { gameStatus } = useContext(GameStatusContext);
  const game: string =
    gameStatus === 'active' ? styles['game-active'] : styles['game-over'];

  return (
    <div className={game}>
      <img src={scene} alt="scene" />
    </div>
  );
};

export default Game;
