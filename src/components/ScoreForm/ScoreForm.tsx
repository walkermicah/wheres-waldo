import { useState } from 'react';
import { Score } from '../../types/types';
import styles from './ScoreForm.module.scss';

const time = '1:34';

const ScoreForm = (): JSX.Element => {
  const [playerName, setPlayerName] = useState<string>('');

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setPlayerName((e.target as HTMLInputElement).value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const score: Score = { name: playerName, time: time };
    console.log(score);
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
          <input name="name" value={playerName} onChange={handleChange} />
        </div>
        <div className={formField}>
          <label htmlFor="time">Time</label>
          <input name="time" value={time} readOnly disabled />
        </div>
      </div>
      <button className={submit} type="submit">
        Submit
      </button>
    </form>
  );
};

export default ScoreForm;
