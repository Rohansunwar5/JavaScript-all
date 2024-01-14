first a global execution context is created after providing a code 
sencond contect => function execution context 
third context => Eval execution context 
js is a single threaded

js code in two phases: 
1.memory creation phase 
2.execution phase 

let v1 = 10
;et v2 = 5
function addNUm(num1, num2){
  let total = num1+num2
  return total
}
let result = addnNUm(v1,v2)
let result2 = addnNUm(10,2)

how will the code execute in js:
1.global execution -> allocates in this 
2.memory phase: -> v1 = undefined, v2 = undefined , addNUm= defination , result1 = undefined , result2 = undefined
3.execution phase -> v1 = 10, v2 = 5, addNum -> once more executional context => new variable enviroment + execution thread (for funtion a new memory phase and execution phase is created )

----------------for function sandbox---------------
memory phase                            execution context 
v1 -> undefined                          num1 -> 10 
v12 -> undefined                         num2 -> 5
total -> undefined                       total -> 15


call stack -LIFO 