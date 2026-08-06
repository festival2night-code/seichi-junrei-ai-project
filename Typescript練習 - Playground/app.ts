/**
 * ============================================
 * 階段 6：工具型別（Utility Types）完整教學
 * ============================================
 * 
 * 這些是 TypeScript 內建的工具型別，全部都是基於泛型實作的。
 * 學會它們，可以讓你寫出更乾淨、更安全的程式碼。
 * 
 * 總共 10 個工具型別：
 * 1. Partial<T>     - 全部變可選
 * 2. Required<T>    - 全部變必填
 * 3. Readonly<T>    - 全部變唯讀
 * 4. Pick<T, K>     - 選出某些屬性
 * 5. Omit<T, K>     - 排除某些屬性
 * 6. Record<K, T>   - 建立物件型別
 * 7. Exclude<T, U>  - 從聯合型別中排除
 * 8. Extract<T, U>  - 從聯合型別中選取
 * 9. NonNullable<T> - 排除 null 和 undefined
 * 10. ReturnType<T> - 取得函式回傳型別
 * 11. Parameters<T> - 取得函式參數型別
 * ============================================
 */

// =============================================
// 1. Partial<T>
// 用途：把所有屬性變成「可選」
// 使用時機：更新功能、表單填寫
// =============================================

interface User {
    id: number
    name: string
    email: string
    age: number
}

// 原本全部必填
const user1: User = {
    id: 1,
    name: "小明",
    email: "ming@mail.com",
    age: 25
}  // ✅

// Partial 全部變可選
type PartialUser = Partial<User>
// 等於：
// interface PartialUser {
//     id?: number
//     name?: string
//     email?: string
//     age?: number
// }

const user2: PartialUser = {
    name: "小華"
}  // ✅ 只要 name 也可以

// 實際應用：更新使用者
function updateUser(id: number, updates: Partial<User>) {
    console.log(`更新使用者 ${id}：`, updates)
}
updateUser(1, { name: "新名字" })        // ✅
updateUser(2, { age: 30, email: "new@mail.com" })  // ✅

// 📝 練習 1：定義一個 Product 介面，然後用 Partial<Product> 寫一個更新函式
interface Product {
    id: number
    name: string
    price: number
    description: string
}

function updateProduct(id: number, updates: Partial<Product>) {
    console.log(`更新產品 ${id}：`, updates)
}

// =============================================
// 2. Required<T>
// 用途：把所有屬性變成「必填」（拿掉 ?）
// 使用時機：強制所有欄位都要有值
// =============================================

interface Config {
    url: string
    timeout?: number   // 可選
    retries?: number   // 可選
}

// 原本 timeout 和 retries 可選
const config1: Config = {
    url: "https://api.com"
}  // ✅

// Required 全部變必填
type RequiredConfig = Required<Config>
// 等於：
// interface RequiredConfig {
//     url: string
//     timeout: number   // 變成必填
//     retries: number   // 變成必填
// }

const config2: RequiredConfig = {
    url: "https://api.com",
    timeout: 5000,
    retries: 3
}  // ✅ 全部都要有

// 📝 練習 2：定義一個 Settings 介面，用 Required 強制所有設定都有值
interface Settings {
    theme?: string
    language?: string
    notifications?: boolean
}

type RequiredSettings = Required<Settings>

// =============================================
// 3. Readonly<T>
// 用途：把所有屬性變成「唯讀」（不能修改）
// 使用時機：設定檔、常數、防止意外修改
// =============================================

interface AppConfig {
    apiUrl: string
    version: string
}

const config3: AppConfig = {
    apiUrl: "https://api.com",
    version: "1.0.0"
}
config3.apiUrl = "https://new-api.com"  // ✅ 可以修改

type ReadonlyConfig = Readonly<AppConfig>
// 等於：
// interface ReadonlyConfig {
//     readonly apiUrl: string
//     readonly version: string
// }

const config4: ReadonlyConfig = {
    apiUrl: "https://api.com",
    version: "1.0.0"
}
// config4.apiUrl = "https://new-api.com"  // ❌ 錯誤！不能修改

// 📝 練習 3：定義一個常數物件，用 Readonly 保護它
type ReadonlyConstants = Readonly<{
    PI: number
    E: number
}>


// =============================================
// 4. Pick<T, K>
// 用途：從 T 中「選出」某些屬性 K
// 使用時機：API 回應、列表顯示、精簡物件
// =============================================

interface User2 {
    id: number
    name: string
    email: string
    age: number
    password: string
}

// 只選 id 和 name
type UserPreview = Pick<User2, "id" | "name">
// 等於：
// interface UserPreview {
//     id: number
//     name: string
// }

const preview: UserPreview = {
    id: 1,
    name: "小明"
}  // ✅

// ❌ 不能有 email
// const preview2: UserPreview = {
//     id: 1,
//     name: "小明",
//     email: "ming@mail.com"  // 錯誤！
// }

