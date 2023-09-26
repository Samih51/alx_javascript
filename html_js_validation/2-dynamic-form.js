function generateInputFields(numFields){
    var inputs = [];
    let container = document.getElementById("inputContainer");
    for (let i=0;i<numFields;i++){
        inputs[i]=document.createElement("input");
        inputs[i].type = "text";
        inputs[i].name = "field"+i;
        inputs[i].id = "field"+i;
        container.append(inputs[i]);

    }
}

function validateForm(num){
    let container = document.getElementById("inputContainer");
    // Clear any previous error messages
    let previousError = document.getElementById("error");
    if (previousError) {
        container.removeChild(previousError);
    }
    let error = document.createElement("p");
    let input = [];
    for (let i=0; i<num; i++){
        let id = "field"+i;
        input[i] = document.getElementById(id);

        if (input[i].value==""){
            error.textContent = "Please fill in all fields";
            error.id = "error";
            container.append(error);
            break;
        }
    }
    
}

var count=0
function createInputs(event){
    let num = document.getElementById("numFields").value;
    let amount = parseInt(num);
    if (count===0){
    generateInputFields(amount);
    event.preventDefault();
    count++;
    }
    else{
        validateForm(amount);
        event.preventDefault();
    }
}