import { useContext, useState, useRef } from 'react';
import AppContext from '../../context/AppContext';
import TargetingBox from '../TargetingBox';
import { ClickCoords } from '../../types/types';
import styles from './Game.module.scss';
import scene from '../../assets/scene.jpg';

const Game = (): JSX.Element => {
  const [targetStatus, setTargetStatus] = useState<string>('searching');
  const [clickCoords, setClickCoords] = useState<ClickCoords>({
    x: 0,
    y: 0,
  });

  const imageRef = useRef(null);

  const toggleTargetStatus = (): void => {
    const newStatus = targetStatus === 'searching' ? 'targeted' : 'searching';
    setTargetStatus(newStatus);
  };

  const getClickCoordinates = (
    e: React.MouseEvent<HTMLElement>,
    img: HTMLElement
  ): void => {
    // top and left starting points (in px) of image relative to top-left corner of the document
    const rect = img.getBoundingClientRect();
    const startImgLeft = rect.left + window.scrollX;
    const startImgTop = rect.top + window.scrollY;

    // x and y coordinates of click (in px) from the top-left corner of the image
    const x = e.pageX - startImgLeft;
    const y = e.pageY - startImgTop;

    // width and height in px of image on screen
    const width = img.clientWidth;
    const height = img.clientHeight;

    // percentages
    const xPercent = (x * 100) / width;
    const yPercent = (y * 100) / height;

    // update state
    const coords = { x: xPercent, y: yPercent };
    setClickCoords(coords);
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>): void => {
    const img = imageRef.current;
    if ((e.target as HTMLElement) !== img) return;
    targetStatus === 'searching' && getClickCoordinates(e, img);
    toggleTargetStatus();
  };

  const { gameStatus } = useContext(AppContext);

  const game: string = styles.game;
  const gameOver: string = gameStatus === 'over' ? styles['game-over'] : '';
  const gameImg: string = styles['game-img'];

  return (
    <div className={`${game} ${gameOver}`} onClick={handleClick}>
      <img src={scene} alt="scene" className={gameImg} ref={imageRef} />
      {targetStatus === 'targeted' && (
        <TargetingBox clickCoords={clickCoords} />
      )}
    </div>
  );
};

export default Game;
