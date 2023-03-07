import Scoreboard from '../Scoreboard';
import GameOver from '../GameOver';
import scene from '../../assets/scene.jpg';
import styles from './Game.module.scss';

type GameProps = {
  status: string;
};

const Game = ({ status }: GameProps): JSX.Element => {
  const gameContainer: string = styles['game-container'];
  const game: string =
    status === 'active' ? styles['game-active'] : styles['game-over'];

  return (
    <div className={gameContainer}>
      <Scoreboard />
      <div className={game}>
        <img src={scene} alt="scene" />
      </div>
      {status === 'over' && <GameOver />}
    </div>
  );
};

export default Game;
