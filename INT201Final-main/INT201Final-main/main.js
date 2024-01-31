//week 12 --------------------------------------------------------------------------------------------------------------------

// const {echo, MAX_VALUE} = require('./libary/utility')
// console.log(echo('text_text_text'))
// // console.log(sum(1,5,4))
// console.log(MAX_VALUE)

//---------------------------

// import {sum,echo,MAX_VALUE} from './libary/utility'
// console.log(echo('text_text_text'))
// console.log(sum(1,5,4))
// console.log(MAX_VALUE)

//---------------------------

// const rootNode = document
// console.log(rootNode)
// console.log(rootNode.nodeName) //#Document
// console.log(rootNode.nodeType) //9
// console.log(rootNode.nodeValue) //null

// console.log(document.documentElement)
// console.log(document.documentElement.nodeName)
// console.log(document.documentElement.nodeType)
// console.log(document.documentElement.nodeValue)

// console.log(document.body)
// console.log(document.body.nodeName)
// console.log(document.body.nodeType)
// console.log(document.body.nodeValue)

// console.log(document.head)
// console.log(document.head.nodeName)
// console.log(document.head.nodeType)
// console.log(document.head.nodeValue)

// console.log(document.title)
// console.log(document.title.nodeName)
// console.log(document.title.nodeType)
// console.log(document.title.nodeValue)

// const headElement = document.head
// console.log(headElement)

// //Child relationship
// //1. childNodes (NodeList data type) = query children with all node types
// const headChildren = headElement.childNodes
// console.log(headChildren)
// headChildren.forEach((hc) =>{
//     console.log(hc.nodeName)
//     console.log(hc.nodeType)
//     console.log(hc.nodeValue)
// })
// //2. children (HTMLCollection data type) = query children wiht ELEMENT type only
// //convert array-like to array before using foreach function
// console.log('lenght:', headElement.children.length)
// Array.from(headElement.children).forEach((hc)=>{
//     console.log(hc.nodeName)
//     console.log(hc.nodeType)
//     console.log(hc.nodeValue)
// })

// //parent relationship
// //get parent including all node types
// const headParentNode = headElement.parentNode
// //get parent only element node type
// const headParentElement = headElement.previousSibling

// console.log(headParentNode)
// console.log(headParentElement)

// //sibling relationship
// //get previous sibling including all node types
// const headPreviousSibling = headElement.previousSibling
// //get previous sibling only element node type
// const headPreviousSiblingElement = headElement.previousElementSibling
// console.log(headPreviousSiblingElement)
// //get next sibling including all node types
// const headNextSibling = headElement.nextSibling
// console.log(headNextSibling)
// //get next sibling only element node type
// const headNextSiblingElement = headElement.nextElementSibling
// console.log(headNextSiblingElement)


// //get first child
// console.log(headElement.firstChild)
// console.log(headElement.firstElementChild)
// //get last child
// console.log(headElement.lastChild)
// console.log(headElement.lastElementChild)

//week 13 --------------------------------------------------------------------------------------------------------------------

// //select a node with it's id
// const ulStudent1 = document.getElementById ('students')
// console.log(ulStudent1)
// //select first node with CSS selector
// const ulStudent2 = document.querySelector('#students')
// console.log(ulStudent2)
// const programmingLect = document.querySelector('#std-655000888,.programming,#int101,#p-01')
// console.log(programmingLect)
// const ulStudent3 = document.querySelector('ul[id = "students"]')
// console.log(ulStudent3)



// //select a collection of specified condition
// const programmingLect = document.getElementsByClassName('programming')
// //returns HTMLCollection datatype - array-like (can use index or lenght, can't use array function(filter, map...))
// console.log(programmingLect)
// console.log(programmingLect.length)
// //return HTMLCollection
// const courseEle = document.querySelector('.courses')
// console.log(courseEle)
// //NodeList data type - array-like (can use index, length) but NodeList implements only forEach but can not use other array functions

// const divEle = document.getElementById('bscit-courses')
// const courseUnderDiv = divEle.querySelectorAll('.courses')
// console.log(courseUnderDiv)
// const courseUnderDoc = document.querySelectorAll('.courses')
// console.log(courseUnderDoc)


// const programmingLect = document.getElementsByClassName('programming')
// console.log(programmingLect)

