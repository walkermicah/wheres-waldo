import { useContext, useState } from 'react';
import AppContext from '../../context/AppContext';
import TargetingBox from '../TargetingBox';
import styles from './Game.module.scss';
import scene from '../../assets/scene.jpg';

const Game = (): JSX.Element => {
  const [targetStatus, setTargetStatus] = useState<string>('searching');
  // click location in state

  const toggleTargetStatus = (): void => {
    const newStatus = targetStatus === 'searching' ? 'targeted' : 'searching';
    setTargetStatus(newStatus);
  };

  // function to save click location

  const handleClick = (e: React.MouseEvent<HTMLElement>): void => {
    if ((e.target as HTMLInputElement).id === 'targets') return;
    // if targetStatus = 'looking' call function to save click location in state
    toggleTargetStatus();
  };

  const { gameStatus } = useContext(AppContext);
  const game: string = styles.game;
  const gameOver: string = gameStatus === 'over' ? styles['game-over'] : '';
  const gameImg: string = styles['game-img'];

  return (
    <div className={`${game} ${gameOver}`} onClick={handleClick}>
      <img src={scene} alt="scene" className={gameImg} />
      {/* render target box at click location (w inline styles?) */}
      {targetStatus === 'targeted' && <TargetingBox />}
    </div>
  );
};

export default Game;
