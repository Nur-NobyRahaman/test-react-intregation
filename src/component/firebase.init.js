// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxMQ9qYaowvZTyHYXYRIkuM4XpWSUfeEo",
  authDomain: "test-react-intregation.firebaseapp.com",
  projectId: "test-react-intregation",
  storageBucket: "test-react-intregation.appspot.com",
  messagingSenderId: "703901283309",
  appId: "1:703901283309:web:8d156f1781cb1db5676de4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;