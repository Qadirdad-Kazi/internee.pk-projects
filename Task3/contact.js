
function validateForm() {
let x = document.forms["myForm"]["name"].value;
let y = document.forms["myForm"]["email"].value;
let z = document.forms["myForm"]["message"].value;
if (x == "") {
alert("Name must be filled out");
return false;
}
if (y == "") {
alert("Email must be filled out");
return false;
}
if (z == "") {
alert("Message must be filled out");
return false;
}
else
{
alert("Your Application has been Submitted Successfully")
return true;
}
}


