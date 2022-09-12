const error_box = document.getElementById("alert-error");

//A reset function to reset all inputs when reset btn is clicked
function reset() {
    document.getElementById("full_name").value = "";
    document.getElementById("email_address").value = "";
    document.getElementById("phone_nb").value = "";
    document.getElementById("msg").value = "";

}

// A function that validate the full name (minimum length 5)
function validateName(name) {
    if (name.length < 5) {
        const node = document.createElement("li");
        const textnode = document.createTextNode("Invalid full name, should be at least 5 characters long");
        node.appendChild(textnode);
        error_box.appendChild(node);
    }
}

// A function that validates Email addresses
function validateEmail(email){
    
}




// Main function
function main() {
    let full_name = document.getElementById("full_name").value;
    console.log(full_name);

    let email = document.getElementById("email_address").value;
    console.log(email);

    let phone_nbr = document.getElementById("phone_nb").value;
    console.log(phone_nbr);

    let msg = document.getElementById("msg").value;
    console.log(msg);

    validateName(full_name);


}