// 實際應用：公開使用者資訊（不包含密碼）
type PublicUser = Pick<User2, "id" | "name" | "email">

// 📝 練習 4：定義一個 Article 介面，用 Pick 做出 ArticleCard（只顯示標題和日期）
interface Article {
    id: number
    title: string
    content: string
}

type ArticleCard = Pick<Article, "title" | "id">
// =============================================
// 5. Omit<T, K>
// 用途：從 T 中「排除」某些屬性 K（Pick 的相反）
// 使用時機：移除敏感資訊、排除不需要的欄位
// =============================================

interface User3 {
    id: number
    name: string
    email: string
    age: number
    password: string
}

// 排除 password
type PublicUser2 = Omit<User3, "password">
// 等於：
// interface PublicUser2 {
//     id: number
//     name: string
//     email: string
//     age: number
// }

// 排除多個敏感資訊
type SafeUser = Omit<User3, "password" | "email">

// Pick vs Omit 對比
// Pick：選出你要的   → Pick<User, "id" | "name">
// Omit：排除你不要的 → Omit<User, "password" | "email">

// 📝 練習 5：定義一個 Product 介面，用 Omit 排除 id 和 createdAt（用於新增產品）
interface Product2 {
    id: number
    name: string
    price: number
    createdAt: Date
}

type NewProduct = Omit<Product2, "id" | "createdAt">


// =============================================
// 6. Record<K, T>
// 用途：建立一個物件型別，key 是 K，value 是 T
// 使用時機：對照表、設定檔、字典
// =============================================

// key 是 string，value 是 number
type ScoreBoard = Record<string, number>
const scores: ScoreBoard = {
    "小明": 90,
    "小華": 85,
    "小美": 95
}

// 限制 key 只能是特定字串
type Status = "pending" | "done" | "error"
type StatusMessage = Record<Status, string>
const messages: StatusMessage = {
    pending: "處理中...",
    done: "完成！",
    error: "發生錯誤"
}

// 實際應用：顏色對照表
type ColorName = "red" | "green" | "blue"
type ColorCode = Record<ColorName, string>
const colors: ColorCode = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF"
}

// 實際應用：翻譯對照表
type Language = "zh" | "en" | "ja"
type Translation = Record<Language, string>
const hello: Translation = {
    zh: "你好",
    en: "Hello",
    ja: "こんにちは"
}

// 📝 練習 6：用 Record 建立一個「角色 → 權限」的對照表
type characterRole = "admin" | "editor" | "viewer"
type RolePermissions = Record<characterRole, string[]>
const permissions: RolePermissions = {
    admin: ["create", "read", "update", "delete"],
    editor: ["read", "update"],
    viewer: ["read"]
}


// =============================================
// 7. Exclude<T, U>
// 用途：從 T 中「排除」U
// 使用時機：過濾聯合型別
// =============================================

type Status2 = "pending" | "done" | "error"
type ActiveStatus = Exclude<Status2, "done">  // "pending" | "error"

type AllNumbers = 1 | 2 | 3 | 4 | 5
type EvenNumbers = Exclude<AllNumbers, 1 | 3 | 5>  // 2 | 4

// 實際應用：過濾使用者角色
type Role = "admin" | "editor" | "viewer" | "guest"
type PrivilegedRole = Exclude<Role, "guest" | "viewer">  // "admin" | "editor"

// 📝 練習 7：用 Exclude 從 "a" | "b" | "c" | "d" 中排除 "b" 和 "d"
type characters = "a" | "b" | "c" | "d"
type filteredCharacters = Exclude<characters, "b" | "d">  // "a" | "c"


// =============================================
// 8. Extract<T, U>
// 用途：從 T 中「選取」U（Exclude 的相反）
// 使用時機：過濾聯合型別
// =============================================

type Status3 = "pending" | "done" | "error"
type FinalStatus = Extract<Status3, "done" | "error">  // "done" | "error"

type AllNumbers2 = 1 | 2 | 3 | 4 | 5
type OddNumbers = Extract<AllNumbers2, 1 | 3 | 5>  // 1 | 3 | 5

// 實際應用：只取載入中的狀態
type ApiStatus = "idle" | "loading" | "success" | "error"
type LoadingStatus = Extract<ApiStatus, "loading" | "success">  // "loading" | "success"

// 📝 練習 8：用 Extract 從 "a" | "b" | "c" | "d" 中選取 "b" 和 "c"
type characters2 = "a" | "b" | "c" | "d"
type selectedCharacters = Extract<characters2, "b" | "c">  // "b" | "c"



// =============================================
// 9. NonNullable<T>
// 用途：排除 null 和 undefined
// 使用時機：過濾陣列、確保值存在
// =============================================

type MaybeString = string | null | undefined
type DefinitelyString = NonNullable<MaybeString>  // string

