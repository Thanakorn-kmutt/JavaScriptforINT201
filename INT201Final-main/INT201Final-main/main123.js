// console.log('bwoah')
// console.log('bwoah')
// console.log('bwoah')

// function greeting(someone){
//     return 'hello'+someonem
//     return `hello, ${someone}`
// }

// console.log(greeting())
// let name = 'thanakorn'
// console.log(name)
// const totalStudent = 70
// name = 100
// console.log(name)

// const std = {id: 65130500123, name: 'Thanakorn'} //object is a collection of property - one property contains key and value (key:value)
// std.name = 'Thanakorn'
// //std = obj
// console.log(std)
// const nums = [5,10,15,20] //array
// console.log(nums)

//const i = 5
//i = 10

// setTimeout(() => {
//    console.log('task1: a complex task was done')
// },10000);

// console.log('Thanakorn1')

// setTimeout(() => {
//     console.log('task2: a complex task was done')
//  },3000);

// console.log('Good bye tasks')

// let a
// console.log(a)
// if (a === undefined || a === null) console.log('no value')

//week 3 --------------------------------------------------------------------------------------------------------------------

// let a
// a = "b"
// console.log(a)
// console.log(typeof a)
// a = 3
// console.log(a)
// console.log(typeof a)

// let nums_array = [33,44,55,66,77]
// console.log(nums_array)
// console.log(typeof nums_array)

// const obj = {id:33, title:"44"}
// console.log(obj)

// console.log("-----------------------")

// nums_array = obj
// console.log(nums_array)

// const ids = [101,102,103]
// ids[0] = 1
// console.log(ids)

// let m,
//   n,
//   o = 1,
//   p = true,
//   q = null

// console.log(m)
// console.log(n)
// console.log(o)
// console.log(p)
// console.log(q)

// if (m === undefined) console.log('m is undefined')
// if (q === null) console.log('q is null')
// // == check only value, do not care data type
// if ('2' == 2) console.log(`'2' == 2`)
// //=== check data type first, if the data type does not match then return false otherwise value will be check.
// if ('2' === 2) console.log(`'2===2'`)
// else console.log(`'2' !== 2`)

// if (typeof m === 'undefined') console.log(`typeof m ==='undefined'`)
// //null has typeof object
// if (typeof q === 'object') console.log(`typeof n === 'object'`)

// function doSmth(activity){
//     return activity
// }
// console.log(doSmth('online learning'))
// console.log(typeof doSmth)

// let m = 1
// console.log(typeof m)
// console.log(typeof String(m))
// console.log(typeof Boolean(m))

//week 4 --------------------------------------------------------------------------------------------------------------------

//let Scope Tests #################

// let someone = 'a' //empty string
// let who //who=undefined
// console.log(typeof someone) //string
// let discount = 0
// let x = 5
// console.log(x) //5
// if (someone) {
//   let x = 1
//   console.log(x) //1
//   who = 'member'
//   discount = 0.1
// } else {
//   let x = 2
//   console.log(x) //2
//   who = 'guest'
//   discount = 0.05
// }
// console.log(x) //5
// console.log(who)
// console.log(discount)

//optinal chaining ##########??????########

// let str = null
// console.log(str?.toLowerCase())

// let nums
// console.log(nums?.[0])

// let obj
// console.log(obj?.id)

//optinal chaining ##########??????########

//nullish Coalescing (??) |||||

// let nums = [1,2,3]
// let arr
// arr = nums ?? []
// console.log(nums)
// console.log(arr)

//nullish Coalescing (??) |||||

// ---------------------------------DICE---------------
// // random Dice faceValue in a range 1-6
// let rand = Math.floor(Math.random() * 6) + 1 //1-6*
// console.log(rand)
// //random in a range 10 to 50
// let rand2 = Math.floor(Math.random() * 41) + 10
// //0-40
// //10-50
// //random in a range 100-1000
// let rand3 = Math.floor(Math.random() * 901) + 100
// //0-900
// //100-1000

