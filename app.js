const vinoApp = {}

vinoApp.getUserInput = () => {
    const userForm = document.getElementById('wineForm');
    userForm.addEventListener('submit', function(e){
        e.preventDefault();
        const select = document.getElementById('wineOptions');
        const userInput = select.options[select.selectedIndex].value;
            // console.log(userInput);
        vinoApp.getDishes(userInput)
    });
}

vinoApp.getDishes = (wine) => {
    fetch(`https://api.spoonacular.com/food/wine/dishes?apiKey=8161e734602a4734b2d6d521776cfb99&wine=${wine}`)
    .then( (apiData)=>{
        return apiData.json();
    })
    .then( function(apiData){
        const resultsParagraph = document.querySelector(".results p")
        console.log(apiData)
        resultsParagraph.innerText = apiData.text
    })
  

}

vinoApp.init = function(){
    vinoApp.getUserInput();
}; 

vinoApp.init();
// fetch (`https://api.spoonacular.com/recipes/complexSearch?cuisin?apiKey=af78d13b61a649bfb39745d02f322fe3`)
// .then( (response)=>{
//     return response.json()
// })
// .then((data) =>{
//     console.log(data)
// })

// https://api.spoonacular.com/recipes/complexSearch?query=cuisine=italian&number=2

// const foodApp = {}

//     foodApp.apiKey = 'af78d13b61a649bfb39745d02f322fe30';
//     foodApp.url = 'https://api.spoonacular.com/recipes/complexSearch';

//     foodApp.init = () =>{
//         console.log('page loaded')
        
        
//         const appUrl = new URL(foodApp.url)
        
//         appUrl.search = new URLSearchParams({
//             apiKey: foodApp.apiKey,
//             cuisine: 'Mediterranean'
//         });
//         console.log(appUrl);

//         fetch(appUrl)
//             .then( (apiPromise) => {
//                 return  apiPromise.json();
//             });

//             then( (data) => {
//                 console.log(data)
//             });
      
//     }

//     foodApp.init();