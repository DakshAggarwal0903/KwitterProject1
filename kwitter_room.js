var firebaseConfig = {
    apiKey: "AIzaSyBkflPDy7ah5TWcpEUj3uaflV-7-7JR3EU",
    authDomain: "message-website-897da.firebaseapp.com",
    databaseURL: "https://message-website-897da-default-rtdb.firebaseio.com",
    projectId: "message-website-897da",
    storageBucket: "message-website-897da.appspot.com",
    messagingSenderId: "218002691133",
    appId: "1:218002691133:web:57b752c959ec8319884654",
    measurementId: "G-PET0SKXZE6"
  };
// Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  u=localStorage.getItem("Username"); 
 document.getElementById("wel").innerHTML="Welcome, "+u+"!";

  function addroom(){
    Roomname= document.getElementById("rn").value;
    console.log(Roomname);
    firebase.database().ref("/").child(Roomname).update({
          Purpose: "Adding a room name"
    });
    localStorage.setItem("Room_name",Roomname);
    window.location="kwitter_page.html";
  }
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log(Room_names)
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >Room Name : "+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML +=row;
//End code
});});}
getData();
function redirectToRoomName(r){
  console.log(r);
  localStorage.setItem("Room_name",r);
  window.location="kwitter_page.html";
}

