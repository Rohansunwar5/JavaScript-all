const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = mynums.map((num) => {
//   return num + 10;
// });

const newNums = mynums
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40); // the value passed will be the one whcih is applied with the method above

console.log(newNums); //[11, 12, 13

/* 
### Key Takeaway
The video dives into advanced JavaScript loops, focusing on filter, map, and reduce functions. It uses practical examples to help you understand these core programming ideas.

### Summary
- Explores JavaScript loops like filter, map, and reduce.
- Shows coding examples, including forEach loops and changing values.
- Emphasizes understanding return values for better code.
- Adds temporary conditions for controlling the flow.
- Points out the syntax and real-world use of loop functions.
- Urges developers to feel confident with loop syntax, covering common mistakes.
- Highlights why script developers should grasp these concepts for effective coding.
*/
