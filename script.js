function formValidate(){

    //getting input from form
    var name=document.forms["RegForm"]["Name"];
    var email=document.forms["RegForm"]["Email"];
    var address=document.forms["RegForm"]["Address"];
    var password=document.forms["RegForm"]["Password"];
    var cpassword=document.forms["RegForm"]["cPassword"];
    var number=document.forms["RegForm"]["Phone"];

    //for label errors of each fields in the form
    var errorname=document.getElementById("name");
    var erroremail=document.getElementById("email");
    var erroraddress=document.getElementById("address");
    var errorpassword=document.getElementById("pwd");
    var errorcpassword=document.getElementById("cpwd");
    var errornumber=document.getElementById("phone");


    //checking whether the name has atleast 4 characters
    if(name.value.length<4){
        errorname.innerText="atleast 4 characters are required";
        name.focus();
        return false;
    }
    else{
        errorname.innerText=""
    }

    //check whether the adress has been given
    if(address.value==""){
        erroraddress.innerText="address field cannot be empty";
        address.focus();
        return false;
    }
    else
        erroraddress.innerText=""
    

    //checking the email that it can't be empty
    if(email.value.length==0){
        erroremail.innerText="Email cannot be empty";
        email.focus();
        return false;
    }
    //checking the email such that it should in the form of _@_._

    else if(email.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/)){
        erroremail.innerText=""
        
    }
    else{
        erroremail.innerText="Email should consist of @ and .";
        email.focus();
        return false;
    }

    //checking whether password is empty
    if(password.value==""){
        errorpassword.innerText="Password cannot be empty"
        password.focus();
        return false;
    }

    //checking whether password is includes
    // A-Z,a-z,0-9 and special character with more than 7 characters
    else if(password.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{7,15}$/)){
        errorpassword.innerText=""
    }
    else{
        errorpassword.innerText="Inavlid password"
        password.focus()
        return false;
    }

    //for conformation of password
    //checking it shouldn't be empty
    if(cpassword.value==""){
        errorcpassword.innerText="Password cannot be empty"
        cpassword.focus();
        return false;
    }
    //checking whether both passowrds has been matched
    else if(cpassword.value==password.value){
        errorcpassword.innerText=""
    }
    else{
        errorcpassword.innerText="Passwords were not matched"
        cpassword.focus()
        return false;
    }

    //checking whether the phone number is empty
    if(number.value==""){
        errornumber.innerText="Phone number cannot be empty"
        number.focus();
        return false
    }
    else{
        errornumber.innerText=""
        return true;
    }
}