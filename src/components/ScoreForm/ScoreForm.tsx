import { useState, useContext } from 'react';
import { addScore } from '../../firebase/scores';
import TimerContext from '../../context/TimerContext';
import convertToMinutes from '../../util/convertToMinutes';
import styles from './ScoreForm.module.scss';

const ScoreForm = (): JSX.Element => {
  const { time } = useContext(TimerContext);
  const [playerName, setPlayerName] = useState<string>('');

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setPlayerName((e.target as HTMLInputElement).value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (playerName === '') return;
    await addScore(playerName, time);
    setPlayerName('');
  };

  const form: string = styles.form;
  const heading: string = styles.heading;
  const formFields: string = styles['form-fields'];
  const formField: string = styles['form-field'];
  const submit: string = styles.submit;

  return (
    <form className={form} onSubmit={handleSubmit}>
      <h2 className={heading}>Add your score</h2>
      <div className={formFields}>
        <div className={formField}>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            value={playerName}
            onChange={handleChange}
            autoFocus
          />
        </div>
        <div className={formField}>
          <label htmlFor="time">Time</label>
          <input name="time" value={convertToMinutes(time)} readOnly disabled />
        </div>
      </div>
      <button className={submit} type="submit">
        Submit
      </button>
    </form>
  );
};

export default ScoreForm;
