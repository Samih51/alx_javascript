function handleFormSubmit(event) {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.createElement("p");
    let form = document.getElementById("submitForm");
    let previousMessage = document.getElementById("message")

    if (previousMessage != null)
    previousMessage.textContent = "";

    if (name === "" || email === "") {
        message.textContent = "Please fill in all fields";
        message.id = "message";
        form.append(message);
        event.preventDefault();
    } else {
        message.textContent = "Form submitted successfully!";
        message.id = "message";
        form.append(message);
        setTimeout(function () {
            form.removeChild(message);
        }, 5000);
    
    }
}
