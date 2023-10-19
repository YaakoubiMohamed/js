let villes = [
    {
        nom: "Sfax", habitant: 1000000 , region :"nord"
    },
    {
        nom: "Gabes", habitant: 300000, region: "sud"
    },
    {
        nom: "Tunis", habitant: 1500000, region: "nord"
    }
]

for(let i =0; i < ville.length; i++){
    if(ville[i].habitant > 1000000){
        // console.log(ville[i].nom)
    }
}

// ville = 
ville.filter(ville => ville.habitant > 1000000)

let result = ville.filter(ville =>{
    return ville.habitant > 1000000  && ville.region == "nord"
})


let tab = [ 24, 6 ,9, 25, 7,80];
let res = tab.filter(val =>{
    return val < 10
})
for(let i = 0; i < tab.length; i++){
    if(tab[i] < 10){
        res.push(tab[i])
    }
}
console.log(result)
// console.log(ville)
// 1000000 > 1000000 false