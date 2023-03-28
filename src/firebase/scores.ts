import { v4 as uuid } from 'uuid';
import { collection, getDocs, setDoc, doc } from 'firebase/firestore';
import { db } from './init';

const getScores = async () => {
  try {
    const scores = await getDocs(collection(db, 'Scores'));
    return scores;
  } catch (err) {
    alert(err);
  }
};

const addScore = async (playerName: string, time: number) => {
  try {
    await setDoc(doc(db, 'Scores', uuid()), {
      name: playerName,
      time: time,
    });
  } catch (err) {
    alert(err);
  }
};

export { getScores, addScore };
