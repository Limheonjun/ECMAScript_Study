var obj = {};
Object.defineProperty(obj, 'name', {
    // value 옵션을 함께 사용할 수 없습니다!
    get: function() {
        return value;
    },
    set: function(newValue) {
        value = newValue;
    }
});
 
obj.name = 'ECMAScript';    // set 호출
console.log(obj.name);          // get 호출