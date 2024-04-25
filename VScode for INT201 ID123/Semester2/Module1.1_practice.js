// 1

function findMin(numberArray){
    let smallestnum = Math.min(...numbers)
    return smallestnum
}

let numbers = [34, 1, 58, 8, 21, 5, 13, 3, 89, 7]
console.log(findMin(numbers))

//2

let numString = "1234"
let num = parseInt(numString)
console.log(typeof num)

//3 

let a = 5, b = 10;
[a, b] = [b, a]
console.log(a)
console.log(b)

//4

let value1 = [1, 2, 3]
let value2 = []
let value3

function emptyArrayCheck(array){
    if(array === undefined || array === null){
        return false
    }else if(array.length === 0){
        return true
    }else{
        return false
    }
}

console.log(emptyArrayCheck(value1))
console.log(emptyArrayCheck(value2))
console.log(emptyArrayCheck(value3))

//5

let mixedArray = [42, "hello", {name: "Joe", surname: "Doe"}, true, 56, false, {name: "John", surname: "Smith"}, {name: "Joy", surname: "Stein"}]
let objectElements = mixedArray.filter(element => typeof element === 'object')

for (let obj of objectElements) {
  console.log(obj)
}

//6
//  10+20 = 30 , but with numbers+string string will be converted to number which "20"=1010
let x = 10;
let y = "20";
let result = x + y;
console.log(result); 
console.log(typeof result); 


//7

let person = {
    name: "Alice",
    age: 25,
    isStudent: true
  };
  
  person.hobbies = ["hobby1", "hobby2", "hobby3"]
  person.age = 30
  delete person.isStudent
  console.log(person)


//8

if(1){
    console.log(1); // 1 means true in JS so it just shows "1" because if statement is done
    }
    if([]){
    console.log([]);// prints empty array
    }
    if(""){
    console.log("");// prints empty string 
    }
    if(null){
    console.log(null); // null means false in javascript and with if("false") the if statement will not be done
    }
    if(undefined){
    console.log(undefined); // undefined means false in javascript and with if("false")  the if statement will not be done
    }


//9

let peopleObj1 = { name: "John", surname: "Doe" },
  peopleObj2 = { name: "Sarah", surname: "Wilson" },
  peopleObj3 = { name: "david", surname: "Brown" },
  peopleObj_4 = { name: "david", surname: "Brown" }


function compareNames(obj1, obj2) {
  return obj1.name.toLowerCase() === obj2.name.toLowerCase()
}

if (compareNames(peopleObj3, peopleObj_4)) {
  console.log("These two objects have the same name.")
} 

//10

let people = [
    { name: "John", surname: "Doe" },
    { name: "olivia", surname: "Smith" },
    { name: "john", surname: "Johnson" },
    { name: "Sarah", surname: "Wilson" },
    { name: "David", surname: "Brown" },
    { name: "Emily", surname: "Davis" },
    { name: "David", surname: "Miller" },
    { name: "Olivia", surname: "Taylor" },
    { name: "david", surname: "Anderson" },
    { name: "Sophia", surname: "Clark" },
  ]
  

  function findSameNames(people) {
    const sameNames = []

    for (let i = 0; i < people.length; i++) {
      const currentName = people[i].name.toLowerCase()
      for (let j = i + 1; j < people.length; j++) {
        if (currentName === people[j].name.toLowerCase()) {
          if (!sameNames.includes(currentName)) {
            sameNames.push(currentName)
          }
        }
      }
    }
    return sameNames;
  }
  
  let resultName = findSameNames(people)
  console.log(resultName)



