document.getElementById("login-btn").addEventListener("click", function () {
  //1- get the mobile number input
  const numberInput = document.getElementById("input-number");
  const contactNumber = numberInput.value;
  console.log(contactNumber);

  //2- get the pin input
  const inputPin = document.getElementById("input-pin");
  const pin = inputPin.value;
  console.log(pin);

  if(contactNumber == "01887069574" && pin == "1234" ){
    alert("Login Successfully");
    window.location.replace("home.html");
  }else{
    alert("Invalid Mobile Number or Pin");
  }
});