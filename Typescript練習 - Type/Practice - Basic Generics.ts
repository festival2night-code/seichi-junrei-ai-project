function getFirstElement<T>(arr: T[]): T | undefined {
    return arr[0]
}

const firstNum = getFirstElement([1, 2, 3])  
const firstStr = getFirstElement(["a", "b"]) 
console.log(firstNum)
console.log(firstStr)

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key]
}

const person = { name: "Alice", age: 30 }
const getname = getProperty(person, "name")  
const getage = getProperty(person, "age")    

console.log(getname)
console.log(getage)

interface PaginatedResponse<T> {
    data: T[]
    total: number
    page: number
    pageSize: number
}

const userPage: PaginatedResponse<{ id: number; name: string }> = {
    data: [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" }
    ],
    total: 10,
    page: 1,
    pageSize: 2
}

function createPair<T, U>(first: T, second: U): [T, U] {
    return [first, second]
}

const pair1 = createPair("hello", 123)   
const pair2 = createPair(true, { name: "Alice" }) 