 // Premier block JS servant à chercher un cocktail en tapant son nom dans la barre de recherche      
const mySearchedButton = document.getElementById('searchClick')
const mySearchedCocktail = document.getElementById('searchCocktailName')
const mySearchedPicture = document.getElementById('searchPicture')
const mySearchedProducts = document.getElementById ('searchProducts')
const searchedRecipeButton = document.getElementById('searchModalClick')
const mySearchedRecipe = document.getElementById('searchRecipe')
const mySearchedCard = document.getElementById('searchCard')
const mySearchModalTitle =document.getElementById('searchModalTitle')
const mySearchNotFound = document.getElementById('cocktailNotFound')

mySearchedButton.addEventListener('click',function(){
    searchedRecipeButton.style="display : none" //on redéfinit ici les valeurs sur "display : none" pour réactualiser la valeur à chaque click
    mySearchedCard.style="display : none"
    mySearchNotFound.style="display : none"


    function fetchSearchCocktail(){
        const myText = document.getElementById('searchText').value
        return fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+(myText)) //on récupère le texte tapé dans la barre de recherche et on l'inclus dans l'URL du fetch
    }

    const searchedCocktail = fetchSearchCocktail()
    .then((httpResponse)=>{
        return httpResponse.json()
    }).then((foundCocktail)=>{
        console.log(foundCocktail) //console.log qui me servait à vérifier le fonctionnement et obtenir les noms des différents éléments
        if (foundCocktail.drinks === null){ //ajout d'une condition pour afficher un message d'erreur si le nom tapé ne donne aucun résultat
            mySearchNotFound.style=""
        }else {
            mySearchedCard.style="" //on affiche la card et le bouton modal jusqu'alors cachés
            searchedRecipeButton.style=""
            mySearchedCocktail.textContent=foundCocktail.drinks[0].strDrink //nom du cocktail
            mySearchedPicture.src = foundCocktail.drinks[0].strDrinkThumb //image correspondante

            const mySearchArray = []  //on crée un tableau regroupant toutes les lignes d'ingrédients de cocktails  
                mySearchArray.push(foundCocktail.drinks[0].strIngredient1)
                mySearchArray.push(foundCocktail.drinks[0].strIngredient10)
                mySearchArray.push(foundCocktail.drinks[0].strIngredient11)
                mySearchArray.push(foundCocktail.drinks[0].strIngredient12)
                mySearchArray.push(foundCocktail.drinks[0].strIngredient13)
                mySearchArray.push(foundCocktail.drinks[0].strIngredient14)
                mySearchArray.push(foundCocktail.drinks[0].strIngredient15)
                mySearchArray.push(foundCocktail.drinks[0].strIngredient2)
                mySearchArray.push(foundCocktail.drinks[0].strIngredient3)
                mySearchArray.push(foundCocktail.drinks[0].strIngredient4)
                mySearchArray.push(foundCocktail.drinks[0].strIngredient5)
                mySearchArray.push(foundCocktail.drinks[0].strIngredient6)
                mySearchArray.push(foundCocktail.drinks[0].strIngredient7)
                mySearchArray.push(foundCocktail.drinks[0].strIngredient8)
                mySearchArray.push(foundCocktail.drinks[0].strIngredient9)

                const myNewSearchArray =[] //on filtre pour ne garder que les lignes d'ingrédients et éliminer les lignes vides
                for (let i=0; i<mySearchArray.length; i++){
                    if (mySearchArray[i] !== null){
                        myNewSearchArray.push(mySearchArray[i])
                    }
                }
                mySearchedProducts.innerHTML = myNewSearchArray.join ('<br>') //on affiche finalement la liste des ingrédients
                mySearchedRecipe.textContent = foundCocktail.drinks[0].strInstructions //la recette du cocktail est ajoutée
                mySearchModalTitle.innerHTML = foundCocktail.drinks[0].strDrink+"'s Recipe" //l'en-tête du modal est personnalisée avec le nom du cocktail
        }
    })
})



// second block ayant pour but de générer un cocktail aléatoire
const myButton = document.getElementById('clickable')
const myCocktailName = document.getElementById('cocktailName')
const myPicture = document.getElementById('picture')
const myProducts = document.getElementById ('products')
const recipeButton = document.getElementById('secondClick')
const myRecipe = document.getElementById('recipe')
const myCard = document.getElementById('card')
const myModalTitle = document.getElementById('modalTitle')


