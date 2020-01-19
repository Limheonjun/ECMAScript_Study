let meat = {
    protein: 35,
    fat: 20,
    vitamin: 'C'
};


let {protein, fat, vitamin} = meat; 
console.log({protein, fat, vitamin});
// { protein: 35, fat: 20, vitamin: 'C' }

let color = ['white', 'blue', 'yellow', 'red'];

let [white, blue, yellow, red] = color;
console.log(white, blue, yellow, red);
// white blue yellow red