// //random in a range 1-100
// let min = 1
// let max = 100
// let rand4 = Math.floor(Math.random() * (max - min + 1)) + min
// //1. Math.random() -> 0 - 0.9999999*
// //2. No1. * 100 -> 0 - 99.99999999*
// //3. Math.floor(No2.) -> 0 - 99
// //4. No3.+ min -> 1 - 100

// min = 2
// max = 12
// let rand5 = Math.floor(Math.random() * (max - min + 1)) + min

// function randomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min
// }

// let rand1 = randomNumber(1, 6)
// let rand2 = randomNumber(10, 100)
// let rand3 = randomNumber(1, 100)
// let rand4 = randomNumber(2, 12)
// ---------------------------------DICE---------------

// let str1 = 'apple'
// let str2 = 'Apple'
// let str3 = 'APPLE'
// let str4 = 'apple'

// console.log(str1 === str2) //'a' === 'A' return false
// console.log(str1 !== str2) //'a'!=='A' return true

// console.log(str1 === str4) //'a'==='a', 'p' ==='p', 'p'==='p', 'l'==='l', 'e'==='e' return true

// console.log(str1 < str2) //'a'<'A' 97<65 return false

// console.log(str1.includes('App')) //false
// console.log(str1.includes('app')) //true

//includes with case insensitive
// console.log(str1.toLowerCase().includes('App'.toLowerCase()))
// console.log(str1.toUpperCase().includes('APP'.toUpperCase()))

// === vs includes() (case sensitive)
//'apple'.toLowerCase() ==='Apple'.toLowerCase() return true
//'app'==='apple' return false

//'apple'.includes('apple') return true
//'apple'.includes('app') return true

//week 6 --------------------------------------------------------------------------------------------------------------------

// const x = [1, true, 'A']
// console.log(x)
// console.log(x.length) //lenght is the size of array
// console.log(x[0]) //get the first element of array

// x[1] = false
// x[x.length] = 555 // append/add a new element at the end of the array
// x.push(888)
// console.log(x)

// console.log(x[x.length - 1]) //get the last element of array

// const y = [] //y = empty array
// let z

// console.log(typeof y)
// console.log(typeof z)

// if (y.length === 0) { console.log('y is an empty array') }
// else { console.log('y is not an empty array') }

// if (z?.length === 0) { console.log('z is an empty array') }
// else { console.log('z is not an empty array') }

// const student = [
//     {id:11111, name:'somchai'},
//     {id:22222, name:'john'},
//     {id:33333, name:'tom'}
// ]
// console.log(student.length)
// console.log(student[0])

// const studentIds = [
//     [101,102,103],
//     [99999,88888],
//     [1234567,12345678],
//     [555]
// ]
// console.log(studentIds.length)
// console.log(studentIds[1])
// console.log(studentIds[studentIds.length])
// console.log(studentIds[0][1]) //find the value in array inside the array

// const x = [1,9,11]
// const y = [3,5,7,33,44]

// const z = [...x,...y] //to copy elements
// console.log(z)

// const a = [1,...y,11]
// console.log(a)

// const str = 'helo world'
// const collStr = [...str]
// console.log(collStr)

// const x = new Array()
// console.log(x)
// console.log(x.length)

// const y = new Array(5)
// console.log(y)
// console.log(y.length)

// const z = new Array(1,3,5,7)
// console.log(z)
// console.log(z.length)

// const x = Array.of(10)
// console.log(x)
// console.log(x.length)

// const y = Array.of(x)
// console.log(y)
// console.log(y.length)

// const z = Array.of('1',1+1,true)
// console.log(z)
// console.log(z.length)

// const x = [1,2,3,4,5,6]
// const y = Array.from(x)
// console.log(x)
// console.log(y)
// console.log(y.length)

// if (x === y) console.log('x === y')
// else console.log(x !== y)

