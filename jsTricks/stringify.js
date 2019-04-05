const obj = { 
    foo: { bar: [11, 22, 33, 44], baz: { bing: true, boom: 'Hello' } } 
  };

console.log(JSON.stringify(obj, null, 2)) 
//third argument define how many species will be in output
/*
{
    "foo": {
        "bar": [
            11,
            22,
            33,
            44
        ],
        "baz": {
            "bing": true,
            "boom": "Hello"
        }
    }
    */