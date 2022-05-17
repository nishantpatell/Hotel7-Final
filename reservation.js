const firebaseConfig = {
    apiKey: "AIzaSyCy9jpEG14Z0gFCVy3SeAm9QOBEfM1rNDk",
    authDomain: "hotel7-63465.firebaseapp.com",
    projectId: "hotel7-63465",
    databaseURL:"https://hotel7-63465-default-rtdb.firebaseio.com/",
    storageBucket: "hotel7-63465.appspot.com",
    messagingSenderId: "214545323784",
    appId: "1:214545323784:web:e46d240ae98cd6d2873ebd"
  };
const app = firebase.initializeApp(firebaseConfig);
const dbRef = firebase.database().ref();

const detailsRef = dbRef.child('userdetails');
detailsRef.on("child_added", function(snapshot, prevChildKey){
    var newPost = snapshot.val();
});

function send(){
    var first = document.getElementById("first").value;
    var last = document.getElementById("last").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var checkin = document.getElementById("checkin").value;
    var checkout = document.getElementById("checkout").value;
    var adults = document.getElementById("adults").value;
    var children = document.getElementById("children").value;
    var room = document.getElementById("room").value;

    detailsRef.push().set({
        first: first,
        last: last,
        email: email,
        phone: phone,
        checkin: checkin,
        checkout: checkout,
        adults: adults,
        children: children,
        room: room,
    });
}