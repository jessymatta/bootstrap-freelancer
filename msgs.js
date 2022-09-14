const container = document.getElementById("output-msgs");

fetch('http://localhost/bootstrap_assign/msgs.php').then(function (response) {
    console.log(response);
    return response.json();
})
    .then(function (msgss) {

        for (let msg of msgss) {
            // console.log(msg.msg);
            const node = document.createElement("li");
            const textnode = document.createTextNode(msg.msg);
            node.appendChild(textnode);
            container.appendChild(node);

        }

    })

