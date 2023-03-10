import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import styles from './StartGameBtn.module.scss';

type StartGameBtnProps = {
  btnText: string;
};

const StartGameBtn = ({ btnText }: StartGameBtnProps): JSX.Element => {
  const { updateGameStatus } = useContext(AppContext);

  const startBtn: string = styles.startBtn;

  return (
    <button className={startBtn} onClick={() => updateGameStatus?.('active')}>
      {btnText}
    </button>
  );
};

export default StartGameBtn;
