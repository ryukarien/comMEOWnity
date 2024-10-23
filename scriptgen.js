//JAVA SCRIPT FOR HAMBURGER MENU
    document.getElementById('hamburger').onclick = function() {
        const navLinks = document.getElementById('nav-links');
        navLinks.classList.toggle('active'); // Toggle the 'active' class
    };

    document.querySelectorAll('.question').forEach(item => {
        item.addEventListener('click', function() {
            let answer = this.nextElementSibling;
            if (answer.style.display === "none" || !answer.style.display) {
                answer.style.display = "block"; // Show answer
            } else {
                answer.style.display = "none"; // Hide answer
            }
        });
    });
    