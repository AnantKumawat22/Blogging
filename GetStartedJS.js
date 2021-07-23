function googleSignup(){
    firebase.auth.createUserWithEmailAndPassword('abcd@gmail.com', "123");
}

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})

firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
});