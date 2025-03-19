//                                              Javascript Execution Context

//  First thing that is created it a global execution context {} which is stored in the this keyword
//  Every execution environment has a different type of global execution context {}
//  Browser's global execution context {} is s Window Object

//  This is executed in a thread
//  JS is single-threaded where evrything is a process

//  There are 3 Types of Execution Context
//
//  1) Global Execution Context
//  2) Function Execution Context
//  3) Eval Execution Context           (it is a property of the global object)

// There are 2 Phases
//
// 1) Memory Creation Phase             (Memory is allocated to variables)
// 2) Execution Phase                   (Code is executed in this phase)


//Example Code:
let val1 = 10
let val2 = 5
function addNum(num1, num2){
    let total = num1+num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)

//How execution is done for the above code:

//  1) Global Execution (this)

//  2) Memory Phase
//  val1 --> undefined
//  val2 --> undefined
//  addNum --> definition
//  num1 --> undefined
//  num2 --> undefined

//  Everything till now is called 1st Cycle

//  3) Execution Phase
//  val1 <-- 10
//  val2 <-- 5
//  addNum --> A new Variable Environment and Execution Thread is created
                 // 1) Memory Phase
                 //  val1 --> undefined
                 //  val2 --> undefined      
                 //  total --> undefined   

                 // 2) Execution Phase
                 // num1 <-- 10
                 // num2 <-- 5
                 // total <-- 10+5
                 // the value of total (15) is returned to the Global Execution Context
                 // Execution Thread is deleted
//  result1 <-- 15
//  addNum --> A new Variable Environment and Execution Thread is created
                 // 1) Memory Phase
                 //  val1 --> undefined
                 //  val2 --> undefined      
                 //  total --> undefined   

                 // 2) Execution Phase
                 // num1 <-- 10
                 // num2 <-- 2
                 // total <-- 10+2
                 // the value of total (12) is returned to the Global Execution Context
                 // Execution Thread is deleted
//  result1 <-- 12

//  Call Stack
//  You can imagine Call Stack as a narrow cylinder where global execution context is at the bottom
//  When a function is called, it is put inside the bucket on top of the global execution context
//  When the function has been executed, it is removed from the bucket

//  Incase, there are functions inside of a function
//  First in Last out (FILO) rule is followed
//  Imagine there is a function one() inside which is a function two() inside which there is a function three()
//  In this case, the call stack will have global execution context at the bottom, then on top of it we will haev one(), then on top of that we will have two(), and on the evry top we will have three()
//  three() will be executed first and removed from the cylinder, then two(), and lastly one()