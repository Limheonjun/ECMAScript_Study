let color = {red: 1, blue: 2, yellow: 3, green: 4};

console.log(Object.entries(color));
/*
[ [ 'red', 1 ], [ 'blue', 2 ], [ 'yellow', 3 ], [ 'green', 4 ] ]
*/

// 1. in loops
// ES5
Object.keys(color).forEach(function(key){
    console.log('key : '+key+' & value : '+color[key]);
});

// ES8
for(let [key, value] of Object.entries(color)){
    console.log(`key : ${key} & value : ${value}`);
}

/*
key : red & value : 1
key : blue & value : 2
key : yellow & value : 3
key : green & value : 4
*/

// 2. convert to Map
// ES6
let map1 = new Map();
Object.keys(color).forEach(key=>{
    map1.set(key, color[key]);
});
console.log(map1);
/*
Map { 'red' => 1, 'blue' => 2, 'yellow' => 3, 'green' => 4 }
*/

// ES8
let map2 = new Map(Object.entries(color));
console.log(map2);
/*
Map { 'red' => 1, 'blue' => 2, 'yellow' => 3, 'green' => 4 }
*/