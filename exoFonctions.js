function sum (a, b){
    return a+b
}

function max(tab){
   return Math.max(...tab)
}

function noVowel(str){
    return str.replace(/a|e|i|o|u|y/gi,'') //peut s'écrire /[aeiouy]/. Le g permet de supprimer toutes les ittérations et pas seulement la première, le i permet de traiter min et maj.
}

function alphaSort(tab){
    return tab.sort()
}

function numToWord (num){
    const ones = ['', 'one', 'two','three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']

    if (num<10) {
        return ones[num]
    } else if (num < 20){
        return teens [num-10]
    } else {
        return tens[Math.floor(num/10)] + '-' + ones[num%10]
    }
}

function tabObjectValue (objectTab, str){
    return objectTab.map((obj) => obj[str]) //la fonction map crée un nouveau tableau avec le résultat de l'opération effectuée sur chacun des éléments du tableau initial
}

function descending (tab){
    tab.sort((a,b)=>b-a)
    return tab
}

function upperVowels (str){
    return str.replace(/[aeiouy]/gi,function (vowels){
        return vowels.toUpperCase()
    })
}

function vowelsCount (str){
    return str.replace (/[aeiouy]/gi || [] ).lenght //on va mesurer la longueur du tableau constitué uniquement des voyelles le || (ou logique) prévoit le cas où il y a 0 voyelle
}

function upperConsonants (str){
    return str.replace(/[^aeiouy]/gi, cons => cons.toUpperCase()) //rappel autre façon d'écrire une fonction.
}


const testTabLetter = ["a","z","e","r","t","y","u","i","o","p"]
const testTabNum = [1, 35, 4, 51, 12, 25, 36, 7, 97]
const testString = "azertyuiopazertyuiop"

const someObject = {
    firstname: 'Romain',
    lastname: 'HIDRI',
    age: 21,
    hasDriverLicence: true, 
    placeOfBirth:'Lyon'
}

const objectArray = [
    { firstname: 'Romain', name : 'Hidri', age : 35},
    { firstname: 'Théophile', name : 'Faugeras'},
    { firstname: 'Clément', name : 'Valentin'},
    { firstname: 'Maxime', name : 'Nony', age : 19},
    { firstname: 'Robin', name : 'Couture'},
]


console.log(sum(5,4))
console.log(max(testTabNum))
console.log(noVowel(testString))
console.log(alphaSort(testTabLetter))
console.log(numToWord(42))
console.log(tabObjectValue(objectArray, 'firstname'))
console.log(descending(testTabNum))
console.log(upperVowels(testString))
console.log(upperConsonants(testString))


