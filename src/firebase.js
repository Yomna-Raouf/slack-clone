import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAH5fAouh5RctF3Izlze5xMibhoRPhLkOE",
    authDomain: "slack-clone-5b2ee.firebaseapp.com",
    databaseURL: "https://slack-clone-5b2ee.firebaseio.com",
    projectId: "slack-clone-5b2ee",
    storageBucket: "slack-clone-5b2ee.appspot.com",
    messagingSenderId: "760320379129",
    appId: "1:760320379129:web:ed81b8360ae9a40d217a28",
    measurementId: "G-LDHL1G9X8Z"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;