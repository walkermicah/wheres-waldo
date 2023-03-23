import { doc, getDoc } from 'firebase/firestore';
import { db } from './init';

const getTargetCoordinates = async (target: string) => {
  const docRef = doc(db, 'Target Coordinates', target);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};

export default getTargetCoordinates;
