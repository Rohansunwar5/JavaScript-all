# prototypal behaviour

array --> Object --> null
String --> Object --> null

function mutltiplyby5(num) {
return num \* 5;
}

mutltiplyby5.power = 2;

console.log(mutltiplyby5(5));
console.log(mutltiplyby5.power);
console.log(mutltiplyby5.prototype);
so, as a result => function --> object
