fetch('https://api.spoonacular.com/food/wine/pairing?apiKey=8161e734602a4734b2d6d521776cfb99&food=burger')
.then( (apiData)=>{
    return apiData.json();
})
.then( function(apiData){
    console.log(`Recipe Data`, apiData);
})