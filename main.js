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

        // Get ID of container
        var text = document.getElementById("container")
        // Reset the information in the container
        text.innerHTML = ""

        // Initalizing the information variable
        var information
        // This checks the value of the selection element
        // If the value is red, it changes the background color to red
        // If the value is blue, it changes the background color to blue
        // If the value is green, it changes the background color to green
        // It will also display infomration about the color
        if(option === "red"){
            body.style.backgroundColor = "red";

            // Create a new paragraph element and set its inner html
            var paragraph1 = document.createElement("p")
            paragraph1.innerHTML = "Red tends to show aggression"
            // Add the paragraph1 element to the text element
            text.appendChild(paragraph1)
            // Repeat for paragrapfs 2-3
            var paragraph2 = document.createElement("p")
            paragraph2.innerHTML = "More information about red... Blah blah blah "
            text.appendChild(paragraph2)
            var paragraph3 = document.createElement("p")
            paragraph3.innerHTML = "Text here"
            text.appendChild(paragraph3)



            // Create link element
            var link = document.createElement("a")
            // Set its location (href) to the url
            link.setAttribute("href", "https://www.color-hex.com/color/ff0000")
            // Open link in new tab
            link.setAttribute("target", "_blank")
            // Set the display information
            link.innerHTML = "More information"
            // Append the link to the second paragraph
            paragraph2.appendChild(link)
            
        } else if (option === "blue"){
            body.style.backgroundColor = "blue";

            // Create a new paragraph element and set its inner html
            var paragraph1 = document.createElement("p")
            paragraph1.innerHTML = "Blue tends to show sadness"
            // Add the paragraph1 element to the text element
            text.appendChild(paragraph1)
            // Repeat for paragrapfs 2-3
            var paragraph2 = document.createElement("p")
            paragraph2.innerHTML = "More information about blue... Blah blah blah "
            text.appendChild(paragraph2)
            var paragraph3 = document.createElement("p")
            paragraph3.innerHTML = "Text here"
            text.appendChild(paragraph3)



            // Create link element
            var link = document.createElement("a")
            // Set its location (href) to the url
            link.setAttribute("href", "https://www.color-hex.com/color/0000ff")
            // Open link in new tab
            link.setAttribute("target", "_blank")
            // Set the display information
            link.innerHTML = "More information"
            // Append the link to the second paragraph
            paragraph2.appendChild(link)
        } else if (option === "green"){
            body.style.backgroundColor = "green";

            // Create a new paragraph element and set its inner html
            var paragraph1 = document.createElement("p")
            paragraph1.innerHTML =  "Green tends to show happiness"
            // Add the paragraph1 element to the text element
            text.appendChild(paragraph1)
            // Repeat for paragrapfs 2-3
            var paragraph2 = document.createElement("p")
            paragraph2.innerHTML = "More information about green... Blah blah blah "
            text.appendChild(paragraph2)
            var paragraph3 = document.createElement("p")
            paragraph3.innerHTML = "Text here"
            text.appendChild(paragraph3)



            // Create link element
            var link = document.createElement("a")
            // Set its location (href) to the url
            link.setAttribute("href", "https://www.color-hex.com/color/00ff00")
            // Open link in new tab
            link.setAttribute("target", "_blank")
            // Set the display information
            link.innerHTML = "More information"
            // Append the link to the second paragraph
            paragraph2.appendChild(link)
        } else {
            console.log("Not valid color selected")
            console.log(option)
            body.style.backgroundColor = "black";
        }
        // This gets the element with the id of text and saves it to the text variable
        
        // This changes the innerHTML of the text element to the information variable
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

