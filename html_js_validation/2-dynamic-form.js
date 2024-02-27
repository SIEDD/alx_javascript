function generateInputFields(numFields) {
    var inputContainer = document.getElementById("inputContainer");
    inputContainer.innerHTML = "";
    
    for (var i = 1; i <= numFields; i++) {
        var inputField = document.createElement("input");
        inputField.type = "text";
        inputField.name = "field" + i;
        inputContainer.appendChild(inputField);
    }
}

document.getElementById("numFields").addEventListener("change", function() {
    var numFields = parseInt(this.value);
    generateInputFields(numFields);
});

function validateForm(event) {
    var inputFields = document.querySelectorAll("#inputContainer input");
    for (var i = 0; i < inputFields.length; i++) {
        if (inputFields[i].value.trim() === "") {
            alert("Please fill in all fields");
            event.preventDefault(); 
            return;
        }
    }
}

document.getElementById("dynamicForm").addEventListener("submit", validateForm);

