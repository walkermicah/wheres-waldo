import { Score } from '../../types/types';
import styles from './ScoreTable.module.scss';

const scores: Score[] = [
  { name: 'Ursula', time: '1:23' },
  { name: 'Elio', time: '3:45' },
  { name: 'Rosie', time: '6:12' },
];

const ScoreTable = (): JSX.Element => {
  const table: string = styles.table;
  const row: string = styles.row;

  return (
    <table className={table}>
      <thead>
        <tr>
          <td>Name</td>
          <td>Score</td>
        </tr>
      </thead>
      <tbody>
        {scores.map((score) => (
          <tr className={row}>
            <td>{score.name}</td>
            <td>{score.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ScoreTable;