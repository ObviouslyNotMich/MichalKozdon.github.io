document.addEventListener('DOMContentLoaded', () => {
    // Find the element where we want to inject the nav
    const navbarContainer = document.getElementById('navbar-container');
    if (!navbarContainer) return;
    
    // Fetch the navbar.html file
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            // Insert the HTML into the container
            navbarContainer.innerHTML = data;
        })
        .catch(err => console.error('Error loading navbar:', err));
});

