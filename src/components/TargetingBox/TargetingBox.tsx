import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import styles from './TargetingBox.module.scss';

const TargetingBox = (): JSX.Element => {
  const { targetList } = useContext(AppContext);

  const box: string = styles.box;
  const targets: string = styles.targets;
  const target: string = styles.target;

  return (
    <>
      <div className={box}>
        <div className={targets} id="targets">
          {targetList.map((t) => (
            <div className={target} key={t.name}>
              <img src={t.imgUrl} alt={t.name} />
              <p>{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TargetingBox;
