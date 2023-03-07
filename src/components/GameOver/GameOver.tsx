import StartGameBtn from '../StartGameBtn';
import styles from './GameOver.module.scss';

const GameOver = (): JSX.Element => {
  const gameover: string = styles.gameover;

  return (
    <div className={gameover}>
      <StartGameBtn btnText="Try again" />
    </div>
  );
};

export default GameOver;
