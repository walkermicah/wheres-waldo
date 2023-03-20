import { useContext } from 'react';
import SnackbarContext from '../../context/SnackbarContext';
import styles from './Snackbar.module.scss';

const Snackbar = (): JSX.Element => {
  const { msg, msgType } = useContext(SnackbarContext);

  const snackbar: string = styles.snackbar;
  const backgroundClr = msgType === 'success' ? '#239523' : '#ea402d';

  return (
    <div className={snackbar} style={{ backgroundColor: backgroundClr }}>
      {msg}
    </div>
  );
};

export default Snackbar;
