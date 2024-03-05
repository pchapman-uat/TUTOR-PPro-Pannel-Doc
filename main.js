// This waits for the content of the page to be loaded
// Document is the HTML page
// DOMContentLoaded is an event that is fired when the HTML page is loaded
document.addEventListener('DOMContentLoaded', function(){
    // This gets the element with the id of selection
    // This adds an event listener to the selection element
    // The event listener is a function that is called when the selection element is changed
    document.getElementById("selection").addEventListener("change", function() {
        // This gets the value of the selection element
        // It then saves it to the option variable
        var option = document.getElementById("selection").value
        // This gets the body element and saves it to the body variable
        var body = document.getElementById("body");
        // Initalizing the information variable
        var information
        // This checks the value of the selection element
        // If the value is red, it changes the background color to red
        // If the value is blue, it changes the background color to blue
        // If the value is green, it changes the background color to green
        // It will also display infomration about the color
        if(option === "Red"){
            body.style.backgroundColor = "red";
            information = "Red tends to show bravery"
        } else if (option === "Blue"){
            body.style.backgroundColor = "blue";
            information = "Blue tends to show intelligence"
        } else if (option === "Green"){
            body.style.backgroundColor = "green";
            information = "Green tends to show kindness"
        }
        // This gets the element with the id of text and saves it to the text variable
        var text = document.getElementById("text")
        // This changes the innerHTML of the text element to the information variable
        text.innerHTML = information
    });
});

