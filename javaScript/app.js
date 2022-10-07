// WINE PAIRING APP
const app = {};

app.apiKey = "897d5fbeefc34f42adb50cfbbfb70ac9"

// RADIO MENU JS
app.whiteWine = document.querySelector('.radio-white');
app.redWine = document.querySelector('.radio-red');
app.whiteList = document.querySelector('.white-wine-list');
app.redList = document.querySelector('.red-wine-list');
app.chooseReminder = document.querySelector('.choose');


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
            if (apiData.status == "failure") {
                alert("To be Updated, Try Again!")
                resultsParagraph.innerText = "To be Updated, Try Again!"

            } else {
                resultsParagraph.innerText = apiData.text

            }
            console.log(apiData)
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

        if (app.whiteWine.checked == true) {
            const userInput = whiteSelect.options[whiteSelect.selectedIndex].value;
            app.getWine(userInput)
        }
        else {
            const userInput = redSelect.options[redSelect.selectedIndex].value;
            app.getWine(userInput);
        }
    });
}

app.dropDownSelect = () => {
    app.whiteWine.addEventListener('click', () => {
        app.whiteList.classList.remove('is-hidden');
        app.redList.classList.add('is-hidden');
        app.chooseReminder.classList.add('is-hidden')
    })
    app.redWine.addEventListener('click', () => {
        app.redList.classList.toggle('is-hidden');
        app.whiteList.classList.add('is-hidden');
        app.chooseReminder.classList.add('is-hidden');
    })
}

app.init = () => {
    app.getUserInput();
    app.dropDownSelect();
};

app.init();