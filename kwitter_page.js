
// Your web app's Firebase configuration
    const firebaseConfig = {
    apiKey: "AIzaSyCzDBrrpf03rMQgsjuuCjIeQfRRfor4pBw",
    authDomain: "let-s-chat-webapp-a2718.firebaseapp.com",
    projectId: "let-s-chat-webapp-a2718",
    storageBucket: "let-s-chat-webapp-a2718.appspot.com",
    messagingSenderId: "220117145646",
    appId: "1:220117145646:web:3023be2efee6399b0ee7bf"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var user_name = localStorage.getItem("user_name"); 
var room_name = localStorage.getItem("room_name"); 

