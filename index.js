console.log("Hello World")

var maVariable="Bonjour"
var myNumber=45
var isAwake=true
console.log(typeof myNumber)
const myArray = [1, 3, 4, 'hello']
console.log(myArray)
console.log(myArray.length)

const nouvelleLongueurTableau = myArray.push('new element')

console.log(myArray)
console.log(nouvelleLongueurTableau)

let age=15
if (age>=18) {
    console.log("vous êtes majeur!")
}
else {
    console.log("vous êtes mineur !")
}

const myNewArray = [1, 3, 44354, "ghdfh", true, "test"]
for (let index = 0; index < myNewArray.length; index++) {
    const element = myNewArray[index];
    console.log(element)  
}

for (const value of myNewArray) {
    console.log(value)
} //même résultat mais plus court, en revanche on parcourt forcément tout le tableau

//la syntaxe des objets en JS 
let myObject ={
    firstname: "John",
    lastname: "Doe",
    age: 45,
    isAlive: true
}

for (const key in myObject) {
    const element = myObject[key]
    console.log(key)
}

//déclaration de fonction :
function sum (a, b){
    return a+b
}

//appel de fonction
console.log(sum(5,4)) //on peut aussi stocker le résultat dans une variable et afficher cette variable

setTimeout(function(){console.log("Hello World")}, 1000)


