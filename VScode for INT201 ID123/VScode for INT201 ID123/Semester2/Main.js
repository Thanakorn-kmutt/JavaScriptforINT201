//week1--------------------------------------------------------------------
 
// const numbers = [7, 5, 3, 9, 4];
 
// let sum = 0;
 
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
 
// let average = sum / numbers.length;
 
// let smallestnum = numbers[0];
 
// for (let x = 0; x < numbers.length; x++) {
//   if (smallestnum > numbers[x]) {
//     smallestnum = numbers[x];
//   }
// }
 
// let largestnum = numbers[0];
 
// for (let y = 0; y < numbers.length; y++) {
//   if (largestnum < numbers[y]) {
//     largestnum = numbers[y];
//   }
// }
 
// console.log("sum = " + sum);
// console.log("average = " + average);
// console.log("smallest number = " + smallestnum);
// console.log("largest number = " + largestnum);
 
 
//===================
 
 
// function swap(value1,value2){
//     value1 = [value1,value2]
//     value2 = value1[0]
//     value1 = value1[1]
 
//     return {value1,value2}
 
// }
 
// console.log(swap(1,2))
 
//week2--------------------------------------------------------------------
 
 
// const numbers = [-1, 0, 3, 50, 11]
 
// function findmin(array1){
//     let smallestnumber = numbers[0]
   
//     array1.forEach((number) => {
//         if(smallestnumber > number){
//             smallestnumber = number
//         }
//     })
//     return smallestnumber
// }
 
 
 
// function findmax(array1){
//     let biggestnumber = numbers[0]
   
//     array1.forEach((number) => {
//         if(biggestnumber < number){
//             biggestnumber = number
//         }
//     })
//     return biggestnumber
// }
 
// console.log(findmin(numbers))
// console.log(findmax(numbers))
 
 
 
//===================
 
 
// const book1 = {isbn:'1234',title:'JS',authors:'US',pages:'600'}
// const book2 = {isbn:'5678',title:'NOTJS'}
 
// function bookmerge(item1,item2){
//     const mergedbook = {...item1,...item2}
//     return mergedbook
// }
 
// console.log(bookmerge(book1,book2))
 
 
//===================
 
 
// function palindromescheck(word){  //broken
//     let i = word.length/2
 
//     let roundedi = Math.floor(i)
   
 
//     let backhalf = word.substring(roundedi)
//     let fronthalf = word.substring(0,roundedi)
   
//     if(backhalf == fronthalf){
//         return `${word} is a palindrome`
//     } else {
//         return `${word} is not a palindrome`
//     }
 
// }
 
// console.log(palindromescheck('racecar'))
 
//===================
 
 
// function palindromescheck(word){
//     let reversedword = word.split('').reverse().join('')
 
//     if(reversedword == word){
//         return `${word} is a palindrome`
//     } else {
//         return `${word} is not a palindrome`
//     }
   
// }
 
// console.log(palindromescheck('racecar'))
 
// ===================
 
 