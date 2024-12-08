document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    // Toggle navigation menu on button click
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    // Form submission alert (optional)
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission
        alert("Thank you for your message! We will get back to you shortly.");
        form.reset(); // Optional: Clear the form after submission
    });
});