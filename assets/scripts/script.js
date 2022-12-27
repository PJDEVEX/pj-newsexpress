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

// Array for fetched news
let newsDataArr = [];

// Defining apis 
let apiKey = "6fe6bff8ebbd40489acf75967f7dab05";
let generalNews = "https://newsapi.org/v2/top-headlines?country=se&category=general&apikey=";
let businessNews = "https://newsapi.org/v2/top-headlines?country=se&category=business&apikey=";
let sportsNews = "https://newsapi.org/v2/top-headlines?country=se&category=sports&apikey=";
let entertaintmentNews = "https://newsapi.org/v2/top-headlines?country=se&category=technology&apikey=";
let technologyNews = "https://newsapi.org/v2/top-headlines?country=se&category=entertainment&apikey=";
let searchNews = "https://newsapi.org/v2/everything?q=";




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

    // Fetching general news
    fetchGeneralNews();

});

/**
 * Event listener for click on business button to get called
 */
businessBtn.addEventListener("click", () => {

    //  Fetching business news
    fetchBusinessNews();

});

/**
 * Event listener for click on sports button to get called
 */
sportsBtn.addEventListener("click", () => {

    //  Fetching sports news
    fetchSportsNews();

});


// Event listener for click on technology button to get called
technologyBtn.addEventListener("click", () => {

    // Fetching entertaintment news
    fetchEntertaintmentNews();

});

/**
 * Event listener for click on entertainment button to get called
 */
entertainmentBtn.addEventListener("click", () => {

    // Fetching technology news
    fetchTechnologyNews();

});

/**
 * Event listener for click on search button to get called
 */
searchBtn.addEventListener("click", () => {


    // Fetching search news
    fetchSearchNews();

});

/**
 * Defining the fetch general news function
 */
let fetchGeneralNews = async () => {
    let response = await fetch(generalNews + apiKey);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        let myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsDetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

/**
 * Defining the fetch business news function
 */
let fetchBusinessNews = async () => {
    let response = await fetch(businessNews + apiKey);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        let myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsDetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

/**
 * Defining the fetch sports news function
 */
let fetchSportsNews = async () => {
    let response = await fetch(sportsNews + apiKey);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        let myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsDetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

/**
 * Defining the fetch entertaintment news function
 */
let fetchEntertaintmentNews = async () => {
    let response = await fetch(entertaintmentNews + apiKey);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        let myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsDetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

/**
 * Defining the fetch technology news function
 */
let fetchTechnologyNews = async () => {
    let response = await fetch(technologyNews + apiKey);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        let myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsDetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

/**
 * Defining the fetch search news function
 */
let fetchSearchNews = async () => {
    let response = await fetch(searchNews + apiKey);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        let myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsDetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}