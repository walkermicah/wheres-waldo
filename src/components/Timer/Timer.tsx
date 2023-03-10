import { useContext } from 'react';
import TimerContext from '../../context/TimerContext';
import styles from './Timer.module.scss';

const Timer = (): JSX.Element => {
  const { time } = useContext(TimerContext);
  const timer: string = styles.timer;

  return <div className={timer}>{time}</div>;
};

export default Timer;
