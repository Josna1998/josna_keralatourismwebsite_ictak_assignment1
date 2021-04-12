let password = document.getElementById("password");
let errorpwd = document.getElementById("errorpwd");
function validatepwd(){
    let pwdexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
    if(pwdexp.test(password.value)){
        errorpwd.innerHTML = "valid";
        errorpwd.style.color = "green";
        return true;
      }
      else{
        errorpwd.innerHTML = "Invalid";
        errorpwd.style.color = "red";
        return false;
      }    
}