// const x = [1,2,3,4,5,6]
// delete x[1] //will show as "<1 empty item>" but array size or other numbers wont be moved or changed
// console.log(x)
// console.log(x.length)

// const x = [1,3,5]
// const y = [2,4,6]

// const [a] = x
// const [m,n,...o] = y //if you const or let a new array the "...x" can only be used last ########
// console.log(a)
// console.log(m)
// console.log(n)
// console.log(o)

// const z = [...x,2,4,...x]
// console.log(z)

// const [, e] = x
// console.log(e)

// const [k, , l, , ...h] = y
// console.log(k)
// console.log(l)
// console.log(h)

// const str = [...'hola world']

// for (const entry of str.entries()){
//     console.log(entry)
// }

// function concat(str1,str2){
//     return str1+str2
// }
// console.log(concat('hello','world'))

// const toLower = function (str){
//     return str.toLowerCase()
// }

// console.log(toLower('HOLAWURLD'))

// const doSomething = toLower
// console.log(doSomething('HEY'))
// console.log(typeof doSomething)

// const y = toLower('Heyo')
// console.log(y)
// console.log(typeof y)

// const doIt = function(op,str1,str2){
//     return op(str1,str2)
// }
// console.log(doIt(concat,'good','morbing'))
// console.log(doIt(toLower, 'GOOD', 'MORBING'))

// function a() {
//       return toLower
//     }
// const m = a()
// console.log(m('ABC'))

// function double(a){
//     a = a * 2
//     return a
// }

// let m = 5

// console.log(double(m))
// console.log(m)

// function update(a){
//     a[0] = 555
// }
// const a = [1,2,3]
// console.log(update(a))
// console.log(a)

//week 7 --------------------------------------------------------------------------------------------------------------------

// const mail = {
//   sender: "SIT, KMUTT",
//   recipent: {
//     firstname: "Umaporn",
//     lastname: "Sup",
//   },

//   title: "Welcome to KMUTT",
//   sentDetail: {
//   sentDate: new Date(Date.now()),

//     host: {
//       name: "@sit.kmutt",
//     }
//   }
// }

/*
class person{
    constructor(firstName,lastName,dateOfBirth){
        this.firstName
        this.lastName
        this.dateOfBirth
    }

    getFullName(){
        return `${this.lastName}` , `${this.firstName}`
    }

    isEqual(anotherPerson){
        return this.firstName.toLowercase() === anotherPerson.toLowercase()&&
               this.lastName.toLowercase() === anotherPerson.toLowercase()
    }

    getAge(){
        const currentDateMilli = Date.now()
        const birthDateMilli = this.dateOfBirth.getTime()
        const diffMilli = currentDateMilli - birthDateMilli
        const diffDate = new Date(diffMilli)
        return diffDate.getFullYear() - 1970 //minus 1970 to get the correct years
    }

    toString(){
        return `${this.getFullName()}` , `${this.getAge()}`
    }
}

const p1 = new person('person1','one',new Date(1991,1,1))
console.log(p1.getAge)
const p2 = new person('person2','two',new Date(1992,2,2))

console.log(p1.getFullName)
console.log(p2.getFullName)

console.log(p1.isEqual(p2))
console.log(p2.isEqual(p1))

console.log(p1.toString())
*/

// //function declaration, named function
// function sum1(n1,n2){
//     return n1+n2
// }

// //function expression, annonymous function
// const sum2 = function (n1,n2){
//     return n1+n2
// }

// //function expression, named function
// const sum3 = function sumfn(n1,n2){
//     return n1+n2
// }

// //arrow function
// const sum4 = (n1,n2) => n1+n2

// console.log(sum1(1,2))
// console.log(sum2(1,2))
// console.log(sum3(1,2))
// console.log(sum4(1,2))

