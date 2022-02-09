// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDFOI_sIvSSk6w3W-cVXkv-cTVXACfJbvg",
    authDomain: "virtual-pilgrimage.firebaseapp.com",
    databaseURL: "https://virtual-pilgrimage-default-rtdb.firebaseio.com",
    projectId: "virtual-pilgrimage",
    storageBucket: "virtual-pilgrimage.appspot.com",
    messagingSenderId: "670546372117",
    appId: "1:670546372117:web:0c7be905127b3d9b57901c",
    measurementId: "G-3PQ78TYJK6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Refernece contactInfo collections
  let contactInfo = firebase.database().ref("user information");
  
  // Listen for a submit
  document.querySelector(".contact-form").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    //   Get input Values
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let message=document.querySelector(".message").value;
    console.log(name, email, message);
  
    saveContactInfo(name, email, message);
  
    document.querySelector(".contact-form").reset();
  }
  
  // Save infos to Firebase
  function saveContactInfo(name, email, message) {
    let newContactInfo = contactInfo.push();
  
    newContactInfo.set({
      Name: name,
      Email: email,
      Message: message,
    });
  }