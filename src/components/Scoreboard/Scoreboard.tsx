import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import Timer from '../Timer';
import styles from './Scoreboard.module.scss';

const Scoreboard = (): JSX.Element => {
  const { targetList } = useContext(AppContext);

  const scoreboard: string = styles.scoreboard;
  const targets: string = styles.targets;
  const found: string = styles.found;

  return (
    <div className={scoreboard}>
      <div className={targets}>
        {targetList.map(
          (t): JSX.Element => (
            <img
              src={t.imgUrl}
              alt={t.name}
              className={t.found ? found : ''}
              key={t.name}
            />
          )
        )}
      </div>
      <Timer />
    </div>
  );
};

export default Scoreboard;
