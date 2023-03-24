import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import convertToMinutes from '../../util/convertToMinutes';
import { getScores } from '../../firebase/scores';
import { Score } from '../../types/types';
import styles from './ScoreTable.module.scss';

const ScoreTable = (): JSX.Element => {
  const [scores, setScores] = useState<Score[]>([]);

  useEffect(() => {
    const getData = async () => {
      const scoreData = await getScores();
      const scores: Score[] = [];
      if (scoreData) {
        scoreData.forEach((s) => {
          scores.push(s.data() as Score);
        });
      }
      const sortedScores = scores.sort((a, b) => (a.time > b.time ? 1 : -1));
      setScores(sortedScores);
    };
    getData();
  });

  const table: string = styles.table;
  const row: string = styles.row;

  return (
    <div>
      <table className={table}>
        <caption>Best Times</caption>
        <tbody>
          {scores.map(
            (score): JSX.Element => (
              <tr className={row} key={uuid()}>
                <td>{score.name}</td>
                <td>{convertToMinutes(score.time)}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ScoreTable;
