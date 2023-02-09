//-----백준 내 코드

/* let firstA, a, newA, sum, count;

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

//-----백준 구글 코드

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