type Mixed = number | string | null | undefined | boolean
type NotNull = NonNullable<Mixed>  // number | string | boolean

// 實際應用：過濾陣列中的 null/undefined
function filterNonNull<T>(items: (T | null | undefined)[]): T[] {
    return items.filter((item): item is T => item !== null && item !== undefined) as T[]
}

const data = ["a", null, "b", undefined, "c"]
const cleaned = filterNonNull(data)  // ["a", "b", "c"]
// cleaned 的型別是 string[]

// 📝 練習 9：過濾一個包含 null 和 undefined 的數字陣列
type MaybeNumber = number | null | undefined
const numbers: MaybeNumber[] = [1, null, 2, undefined, 3]
const filteredNumbers = filterNonNull(numbers)  // [1, 2, 3]
// filteredNumbers 的型別是 number[]


// =============================================
// 10. ReturnType<T>
// 用途：取得函式的「回傳型別」
// 使用時機：推導函式回傳值
// =============================================

function greet(name: string): string {
    return `你好，${name}`
}
type GreetReturn = ReturnType<typeof greet>  // string

function fetchUser(id: number): Promise<{ id: number; name: string }> {
    return Promise.resolve({ id, name: "小明" })
}
type UserResponse = ReturnType<typeof fetchUser>  // Promise<{ id: number; name: string }>

// 實際應用：從函式推導出型別
function createUser(name: string, age: number) {
    return { id: 1, name, age, createdAt: new Date() }
}
type NewUser = ReturnType<typeof createUser>
// NewUser = { id: number; name: string; age: number; createdAt: Date }

// ⚠️ 注意：ReturnType 需要 typeof！
// 因為它要的是「函式的型別」，不是「函式的值」

// 📝 練習 10：定義一個函式，用 ReturnType 取得它的回傳型別
function exampleFunction(x: number, y: number): { sum: number; product: number } {
    return { sum: x + y, product: x * y }
}
type ExampleReturn = ReturnType<typeof exampleFunction>  // { sum: number; product: number }


// =============================================
// 11. Parameters<T>
// 用途：取得函式的「參數型別」（以元組形式）
// 使用時機：包裝函式、型別安全的轉發
// =============================================

function greet2(name: string, age: number): string {
    return `你好，${name}，${age}歲`
}
type GreetParams = Parameters<typeof greet2>  // [string, number]

// 實際應用：包裝函式（加上日誌）
function wrapFunction<T extends (...args: any[]) => any>(
    fn: T,
    ...args: Parameters<T>
): ReturnType<T> {
    console.log("呼叫函式前")
    const result = fn(...args)
    console.log("呼叫函式後")
    return result
}

const result = wrapFunction(greet2, "小明", 25)
// 輸出：
// 呼叫函式前
// 呼叫函式後

// 📝 練習 11：寫一個函式，用 Parameters 和 ReturnType 包裝另一個函式
function multiply(a: number, b: number): number {
    return a * b
}
type MultiplyParams = Parameters<typeof multiply>  // [number, number]
type MultiplyReturn = ReturnType<typeof multiply>  // number


// =============================================
// 🎯 總複習：把下面的情境用工具型別解決
// =============================================

interface User4 {
    id: number
    name: string
    email: string
    password: string
    age: number
    createdAt: Date
}

// 任務：
// 1. 定義 CreateUser（排除 id 和 createdAt）→ 用 Omit
type CreateUser = Omit<User4, "id" | "createdAt">
// 2. 定義 PublicUser（排除 password）→ 用 Omit
type PublicUser = Omit<User4, "password">
// 3. 定義 UserPreview（只取 id, name, email）→ 用 Pick
type UserPreview = Pick<User4, "id" | "name" | "email">
// 4. 定義 UpdateUser（所有屬性都可選）→ 用 Partial
type UpdateUser = Partial<User4>
// 5. 定義 ReadonlyUser（唯讀）→ 用 Readonly
type ReadonlyUser = Readonly<User4>

// 寫出你的答案：



// =============================================
// ✅ 複習表（快速查詢）
// =============================================
// 
// Partial<T>    → 全部變可選    → 更新功能
// Required<T>   → 全部變必填    → 強制所有欄位
// Readonly<T>   → 全部變唯讀    → 保護常數
// Pick<T, K>    → 選出某些屬性  → 精簡物件
// Omit<T, K>    → 排除某些屬性  → 移除敏感資訊
// Record<K, T>  → 建立物件型別  → 對照表
// Exclude<T, U> → 從聯合中排除  → 過濾型別
// Extract<T, U> → 從聯合中選取  → 過濾型別
// NonNullable<T>→ 排除 null/undefined → 過濾陣列
// ReturnType<T> → 函式回傳型別  → 推導型別
// Parameters<T> → 函式參數型別  → 包裝函式
// ============================================