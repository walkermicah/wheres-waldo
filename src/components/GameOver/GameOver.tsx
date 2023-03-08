import ScoreTable from '../ScoreTable';
import ScoreForm from '../ScoreForm';
import StartGameBtn from '../StartGameBtn';
import styles from './GameOver.module.scss';

const GameOver = (): JSX.Element => {
  const gameover: string = styles.gameover;

  return (
    <div className={gameover}>
      <ScoreTable />
      <ScoreForm />
      <StartGameBtn btnText="Try again" />
    </div>
  );
};

export default GameOver;
