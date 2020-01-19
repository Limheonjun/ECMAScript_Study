function getName(name){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log(`My name is ${name}`);
            resolve(name);
        }, 4000)
    });
}

function getAge(name){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log(`${name}'s age is 26`);
            resolve();
        }, 2000)
    });
}

// ES6
function getInfo1(name){
    getName(name)
    .then(getAge);
}
//getInfo1('HJ');


// ES8
async function getInfo2(name){
    await getName(name);
    await getAge(name);
}
getInfo2('HJ');

/*
My name is HJ
HJ's age is 26
*/