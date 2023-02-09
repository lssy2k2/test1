/* let num = 1;
while(num <= 9999){
  console.log(num);
  num++;
}


do{
    console.log("무조건");
    console.log("한 번은 실행");
  }while(false);
 */


/* //-----백준 1110번
let firstA, a, newA, sum, count;

firstA = parseInt(26);
count = 0;


a = firstA

while(1){
    count += 1;
    sum = parseInt(Math.floor(a / 10) + (a % 10));
    newA = parseInt((a % 10) * 10 + (sum % 10));

    if(firstA === newA){
        break;
    }a = newA;
}    console.log(count); */

/* let input = 26;

let num = input;
let sum;
let i = 0;

while (true) {
  i++;

  sum = Math.floor(num / 10) + num % 10;
  num = (num % 10) * 10 + sum % 10; 

  if (input === num) {
    break;
  } 
}

console.log(i); */


//----- switch case default문
/* let food = "hotdog";
switch (food) {
  case "melon":
    console.log("fruit");
    break;
  case "apple":
    console.log("fruit");
    break;
  case "banana":
    console.log("fruit");
    break;
  case "carrot":
    console.log("vegetable");
    break;
  default:
    console.log("It's not fruits and vegetables.");
    break;
} */


/* let score = 80;
switch (score){
  case 90:    
  case 91:
  case 92:
  case 93:
  case 94:
  case 95:
  case 96:
  case 97:
  case 98:
  case 99:
    console.log("A++ 학점");
    break;
  default:
    console.log("fail")
    break;
} */

//난수를 세번 맞추는 게임

/* let n;//난수
let a;//입력한 수
let count = 0;//반복횟수
let correct = 0;//정답횟수
let high = 99//최고 숫자
let low = 1//최저 숫자

n = Math.floor(Math.random() * 100)
alert("숫자가 결정되었습니다.");

while(1){
  alert("힌트 : 정답은 " + low + "와 " + high + "사이의 수입니다")
  a = prompt("숫자를 입력해주세요");
  //사이에 a 입력값이 정수가 아닌 경우 하고 싶음
  count ++;
  if(n > a){
  alert("더 큰 수 입니다");
  alert("시도횟수" + count + "번");
  if(low < a){
  low = a;
  }
} else if(n < a){
  alert("더 작은 수 입니다");
  alert("시도횟수" + count + "번");
  if(high > a){
    high = a;
  }
} else {alert("정답입니다 짝짝짝");
  alert("시도횟수" + count + "번에 맞추셨습니다");
  document.write("시도횟수"+ count + "번에 맞추셨습니다\n<br>")
    correct ++;
    n = Math.floor(Math.random() * 100);
    count = 0;
    low = 1;
    high = 99;
    if(correct === 3){
      break;
    }
  }
} */

