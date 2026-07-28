let username: string = "小明"
let age: number = 25
let isActive: boolean = true
let scores: number[] = [90, 85, 100]
let userInfo: [string, number, boolean] = ["小明", 25, true] 

function greet(name: string):string {
    return `你好，${name}`
}

function logError(error: string):void {
    console.error(error)
}

function getData():never {
    throw new Error("取得資料失敗")
}

type Good = {
    id:number
    name:string
    price:number
    category:string

}

let product:Good = {
    id: 1,
    name: "手機",
    price: 25000,
    category: "電子產品"
}

type DiscountType = "none" | "percent" | "fixed"

type DiscountRule = {
    type: DiscountType
    value: number  
}

type DiscountLog = {
    productName: string,
    originalPrice: number,
    discountedPrice: number,
    discountType: string
}

function applyDiscount(price: number, rule: DiscountRule): number {
    if (rule.type === "none"){
        return price
    } else if (rule.type === "percent"){
        return price*(1 - rule.value/100)
    } else {
        return price - rule.value
    }
}

function logDiscount(productName: string, originalPrice: number, rule: DiscountRule): DiscountLog {
    let Discounted:number = applyDiscount(originalPrice, rule)
    return {
    productName: productName,
    originalPrice: originalPrice,
    discountedPrice: Discounted,
    discountType: rule.type
    }
}

type DiscountCalculator = (price: number) => number

function createDiscountCalculator(rule: DiscountRule): DiscountCalculator {
    return (price: number) => {
        return applyDiscount(price,rule);
    }
    
}

let Discount20 = createDiscountCalculator({ type: "percent", value: 20 });
console.log(Discount20(50000))