//-----주석 문제 : 드래그 후 ctrl + shift + L 은 동일 내용 한번에 수정

/* //index.js

//주석달 때는 slash 두개로 시작합니다.

let name = "김";
console.log("hi" + name);

//다양한 방법으로!
console.log("========================", "**************")


function ignore() {
  return true;
}

ignore();

console.log("반갑습니다") */


//-----변수 문제 : 대소문자 구분해야함, 변수이름 첫글자 글자, 언더바, 달러기호(숫자는 안됨)

/* // index.js
// Assignment - 다음 함수 안에 코드를 작성하시면 됩니다.
function variables() {
    // 다음 코드는 수정하거나 지우지 마세요.
    const myAge = 21;
    // 아래에 코드를 작성해 주세요.
    let yourAge;
    yourAge = 50 - myAge;
    // 다음 코드는 수정하거나 지우지 마세요.
    return myAge + yourAge;
  }
  console.log(variables()) */

//-----함수 문제 :

/* // 예제
function checkCorrect() {
    let hello = "안녕하세요";
    
    return hello;
  }
  
  // Assignment 를 작성해주세요.
function checkYear(){
    let year = 2023;
    return year;
} console.log(checkYear()); */

/* console.log('=====파라미터가 없는 함수=====');
function noParameter() {
  return 10;
}

const result4 = noParameter();

console.log(result4);

console.log('=====파라미터를 받는 함수=====')

function getName(name) {
  return name + '님';
}

const result1 = getName('허인');
const result2 = getName('윤종규');
const result3 = getName('김기현');

console.log(result1)
console.log(result2)
console.log(result3)

console.log('=====return을 생략한 함수=====')
function noReturn(age) {
  
  const mix = age * 1000;
  // 계산해도 아무것도 반환하지 안함!
  
}

const result6 = noReturn(10);
console.log(result6);

// Assignment 

function addTen(num) {
    return num + 10;
    result7 = num + 10;
} console.log(addTen(5)) */



/* // index.js

//강의 내용과 관련한 테스트는 여기에 작성해 주세요.
let myNumber1 = 6;
let myNumber2 = 3 + 3;

// Assignment - 다음 함수 안에 코드를 작성해 주세요.
function mathExpression() {
  // 다음 코드의 값이 22가 되도록 수정해주세요.
  let result = (5 + 6) * 10 / (2 * 2.5);
  
  // 다음 코드는 수정하지 마세요!
  return result;
} console.log(mathExpression()); */


/* // 강의 관련 테스트는 여기에 해주세요.
console.log("안녕" + "하세요");
console.log("안녕" + "하" + "세요");
console.log("안녕" + "하세" + "" + "요");

let hi = "안녕";
console.log(hi + "하세요");

let ha = "하세요";
console.log(hi + ha);


// Assignment - 다음 함수 안에 코드를 구현하세요
function textConcatenation() {
  // 다음 코드를 수정 하여
  // 아래의 문장이 올바른 값이 될 수 있도록 해주세요.
  let text = "2 더하기 2는 " + (2 + 2);
  
  // 다음 코드는 수정하지 마세요!
  return text;
} console.log(textConcatenation()); */

/* // 수업 내용에 관한 코드를 작성해주세요.
let answer = 3;

if (answer > 5) {
  alert("5보다 큰 숫자!");
} 


// Assignment - 다음 함수 안에 코드를 구현하세요
function myFavoriteColor(color) {
    if(color == "navy"){
        return "good!"
    }else if(color == "yellow"){
        return "Bad!"
    }else return "whatever"
} console.log(myFavoriteColor("yello")); */



/* // Assignment - 다음 함수 안에 코드를 구현하세요
function canIDrinkSoju(age) {
  if (age < 20){
    return "얘야 가서 공부나 해라"
  }else if (age >= 50){
    return "건강을 위해 술을 적당히 마시세요"
  }else return "소주에 곱창은 어떠신가요?"
} console.log(canIDrinkSoju(29)) */

// Assignment - 다음 함수 안에 코드를 구현하세요
function rockPaperScissors(player1, player2) {
  //  예시:
    if ( (player1 === "가위" && player2 === "보" ) || (player1 === "가위" && player2 === "가위") ) {
      result = "player1";
    } else if( (player1 === "바위" && player2 == "바위") || (player1 === "바위" && player2 === "가위")){
      result = "player1";
    } else if( (player1 === "보" && player2 == "보") || (player1 === "보" && player2 === "바위")){
      result = "player1";
    } else
  }