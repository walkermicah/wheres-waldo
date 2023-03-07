import styles from './Scoreboard.module.scss';

const Scoreboard = (): JSX.Element => {
  const time: string = '1:23';

  const scoreboard: string = styles.scoreboard;
  const targets: string = styles.targets;
  // For each target, if found apply  class to lower opacity
  const timer: string = styles.timer;

  return (
    <div className={scoreboard}>
      <div className={targets}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={timer}>{time}</div>
    </div>
  );
};

export default Scoreboard;
