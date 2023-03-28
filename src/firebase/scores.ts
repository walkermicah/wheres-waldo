import { v4 as uuid } from 'uuid';
import { collection, getDocs, setDoc, doc } from 'firebase/firestore';
import { db } from './init';

const getScores = async () => {
  const scores = await getDocs(collection(db, 'Scores'));
  if (scores) {
    return scores;
  }
};

const addScore = async (playerName: string, time: number) => {
  await setDoc(doc(db, 'Scores', uuid()), {
    name: playerName,
    time: time,
  });
};

export { getScores, addScore };
