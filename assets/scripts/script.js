// Getting access to html elements
// Accessing menu-toggle class
let menuToggle = document.querySelector(".menu-toggle");
let menuSection = document.querySelector(".menu-section");
// Accessing to nav items
let generalBtn = document.querySelector("#general");
let businessBtn = document.querySelector("#business");
let sportsBtn = document.querySelector("#sports");
let technologyBtn = document.querySelector("#technology");
let entertainmentBtn = document.querySelector("#entertainment");
let searchBtn = document.querySelector("#search-btn");
// Access to search and news type and details
let newsQuery = document.querySelector("#news-query");
let newsType = document.querySelector("#news-type");
let newsDetails = document.querySelector("#news-details");

// Confirm message to the web console for accurate access  
console.log(menuToggle)
console.log(menuSection)
console.log(generalBtn)
console.log(businessBtn)
console.log(sportsBtn)
console.log(technologyBtn)
console.log(entertainmentBtn)
console.log(searchBtn)
console.log(newsQuery)
console.log(newsType)
console.log(newsDetails)

// Defining apis 


/**
 * Create event listners to activate
 * menu toggle bars and navigation section
 */
menuToggle.addEventListener("click", () => {
    // event listener for toggle menu bars
    menuToggle.classList.toggle("is-active");
    // event listener for navigation section
    menuSection.classList.toggle("is-active"); 
})

/**
 * Event listener for click on general button to get called
 */
generalBtn.addEventListener("click", () => {

});

/**
 * Event listener for click on business button to get called
 */
businessBtn.addEventListener("click", () => {

});

/**
 * Event listener for click on sports button to get called
 */
sportsBtn.addEventListener("click", () => {

});

/**
 * Event listener for click on technology button to get called
 */
technologyBtn.addEventListener("click", () => {

});

/**
 * Event listener for click on entertainment button to get called
 */
entertainmentBtn.addEventListener("click", () => {

});

/**
 * Event listener for click on search button to get called
 */
searchBtn.addEventListener("click", () => {

});
