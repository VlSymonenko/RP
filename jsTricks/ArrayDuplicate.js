const removeDuplicateItems = arr => [...new Set(arr)];
console.log(removeDuplicateItems([42, 'foo', 42, 'foo', true, true]))
//=> [42, "foo", true]