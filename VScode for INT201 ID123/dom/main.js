// const text1 = document.getElementById("lecturer")
// console.log(text1)


// const divElementV1 = document.getElementsByTagName('div')
// console.log(divElementV1)
// console.log(divElementV1[0])    
// console.log(divElementV1[1])    

// const divV1children = divElementV1[1].children
// console.log(divV1children)

// Array.from(divV1children[0]).forEach((element) => {
//     console.log(element)
// })



const Pelement = document.querySelectorAll("div.faculty > p > ul > li")
console.log(Pelement)

Pelement.forEach(element => {
    console.log(element)
})



const elementByID1 = document.getElementById('div-faculty')
console.log(elementByID1)

const elementByClass1 = document.getElementsByClassName('lecturer')
console.log(elementByClass1)



const buttons = document.getElementsByTagName('button')
console.log(buttons)

const elementsUnderIDCourse = document.querySelectorAll("ul#courses > li")
console.log(elementsUnderIDCourse)

const firstLiElementUnderIDCourse = document.querySelector("div > ul > li")
console.log(firstLiElementUnderIDCourse)









