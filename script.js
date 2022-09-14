const error_box = document.getElementById("alert-error");
var error = false;

//A reset function to reset all inputs when reset btn is clicked
function reset() {
    document.getElementById("full_name").value = "";
    document.getElementById("email_address").value = "";
    document.getElementById("phone_nb").value = "";
    document.getElementById("msg").value = "";

}

// A function that resets the content of the div to its initial state
function resetDiv() {
    error_box.style.backgroundColor = "white";
    document.getElementById("alert-error").innerHTML = "";
    error = false;
}

// A function that validate the full name (minimum length 5)
function validateName(name) {
    if (name.length < 5) {
        const node = document.createElement("li");
        const textnode = document.createTextNode("Invalid full name, should be at least 5 characters long");
        node.appendChild(textnode);
        error_box.appendChild(node);
        error = true;
    }
}




// A function that validates Email addresses
function validateEmail(email) {
    const email_array = email.split("@");

    for (let i = 0; i < email_array.length; i++) {
        console.log(email_array[i]);
    }

    if (email_array.length != 2) {
        const node = document.createElement("li");
        const textnode = document.createTextNode("Invalid email.Email should be of the form someone@someone");
        node.appendChild(textnode);
        error_box.appendChild(node);
        error = true;
    }
    else {
        if (email_array[0].length < 3 || email_array[1].length < 5) {
            const node = document.createElement("li");
            const textnode = document.createTextNode("Invalid email. Should be at least 3 characters before @ and 5 after it.");
            node.appendChild(textnode);
            error_box.appendChild(node);
            error = true;
        }
    }
}

// A function that validates the phone number
function validatePhoneNb(phone_nbr) {

    if (phone_nbr.length < 11) {
        const node = document.createElement("li");
        const textnode = document.createTextNode("Invalid phone number. Too short.");
        node.appendChild(textnode);
        error_box.appendChild(node);
        error = true;
    }
    else {
        let start_code = phone_nbr.slice(0, 4);
        if (start_code != "+961") {
            const node = document.createElement("li");
            const textnode = document.createTextNode("Invalid email. Should start with +961");
            node.appendChild(textnode);
            error_box.appendChild(node);
            error = true;
        }
        else {
            if (phone_nbr.charAt(4) == 3 && (phone_nbr.slice(5).isNan() == false || phone_nbr.slice(5).length != 6)) {
                const node = document.createElement("li");
                const textnode = document.createTextNode("Invalid email.");
                node.appendChild(textnode);
                error_box.appendChild(node);
                error = true;
            }

            else if (phone_nbr.slice(4).length != 8) {
                const node = document.createElement("li");
                const textnode = document.createTextNode("Invalid email.");
                node.appendChild(textnode);
                error_box.appendChild(node);
                error = true;
            }

        }
    }
}

// A function that validates the message in textarea
function validateMsg(msg) {
    if (msg.length < 100) {
        const node = document.createElement("li");
        const textnode = document.createTextNode("Messages should be at least 100 characters long.");
        node.appendChild(textnode);
        error_box.appendChild(node);
        error = true;
    }
}


// Main function
function main() {

    let full_name = document.getElementById("full_name").value;
    let email = document.getElementById("email_address").value;
    let phone_nbr = document.getElementById("phone_nb").value;
    let msg = document.getElementById("msg").value;

    validateName(full_name);
    validateEmail(email);
    validatePhoneNb(phone_nbr);
    validateMsg(msg);
    console.log("TRUE OR FALSE? "+ error);

    if (error == true) {
        error_box.style.backgroundColor = "rgb(215, 113, 113)";
   
    }
    else if (error == false) {
        error_box.style.backgroundColor = "rgb(113, 215, 154)";
        error_box.innerHTML = "Successfully submitted form";
    }

}

//added to add data to the db
if (error == false) {
    console.log("Successfully submitted form");

    const my_form = document.getElementById('form-id');

    my_form.addEventListener('submit', function (e) {

        e.preventDefault();

        const form_data = new FormData(this);

        fetch('http://localhost/bootstrap_assign/getdata.php', {
            method: 'POST',
            body: form_data
        }).then(function (response) {
            return response.text();
        }).then(function (text) {
            console.log(text);
        }).catch(function (error) {
            console.log(error);
        })
    });
}


