function validateForm() {
    const requiredFields = [
        "name", "mascot", "image", "image-caption", "personal-background",
        "professional-background", "academic-background", "web-dev-background", "computer-platform"
    ];
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
    const container = document.getElementById("courses-container");
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

function resetForm() {
    document.getElementById("intro-form").reset();
    document.getElementById("result-container").style.display = "none"; 
    document.getElementById("courses-container").innerHTML = ''; 
    addCourse(); 
}

function displayResult() {
    const resultContainer = document.getElementById("result-container");
    resultContainer.style.display = "block"; 

    const name = document.getElementById("name").value;
    const mascot = document.getElementById("mascot").value;
    const imageCaption = document.getElementById("image-caption").value;
    const personalBackground = document.getElementById("personal-background").value;
    const professionalBackground = document.getElementById("professional-background").value;
    const academicBackground = document.getElementById("academic-background").value;
    const webDevBackground = document.getElementById("web-dev-background").value;
    const computerPlatform = document.getElementById("computer-platform").value;
    const funnyThing = document.getElementById("funny-thing").value;
    const anythingElse = document.getElementById("anything-else").value;

    const courses = Array.from(document.querySelectorAll("#courses-container input"))
        .map((input) => input.value)
        .filter((value) => value);

    const imageFile = document.getElementById("image").files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        resultContainer.innerHTML = `
            <h2>Your Introduction</h2>
            <ul>
                <li><strong>Name:</strong> ${name}</li>
                <li><strong>Mascot:</strong> ${mascot}</li>
                <li><strong>Image:</strong><br><img src="${e.target.result}" alt="Uploaded Image" style="max-width: 10%; height: auto;"><br>${imageCaption}</li>
                <li><strong>Personal Background:</strong> ${personalBackground}</li>
                <li><strong>Professional Background:</strong> ${professionalBackground}</li>
                <li><strong>Academic Background:</strong> ${academicBackground}</li>
                <li><strong>Web Development Background:</strong> ${webDevBackground}</li>
                <li><strong>Computer Platform:</strong> ${computerPlatform}</li>
                <li><strong>Funny Thing:</strong> ${funnyThing}</li>
                <li><strong>Anything Else:</strong> ${anythingElse}</li>
                <li><strong>Courses Currently Taking:</strong> <ul>${courses.map((course) => `<li>${course}</li>`).join('')}</ul></li>
            </ul>
            <button type="button" id="reset-button">Reset</button>
        `;

        document.getElementById("reset-button").addEventListener("click", resetForm);
    };

    if (imageFile) {
        reader.readAsDataURL(imageFile);
    } else {
        resultContainer.innerHTML = `<p>No image uploaded.</p>`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("intro-form").addEventListener("submit", function (event) {
        event.preventDefault(); 
        if (validateForm()) {
            displayResult(); 
        }
    });
    
    document.getElementById("add-course-button").addEventListener("click", addCourse);
});
