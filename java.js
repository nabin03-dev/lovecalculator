// jshint esversion:6

let isNotClicked = true;

function loveCalculator() {
    // Get the lowercase versions of the names entered
    const yourName = document.getElementById("firstname").value.toLowerCase();
    const loversName = document.getElementById("lovername").value.toLowerCase();

    let loveFinal;

    // Check for special cases and set love score to "unlimited"
    if ((yourName === "aayushaa" && loversName === "nabin") ||
        (yourName === "nabin" && loversName === "aayushaa") ||
        (yourName === "aayusha" && loversName === "nabin") ||
        (yourName === "nabin" && loversName === "aayusha")) {
        loveFinal = "unlimited";
    } else {
        // Calculate a random love score and round it
        const loveScore = Math.random() * 100;
        loveFinal = Math.round(loveScore);
    }

    // Check if either name is empty and display an alert if so
    if (yourName === "") {
        alert("Please enter your name.");
        return; // Stop function execution
    } else if (loversName === "") {
        alert("Please enter your lover's name.");
        return; // Stop function execution
    }

    // Get the element where the love score will be displayed
    const loveFinalElement = document.getElementById("lovefinal");

    // Determine the message to display based on whether the love score is unlimited or a percentage
    const loveScoreMessage = loveFinal === "unlimited" ?
        `${yourName.charAt(0).toUpperCase() + yourName.slice(1)} and ${loversName.charAt(0).toUpperCase() + loversName.slice(1)}, your love score is unlimited` :
        `${yourName.charAt(0).toUpperCase() + yourName.slice(1)} and ${loversName.charAt(0).toUpperCase() + loversName.slice(1)}, your love score is ${loveFinal}%`;

    // Display the message
    loveFinalElement.innerHTML = loveScoreMessage;

    // Add the blinking class for animation
    loveFinalElement.classList.add("blinking");

    // Remove the blinking class after 5 seconds
    setTimeout(() => {
        loveFinalElement.classList.remove("blinking");
    }, 5000);
}

// Reset function to reload the page
function resetFunction() {
    location.reload();
}
