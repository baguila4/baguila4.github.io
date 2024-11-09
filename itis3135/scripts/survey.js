document.getElementById("introForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    if (validateForm()) {
        displayResult(); 
    }
});

function validateForm() {
    const requiredFields = ["name", "mascot", "image", "imageCaption", "personalBackground", "professionalBackground", "academicBackground", "webDevBackground", "computerPlatform"];
    for (const field of requiredFields) {
        if (!document.getElementById(field).value) {
            alert("Please fill out all required fields.");
            return false;
        }
    }
    if (!document.getElementById("agreement").checked) {
        alert("You must agree to the terms.");
        return false;
    }
    return true;
}

function addCourse() {
    const container = document.getElementById("coursesContainer");
    const newCourse = document.createElement("div");
    newCourse.classList.add("course-entry"); 

    const courseInput = document.createElement("input");
    courseInput.type = "text";
    courseInput.placeholder = "Enter course name";
    newCourse.appendChild(courseInput);

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.innerText = "Delete";
    deleteButton.onclick = function () {
        container.removeChild(newCourse);
    };
    newCourse.appendChild(deleteButton);

    container.appendChild(newCourse);
}

function displayResult() {
    const resultContainer = document.getElementById("resultContainer");
    resultContainer.style.display = "block"; // Show the result container

    const name = document.getElementById("name").value;
    const mascot = document.getElementById("mascot").value;
    const imageCaption = document.getElementById("imageCaption").value;
    const personalBackground = document.getElementById("personalBackground").value;
    const professionalBackground = document.getElementById("professionalBackground").value;
    const academicBackground = document.getElementById("academicBackground").value;
    const webDevBackground = document.getElementById("webDevBackground").value;
    const computerPlatform = document.getElementById("computerPlatform").value;
    const funnyThing = document.getElementById("funnyThing").value;
    const anythingElse = document.getElementById("anythingElse").value;

    const courses = Array.from(document.querySelectorAll("#coursesContainer input")).map(input => input.value).filter(value => value);

    resultContainer.innerHTML = `
        <h2>Your Introduction</h2>
        <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Mascot:</strong> ${mascot}</li>
            <li><strong>Image Caption:</strong> ${imageCaption}</li>
            <li><strong>Personal Background:</strong> ${personalBackground}</li>
            <li><strong>Professional Background:</strong> ${professionalBackground}</li>
            <li><strong>Academic Background:</strong> ${academicBackground}</li>
            <li><strong>Web Development Background:</strong> ${webDevBackground}</li>
            <li><strong>Computer Platform:</strong> ${computerPlatform}</li>
            <li><strong>Funny Thing:</strong> ${funnyThing}</li>
            <li><strong>Anything Else:</strong> ${anythingElse}</li>
            <li><strong>Courses Currently Taking:</strong> <ul>${courses.map(course => `<li>${course}</li>`).join('')}</ul></li>
        </ul>
        <button onclick="resetForm()">Reset</button>
    `;
}

function resetForm() {
    document.getElementById("introForm").reset();
    document.getElementById("resultContainer").style.display = "none"; // Hide result container
    document.getElementById("coursesContainer").innerHTML = '<button type="button" onclick="addCourse()">Add Course</button>';
}
