// Getting access to html elements
// Accessing menu-toggle class
let menu_toggle = document.querySelector(".menu-toggle");

// Create event listner
menu_toggle.addEventListener("click", () => {
    menu_toggle.classList.toggle("is-active");
})