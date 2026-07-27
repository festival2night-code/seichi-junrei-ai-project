let myName: string = "Joe"
let myAge: number = 25
let isStudent: boolean = true

console.log(`Name：${myName}`)
console.log(`Age：${myAge}`)
console.log(`Student?：${isStudent}`)


type Greeting = string

function sayHello(name: string): Greeting {
    return `Hi，${name}！Welcome to Typescript 🎉`
}

const message: Greeting = sayHello("Joe")
console.log(message)

