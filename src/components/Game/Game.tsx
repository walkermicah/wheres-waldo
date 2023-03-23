import { v4 as uuid } from 'uuid';
import { useContext, useState, useRef } from 'react';
import AppContext from '../../context/AppContext';
import SnackbarContext from '../../context/SnackbarContext';
import TargetingBox from '../TargetingBox';
import Snackbar from '../Snackbar';
import { ClickCoords } from '../../types/types';
import styles from './Game.module.scss';
import scene from '../../assets/scene.jpg';
import Pin from '../Pin';
import getTargetCoordinates from '../../firebase/getTargetCoordinates';

const Game = (): JSX.Element => {
  const [targetStatus, setTargetStatus] = useState<string>('searching');
  const [clickCoords, setClickCoords] = useState<ClickCoords>({
    x: 0,
    y: 0,
  });

  const { gameStatus, markTargetFound, pins, addPin } = useContext(AppContext);
  const { isDisplayed, displayMsg } = useContext(SnackbarContext);

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

  const checkTargetFound = async (targetName: string) => {
    const targetPosition = await getTargetCoordinates(targetName);

    if (targetPosition) {
      const targetIsFound =
        clickCoords.x > targetPosition.x1 &&
        clickCoords.x < targetPosition.x2 &&
        clickCoords.y > targetPosition.y1 &&
        clickCoords.y < targetPosition.y2;

      if (targetIsFound) {
        markTargetFound(targetName);
        addPin(clickCoords);
        displayMsg(`You found ${targetName}!`, 'success');
      }
      if (!targetIsFound) {
        displayMsg(`That's not ${targetName}! Try again!`, 'failure');
      }

      toggleTargetStatus();
    }
  };

  const game: string = styles.game;
  const gameOver: string = gameStatus === 'over' ? styles['game-over'] : '';
  const gameImg: string = styles['game-img'];

  return (
    <div className={`${game} ${gameOver}`} onClick={handleClick}>
      {isDisplayed && <Snackbar />}

      <img src={scene} alt="scene" className={gameImg} ref={imageRef} />
      {targetStatus === 'targeted' && (
        <TargetingBox
          clickCoords={clickCoords}
          checkTargetFound={checkTargetFound}
        />
      )}
      {pins.map((p) => (
        <Pin coords={p} key={uuid()} />
      ))}
    </div>
  );
};

export default Game;
