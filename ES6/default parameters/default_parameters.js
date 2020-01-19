let func = function(id='manager', pw='1111'){
    this.id = id;
    this.pw = pw;
    console.log("id : "+id+", pw : "+pw);
}

/*
출력결과
id : manager, pw : 1111
id : Dev2010, pw : 12345
*/
func();
func('Dev2010', '12345');