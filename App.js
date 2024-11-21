import { auth, db, storage } from './firebase';
import { 
    collection, 
    addDoc, 
        getDocs 
} from 'firebase/firestore';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

// Αρχικοποίηση
GoogleSignin.configure({
  webClientId: '494615640025-vjcglrfh02b18t1mchos3u3c8anfjq6r.apps.googleusercontent.com', // από το Firebase Console Auth->signIn Method -> webClientId
  androidClientId: '494615640025-vvcn5td3f8n4vqhrctiljn0itauhrn8v.apps.googleusercontent.com', // από το Firebase Console Auth->signIn Method -> androidClientId
});

// Παράδειγμα προσθήκης δεδομένων στο Firestore
const addData = async () => {
    try {
        const docRef = await addDoc(collection(db, "users"), {
            name: "John",
            age: 30
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}; 

// Παράδειγμα χρήσης
const signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    console.log(userInfo);
  } catch (error) {
    console.error(error);
  }
};