// jshint esversion:6

let isNotClicked = true;

function loveCalculator() {
    const yourName = document.getElementById("firstname").value;
    const loversName = document.getElementById("lovername").value;
    let loveScore = Math.random() * 100;
    let loveFinal = Math.round(loveScore);

    if (yourName === "") {
        alert("Please enter your name.");
    } else if (loversName === "") {
        alert("Please enter your lover's name.");
    } else if (isNotClicked) {
        // Special case: Set loveFinal to 100% if either (yourName = aayushaa and loversName = nabin) or (yourName = nabin and loversName = aayushaa)
        if ((yourName === "aayushaa" && loversName === "nabin") || (yourName === "nabin" && loversName === "aayushaa")) {
            loveFinal = 10000;
        }
        
        // Set the love score text
        const loveFinalElement = document.getElementById("lovefinal");
        loveFinalElement.innerHTML = `${yourName} and ${loversName}, your love score is ${loveFinal}%`;

        // Add the blinking class
        loveFinalElement.classList.add("blinking");
        
        // Automatically remove the blinking class after 5 seconds
        setTimeout(() => {
            loveFinalElement.classList.remove("blinking");
        }, 5000);
        
        isNotClicked = false;
    } else {
        // If the function is called multiple times
        const loveFinalElement = document.getElementById("lovefinal");
        loveFinalElement.innerHTML = `${yourName} and ${loversName}, your love score is ${loveFinal}%`;
        
        loveFinalElement.classList.add("blinking");
        setTimeout(() => {
            loveFinalElement.classList.remove("blinking");
        }, 5000);
    }
}

// Reset button function
function resetFunction() {
    location.reload();
}
