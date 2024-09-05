document.getElementById("submit-buttton").addEventListener("click",
    function(){
        //user email get
        const userInput=document.getElementById("user-email");
        const userEmail=userInput.value;

        //user password get
        const passwordInput =document.getElementById("user-password");
        const userPassword=passwordInput.value;

        if(userEmail=="admin@gmail.com" && userPassword=="123456")
        {
            alert("Log in successful!");
            window.location.href="banking.html";
        }
        else if(userEmail!="admin@gmail.com" || userPassword!="123456")
        {
            alert("Username or Password is invalid.Try again!");
        }

    }

)