
function login()
{
    let userVal = document.getElementById("t1").value;
    let passVal = document.getElementById("t2").value;

    if(userVal=="Entri Elevate" && passVal=="admin123")
    {
        window.location.assign("homepage.html");
        alert("Login Successful!");
       
    }
    else
    {
        alert("Sorry! Wrong Credentials")
     }
}

function forget()
{
    let a=prompt("Enter login E-Mail:");
    window.alert("Verification link sent to your email.Thank You!");
}