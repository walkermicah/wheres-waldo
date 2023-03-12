import { useContext } from 'react';
import { ClickCoords } from '../../types/types';
import AppContext from '../../context/AppContext';
import styles from './TargetingBox.module.scss';

type TargetingBoxProps = {
  clickCoords: ClickCoords;
};

const TargetingBox = ({ clickCoords }: TargetingBoxProps): JSX.Element => {
  const { targetList } = useContext(AppContext);

  const box: string = styles.box;
  const targets: string = styles.targets;
  const targetsYOrientation: string =
    clickCoords.y > 25 ? styles['targets-up'] : styles['targets-down'];
  const targetsXOrientation: string =
    clickCoords.x < 50 ? styles['targets-right'] : styles['targets-left'];
  const target: string = styles.target;
  const found: string = styles['target-found'];
  const targetImg: string = styles['target-img'];

  return (
    <>
      <div
        className={box}
        style={{ top: `${clickCoords.y}%`, left: `${clickCoords.x}%` }}
      >
        <div
          className={`${targets} ${targetsYOrientation} ${targetsXOrientation}`}
        >
          {targetList.map((t) => (
            <div className={`${target} ${t.found && found}`} key={t.name}>
              <img src={t.imgUrl} alt={t.name} className={targetImg} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TargetingBox;
