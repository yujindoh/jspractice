// 객체지향 프로그래밍이란, 프로그램을 객체들로 구성하고 객체들 간에 서로 상호작용하도록 작성하는 방법이다. 
const teacherJay = {
    name: '제이',
    age: 30,
    teachJavascript: function(student) { //학생이 매개변수가 됨. 즉, teacherJay 객체는 studentBbo 객체를 사용함.
        student.gainExp();
    }
}

const studentBbo = {
    name: '뽀',
    age: 20,
    exp: 0,
    gainExp: function() {
        this.exp++;
    }
}
console.log(studentBbo.exp);
teacherJay.teachJavascript(studentBbo);
console.log(studentBbo.exp);