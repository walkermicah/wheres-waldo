import StartGameBtn from '../StartGameBtn';
import { Target } from '../../types/types';
import styles from './GameIntro.module.scss';

type GameIntroProps = {
  targetList: Target[];
};

const GameIntro = ({ targetList }: GameIntroProps): JSX.Element => {
  const gameIntro: string = styles.gameintro;
  const heading: string = styles.heading;
  const instructions: string = styles.instructions;
  const text: string = styles['instructions-text'];
  const targets: string = styles.targets;
  const target: string = styles.target;
  const image: string = styles['target-img'];
  const name: string = styles['target-name'];

  return (
    <div className={gameIntro}>
      <h1 className={heading}>Where's Waldo?</h1>
      <div className={instructions}>
        <div className={text}>Can you find these 3 characters?</div>
        <div className={targets}>
          {targetList.map(
            (t: Target): JSX.Element => (
              <div className={target} key={t.name}>
                <img src={t.imgUrl} alt={t.name} className={image} />
                <p className={name}>{t.name}</p>
              </div>
            )
          )}
        </div>
      </div>
      <StartGameBtn btnText="Start" />
    </div>
  );
};

export default GameIntro;