// programmingLect.array.forEach((p1)=> {
//     console.log(p1)
//     console.log(p1.nodeName)
//     console.log(p1.nodeType)
//     console.log(p1.nodeValue)
//     console.log(p1.nodeAttribute) //get all attribute of element //NamedNodeMap does not implement forEach 
//     array.from(p1.attributes).forEach((attr) => console.log(attr))
// })
// const pEle = document.getElementById('p-01')
// const pEleAttributes = pEle.attributes
// console.log(pEleAttributes)
// console.log(pEleAttributes.length)

// Array.from(pEleAttributes).forEach((attr) => {
//     console.log(attr)
//     console.log(attr.value)
// })
// console.log(pEle.getAttribute('id'))

// const ulEle = document.getElementsByTagName('ul') //return HTMLCollection -array-like, not implement forEach

// const ulEleArray = Array.from(ulEle)
// ulEleArray.forEach((ul) => console.log(ul))



// const divEle = document.getElementById('exampleElement')
// console.log(div.divEle.textContent)
// console.log(div.divEle.innerText)
// console.log(div.divEle.innerHTML)




// //CRUD on element node
// //1. create element, <li></li>
// const newLiEle = document.createElement('li')
// //2. create attribute
// newLiEle.setattribute('class','devops')
// newLiEle.setAttribute('name','devopsLect')
// //3. add text value to element,
// //<li class="devops name ="devopsLect">Siam Yamsangsung</li>
// newLiEle.innerHTML = '<span style="color:red">Siam Yamsangsung</span>'
// //4. add new li element to a parent node
// const divParent = document.querySelector('div.lecturers>ul')
// console.log(divParent)
// divParent.appendChild(newLiEle)

// const liEle = document.querySelectorAll('div.lecturers>ul>li')
// console.log(liEle)
// const refNode = liEle[1]
// console.log(refNode)

// divParent.insertBefore(newLiEle, refNode)
// // divParent.insertBefore(newLiEle, refNode)
// // divParent.replaceChild(newLiEle, refNode)
// divParent.removeChild(refNode)



// //window.alert, window.prompt, window.confirm
// window.alert('Do you want to exit?')

// const userName = window.prompt('Please enter your username', 'ex: Somchai, Chai')
// console.log(userName) //return user input, ok=user input, cancel=null

// const isExit = window.confirm(`Goodbye, ${userName}`)
// console.log(isExit) //return boolean, ok=true, cancel=false


//week 14 --------------------------------------------------------------------------------------------------------------------

//index week14-1 --------------------

// //1. select target HTML object
// const submitButton = document.querySelector('button')
// // console.log(submitButton)
// // 2 register handler function on a target HtML object
// const doSomething = (e) => {
//   // console.log('submit button is clicked')
//   // console.log(e)
//   console.log(e.target.id)
//   // console.log(e.type)
//   // console.log(e.target)
//   console.log(e.currentTarget)
//   console.log(e.eventPhase)
// }
// submitButton.addEventListener('click', doSomething)
// // -----------------------
// // inner-div
// const innerDiv = document.getElementById('inner-div')
// // console.log(innerDiv)
// innerDiv.addEventListener('click', (event) => {
//   console.log(event.target.id)
//   console.log(event.currentTarget)
//   console.log(event.eventPhase)
// })
// //outer-div
// // inner-div
// const outerDiv = document.getElementById('outer-div')
// // console.log(outerDiv)
// outerDiv.addEventListener('click', (event) => {
//   console.log(event.target.id)
//   console.log(event.currentTarget)
//   console.log(event.eventPhase)
// })




// //1. select target HTML object
// const submitButton = document.querySelector('button')
// // console.log(submitButton)
// // 2 register handler function on a target HtML object
// //add multiple handler functions on the same event type and HTML object
// const doSomething = (e) => {
//   console.log(`Good bye, ${e.target.id}`)
// }
// submitButton.addEventListener('click', (e) => {
//   console.log(`hello, ${e.target.id}`)
// })
// submitButton.addEventListener('click', doSomething)
// //remove event listener
// submitButton.removeEventListener('click', doSomething)


//index week14-2 --------------------


// const submitButton = document.querySelector('button')
// // console.log(submitButton)
// submitButton.addEventListener('click', (e) => {
//   e.preventDefault()
//   const allInputElements = document.querySelectorAll('input')
//   console.log(allInputElements)
//   const isComplete = Array.from(allInputElements).every(
//     (input) => input.value.length > 0
//   )
//   const pElement = document.getElementsByTagName('p')[0]
//   if (isComplete) {
//     pElement.textContent = 'Your input are complete'
//   } else {
//     pElement.innerHTML =
//       '<span style="color:red"> Missing some value, plese enter</span>'
//   }
// })



