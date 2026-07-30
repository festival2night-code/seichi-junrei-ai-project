type ID  = string | number

type Status = "pending" | "done" | "error"

function example(input:string|null):string {
    if (input === null){
        return "空白"
    }
    return input
}

function example2(input:string|number):string{
    if (typeof input == "string"){
        return "長度"
    } else {
        return "平方"
    }
}

function example3(input:string|string[]):string{
    if (Array.isArray(input)){
        return input[0]
    } else {
        return input
    }
}

interface HasPrice {
    price:number
}

interface HasDiscount {
    discount:number
}

type Product = HasPrice & HasDiscount 

let example4:Product = {
    price:123,
    discount:23
}

interface A {
    a: string
}

interface B {
    b: number
}

type Union = A | B
let u1: Union = { a: "hello" }   
let u2: Union = { b: 123 }       
let u3: Union = { a: "hello", b: 123 }  


type Intersection = A & B
let i1: Intersection = { a: "hello", b: 123 } 

type example5 = "success" | {error:string}

type example6 = {id:number} & {name:string}

type Shape = 
    | { kind: "circle"; radius: number }
    | { kind: "square"; side: number }
    | { kind: "rectangle"; width: number; height: number }

function getArea(shape: Shape): number {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2
        case "square":
            return shape.side ** 2
        case "rectangle":
            return shape.width * shape.height
    }
}

const circle: Shape = { kind: "circle", radius: 5 }
console.log(getArea(circle))  // 78.54...

const square: Shape = { kind: "square", side: 4 }
console.log(getArea(square))  // 16

type Result = { status: "ok", value: number } | { status: "error", message: string }

function example6(result: Result):string|number {
    switch(result.status){
    case "ok":
        return result.value
    case "error":
        return result.message
    }
}

type Payment = 
{ method: "cash", amount: number }|
{ method: "credit", cardNumber: string, amount: number }|
{ method: "paypal", email: string, amount: number }

type Person = {
    name:string
    age:number
}

type Job = {
    postion:string
    salary:number
}

type Employee = Person & Job

function processPayment(payment: Payment):string|number {
    switch(payment.method){
    case "cash":
        return payment.amount
    case "credit":
        return payment.cardNumber + payment.amount
    case "paypal":
    return payment.email + payment.amount
    }
}
