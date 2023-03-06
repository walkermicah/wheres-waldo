import styles from './StartGameBtn.module.scss';

type StartGameBtnProps = {
  btnText: string;
};

const StartGameBtn = ({ btnText }: StartGameBtnProps): JSX.Element => {
  const startBtn: string = styles.startBtn;

  return <button className={startBtn}>{btnText}</button>;
};

export default StartGameBtn;
