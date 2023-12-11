document.addEventListener("DOMContentLoaded", function () {
    // Get the current page URL
    var currentUrl = window.location.href;

    // Get all navigation links
    var navLinks = document.querySelectorAll("nav a");

    // Loop through each link
    navLinks.forEach(function (link) {
        // Check if the link's href matches the current page URL
        if (link.href === currentUrl) {
            // Add the "active" class to the matching link
            link.classList.add("active");
        }
    });
});
