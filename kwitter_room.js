
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyByoKnfrg-ABcDUHibXugIVBpabc411SFs",
      authDomain: "chats-app-5c1c6.firebaseapp.com",
      databaseURL: "https://chats-app-5c1c6-default-rtdb.firebaseio.com",
      projectId: "chats-app-5c1c6",
      storageBucket: "chats-app-5c1c6.appspot.com",
      messagingSenderId: "1014072461514",
      appId: "1:1014072461514:web:53200410b6d2e763cb4c33",
      measurementId: "G-3QJBLWKQKF"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
