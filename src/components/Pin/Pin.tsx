import { ClickCoords } from '../../types/types';
import pinIcon from '../../assets/pin.png';
import styles from './Pin.module.scss';

type PinProps = {
  coords: ClickCoords;
};

const Pin = ({ coords }: PinProps): JSX.Element => {
  const pin: string = styles.pin;

  return (
    <img
      src={pinIcon}
      alt="pin"
      className={pin}
      style={{ top: `${coords.y}%`, left: `${coords.x}%` }}
    />
  );
};

export default Pin;
