//When the window is loaded, change the status label to loaded
window.addEventListener('load', function() {
    var statusLabel = document.getElementById('statusLabel');
    statusLabel.textContent = "Loaded";
}); 

window.addEventListener('DOMContentLoaded', function() {
    //When the DOM content is loaded, attach an event listener to the button
    var button = document.getElementById('clickButton');
    var statusLabel = document.getElementById('statusLabel');
    var inputBox = document.getElementById('userInput');

    function addToList() {
        if (inputBox.value != "") {
            var listElement = document.createElement('li');
            listElement.textContent = inputBox.value;
            myList.appendChild(listElement);
            inputBox.value = "";
        }
        else {
            alert("Please input a string into the input box before pressing the button.");
        }
    }

    button.addEventListener('click', () => {
        //Call the addToList function when the button is clicked
        addToList();
        //When the button is clicked, change the label to "Clicking"
        statusLabel.textContent = "Clicking";
    });
}); 