interface User {
    id: number
    name: string
    email: string
    age: number
    isActive: boolean
    address: {
        city: string
        district: string
        zip: number
    }
}
const user:User = {
    id: 1,
    name: "小明",
    email: "ming@mail.com",
    age: 25,
    isActive: true,
    address: {
        city: "台北",
        district: "大安區",
        zip: 106
    }
}

interface Product {
    id:number
    name:string
    price:number
    discount?:number
    inStock?:boolean
}
const product1:Product = {
    id: 101,
    name: "無線耳機",
    price: 2990
}

const product2:Product = {
    id: 102,
    name: "智慧手錶",
    price: 5990,
    discount: 0.8, 
    inStock: true
}

interface Order {
    orderId: string
    userId: number
    items:
        { productId: number, quantity: number }[]
    total: number
    status: "paid" | "shipped" | "delivered"

}

const order:Order = {
    orderId: "ORD-001",
    userId: 1,
    items: [
        { productId: 101, quantity: 2 },
        { productId: 102, quantity: 1 }
    ],
    total: 11980,
    status: "paid"  
}

interface ApiResponse {
    success: boolean
    data: {
        user: {
            id: number
            name: string
        },
        posts: 
            { id: number, title: string, content: string}[]   
    },
    error: null

}
const apiResponse:ApiResponse = {
    success: true,
    data: {
        user: {
            id: 1,
            name: "小明"
        },
        posts: [
            { id: 1, title: "第一篇", content: "內容..." },
            { id: 2, title: "第二篇", content: "內容..." }
        ]
    },
    error: null
}

interface Data{
    success:boolean
    data?:string
    error?:string
}
function processData(data: Data) {
    if (data.success) {
        console.log("成功：", data.data)
    } else {
        console.error("失敗：", data.error)
    }
}

function calculateDiscount(price:number, discount?:number) {
    if (discount === undefined) {
        return price
    }
    return price * discount
}

interface FormatUser {
    name:string
    email:string
}
function formatUser(user:FormatUser) {
    return `${user.name} (${user.email})`
}