let myName: string = "小明"
let myAge: number = 25
let isStudent: boolean = true

console.log(`姓名：${myName}`)
console.log(`年齡：${myAge}`)
console.log(`是學生嗎：${isStudent}`)




type Greeting = string

function sayHello(name: string): Greeting {
    return `你好，${name}！歡迎來到 TypeScript 的世界 🎉`
}

const message: Greeting = sayHello("小明")
console.log(message)

