var array1 = [12 , "foo" , {name :"Joe"} , -2458];

var array2 = ["Doe" , 555 , 100];
console.log(Array.prototype.push.apply(array1, array2))

