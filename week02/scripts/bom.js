let input = document.querySelector("#favchap");
let button = document.querySelector("button");
let list = document.querySelector("ul");



//Create a click event listener for the Add Chapter button using an addEventListener.

button.addEventListener('click', function () {
    // code tu execute when the button is clicked

    // If value is blank shows a error message + focus the field 
    if (input.value.trim() === "") {
        console.log("Warning: Enter Book and Chapter!");
        input.focus();
    } else {
        // Creates a new li and it`s own delete button for every new input 
        const li = document.createElement("li");
        const deleteButton = document.createElement("button");

        li.textContent = input.value + " "; // this + " " creates a space between the text and the button
        deleteButton.textContent = "❌";

        li.append(deleteButton); // append the delete button to it`s own input

        list.append(li); // append the li+button to the list

        
        deleteButton.addEventListener('click', function () {
            li.remove(); // remove the input from the list
            input.focus(); // focus the text again the input field
        });

        input.value = ""; // the standard value in the input field in blank
        input.focus(); // the standard focus when the page is loaded is the input field
    }
});



