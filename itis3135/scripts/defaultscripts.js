function displayDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    document.getElementById("dateTimeDisplay").innerText = "Today is " + now.toLocaleString('en-US', options);
}


function displayUserGreeting() {
    const name = document.getElementById("userName").value;
    const mood = document.getElementById("userMood").value;
    document.getElementById("userGreeting").innerText = `The Busy Alpaca welcomes you, ${name}! We're glad you're feeling ${mood}!`;
}

function showPolygonName() {
    let number = Math.abs(Math.round(document.getElementById("favNumber").value));
    let polygonNames = ["Monogon", "Digon", "Trigon", "Tetragon", "Pentagon", "Hexagon", "Heptagon", "Octagon", "Nonagon", "Decagon"];
    if (number >= 0 && number <= 10) {
        alert(polygonNames[number] || "Polygon with too many sides");
    } else {
        alert("Enter a number from 0 to 10.");
    }
}

function alpacaFact() {
    alert("Did you know? Alpacas hum when they're content!");
}

function alpacaJoke() {
    alert("What do alpacas say after a joke? Alpaca my bags and leave!");
}

function alpacaEncouragement() {
    alert("You got this, from one hard-working alpaca to another!");
}

function alpacaAdvice() {
    alert("If things get tough, just graze on and keep moving!");
}

document.addEventListener("DOMContentLoaded", function() {
    displayDateTime();

    document.getElementById("submitGreeting").addEventListener("click", displayUserGreeting);
    document.getElementById("showPolygon").addEventListener("click", showPolygonName);
    document.getElementById("factButton").addEventListener("click", alpacaFact);
    document.getElementById("jokeButton").addEventListener("click", alpacaJoke);
    document.getElementById("encouragementButton").addEventListener("click", alpacaEncouragement);
    document.getElementById("adviceButton").addEventListener("click", alpacaAdvice);
});
