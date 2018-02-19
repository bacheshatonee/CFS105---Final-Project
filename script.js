function idCard(){
  //alert("Enter Function - Debug Message");



    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var address = document.getElementById("address").value;



    var postFullName =  firstName + " " + lastName;

    document.getElementById("postFullName").innerHTML = postFullName;
    document.getElementById("postAddress").innerHTML = address;

    var numberArray = [0];

    var age = parseInt(document.getElementById("age").value);
    numberArray.push(age);

  //  alert("numberArray.push(age) - Debug Message - age: " + age);

    var phoneNumber = parseInt(document.getElementById("phoneNumber").value);
    numberArray.push(phoneNumber);

  //  alert("numberArray.push(phoneNumber) - Debug Message - phoneNumber: " + phoneNumber);

    for (var i = 0; i < numberArray.length; i++) {
  //    alert("Inside for loop - Debug Message - i: " + i);
      if (numberArray[i] <= 100) {
        var postAge = "Age: " + numberArray[i];
        document.getElementById("postAge").innerHTML = postAge;
      }else if (numberArray[i] >= 100) {
        var postPhoneNumber = "Phone Number: " + numberArray[i];
        document.getElementById("postPhoneNumber").innerHTML = postPhoneNumber;
      }

    }



}
