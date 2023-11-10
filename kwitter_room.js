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
  

 
function addRoom() {
  room_name = document.getElementById("room_name").value; 
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = kwitter_page.html; 
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) 
{
      document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
//Start code
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" +Room_names+ "</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
});});}
getData(); 

function redirectToRoomName(name){
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}