// document.addEventListener('DOMContentLoaded', () => {
//     console.log('Your DOM tree built')
//   })
//   window.addEventListener('load', () => {
//     console.log('Your Applciation Loaded')
//   })
//   window.addEventListener('beforeunload', () => {
//     localStorage.setItem('myCat', 'Tom')
//   })
//   window.addEventListener('mousemove', (e) => {
//     console.log(`x:${e.screenX}, y:${e.screenY}`)
//   })




// const userElement = document.getElementById('input-user')
// const pswElement = document.getElementById('input-psw')
// userElement.addEventListener('focus', () => {
//   console.log('Your focus is on username')
// })
// userElement.addEventListener('blur', () => {
//   console.log('Your username input textbox is blured')
// })




// const userElement = document.getElementById('input-user')
// const pswElement = document.getElementById('input-psw')
// //using keydown and keypress only to detect number characters 0-9
// userElement.addEventListener('keydown', (e) => {
//   console.log(`${e.key}, ${e.code}`)
//   if (e.key >= 0 && e.key <= 9) {
//     e.preventDefault()
//   }
// })
// // when user release enter key, text value on username will show at <p> element
// userElement.addEventListener('keyup', (e) => {
//   if (e.key === 'Enter') {
//     const pElement = document.querySelector('p')
//     pElement.textContent = e.target.value
//   }
// })
// userElement.addEventListener('input', (e) => {
//   const pElement = document.querySelector('p')
//   pElement.textContent = e.target.value
// })



//week 15 --------------------------------------------------------------------------------------------------------------------

//index week14 to 15 homework --------------------

// let currentFontSize = null,
//   currentFontColor = null,
//   currentBgColor = null
// window.addEventListener('load', () => {
//   currentFontSize = localStorage.getItem('yourFontSize')
//   currentFontColor = localStorage.getItem('yourFontColor')
//   currentBgColor = localStorage.getItem('yourBgColor')
//   setBodyStyle()
// })
// function setBodyStyle() {
//   document.body.style = `font-size:${currentFontSize};color:${currentFontColor};background-color:${currentBgColor}`
// }
// const colorInput = document.getElementById('color-bg')
// colorInput.addEventListener('input', (e) => {
//   currentBgColor = e.target.value
//   localStorage.setItem('yourBgColor', e.target.value)
//   setBodyStyle()
// })
// const fontColorInput = document.getElementById('color-font')
// fontColorInput.addEventListener('input', (e) => {
//   currentFontColor = e.target.value
//   localStorage.setItem('yourFontColor', e.target.value)
//   setBodyStyle()
// })
// const fontSizeInput = document.getElementById('size-font')
// fontSizeInput.addEventListener('input', (e) => {
//   currentFontSize = `${e.target.value}px`
//   localStorage.setItem('yourFontSize', `${e.target.value}px`)
//   setBodyStyle()
// })


//index (week15 = index.html) --------------------

// import { CookieUtil } from './myLib/cookieUtil.js'
// document.cookie = 'username=Umaporn'
// document.cookie = 'course=INT201'
// document.cookie = 'credit=3'
// const currentCookie = document.cookie
// console.log(currentCookie)
// console.log(CookieUtil.get('course'))



// import { CookieUtil } from './myLib/cookieUtil.js'
// // document.cookie = 'username=Umaporn'
// // document.cookie = 'course=INT201'
// // document.cookie = 'credit=3'
// // document.cookie = 'credit=2'
// // const currentCookie = document.cookie
// // console.log(currentCookie)
// // console.log(CookieUtil.get('course'))
// //new Date(year, monthIndex, day)
// CookieUtil.set('username', 'Umaporn', new Date(2023, 11, 25))
// CookieUtil.set('course', 'INT201', new Date(2023, 11, 31))
// CookieUtil.set('credit', '2', new Date(2024, 0, 1))
// console.log(CookieUtil.get('username'))
// console.log(CookieUtil.get('course'))
// console.log(CookieUtil.unset('credit'))
// console.log(CookieUtil.get('credit'))



// //localStorage
// // let counter = localStorage.getItem('count')
// // if (counter === null) {
// //   counter = 1
// //   localStorage.setItem('count', counter)
// // } else localStorage.setItem('count', ++counter)
// // alert(`counter=${counter}`)
// //sessionStorage
// let counter = sessionStorage.getItem('count')
// if (counter === null) {
//   counter = 1
//   sessionStorage.setItem('count', counter)
// } else sessionStorage.setItem('count', ++counter)
// alert(`counter=${counter}`)
// sessionStorage.removeItem('count')
// sessionStorage.clear() //all items removed














