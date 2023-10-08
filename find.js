let arr = [24, 80 ,9, 25, 7,80];

console.log(arr.indexOf(80)); // return 1 indes of 6
console.log(arr.indexOf(4)); // return -1 index of 4
console.log(arr.lastIndexOf(80)); // return 5 index of 80



let tab = [ 24, 6 ,9, 25, 7,80];

console.log(tab.includes(2)) // return false
console.log(tab.includes(6)) // return true
console.log(tab.includes(6,2)) // return flase
console.log(tab.includes(6,0)) // return true 


let numbers = [3,5,6,8,6]
console.log(numbers.find(r => r % 2 === 0)) // return first even number in array


console.log(numbers.findIndex(r => r === 6)) // return index of first even number