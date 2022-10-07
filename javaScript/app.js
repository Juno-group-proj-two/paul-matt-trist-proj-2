// RADIO MENU JS
const whiteWine = document.querySelector('.radio-white');
const redWine = document.querySelector('.radio-red');
const whiteList = document.querySelector('.white-wine-list');
const redList = document.querySelector('.red-wine-list');
const chooseReminder = document.querySelector('.choose');
whiteWine.addEventListener('click', ()=>{
    whiteList.classList.remove('is-hidden');
    redList.classList.add('is-hidden');
    chooseReminder.classList.add('is-hidden')
})
redWine.addEventListener('click', ()=>{
    redList.classList.toggle('is-hidden');
    whiteList.classList.add('is-hidden');
    chooseReminder.classList.add('is-hidden');
})
// ATTEMPTING NAMESPACING
// const wineRadios = {};

// wineRadios.white = document.querySelector('.radio-white');
// wineRadios.red = document.querySelector('.radio-red');
// wineRadios.whiteDrop = document.querySelector('.white-wine-list');
// wineRadios.redDrop = document.querySelector('.red-wine-list');
// wineRadios.chooseReminder = document.querySelector('.choose');

// wineRadios.whiteList = () => {
//     wineRadios.white.addEventListener('click', (event)=>{
//         wineRadios.whiteDrop.classList.remove('is-hidden');
//         wineRadios.redDrop.classList.add('is-hidden');
//         wineRadios.chooseReminder.classList.add('is-hidden');
//     })
// };
// wineRadios.redList = () => {
//     wineRadios.red.addEventListener('click', (e)=>{
//         wineRadios.whiteDrop.classList.add('is-hidden');
//         wineRadios.redDrop.classList.remove('is-hidden');
//         wineRadios.chooseReminder.classList.add('is-hidden');
//     })
// };

// wineRadios.init = () => {
//     wineRadios.whiteList();
//     wineRadios.redList();
// }

// wineRadios.init();

// Wine App:
const app = {};

app.apiKey = "8a1819c9d2c94e0982770273264c4387"

app.getWine = (query) => {
    const url = new URL("https://api.spoonacular.com/food/wine/dishes")
    url.search = new URLSearchParams({
        apiKey: app.apiKey,
        wine: query,
    });


    fetch(url)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.ok)
            }
        })
        .then((apiData) => {
            const resultsParagraph = document.querySelector(".meal-suggestion-text p")
            console.log(apiData)
            resultsParagraph.innerText = apiData.text
        })
        .then((data) => {
            if (data.status === "failure") {
                alert("To be Updated, Try Again!")
            }
        })
        .catch((error) => {

            if (error.message === "false") {
                alert("Please choose Red or White then a type in the dropdown menu")
            } 
        });
};


app.getUserInput = () => {
    const userForm = document.getElementById('wine-form');
    userForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const whiteSelect = document.getElementById('white-options');
        const redSelect = document.getElementById('red-options');
        
        if (whiteWine.checked == true){
        const userInput = whiteSelect.options[whiteSelect.selectedIndex].value;
        app.getWine(userInput)
        } 
        else {
            const userInput = redSelect.options[redSelect.selectedIndex].value;
            app.getWine(userInput);
        }
    });
}

app.init = () => {
    app.getUserInput();
};

app.init();
