let arr =[ 15,3,18,17,40];

let min = arr[0];
let max = arr[0];

for(let i=0; i<arr.length; i++){
  if(arr[i] < min){
    min = arr[i];
  }
  if(arr[i] > max){
    max = arr[i];
  }
}

console.log('valeur min',min); // 3
console.log('valeur max',max); // 40