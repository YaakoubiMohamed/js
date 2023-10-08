let ville = [
    {
        nom: "Sfax", habitant: 1000000 , region :"sud"
    },
    {
        nom: "Gabes", habitant: 300000, region: "nord"
    },
    {
        nom: "Tunis", habitant: 1500000, region: "sud"
    }
]

for(let i =0; i < ville.length; i++){
    if(ville[i].habitant > 1000000){
        console.log(ville[i].nom)
    }
}

// ville = 
ville.filter(ville => ville.habitant > 1000000)

let result = ville.filter(ville =>{
    return ville.habitant < 1000000  && ville.region == "nord"
})

console.log(result)
console.log(ville)


