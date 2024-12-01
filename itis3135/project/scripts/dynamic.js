document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-info');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const moreInfo = this.previousElementSibling; 
            if (moreInfo.style.display === 'none') {
                moreInfo.style.display = 'block';
                this.textContent = 'Show Less';
            } else {
                moreInfo.style.display = 'none';
                this.textContent = 'Show More';
            }
        });
    });
});
