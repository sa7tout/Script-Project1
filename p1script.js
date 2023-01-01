const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const button = document.getElementById("hidePassword");
var isHidden = true;
const rpasswordInput = document.getElementById('rpassword');
const submitButton = document.getElementById('submit-button');

function validateUsername() {

    const username = usernameInput.value.trim();
 if (username.length < 3 || username.length > 25 ) {
   document.getElementById('username').classList="w-full px-8 py-4 rounded-lg font-medium bg-red-100 border border-red-200 placeholder-red-500 text-sm focus:outline-none focus:border-red-400 focus:bg-red"
   document.getElementById('username-error').textContent = 'Username needs to be between 3 to 25 characters.';
   return false;
 } 
 else{
    document.getElementById('username').classList="w-full px-8 py-4 rounded-lg font-medium bg-green-100 border border-green-200 placeholder-green-500 text-sm focus:outline-none focus:border-green-400 focus:bg-green"
    document.getElementById('username-error').textContent = '';
    return true;
 }
   
 }

 function validateEmail() {
    const email = document.getElementById("email").value;
    var pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!pattern.test(email) || email=="") {
        document.getElementById('email').classList="w-full px-8 py-4 rounded-lg font-medium bg-red-100 border border-red-200 placeholder-red-500 text-sm focus:outline-none focus:border-red-400 focus:bg-red mt-5"
        document.getElementById('email-error').textContent = 'Invalid email address.';
      return false;
    }
    else{
        document.getElementById('email').classList="w-full px-8 py-4 rounded-lg font-medium bg-green-100 border border-green-200 placeholder-green-500 text-sm focus:outline-none focus:border-green-400 focus:bg-green mt-5"
        document.getElementById('email-error').textContent = '';
        return true;
     }

 }

 function validatePassword() {

    const password = passwordInput.value;

    var pattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (!pattern.test(password) || password=="" || password.length<8) {
        document.getElementById('password').classList="w-full px-8 py-4 rounded-lg font-medium bg-red-100 border border-red-200 placeholder-red-500 text-sm focus:outline-none focus:border-red-400 focus:bg-red"
        document.getElementById('password-error').textContent ='Invalid password. Password must be at least 8 characters long and contain at least one symbol and one capital letter.';
      return false;
    }
    else{
        document.getElementById('password').classList="w-full px-8 py-4 rounded-lg font-medium bg-green-100 border border-green-200 placeholder-green-500 text-sm focus:outline-none focus:border-green-400 focus:bg-green mt-5"
        document.getElementById('password-error').textContent = '';
        return true;
    }
   
 }

 function showpassword() {
    if (isHidden) {
      password.setAttribute("type", "text");
      isHidden = false;
    } else {
      password.setAttribute("type", "password");
      isHidden = true;
    }
  }

 function validateRpassword() {

    const rpassword = rpasswordInput.value;

    if (rpassword != passwordInput.value || rpassword=="") {
        document.getElementById('rpassword').classList="w-full px-8 py-4 rounded-lg font-medium bg-red-100 border border-red-200 placeholder-red-500 text-sm focus:outline-none focus:border-red-400 focus:bg-red"
        document.getElementById('rpassword-error').textContent = 'The passwords do not match.';
      return false;
    }
    else{
        document.getElementById('rpassword').classList="w-full px-8 py-4 rounded-lg font-medium bg-green-100 border border-green-200 placeholder-green-500 text-sm focus:outline-none focus:border-green-400 focus:bg-green mt-5"
        document.getElementById('rpassword-error').textContent = '';
        return true;
    }
 
 }

usernameInput.addEventListener('input',validateUsername);

emailInput.addEventListener('input',validateEmail);

passwordInput.addEventListener('input',validatePassword);

button.addEventListener("click", showpassword);

rpasswordInput.addEventListener('input',validateRpassword);


submitButton.addEventListener('click',function validateform(){
if(validateUsername() && validateEmail() && validatePassword() && validateRpassword() ){
  window.location.replace("Home.html");
}
else{
    return false;
}
});
