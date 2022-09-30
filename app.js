const getUserInput = () => {
    const userForm = document.getElementById('wineForm');
    userForm.addEventListener('submit', function(e){
        e.preventDefault();
        const select = document.getElementById('wineOptions');
        const userInput = select.options[select.selectedIndex].value;
            console.log(userInput);
        getDishes(userInput)
    });
}
getUserInput();

const getDishes = (wine) => {
    fetch(`https://api.spoonacular.com/food/wine/dishes?apiKey=8161e734602a4734b2d6d521776cfb99&wine=${wine}`)
    .then( (apiData)=>{
        return apiData.json();
    })
    .then( function(apiData){
        console.log(`Recipe Data`, apiData);
    })

} 


