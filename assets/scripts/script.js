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
let api_Key = "6fe6bff8ebbd40489acf75967f7dab05";
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
    let response = await fetch(generalNews + api_Key);
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
    let response = await fetch(businessNews + api_Key);
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
    let response = await fetch(sportsNews + api_Key);
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
    let response = await fetch(entertaintmentNews + api_Key);
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
    let response = await fetch(technologyNews + api_Key);
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

    // return if search news value is null
    if (searchNews.value == null)
        return;

    let response = await fetch(searchNews + encodeURIComponent(searchNews.value) + "&apiKey=" + api_Key);
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
 * For dynamically adding news components to dom
 */
function displayNews() {

    news = details.innerHTML = "";

    newsDataArr.forEach(news => {

        let date = news.publishedAt.split("T");

        let col = document.createElement('div');
        col.className = "news-col";

        let card = document.createElement('div');
        card.className = "news-card"

        let image = document.createElement('img');
        image.setAttribute("height", "matchparent");
        image.setAttribute("width", "100%");
        image.src = news.urlToImage;

        let cardbody = document.createElement('div');
        cardbody.className = "card-body";

        let newsHeading = document.createElement('h2');
        newsHeading.className = "card-title";
        newsHeading.innerHTML = news.title;

        let dateHeading = document.createElement('h3');
        dateHeading.className = "text-primary";
        dateHeading.innerHTML = date[0];

        let discription = document.createElement('p');
        discription.className = "text-para";
        discription.innerHTML = news.description;

        let link = document.createElement('a');
        link.className = "read-more-btn";
        link.setAttribute("target", "_blank");
        link.href = news.url;
        link.innerHTML = "Read more";

        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(discription);
        cardBody.appendChild(link);

        card.appendChild(image);
        card.appendChild(cardBody);

        col.appendChild(card);

        newsdetails.appendChild(col);
    });

}