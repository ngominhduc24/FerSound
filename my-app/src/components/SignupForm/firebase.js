import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// const firebaseConfig = {
//     apiKey: "AIzaSyCM-VrqHZKLBLhJzlDudOKJGUGul4W7sGk",
//     authDomain: "swp391-3fcbc.firebaseapp.com",
//     projectId: "swp391-3fcbc",
//     storageBucket: "swp391-3fcbc.appspot.com",
//     messagingSenderId: "691277329952",
//     appId: "1:691277329952:web:1e280a9bab40c640de2e45",
//     measurementId: "G-MVNE99TDXQ"
// };


const firebaseConfig = {
    apiKey: "AIzaSyCn_IbCY0JYCadBU-baKyjmMjRWGMQqvwQ",
    authDomain: "swp-sms-demo.firebaseapp.com",
    projectId: "swp-sms-demo",
    storageBucket: "swp-sms-demo.appspot.com",
    messagingSenderId: "946550516173",
    appId: "1:946550516173:web:284d01430c6e8ed25ffc84",
    measurementId: "G-3QWEWQPPWV"
};


// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebase.auth().settings.appVerificationDisabledForTesting = true;

export { firebase };