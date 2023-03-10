import { useContext, useState } from 'react';
import AppContext from '../../context/AppContext';
import styles from './Game.module.scss';
import scene from '../../assets/scene.jpg';

const Game = (): JSX.Element => {
  const [targetStatus, setTargetStatus] = useState<string>('searching');

  // toggle target status function: switch between searching/targeted

  // handleClick:
  // if !targetBox is the e.target return
  //toggle targetStatus

  const { gameStatus } = useContext(AppContext);
  const game: string =
    gameStatus === 'active' ? styles['game-active'] : styles['game-over'];

  return (
    // onClick: handleClick
    <div className={game}>
      <img src={scene} alt="scene" />
      {/* if targetStatus = targeted, render target box */}
    </div>
  );
};

export default Game;

// To do:
// click location in state
// function to save click location
// in handleClick: targetStatus = 'looking' call function to save click location in state
// render target box at click location
// Style target box
