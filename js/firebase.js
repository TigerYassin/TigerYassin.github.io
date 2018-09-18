
// Initialize Firebase
var config = {
apiKey: "AIzaSyDCERDMxCvamawTPZdsc69J7IQ1ixF0cY8",
authDomain: "website-f5539.firebaseapp.com",
databaseURL: "https://website-f5539.firebaseio.com",
projectId: "website-f5539",
storageBucket: "website-f5539.appspot.com",
messagingSenderId: "696022126251"
};
firebase.initializeApp(config);




var Uname = document.getElementById('name');
var email = document.getElementById("email");
var phone = document.getElementById('phone');
var message = document.getElementById('message');
var send = document.getElementById('sendMessageButton');
console.log(firebase);






function clicked() {


	var database = firebase.database();
	var ref = database.ref(Uname.value);

	var data = {
		email : email.value,
		phone : phone.value,
		message: message.value
	}
	ref.push(data);
	setTimeout(function(){
		alert("Thank You! I'll reply back to you shortly!");
}, 300);

}