/*
const keywords = ['destructuring','spread','rest','prototypes','function']
const mails=[
    {id:100001,
    sender:{
        firstname:'fname1',
        lastname:'lname1'
    },
    subject:'reminder1'
},

    {id:100002,
    sender:{
        firstname:'fname2',
        lastname:'lname2'
    },
    subject:'reminder2'
}
]

keywords.forEach((keywords) => console.log(keywords))
mails.forEach((mail) => console.log(mail))


let firstChars = ''
keywords.forEach((keyword) => (firstChars += keyword.charAt(0)))
//const keywords = ['destructuring', 'spread', 'rest', 'prototypes', 'function']
//1. string contains the first charactor of each keyword
//'dsrpf'
console.log(firstChars)
keywords.push('optional chaining')
console.log(keywords)
//2. all mail ids of mails array
const mailIds = []
mails.forEach((mail) => mailIds.push(mail.id))
console.log(mailIds)

//3. return keywords array that includes 'es' (case insensitive)
const esKeywords = keywords.filter((keywords) =>
    keywords.toLocaleLowerCase().includes('es')
)
console.log(esKeywords)

//4. array that contains all senders firstname
const mailSenders = mails.map((mail) => mail.sender.firstname)
console.log(mailSenders)

//5. array that contains all mail ids that starts with 'logId-'
const logIdMails = mails.map((mail) => 'logId-' + mail.id)
console.log(logIdMails)
*/

//week 8 warm up --------------------------------------------------------------------------------------------------------------------

/*
function getPassingNames(students) {
  return students
    .filter((student) => student.score >= 70)
    .map((filterStudent) => filterStudent.name.toUpperCase())
}
const studentScores = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 55 },
  { name: "Eve", score: 78 },
]
const passingNames = getPassingNames(studentScores);
console.log(passingNames)
*/

//week 8 --------------------------------------------------------------------------------------------------------------------


// const studentScores = [
//     { name: 'Alice', score: 85 },
//     { name: 'Bob', score: 92 },
//     { name: 'DAVID', score: 79 },
//     { name: 'Charlie', score: 68 },
//     { name: 'David', score: 55 },
//     { name: 'Eve', score: 78 },
//     { name: 'david', score: 85 }
//   ]

// const StudentDavid = studentScores.filter((student) => student.name.toLowerCase() === "david" && student.score >= 80)
// console.log(StudentDavid)



// const fruits = ['apple','mango','orange','pineapple']
// console.log(fruits.every(fruit => {
//     return ['a','e','i','o','u'].includes(fruit[0].toLowerCase())
// } ) )



// const fruits = ['apple','mango','orange','pineapple']
// const result1 = fruits.reduce((firstchar,fruit)=> firstchar.concat(fruit.charAt(0)),'' )
// console.log(result1)

// const result2 = fruits.map((fruits) => fruits[0]).join(' ')
// console.log(result2)


// const nums=[1,2,3,4,5]
// const multiplyresults = nums.reduce((multiplynums,num) => multiplynums * num)
// console.log(multiplyresults)



// const sellProducts = [
//     {id:1, price:100, sell:5},
//     {id:2, price:50, sell:2},
//     {id:3, price:25, sell:10}
// ]

// const result = sellProducts.reduce((total,product) => total + (product.price * product.sell))
// console.log(result)



// const fruits = ['apple','mango','orange','pineapple','banana','grape']

// //remove wirth splice
// const removedfruits1 = fruits.splice(1,2)
// console.log(removedfruits1)
// console.log(fruits)

// //add with splice
// const removedfruits2 = fruits.splice(2,0,'mango','rambutcha')
// console.log(removedfruits2)
// console.log(fruits)

// //replace with splice
// const replacedfruits = fruits.splice(2,1,'mangosteen')
// console.log(replacedfruits)
// console.log(fruits)


// const animals = ['ant', 'dogs', 'cats', 'bird']
// const message = 'Practices make perfect'
// //string includes - includes substring (case sensitive)
// console.log(message.includes('ice')) //true
// console.log(message.includes('make')) //true
// //array includes - includes string in array elements (case sensitive)
// console.log(animals.includes('ats')) //false
// console.log(animals.includes('cats')) //true


