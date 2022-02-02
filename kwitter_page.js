//YOUR FIREBASE LINKS
var firebaseConfig = {
       apiKey: "AIzaSyDEH-tG-ECoat5JnhVdZnrZGrRknR-tMhQ", 
       authDomain: "albert--einstein-hnua.firebaseapp.com",
        databaseURL: "https://albert--einstein-hnua-default-rtdb.firebaseio.com",
         projectId: "albert--einstein-hnua",
          storageBucket: "albert--einstein-hnua.appspot.com", 
          messagingSenderId: "283811377588",
           appId: "1:283811377588:web:6ac49a9787da3242dc42e1" };
           // Initialize Firebase 
           firebase.initializeApp(firebaseConfig);
    
   user_name= localStorage.getItem("user_name");
   room_name= localStorage.getItem("room_name");


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;



//End code
      } });  }); }
getData();

function send(){
      msg= document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}