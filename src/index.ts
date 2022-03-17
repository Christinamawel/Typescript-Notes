//basic types
let id: number = 5
let company: string = "company inc."
let isPublished: boolean = true
let x: any = "hello"

x = true

let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1, "hello", true]

// Tuple
let person: [number, string, boolean] = [1, 'hello', true]
// must be in the exact order assigned

//tuple array
let employee: [number, string][]

employee = [
  [1, "bread"],
  [2, "george"],
  [3, "christy"]
]

//union
let pid: string | number

pid = 22
pid = "hello"

//Enum
enum Direction1 {
  Up,
  Down,
  Left,
  Right
}
// by default Up = 0, Down = 1, Left = 2, right = 3

console.log(Direction1.Up) //gives 0

enum Direction2 {
  Up = 1,
  Down,
  Left,
  Right
}
// Up = 1, Down = 2, Left = 3, Right = 4

enum Direction3 {
  Up = 'up',
  Down ='down',
  Left = 'left',
  Right ='right'
}

//Objects
const user:{
  id: number,
  name: string
} = {
  id: 1,
  name: "john"
}

type User = {
  id: number,
  name: string
}

const user2:User = {
  id: 1,
  name: "john"
}

// Type Assertion
let cid: any = 1
let costumerId = <number>cid
let costumerId2 = cid as number
// costumerId and costumerId2 must now be a number but cid can be anything

// Functions
function addNum(x: number, y: number): number {
  return x + y
}

function log(message: string | number): void {
  console.log(message)
}

// Interfaces
interface UserInterface {
  readonly id: number,
  name: string
  age?: number
}
// age is now optional because of the ?

const user3:UserInterface = {
  id: 1,
  name: "john"
}

// user3.id = 5
// will give an error as id is set as readonly

type Point = number | string
const p1: Point = 1
// ( interface Point = number | string ) will not work. you cant use interface with primitives or unions

interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

// Classes
class Person {
  
}