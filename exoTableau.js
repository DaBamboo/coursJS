// exos cours 1 sur les baleaux
const tab1 = []
for (let i = 1; i < 11; i++){
    tab1.push(i)
}
for (let j=0; j<tab1.length; j++){
    console.log(tab1[j])
}
/*autre possibilité : la boucle forEach qui effectue une action pour chaque élément du tableau
tab1.forEach((numero)=>{
    console.log(numero)
})
*/   
const tab2=['lundi','mardi','mercredi','jeudi','vendredi','samedi','dimanche']
console.log(tab2[0])

const tab3=[2,4,6,8,10]
let somme=0
for (let i=0; i<tab3.length; i++){
    somme=somme+tab3[i]
}
console.log(somme)

const tab4=['pomme','orange','cerise','pêche','pastèque']
tab4.push('raisin')
console.log(tab4)

const tab5=[8,10,12,14,17]
let moyenne=0
for (let i=0; i<tab5.length; i++){
    moyenne=moyenne+tab5[i]
}
moyenne=moyenne/tab5.length
console.log(moyenne)

const tab6=['mésange','corbeau','aigle','geai', 'perroquet']
for (let i=0; i<tab6.length; i++){
    if (tab6[i]==='aigle'){
        console.log('trouvé le mot', tab6[i], 'en position', i)
    }
}
// autre solution : console.log((tab6.includes('aigle'))

const tab7=['France', 'Canada', 'Japon', 'Islande', 'Suède']
tab7.sort()
console.log(tab7)

const tab8=['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'décembre']
console.log(tab8[2])

function getRandInt(max){
    return Math.floor(Math.random()*max)
}
const tab9=[getRandInt(100), getRandInt(100), getRandInt(100), getRandInt(100), getRandInt(100)]
console.log(tab9)-   
console.log(Math.max(...tab9))
console.log(Math.min(...tab9))
//les ... permettent d'extraire les données du tableau (spread)


const tab10 =['bateau', 'chapeaux','je vais dormir', 'et bah dans ce cas bonne nuit']
let long=0
for (let i=0; i<tab10.length; i++){
    if (tab10[i].length>tab10[long].length)
    long=i
}
console.log(tab10[long])




