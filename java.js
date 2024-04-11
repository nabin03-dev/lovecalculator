// jshint esversion:6

let isNotClicked = true;

function loveCalculator() {
    const yourName = document.getElementById("firstname").value.toLowerCase();
    const loversName = document.getElementById("lovername").value.toLowerCase();

    // Special case
    if ((yourName === "aayushaa" && loversName === "nabin") || (yourName === "nabin" && loversName === "aayushaa")) {
        // Set love score to 10000% for special case
        var loveFinal = "unlimited";
    } else {
        // Calculate a random love score
        let loveScore = Math.random() * 100;
        var loveFinal = Math.round(loveScore);
    }

    // Check if names are empty
    if (yourName === "") {
        alert("Please enter your name.");
    } else if (loversName === "") {
        alert("Please enter your lover's name.");
    } else {
        // Display the love score
        const loveFinalElement = document.getElementById("lovefinal");
        loveFinalElement.innerHTML = `${yourName.charAt(0).toUpperCase() + yourName.slice(1)} and ${loversName.charAt(0).toUpperCase() + loversName.slice(1)}, your love score is ${loveFinal}%`;


        // Add the blinking class
        loveFinalElement.classList.add("blinking");

        // Automatically remove the blinking class after 5 seconds
        setTimeout(() => {
            loveFinalElement.classList.remove("blinking");
        }, 5000);
    }
}

// Reset button function
function resetFunction() {
    location.reload();
}
