// Grab DOM elements
const input = document.getElementById("taskInput");
const button = document.getElementById("addButton");
const list =  document.getElementById("taskList");


//Add a task when the button is clicked
button.addEventListener("click", function() {
    const text = input.value.trim();
    if (text !== "") {
        const li = document.createElement("li");

        // Create a remove button
        const removeButton = document.createElement("span");
        removeButton.textContent = "X";
        removeButton.className = "remove";


        li.textContent = text;
        li.appendChild(removeButton);
        list.appendChild(li);
        input.value = ""; // Clear the input
    }
});


list.addEventListener("click", function(event) {
    if (event.target.classList.contains("remove")) {
        // Remove the parent <li>
        event.target.parentElement.remove();
    }
});