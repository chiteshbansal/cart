import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from "firebase";
import "firebase/firestore";



 const firebaseConfig = {
    apiKey: "AIzaSyCu9QFcQaIraAOjMT3UksGNUhfWgbQrnrA",
    authDomain: "cart-bf36a.firebaseapp.com",
    databaseURL: "https://cart-bf36a.firebaseio.com",
    projectId: "cart-bf36a",
    storageBucket: "cart-bf36a.appspot.com",
    messagingSenderId: "495488024981",
    appId: "1:495488024981:web:efbea603e4f3d9536f769c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
