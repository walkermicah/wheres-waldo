import { useContext } from 'react';
import TargetContext from '../../context/TargetContext';
import Timer from '../Timer';
import styles from './Scoreboard.module.scss';

const Scoreboard = (): JSX.Element => {
  const { targetList } = useContext(TargetContext);

  const scoreboard: string = styles.scoreboard;
  const targets: string = styles.targets;
  const found: string = styles.found;

  return (
    <div className={scoreboard}>
      <div className={targets}>
        {targetList.map((t) => (
          <img src={t.imgUrl} alt={t.name} className={t.found ? found : ''} />
        ))}
      </div>
      <Timer />
    </div>
  );
};

export default Scoreboard;
