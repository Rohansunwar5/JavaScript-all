//immediately Invoed Function Expressions (IIFE)

//ex: db connection

(function chai() {
  //named IIFE
  console.log(`DB Connected`);
})(); // => wrapping he function within the parenthesis so that it can immediately be invoked with ();
// in order to prevent errors we need to decalre the ; after the IFFE invoker so that it can be closed
// in order to avoid pullutiion from the global variables we use IIFE

((name) => {
  //Simple IIFE
  console.log(`DB Connected two ${name}`);
})("Rohan"); // the end ( ) is the invoker of the IIFE and we can use how we can use normal function
