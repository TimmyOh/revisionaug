// This is a json
const jsonString = '{ "name" : "jason", "age" : 32 }';
console.log('json: ', jsonString);

// convert json to object
const object = JSON.parse(jsonString);
console.log('object: ', object);

// re-convert object back to json
const jsonString2 = JSON.stringify(object);
console.log('json: ', jsonString2);
