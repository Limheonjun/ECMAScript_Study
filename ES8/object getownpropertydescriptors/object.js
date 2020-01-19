let obj = {
    id: 'dev',
    name: 'kim',
    set password(pw){
        this.pw = pw;
    },
    get password(){
        return this.pw;
    }
};

console.log(Object.getOwnPropertyDescriptor(obj, 'password'));
/*
{
  get: [Function: get password],
  set: [Function: set password],
  enumerable: true,
  configurable: true
}
*/