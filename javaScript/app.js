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

// Wine App:
const app = {};

app.apiKey = "8a1819c9d2c94e0982770273264c4387"

app.getWine = (query) => {
    const url = new URL("https://api.spoonacular.com/food/wine/dishes")
    url.search = new URLSearchParams({
        apiKey: app.apiKey,
        wine: query,
    });

    // console.log(url)

    fetch(url)
        .then((response) => {
            // console.log(response);
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
            // console.log(data);
            if (data.status === "failure") {
                alert("To be Updated, Try Again!")
            }
        })
        .catch((error) => {
            // console.log(error);

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
        // console.log(userInput);
        app.getWine(userInput)
        } 
        // Update to else if for sparkling?
        else {
            const userInput = redSelect.options[redSelect.selectedIndex].value;
            // console.log(userInput);
            app.getWine(userInput);
        }
    });
}

app.init = () => {
    app.getUserInput();
};

app.init();