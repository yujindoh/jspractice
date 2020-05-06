var obj = {};
for (var i = 0; i < 4; i++) { // i 는 0,1,2,3
    obj['key'+i] =i; // []안에는 object의 key를 넣어준다 그리고 i는 key에 할당된 value 
                     // 따라서 key0:0 이런 형태로 나오게 된다.
}
console.log(obj);

var profile = 'chloe:30';
var person = {
    [profile]:true, //[profile]이 key
    [profile.split(':')[0]]:profile.split(':')[1]
};
console.log(person);