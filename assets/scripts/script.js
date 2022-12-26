// Getting access to html elements
// Accessing menu-toggle class
let menu_toggle = document.querySelector(".menu-toggle");
let menu_section = document.querySelector(".menu-section");


// Create event listners
menu_toggle.addEventListener("click", () => {
    menu_toggle.classList.toggle("is-active");
    // event listener for navigation section
    menu_section.classList.toggle("is-active"); 
})