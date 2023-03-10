import { useContext } from 'react';
import GameStatusContext from '../../context/GameStatusContext';
import styles from './StartGameBtn.module.scss';

type StartGameBtnProps = {
  btnText: string;
};

const StartGameBtn = ({ btnText }: StartGameBtnProps): JSX.Element => {
  const { updateGameStatus } = useContext(GameStatusContext);

  const startBtn: string = styles.startBtn;

  return (
    <button className={startBtn} onClick={() => updateGameStatus?.('active')}>
      {btnText}
    </button>
  );
};

export default StartGameBtn;
