fetch('https://dummyjson.com/products/1')
.then((res) => {
  return res.json();
})
.then((whateverTheVariabeName) => {
  console.log(whateverTheVariabeName);
})
.catch((error) => {
  console.log(`Error: ${error}`);
}) 