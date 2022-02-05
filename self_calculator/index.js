const result = document.querySelector('#result');
const num0 = document.querySelector('#num0');
const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const num3 = document.querySelector('#num3');
const num4 = document.querySelector('#num4');
const num5 = document.querySelector('#num5');
const num6 = document.querySelector('#num6');
const num7 = document.querySelector('#num7');
const num8 = document.querySelector('#num8');
const num9 = document.querySelector('#num9');
const reset = document.querySelector('#reset');
const sign = document.querySelector('#sign');
const percentage = document.querySelector('#percentage');
const divide = document.querySelector('#divide');
const multiply = document.querySelector('#multiply');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const calculate = document.querySelector('#calculate');
const decimal_point = document.querySelector('#decimal_point');
let number1 = ''; //숫자1
let number2 = ''; //숫자2
let operator = ''; //연산자

//숫자 클릭
const click_num = (event) => {
  //연산자가 비어있는가?
  if (!operator) { //empty
    number1 += event.target.textContent;
    if (number1 != 0) {
      reset.textContent = 'C';
    }
  } else { //full
    if (!number2) {
      result.value = '';
      number2 += event.target.textContent;
    } else {
      number2 += event.target.textContent;
    }
  }
  result.value += event.target.textContent;
};

//초기화
const click_reset = () => {
  number1 = '';
  number2 = '';
  operator = '';
  result.value = '';
  reset.textContent = 'AC';
};

//소숫점
const click_decimal_point = () => {
  if (!operator) {
    if(!number1) {
      number1 +='0.';
      result.value = '0.';
      reset.textContent = 'C';
    } else {
      if(!number1.includes('.')) {
        number1 += '.';
        result.value += '.';
        return;
      }
    }
  } else {
    if(!number2) {
      number2 +='0.';
      result.value = '0.';
    } else {
      if(!number2.includes('.')) {
        number2 += '.';
        result.value += '.';
        return;
      }
    }
  }
};

//결과출력
const click_calculate = () => {
  if (number2) {
    switch (operator) {
      case '÷':
        result.value = Number(number1) / Number(number2);
        return;
      case '×':
        result.value = Number(number1) * Number(number2);
        return;
      case '-':
        result.value = Number(number1) - Number(number2);
        return;
      case '+':
        result.value = Number(number1) + Number(number2);
        return;
      default : 
        number1 = result.value;
        number2 = '';
    }
  }
  alert('숫자를 입력해 주세요!');
};

//연산자 클릭
const click_operator = (event) => {
  if (number1) {
    if (!number2) {
      operator = event.target.textContent;
    } else {
      click_calculate();
      number1 = result.value;
      number2 = '';
      operator = event.target.textContent;
    }
  } else {
    alert('숫자를 입력해 주세요!');
  }
};

//부호
const click_sign = () => {
  if (!number1 || result.value == '0') {
    number1 += '-0';
    result.value = '-0';
  } else {
    number1 = String(-result.value);
    result.value = number1;
    number2 = ''
  }
};

//백분율
const click_percentage = () => {
  result.value /= 100;
  number1 = result.value;
  number2 = '';
};

num0.addEventListener('click', click_num);
num1.addEventListener('click', click_num);
num2.addEventListener('click', click_num);
num3.addEventListener('click', click_num);
num4.addEventListener('click', click_num);
num5.addEventListener('click', click_num);
num6.addEventListener('click', click_num);
num7.addEventListener('click', click_num);
num8.addEventListener('click', click_num);
num9.addEventListener('click', click_num);
percentage.addEventListener('click', click_percentage);
divide.addEventListener('click', click_operator);
multiply.addEventListener('click', click_operator);
minus.addEventListener('click', click_operator);
plus.addEventListener('click', click_operator);
reset.addEventListener('click', click_reset);
sign.addEventListener('click', click_sign);
calculate.addEventListener('click', click_calculate);
decimal_point.addEventListener('click', click_decimal_point);



