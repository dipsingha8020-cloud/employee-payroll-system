function login(){

var user = document.getElementById("username").value;
var pass = document.getElementById("password").value;

if(user == "admin" && pass == "1234")
{
window.location = "payroll.html";
}
else
{
document.getElementById("error").innerHTML="Invalid Login";
}

}