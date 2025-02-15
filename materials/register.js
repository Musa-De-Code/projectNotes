  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
//  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";


  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBqFCfIJBO6nSDIFfKYKLGUMl3oROXbfMQ",
    authDomain: "notekeeper-4956d.firebaseapp.com",
    projectId: "notekeeper-4956d",
    storageBucket: "notekeeper-4956d.firebasestorage.app",
    messagingSenderId: "82251941531",
    appId: "1:82251941531:web:07ad4493296f77024a283e",
    measurementId: "G-415NJ3EVR3"
  };

// Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


const submit = document.getElementById('loginSubmitBtn');

submit.addEventListener('click', function(event){
  event.preventDefault();
  //inputs fields
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;


  const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    window.location.href="index.html";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });

})


