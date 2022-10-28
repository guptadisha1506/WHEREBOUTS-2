var firebaseConfig = {
      apiKey: "AIzaSyDEc8vgjw4hrqXXcHYK-s6F4obe9MjCFFk",
      authDomain: "wherebouts-10615.firebaseapp.com",
      databaseURL: "https://wherebouts-10615-default-rtdb.firebaseio.com",
      projectId: "wherebouts-10615",
      storageBucket: "wherebouts-10615.appspot.com",
      messagingSenderId: "440123168016",
      appId: "1:440123168016:web:b31b99ed9536ab7a068195",
      measurementId: "G-H50QVDQZFL"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function AddRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="chat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();