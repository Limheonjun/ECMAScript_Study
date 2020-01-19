let color = {red: 1, blue: 2, yellow: 3, green: 4};

// ES6
let color1 = Object.keys(color).map(key => color[key]);
console.log(color1);

// ES8
let color2 = Object.values(color);
console.log(color2);

/*
[ 1, 2, 3, 4 ]
*/

