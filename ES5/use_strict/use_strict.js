"use strict";


// ReferenceError: num is not defined
num = 5;
console.log("num : "+num);

// TypeError: Cannot assign to read only property 'x' of object '#<Object>'
var obj1 = {};
Object.defineProperty(obj1, "x", { value: 42, writable: false });
obj1.x = 9;
console.log("obj1.x : "+obj1.x);

// TypeError: Cannot set property x of #<Object> which has only a getter
var obj2 = { get x() { return 17; } };
obj2.x = 5;
console.log("obj2.x : "+obj2.x);

// TypeError: Cannot add property newProp, object is not extensible
var fixed = {};
Object.preventExtensions(fixed);
fixed.newProp = "ohai";
console.log("fixed.newProp : "+fixed.newProp);

// TypeError: Cannot delete property 'prototype' of function Object() { [native code] }
delete Object.prototype;

