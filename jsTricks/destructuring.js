let foo = ['one', 'two', 'three'];

let [one, two, three] = foo;
console.log(one); // "one"
console.log(two); // "two"
console.log(three); // "three"

let a, b;

[a=5, b=7] = [2,3];
console.log(a); // 2
console.log(b); // 3


[a=5, b=7] = [1];
console.log(a); // 1
console.log(b); // 7