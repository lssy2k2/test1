/* console.log("hello world")

document.write("자바스크립트")
document.write("<h1>h1자바스크립크</h1>" + "플러스이용" + "h1을 블럭요소라서 이용하면 줄바꿈됨")

alert("알림창")
confirm("확인창도 나옴")

var reply = confirm("변수지정 확인창")
var reply = prompt("프롬프트 입력창", "기본지정 메세지") */

/* //-----변수 학습

var n = 10;
var n = 20; //자바에서는 마지막 할당된 값을 반환해줌. 오류를 일으키는 프로그램도 있음
console.log(n);

let a = 10;
//let a = 20; //let에는 a에 두개를 할당하면 오류가 남. 재할당 안됨.
console.log(a);

//코드작성은 가독성을 위해 키워드 간 띄어쓰기 필수
//ctrl shift L : 문서 내 동일한 글자 한번에 수정. 원하는 키워드 뒤에서 키 입력

var currentyear = 2023;
var birthyear;
var age;

//var currentyear, birthyear, age; //이런식으로 한번에 변수 선언하고 2023년 할당하는 것도 가능
//currentyear = 2023;

birthyear = prompt ("태어난 연도를 입력하세요")
age = currentyear - birthyear + 1;
document.write(currentyear + "년 현재<br>");
document.write(birthyear + "년에 태어난 사람의 나이는 " + age + "세 입니다.") */

/* //-----자료형 학습

let sum = 0.1 + 0.2
console.log(sum)

let sum2 = (0.1 * 10 + 0.2 * 10)/10;
console.log(sum2)

let string = "hello, world"
let string2 = 'hello, world'
let string3 = "hello," + 'wor\nld'; // \n은 줄바꿈 만들어줌
console.log(string2)
console.log(string3)

let boolean1 = true;
let boolean2 = false;
console.log(boolean1);

let boolean3 = 10 > 20;
console.log(boolean3);

let studentscore = []
studentscore = [60, 70, 80, 90]
console.log(studentscore[1])

let studentscore2 = [30, 50, "fail", true]
console.log(studentscore2[3])

let studentscore3 = {
    ko :80,
    ko2 :90,
    ko3 :800
}
console.log(studentscore3.ko3) //배열과 비슷하지만 복합형이라고 하던데 불러오는 키를 지정? */

/* //-----연산자 교육

var a = 10
var b = a++ + 5
console.log(a)

let increment = 10;
increment++

let increment2 = 10;
increment2--

console.log(increment)
console.log(increment2)

let num = 10;
let subNum = ++num;
console.log(subNum);

let num2 = 10;
let subNum2 = num2++;
console.log(subNum2);
 */

//-----전역 스코프, 전역변수 교육

/* let a = 10;
function sum(){
    console.log(`함수 내부 : ${a}`);//여기 입력한 것은 느낌표 왼쪽에 백틱. 백틱 사이의 문자열을 그대로 출력해줌. 백틱 안에 변수를 인식시키기 위해서 ${}을 작성하고 그 안에 입력
}
sum();
console.log(`함수 외부 : ${a}`);


{
    let b = 20;
    console.log(`코드 블록 내부 a: ${a}`);
    console.log(`코드 블록 내부 b: ${b}`);
}
console.log(`코드 블록 외부 a: ${a}`);
console.log(`코드 블록 외부 b: ${b}`);

let a = 10;
const b = 20;
function sum(){
    let a = 50;
    let b = 70;
    console.log(`함수 내부 a : ${a}`);
    console.log(`함수 내부 b : ${b}`);
} */

//-----반복문(각각 주석처리함)

/* var i;
sum = 0;

for(i = 1; i < 6; i++){
    sum += i;
}
document.write("1부터 5까지 더하면 " + sum + "입니다") */

/* var i, j;//for 구구단

for(i = 1; i <= 9; i++){
    document.write("<h3>" + i + "단</h3>")
    for(j = 1; j <= 9; j++){
        document.write(i + "x" + j + "=" + i * j + "<br>")
    }
} */

/* var i, j;//while 구구단

i = 1
while (i<=9){
    document.write("<h1>" + i + "단</h1>")
    j = 1;
  while (j<=9){
    i * j;
    document.write(i + "x" + j + "=" + i * j + "<br>")
    j++
  }
  i++
} */


/* var i, j;//for 구구단 3단 + css적용

for (i = 3; i <= 9; i++){
document.write("<div class='gugudan'>");
document.write("<div class='eachgugudan'>")
document.write("<h3>" + i + "단</h3>");
    for (j = 1; j <= 9; j++){
    i * j;
    document.write(i + " x " + j + " = " + i * j + "<br>");
}
    if(i===7) break
document.write("</div>");
document.write("</div>");
} */

var i, j;
var n = prompt("별 찍을 갯수");
var result = "";

for (i = 1; i <= n; i++){
    document.write("\n");
    for (j = 1; j <= i; j++){
    document.write("*");
    }
    result += "*";
    console.log(i,j,result);
}
