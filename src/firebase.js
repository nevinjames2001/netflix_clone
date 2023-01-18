// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKMt7sq9AvOV0jbg72pLbj6J-FFt2ggO8",
  authDomain: "netflix-clone-170ab.firebaseapp.com",
  projectId: "netflix-clone-170ab",
  storageBucket: "netflix-clone-170ab.appspot.com",
  messagingSenderId: "666941074609",
  appId: "1:666941074609:web:fd0f82caa1ff6b971e8690",
  measurementId: "G-BD02J83W6H"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db = getFirestore(app);


const analytics = getAnalytics(app);

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBKMt7sq9AvOV0jbg72pLbj6J-FFt2ggO8",
//   authDomain: "netflix-clone-170ab.firebaseapp.com",
//   projectId: "netflix-clone-170ab",
//   storageBucket: "netflix-clone-170ab.appspot.com",
//   messagingSenderId: "666941074609",
//   appId: "1:666941074609:web:fd0f82caa1ff6b971e8690",
//   measurementId: "G-BD02J83W6H"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);