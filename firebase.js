//ΔΕΝ ΧΡΗΣΙΜΟΠΟΙΩ ΑΥΤΗΝ ΤΗΝ ΣΕΛΙΔΑ ΑΚΟΜΑ ΣΤΟ PROJECT
//ΕΙΣΑΓΩΓΗ ΤΩΝ ΥΠΗΡΕΣΙΩΝ ΤΟΥ FIREBASE

import { initializeApp } from 'firebase/app';     //για να χρησιμοποιήσω το Firebase, εισάγω και αρχικοποιω το firebase
import { getAuth } from 'firebase/auth';          //για να χρησιμοποιήσω το Auth το Firebase, εισάγω και αρχικοποιω το firebase/auth
import { getFirestore } from 'firebase/firestore'; //για να χρησιμοποιήσω το Firestore
import { getStorage } from 'firebase/storage';    //για να χρησιμοποιήσω το Storage

// Ρυθμίσεις Firebase από το Firebase Console
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id",
  measurementId: "your-measurement-id"
};

// Αρχικοποίηση Firebase
const app = initializeApp(firebaseConfig);

// Εξαγωγή των υπηρεσιών που χρειάζεστε
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app; 