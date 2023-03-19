# Javascript – prise de notes
```
Ajouter un « readme » aux logiciel et codes pour l’expliquer aux autres et s’y retrouver plus facilement. Reflexe à prendre. 
```
Format .md (markdown) format pouvant être pris en charge par les navigateurs. Permet de formater efficacement et de rendre lisible (couleurs)
Github : plateforme permettant d’héberger, partager son code source et travailler en équipe.

commande "cd" pour se déplacer "cd.." pour revenir en arrière
dir pour lister les fichier contenus dans le dossier où on se trouve

variables : stocker de la valeur, en JS on peut y mettre à peut prêt tout ce qu'on veut, 
langage faiblement typé, détermination auto à l'exécution sans besoin de définir au préalable.

pour déclarer variable : "var nomvariable = ...;" entre guillemets après le = si c'est du texte
une fois déclarée, on peut la réutiliser en utilisant son nom, donc choisir nom pertinent, préférence anglais.
## /!\ le nom des variables est sensible à la casse /!\ 
camel case : mots tout attachés avec majuscule pour chaque première lettre à partir du 2ème mot, ex : maVariable
pascal case : même chose avec première lettre aussi en maj, ex : MaVariable
ici on fait en Camel case ! garder cette syntaxe tout le long pour que ce soit cohérent

en JS : un seul type pour tous les nombres (entiers, décimaux, etc.)
JS pas un langage pour les maths avancées

types : string, number, boolean, array(tableaux), object

// pour les commentaires sur une ligne, 
/* pour multilignes */

console.log() permet de print

les ";" sont optionnels en JS, node les ajoute lui-même. donc au choix, soit on les met partout, soit nulle-part, mais il faut choisir.

"" ou '' pour les guillemets. `` permet d'écrire sur plusieurs lignes

## mdn javascript / mdn web docs
## doc sur le JS, tenue par mozilla, complète et à jour, elle donne aussi la compatibilité avec les navigateurs.

var let et const
aucun var dans nos programme, jamais, nulle part. uniquement let et const. 
ajout de let et const avec ES6 pour pallier à des problèmes liés à var.
const = constante qui ne pourra pas être réassigné ensuite.
let = pour déclarer une variable qui pourra être réassignée à tout moment.

tab.push permet d'ajouter une valeur dans le tableau tab.
si on a déclaré un tableau avec const, ça n'empêche pas de le modifié avec .push et autres, on ne pourra juste pas le redéclarer.
on peut déclarer avec const tant qu'on de réassigne pas (avec = ex : tab=[...]) 
donc privilégier const autant que possible

quand on crée un tableau, on PEUT y mettre des variables de types différents, mais on ne DOIT pas le faire, car après quand on utilisera les données des tableaux

push ajoute un élément au tableau et retourne la nouvelle longueur du tableau
donc : 
```javascript
const tab = [1,2,3,4]
const longueurTab = tab.push(5)
console.log(longueurTab)
```
retournera 5, qui est la longueur du tableau après y avoir ajouté une nouvelle valeur.

.splice(1, 1) permet de supprimer un ou des éléments du tableau le premier nombre indique la position (qui commence à 0 dans un tableau), le second indique le nombre d'éléments à supprimer (ici position 1, 1 élément)

```
Session exercice sur les tableaux, fichier exoTableau.js
```

Javascript maintenant permet de tout faire en terme de programmation : des logiciels, des applis mobiles IOS et android, du web, etc.


dans les boucles (if, for, while, aussi appelées structures de contrôle) on utilise un triple égal en javascript ('===') pour vérifier l'égalité et donc pour vérifier une différence on fera '!=='

en JS, l'égalité ne prend pas en compte le type de donnée avec un '==' alors qu'avec '===' il vérifie la stricte égalité
donc si je demande si 1=='1' on me dira que oui alors que si je demande 1==='1' on me renverra que non

opérateur ternaire : abréviation de condition if/else 
on vérifie la condition et donne la valeur de renvoi si elle est vérifiée et la valeur de renvoi si elle ne l'est pas 
(comme un if/else donc)
exemple : 
```javascript
let age=25
let verif = (age>=18) ? "majeur" : "mineur"
console.log(verif)
//renvoi "majeur" puisque la condition est vérifiée
```
la boucle for of permet d'explorer un tableau plus rapidement (plus court) mais a aussi ses inconvénients : on explore tout le tableau (par défaut, c'est modifiable)

la syntaxe des objets en JS :
```javascript
let myObject ={
    firstname: "John",
    lastname: "Doe",
    age: 45,
    isAlive: true
}
```
la boucle for in permet d'explorer l'objet

déclaration de fonction :
```javascript
function sum (a, b){
    return a+b
}
//appel de fonction
console.log(sum(5,4)) //on peut aussi stocker le résultat dans une variable et afficher cette variable
```
la déclaration de fonction peut aussi s'écrire : 
```javascript
const sum = function (a,b){
    return a+b
}
//ou encore :
const sum = (a,b) => a+b //dans ce cas-ci le return est implicite
// ou bien
const sum = (a,b) => {
    return a+b
}
```
dans JS on peut passer des fonctions en tant que paramètre d'autres fonctions, on appelle ça un callback (fonction de rappel) : 
```javascript
setTimeout(function(){console.log("Hello World")}, 1000)
```
Ici, la fonction qui affiche Hello World est le premier paramètre de la fonction setTimeout(fonction déjà existante), 1000 est le second, la durée (en milisecondes). 
Le timeout retarde l'exécution de la fonction, mais le reste du programme n'est pas mis en pause et continue de s'exécuter.


Pour ajouter du JS dans les sites web on peut utiliser des bibliothèques, comme React. 
dom : représentation sous forme de variables/d'objets de toute l'arborescence html.

... : spread operator, permet d'extraire, éclater les données d'un tableau où on veut. Fonctionne aussi avec les objets.

regExp : expression régulière, permet de matcher des patterns dans des grosses chaines de caractères. 
Voir site regexpal.com pour s'entrainer et visualiser

str.replace : retourne une nouvelle chaine de charactères et ne modifie donc pas celle de départ.


Découverte du DOM : l'arobrescence de la page web, dans laquelle on va pouvoir se déplacer et aller chercher des éléments en particulier, grâce à leur Id entre autres, et à <em>document</em>. 

<em>Document : "représente la page web et permet d'accéder au contenu de la page formé par l'arbre du DOM"</em> -Source : MDN Web Docs.

```JS
const doc = document // va stocker document dans une variable doc
const body = document.body
const element = document.getElementById ('Id') // permet de récupérer un élément de la page grâce à son Id, théoriquement unique. 
const element2 = document.getElementsByClass ('class') // permet de récupérer les éléments ayant la même classe.
```

#
## Session de cours sur les promises 

```JS
const promise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 10)
        if (randomNumber % 2 === 0) {
            resolve(randomNumber)
           
        } else {
            reject(new Error('Le nombre est impair.'))
        }
        
    
    }, 1000)
    
})
promise 
    .then(result => console.log(result))
    .catch(error => console.error(error.message))

```

## API Fetch
Fichier exo.html montrant comment utiliser fetch pour récupérer des données, avec PokeAPI en l'occurence.
Ici mon objectif était récupérer les 150 premiers pokemon avec fetch 
puis sur ma page HTML lorsque je cliquais sur le bouton afficher un des 150 pokemons de manière aléatoire, avec son image correspondante.

On se sert du DOM et de getElementById pour insérer dans la page des informations récupérer grâce à fetch.






