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
        if(option === "red"){
            body.style.backgroundColor = "red";
            information = "Red tends to show bravery"
        } else if (option === "blue"){
            body.style.backgroundColor = "blue";
            information = "Blue tends to show intelligence"
        } else if (option === "green"){
            body.style.backgroundColor = "green";
            information = "Green tends to show kindness"
        // This is an else, meaning if everything is false it runs
        } else {
            console.log("Not valid color selected")
            console.log(option)
            body.style.backgroundColor = "black";
            information = "Please select a color"
        }
        // This gets the element with the id of text and saves it to the text variable
        var text = document.getElementById("text")
        // This changes the innerHTML of the text element to the information variable
        text.innerHTML = information
    });

    // This gets the element with the id of slider and saves it to the slider variable
    document.getElementById("slider").addEventListener("change", function() {
        var slider = document.getElementById("slider").value
        // This gets the element with the id of sliderValue and has the innerHTML be the slider value
        document.getElementById("sliderValue").innerHTML = slider
        // This changes the background color of the body element to the slider value
        // There are multiple ways to type the value
        // You can do string concatanation:
        // body.style.backgroundColor = "rgb(0," + slider + ",0)"
        // You can use template literals:
        // body.style.backgroundColor = `rgb(0,${slider},0)`
        document.getElementById("body").style.backgroundColor = `rgb(0,${slider},0)`
    })
});

