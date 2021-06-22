var firebaseConfig = {
      apiKey: "AIzaSyDVD2syaKOlAZxzigM3M293v_E8rcraGXQ",
      authDomain: "kwitter2-bace6.firebaseapp.com",
      databaseURL: "https://kwitter2-bace6-default-rtdb.firebaseio.com",
      projectId: "kwitter2-bace6",
      storageBucket: "kwitter2-bace6.appspot.com",
      messagingSenderId: "1079533121777",
      appId: "1:1079533121777:web:fb803c0ce633032341b950"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Roomname - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick ='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr> ";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            porpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",room);
      window.location = "kwitter_page.html";
  
}
function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "index.html";
}