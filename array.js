let  tab = [5,24,3,70,13];

/**  trie par ordre croissant le tableau tab en utilisant la boucle for **/
// var min =tab[0];

// for(let i=0; i<tab.length; i++){
//     let min = i;
//     for(let j=i+1; j<tab.length; j++){
//         if(tab[j]<tab[min]){
//             min = j;
//         }
//     }
//     let temp = tab[i];//12
//     tab[i] = tab[min];//6
//     tab[min] = temp;//12
// }

/**  trie par ordre croissant le tableau tab en utilisant la methode sort **/
console.log(tab.sort( function(a,b){
    console.log(a);
    console.log(b);
    if(a<b){
        return -1;
    }
    if(a>b){
        return 1;
    }
    return 0;
}));
