import { doc, getDoc } from 'firebase/firestore';
import { db } from './init';

const getTargetCoordinates = async (target: string) => {
  try {
    const docRef = doc(db, 'Target Coordinates', target);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  } catch (err) {
    alert(err);
  }
};

export default getTargetCoordinates;
