import { useContext, useEffect, useState } from 'react';
import AppContext from '../../context/AppContext';
import { SnackbarContextProvider } from '../../context/SnackbarContext';
import { ClickCoords, Target } from '../../types/types';
import GameIntro from '../GameIntro';
import GameContainer from '../GameContainer';
import styles from './App.module.scss';
import waldo from '../../assets/waldo.jpg';
import wizard from '../../assets/wizard.jpg';
import odlaw from '../../assets/odlaw.jpg';
import TimerContext from '../../context/TimerContext';

const App = (): JSX.Element => {
  const [targetList, setTargetList] = useState<Target[]>([
    { name: 'Waldo', imgUrl: waldo, found: false },
    { name: 'Wizard', imgUrl: wizard, found: false },
    { name: 'Odlaw', imgUrl: odlaw, found: false },
  ]);
  const [gameStatus, setGameStatus] = useState<string>('start');
  const [pins, setPins] = useState<ClickCoords[]>([]);

  const { startTimer, stopTimer, timerOn, incrementTime, clearTimer } =
    useContext(TimerContext);

  useEffect(() => {
    if (!timerOn) return;
    const tick = setInterval(incrementTime, 1000);
    return () => {
      clearInterval(tick);
    };
  }, [incrementTime, timerOn]);

  const markTargetFound = (targetName: string): void => {
    const newTargetList = targetList.map((t): Target => {
      return t.name === targetName ? { ...t, found: true } : t;
    });
    setTargetList(newTargetList);
  };

  const startGame = (): void => {
    setGameStatus('active');
    const newTargetList = targetList.map((t) => ({ ...t, found: false }));
    setTargetList(newTargetList);
    clearPins();
    clearTimer();
    startTimer();
  };

  const addPin = (coords: ClickCoords): void => {
    const newPins = [...pins, coords];
    setPins(newPins);
  };

  const clearPins = (): void => {
    const newPins: ClickCoords[] = [];
    setPins(newPins);
  };

  useEffect(() => {
    targetList.every((t) => t.found) &&
      setTimeout(() => {
        setGameStatus('over');
        window.scrollTo(0, 0);
      }, 2000);
  }, [targetList]);

  useEffect(() => {
    targetList.every((t) => t.found) && stopTimer();
  }, [targetList, stopTimer]);

  return (
    <div className={styles.App}>
      <AppContext.Provider
        value={{
          targetList,
          gameStatus,
          markTargetFound,
          startGame,
          pins,
          addPin,
          clearPins,
        }}
      >
        {gameStatus === 'start' ? (
          <GameIntro />
        ) : (
          <SnackbarContextProvider>
            <GameContainer />
          </SnackbarContextProvider>
        )}
      </AppContext.Provider>
    </div>
  );
};

export default App;
