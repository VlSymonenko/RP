const pureObject = Object.create(null);
console.log(pureObject); //=> {}
console.log(pureObject.constructor); //=> undefined
console.log(pureObject.toString); //=> undefined
console.log(pureObject.hasOwnProperty); //=> undefined

let mark = {math : 5 , biology :10 , PH : 12 }

let person = Object.assign({name:'Vlad'},mark);
console.log(person); // {name:Vlad , math : 5 , biology :10 , PH : 12 }