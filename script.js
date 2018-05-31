function goodName() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    let nameRegex = /^[A-Z][a-z]+$/;
    if (firstName.match(nameRegex) && lastName.match(nameRegex)) {
        alert('Valid Name Entered');
        console.log(true);
    } else {
        alert ('Name entered is Invalid');
        console.log(false);
    }
    

};