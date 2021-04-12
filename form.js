let email = document.getElementById("email");
let error = document.getElementById("error");
let mobile = document.getElementById("mobile");
let errormob = document.getElementById("errormob");
let password = document.getElementById("password");
let errorpwd = document.getElementById("errorpwd");

function validate(){
   
  let regexp = /^([A-Za-z0-9\.-])+@([A-Za-z0-9\-])+\.([a-z]{2,3})(.[a-z]{2,3})?$/
  let phoneexp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  let pwdexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
  let validation;
  let validationphone;
  let validationpassword;
  if(regexp.test(email.value)){
      error.innerHTML = "valid";
      error.style.color = "green";
      validation = true;
  }
  else{
     error.innerHTML = "Invalid";
     error.style.color = "red";
     validation = false;
  }
  if(phoneexp.test(mobile.value)){
      errormob.innerHTML = "valid";
      errormob.style.color = "green";
      validationphone = true;
  }
  else{
      errormob.innerHTML = "Invalid";
      errormob.style.color = "red";
      validationphone = false;
  }

  if(pwdexp.test(password.value)){
    errorpwd.innerHTML = "valid";
    errorpwd.style.color = "green";
    validationpassword = true;
  }
  else{
    errorpwd.innerHTML = "Invalid";
    errorpwd.style.color = "red";
    validationpassword = false;
  }
  

  if(validation && validationphone && validationpassword){
      return true;
  }
  else{
      return false;
  }
}


function checkStrength(){
  let password = document.getElementById("password");
  let strong = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
  let medium = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{4,7}$/;
  password.style.border = "2px solid red";
  errorpwd.innerHTML = "weak";
  errorpwd.style.color = "red";                       
  var strength = "weak";
  if(medium.test(password.value)){
    strength = "medium"
    password.style.border = "2px solid orange";
    errorpwd.innerHTML = "medium";
    errorpwd.style.color = "orange";  
  }
  if(strong.test(password.value)){
    strength = "strong";
    password.style.border = "2px solid green";
    errorpwd.innerHTML = "strong";
    errorpwd.style.color = "green"; 
  }
 
}




