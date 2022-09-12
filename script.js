const error_box = document.getElementById("alert-error");

//A reset function to reset all inputs when reset btn is clicked
function reset() {
    document.getElementById("full_name").value = "";
    document.getElementById("email_address").value = "";
    document.getElementById("phone_nb").value = "";
    document.getElementById("msg").value = "";
    document.getElementById("alert-error").li.value = "";
    $("#alert-error").empty();
    // $('#alert-error div').empty();

}

// A function that validate the full name (minimum length 5)
function validateName(name) {
    if (name.length < 5) {
        const node = document.createElement("p");
        const textnode = document.createTextNode("Invalid full name, should be at least 5 characters long");
        node.appendChild(textnode);
        error_box.appendChild(node);
    }
}

// A function that validates Email addresses
function validateEmail(email){
    const email_array = email.split("@");

    for(let i=0; i<email_array.length; i++){
    console.log(email_array[i]);
    }

    if(email_array.length!=2){
        const node = document.createElement("li");
        const textnode = document.createTextNode("Invalid email.Email should be of the form someone@someone");
        node.appendChild(textnode);
        error_box.appendChild(node);
    }
    else{
        if(email_array[0].length<3 || email_array[1].length<5){
        const node = document.createElement("li");
        const textnode = document.createTextNode("Invalid email. Should be at least 3 characters before @ and 5 after it.");
        node.appendChild(textnode);
        error_box.appendChild(node);
        }
    }
}

// A function that validates the phone number
function validatePhoneNb(phone_nbr){

    if(phone_nbr.length<11){
        const node = document.createElement("li");
        const textnode = document.createTextNode("Invalid phone number. Too short.");
        node.appendChild(textnode);
        error_box.appendChild(node);
    }
    else{
    let start_code = phone_nbr.slice(0, 4);
    if(start_code!="+961"){
        const node = document.createElement("li");
        const textnode = document.createTextNode("Invalid email. Should start with +961");
        node.appendChild(textnode);
        error_box.appendChild(node);
    }
    else{
        if(phone_nbr.charAt(4)==3 && (phone_nbr.slice(5).isNan()==false || phone_nbr.slice(5).length!=6)){
            const node = document.createElement("li");
            const textnode = document.createTextNode("Invalid email.");
            node.appendChild(textnode);
            error_box.appendChild(node);
        }

        else if(phone_nbr.slice(4).length!=8){
            const node = document.createElement("li");
            const textnode = document.createTextNode("Invalid email.");
            node.appendChild(textnode);
            error_box.appendChild(node);
        }

    }
}
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
    validateEmail(email);

    validatePhoneNb(phone_nbr);
    


}
