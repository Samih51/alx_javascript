function validatePassword(event){

    let password = document.getElementById("password").value;
    let error = document.getElementById("error");
    console.log(password);
    var specialCharacterRegex = /[^a-zA-Z0-9\s]/;

    if ((password.length<8))
    {
        error.textContent = "Your password needs to be atleast 8 in length";
        event.preventDefault();
    }
    else if (!(/[A-Z]/.test(password))){
        error.textContent = "Your password needs to have atleast 1 uppercase letter";
        event.preventDefault();

    }
    else if ( !(/[a-z]/.test(password))){
        error.textContent = "Your password needs to have atleast 1 lowercase letter";
        event.preventDefault();
    }
    else if (!(/\d/.test(password))){
        error.textContent = "Your password needs to have atleast one numeric digit";
        event.preventDefault();
    }
    else if(!(specialCharacterRegex.test(password))){
        error.textContent = "Your password needs to have atleast 1 special character (e.g., !@#$%^&*)";
        event.preventDefault();
    }
    else {
        error.textContent ="";
    }
  
}

