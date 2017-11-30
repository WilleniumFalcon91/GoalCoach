import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBLe5LXZPoI16oU5gl2BNoIWVBd9477C5M",
    authDomain: "goalcoach-352a5.firebaseapp.com",
    databaseURL: "https://goalcoach-352a5.firebaseio.com",
    projectId: "goalcoach-352a5",
    storageBucket: "",
    messagingSenderId: "46458109609"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoal');