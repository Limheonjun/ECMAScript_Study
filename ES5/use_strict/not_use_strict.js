//"use strict";

num = 5;
console.log("num : "+num); // 5

var obj1 = {};
Object.defineProperty(obj1, "x", { value: 42, writable: false });
obj1.x = 9;
console.log("obj1.x : "+obj1.x); // 42

var obj2 = { get x() { return 17; } };
obj2.x = 5;
console.log("obj2.x : "+obj2.x); // 17

var fixed = {};
Object.preventExtensions(fixed);
fixed.newProp = "ohai";
console.log("fixed.newProp : "+fixed.newProp); // undefined

delete Object.prototype;