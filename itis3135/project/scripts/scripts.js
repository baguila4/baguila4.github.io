document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav#navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            alert("Navigating to " + event.target.textContent);
        });
    });
});