//week 10 --------------------------------------------------------------------------------------------------------------------

// function ops(n1,n2,n3){
//     console.log(arguments.length)
//     arguments[0] = 555
//     for(const arg of arguments){
//         console.log(arg)
//     }
// }
// ops(1,true,'abc',10.5,100)

// function sum(...nums) {
//     return nums.reduce((total, current) => total + current, 0)
//   }
    

// function ops(n1 = 'F', n2 = 'false', n3 = 'unknown') {
//     return { n1, n2, n3 }
//   }
//   console.log(ops()) //{ n1: 'F', n2: 'false', n3: 'unknown' }
//   console.log(ops('A')) //{ n1: 'A', n2: 'false', n3: 'unknown' }
//   console.log(ops('A', true)) //{ n1: 'A', n2: true, n3: 'unknown' }
//   console.log(ops('A', true, 'Somchai')) //{ n1: 'A', n2: true, n3: 'Somchai' }
//   console.log(ops(undefined, undefined, undefined)) //{ n1: 'F', n2: 'false', n3: 'unknown' }
//   console.log(ops(null, null, null)) //{ n1: null, n2: null, n3: null }
//   console.log(ops('A', undefined, 'Somchai')) //{ n1: 'A', n2: 'false', n3: 'Somchai' }


// function sum(num1, num2, num3) {
//     return num1 + num2 + num3
//   }
//   let nums = [5, 20, 15]
//   //spread parameter
//   console.log([...nums]) //5 20 15
//   console.log(...nums) //5 20 15
//   console.log(sum(...nums)) //40, spread operator
//   console.log(sum(nums)) //5,20,15undefinedundefined



// const nums = [10,20,30,40,50]
// const obj = {id:1001, title:'JS Beginner', isbn: 77777777777, authors:{fullname: 'Jane Smith'}}

// const [num1,num2] = nums
// console.log(num1)
// console.log(num2)

// const {isbn: bookId} = obj
// console.log(bookId)

// const {authors:{fullname: authorName}} = obj
// console.log(authorName)


/*
class Todo {
    static nextId = 1
    constructor(description) {
      this.id = Todo.nextId++
      this.description = description
    }
    getTodo() {
      return this
    }
    setDescription(newDescription) {
      this.description = newDescription
    }
  }
  function TodoManagement() {
    let todos = []
    function addTodo(description) {
      const todo = new Todo(description)
      return todos.push(todo)
    }
    function findTodo(searchId) {
      // console.log(todos)
      const result = todos.find((todo) => searchId === todo.id)
      return result
    }
    function findIndexTodo(searchId) {
      return todos.findIndex((todo) => searchId === todo.id)
    }
    function removeTodo(removeId) {
      todos.splice(findIndexTodo(removeId), 1)
      console.log(todos)
    }
    function getTodos() {
      return todos
    }
    return {
      addTodo,
      findTodo,
      findIndexTodo,
      removeTodo,
      getTodos
    }
  }
  const todo1 = new Todo('Laundry')
  const todo2 = new Todo('Exercise')
  console.log(todo1.getTodo())
  console.log(todo2.getTodo())
  todo2.setDescription('Play game')
  console.log(todo2.getTodo())
  // const todoManagement = TodoManagement()
  // console.log(todoManagement.addTodo('Running'))
  // console.log(todoManagement.addTodo('Hello world, Goose'))
  const { addTodo, findTodo, findIndexTodo, removeTodo, getTodos } =
    TodoManagement()
  console.log(addTodo('Devops Su Su'))
  console.log(addTodo('Frontend Su Su'))
  console.log(findTodo(1))
  console.log(findIndexTodo(1))
  console.log(findIndexTodo(3))
  // removeTodo(3)
  console.log(getTodos())
*/



//week 11 --------------------------------------------------------------------------------------------------------------------












