
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCRflMyOFSAiHvNtcR7IhpY4a5S-Xb8lm4",
    authDomain: "travel-1fd78.firebaseapp.com",
    projectId: "travel-1fd78",
    storageBucket: "travel-1fd78.appspot.com",
    messagingSenderId: "35347728466",
    appId: "1:35347728466:web:ec3bb6cefd3181bc88378b",
    measurementId: "G-NMQBKTB1M7"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
