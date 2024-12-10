function validateForm(event){
        event.preventDefault(); // Prevent form submission
    
        let firstName = document.forms["contactUs"]["firstName"].value;
        let lastName = document.forms["contactUs"]["lastName"].value;
        let email = document.forms["contactUs"]["email"].value;
        let inquiry = document.forms["contactUs"]["inquiry"].value;
        let message = document.forms["contactUs"]["message"].value;
    
        if (firstName == "") {
            alert("First Name must be filled out");
            return false;
        }
        if (lastName == "") {
            alert("Last Name must be filled out");
            return false;
        }
        if (email == "") {
            alert("Email must be filled out");
            return false;
        }
        if (inquiry == "") {
            alert("Please select an inquiry type");
            return false;
        }
        if(message == ""){
            alert("Message must be filled out");
            return false
        }

        return true;
        alert("inquiry submitted successfully!"); 
        document.forms["contactUs"].submit();
}