myButton.addEventListener('click', function(){ //même principe la card qui était jusqu'alors cachée est affichée

    myCard.style=""
    recipeButton.style=""

    function fetchCocktail(){
        return fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    }
    const cocktail = fetchCocktail()
    .then((httpResponse) => {
        return httpResponse.json()
    }).then ((randomCocktail)=> { //on fonctionne de la même manière pour récupérer les nom / image / ingrédients et recette
            myCocktailName.textContent = randomCocktail.drinks[0].strDrink 
            myPicture.src = randomCocktail.drinks[0].strDrinkThumb

            const myArray = []    
            myArray.push(randomCocktail.drinks[0].strIngredient1)
            myArray.push(randomCocktail.drinks[0].strIngredient10)
            myArray.push(randomCocktail.drinks[0].strIngredient11)
            myArray.push(randomCocktail.drinks[0].strIngredient12)
            myArray.push(randomCocktail.drinks[0].strIngredient13)
            myArray.push(randomCocktail.drinks[0].strIngredient14)
            myArray.push(randomCocktail.drinks[0].strIngredient15)
            myArray.push(randomCocktail.drinks[0].strIngredient2)
            myArray.push(randomCocktail.drinks[0].strIngredient3)
            myArray.push(randomCocktail.drinks[0].strIngredient4)
            myArray.push(randomCocktail.drinks[0].strIngredient5)
            myArray.push(randomCocktail.drinks[0].strIngredient6)
            myArray.push(randomCocktail.drinks[0].strIngredient7)
            myArray.push(randomCocktail.drinks[0].strIngredient8)
            myArray.push(randomCocktail.drinks[0].strIngredient9)

            const myNewArray =[]
            for (let i=0; i<myArray.length; i++){
                if (myArray[i] !== null){
                    myNewArray.push(myArray[i])
                }
            }
            myProducts.innerHTML = myNewArray.join ('<br>')
            myRecipe.textContent = randomCocktail.drinks[0].strInstructions
            myModalTitle.innerHTML = randomCocktail.drinks[0].strDrink+"'s Recipe"
    })
})



// troisième block dont le but est de générer 4 cocktails aléatoires compprenant un ingrédient entré par l'utilisateur
const myIngredientRow = document.getElementById('ingredientRow')
const myIngredientButton = document.getElementById('ingredientClick')
const myPropose1 = document.getElementById('propose1')
const myPropose2 = document.getElementById('propose2')
const myPropose3 = document.getElementById('propose3')
const myPropose4 = document.getElementById('propose4')
const myProposeText1 = document.getElementById('proposeText1')
const myProposeText2 = document.getElementById('proposeText2')
const myProposeText3 = document.getElementById('proposeText3')
const myProposeText4 = document.getElementById('proposeText4')

myIngredientButton.addEventListener('click', function(){
    myIngredientRow.style="display : none"

    function fetchIngredient (){ //on récupère l'ingrédient tapé par l'utilisateur et on filtre pour que l'API nous donne la liste des cocktails comprenant cet ingrédient
        const myIngredientText = document.getElementById('ingredientText').value
        return fetch ('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i='+(myIngredientText)) 
    }
    const ingredientCocktails = fetchIngredient()
    .then((httpResponse)=> {
        return httpResponse.json()
    }).then((cocktailsList)=>{ //on va ensuite créer des nombres aléatoires qui vont nous permettre de choisir 4 cocktails au hasard parmi la liste retournée par le fetch
        console.log(cocktailsList)
        myIngredientRow.style="" //le block images + noms des cocktails est affiché
        const number1 = Math.floor(Math.random()*cocktailsList.drinks.length) //le nombre générer sert d'indice pour récupérer un cokctail et son image
        myProposeText1.innerHTML = cocktailsList.drinks[number1].strDrink
        myPropose1.src = cocktailsList.drinks[number1].strDrinkThumb
// à partir du second nombre à générer on utlise une boucle pour s'assurer d'avoir des nombres différents et donc ne pas avoir plusieurs fois le même cocktail proposé
        let number2 = Math.floor(Math.random()*cocktailsList.drinks.length)
        while (number2 === number1){ 
            number2 = Math.floor(Math.random()*cocktailsList.drinks.length)
        }
        myProposeText2.innerHTML = cocktailsList.drinks[number2].strDrink
        myPropose2.src = cocktailsList.drinks[number2].strDrinkThumb

        let number3 = Math.floor(Math.random()*cocktailsList.drinks.length)
        while (number3 === number2 || number3 === number1){
            number3 = Math.floor(Math.random()*cocktailsList.drinks.length)
        }
        myProposeText3.innerHTML = cocktailsList.drinks[number3].strDrink
        myPropose3.src = cocktailsList.drinks[number3].strDrinkThumb

        let number4 = Math.floor(Math.random()*cocktailsList.drinks.length)
        while (number4 === number3 || number4 === number2 || number4 === number1){
            number4 = Math.floor(Math.random()*cocktailsList.drinks.length)
        }
        myProposeText4.innerHTML = cocktailsList.drinks[number4].strDrink
        myPropose4.src = cocktailsList.drinks[number4].strDrinkThumb
        
    })

})
