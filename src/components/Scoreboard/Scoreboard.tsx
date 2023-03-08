import { useContext } from 'react';
import { TargetListContext } from '../App';
import { Target } from '../../types/types';
import styles from './Scoreboard.module.scss';

const Scoreboard = (): JSX.Element => {
  const time: string = '1:23';
  const targetList = useContext<Target[]>(TargetListContext);

  const scoreboard: string = styles.scoreboard;
  const targets: string = styles.targets;
  const found: string = styles.found;
  const timer: string = styles.timer;

  return (
    <div className={scoreboard}>
      <div className={targets}>
        {targetList.map((t) => (
          <img src={t.imgUrl} alt={t.name} className={t.found ? found : ''} />
        ))}
      </div>
      <div className={timer}>{time}</div>
    </div>
  );
};

export default Scoreboard;
