import { useContext } from 'react';
import TargetContext from '../../context/TargetContext';
import { Target } from '../../types/types';
import StartGameBtn from '../StartGameBtn';
import styles from './GameIntro.module.scss';

const GameIntro = (): JSX.Element => {
  const { targetList } = useContext(TargetContext);

  const gameIntro: string = styles.gameintro;
  const instructions: string = styles.instructions;
  const text: string = styles['instructions-text'];
  const targets: string = styles.targets;
  const target: string = styles.target;
  const image: string = styles['target-img'];
  const name: string = styles['target-name'];

  return (
    <div className={gameIntro}>
      <h1>Where's Waldo?</h1>
      <div className={instructions}>
        <div className={text}>Can you find these 3 characters?</div>
        <div className={targets}>
          {targetList.map(
            (t): JSX.Element => (
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
