import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const firebaseConfig = {
  apiKey: 'AIzaSyByGplhNBdXvQJAI5kbZuxZjj8B19gG5Kg',
  authDomain: 'netflixclone-51102.firebaseapp.com',
  projectId: 'netflixclone-51102',
  storageBucket: 'netflixclone-51102.appspot.com',
  messagingSenderId: '45613968818',
  appId: '1:45613968818:web:fc5525ff031d8001e288ab',
  measurementId: 'G-DXDBP1N4GL',
};

const firebase = Firebase.initializeApp(firebaseConfig);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
