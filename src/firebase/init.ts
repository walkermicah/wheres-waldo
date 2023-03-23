import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCDJtXMVV1CGb279I_A963u9mkVqj1HQ7k',
  authDomain: 'waldo-4ae0b.firebaseapp.com',
  projectId: 'waldo-4ae0b',
  storageBucket: 'waldo-4ae0b.appspot.com',
  messagingSenderId: '1002788972180',
  appId: '1:1002788972180:web:528c30bd122500cc03b681',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
