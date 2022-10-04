// Project 2

// Create an app object (wineParing)

// Initialize preset data in the dedicated properties
    // - apiURL
    // - apiKey
    // - userQuery

// Create a method (wineChoice) to update the variable (wineChoice) based on user input

// Create a method (getFood) to make API calls, which takes the user input as a parameter (wineChoice)
    // When the API call is successful, display the result by appending the data to the results div
        // If the API call fails, display an error message

// Create an init method to kick off the setup of the application
    // - calls the local method (wineParing) for a wine recommendation 
        // - add a 'change' event listener to call the local method (wineChoice), to track user input

// ** used pseudo code example as a template: https://github.com/HackerYou/bootcamp-notes/blob/main/projects/project-02/README.md#pseudo-code ** //

// fetch('https://api.spoonacular.com/food/wine/pairing?apiKey=8161e734602a4734b2d6d521776cfb99&food=cheese')
// .then( (apiData)=>{
//     return apiData.json();
// })
// .then( function(apiData){
//     console.log(`Recipe Data`, apiData);
// })

const app = {};

app.apiKey = "897d5fbeefc34f42adb50cfbbfb70ac9"

app.getWine = (query) => {
    const url = new URL("https://api.spoonacular.com/food/wine/dishes")
    url.search = new URLSearchParams({
        apiKey: app.apiKey,
        wine: query,
    });

    // ERROR HANDLING  TEST
    // // *** Wine with Paired Dish ***
    // const url1 = "https://api.spoonacular.com/food/wine/dishes?apiKey=897d5fbeefc34f42adb50cfbbfb70ac9&wine=riesling"
    // // *** Wine with NO! Paired Dish ***
    // const url2 = "https://api.spoonacular.com/food/wine/dishes?apiKey=897d5fbeefc34f42adb50cfbbfb70ac9&wine=sauternes"
    // // *** Wine ERROR ***
    // const url3 = "https://api.spoonacular.com/food/wine/dishes?apiKey=897d5fbeefc34f42adb50cfbbfb70ac9&wine=break"

    fetch(url)
        .then((response) => {
            console.log(response);
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.ok)
            }
        })
        .then((data) => {
            console.log(data);
            if (data.status === "failure") {
                alert("To be Updated, Try Again!")
            }
        })
        .catch((error) => {
            console.log(error);

            if (error.message === "false") {
                alert("Please Select a Wine in the Dropdown Menu")
            } else {
                alert("Try again!")
            }
        });
};

// app.displayWine = (arrayOfObjects) => {
//     arrayOfObjects.forEach((artObject) => {
//         // create new HTML elements and store art data inside
//         const title = document.createElement("h2");
//         title.innerText = artObject.title;

//         const artist = document.createElement("p");
//         artist.innerText = artObject.principalOrFirstMaker;

//         const image = document.createElement("img");
//         image.src = artObject.webImage.url;
//         image.alt = artObject.longTitle;

//         const artContainer = document.createElement("div");
//         artContainer.classList.add('piece');

//         artContainer.append(title, artist, image);

//         // add those new elements to our HTML markup
//         document.querySelector("#artwork").appendChild(artContainer);
//     })
// };

app.getUserInput = () => {
    const userForm = document.getElementById('wineForm');
    userForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const select = document.getElementById('wineOptions');
        const userInput = select.options[select.selectedIndex].value;
        console.log(userInput);
        app.getWine(userInput)
    });
}

app.init = () => {
    app.getUserInput();
};

app.init();