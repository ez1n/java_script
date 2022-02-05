let num_one = ''; //첫번째 숫자
let num_two = ''; //두번째 숫자
let operator = ''; //연산자
const result = document.querySelector('#result');
const operator_input = document.querySelector('#operator');

//숫자 클릭 이벤트
const click_number = (event) => {
  if (!operator) {
    num_one += event.target.textContent;
    result.value += event.target.textContent;
    return;
  }
    if (!num_two) { //operator 존재하는 경우 실행
      result.value = '';
    }
    num_two += event.target.textContent;
    result.value += event.target.textContent;
};

//연산자 클릭 이벤트
const click_operator = (op) => () => {
  if (num_one) {
    operator = op;
    operator_input.value = op;
  } else {
    alert('숫자를 입력하세요!');
  }
};

//결과 ('=' 클릭) 이벤트
const print_result = () => {
  if (num_two) {
    switch (operator) {
      case '+' :
        result.value = parseInt(num_one) + parseInt(num_two);
        break;
      
      case '-' :
        result.value = parseInt(num_one) - parseInt(num_two);
        break;

      case '*' :
        result.value = parseInt(num_one) * parseInt(num_two);
        break;

      case '/' :
        result.value = parseInt(num_one) / parseInt(num_two);
        break;

      default : break;
    }
  } else {
    alert('숫자를 먼저 입력하세요!');
  }
};

//초기화(clear) 이벤트
const reset = () => {
  num_one = '';
  operator = '';
  num_two = '';
  operator_input.value = '';
  result.value = '';
};

document.querySelector('#num_0').addEventListener('click', click_number);
document.querySelector('#num_1').addEventListener('click', click_number);
document.querySelector('#num_2').addEventListener('click', click_number);
document.querySelector('#num_3').addEventListener('click', click_number);
document.querySelector('#num_4').addEventListener('click', click_number);
document.querySelector('#num_5').addEventListener('click', click_number);
document.querySelector('#num_6').addEventListener('click', click_number);
document.querySelector('#num_7').addEventListener('click', click_number);
document.querySelector('#num_8').addEventListener('click', click_number);
document.querySelector('#num_9').addEventListener('click', click_number);
document.querySelector('#plus').addEventListener('click', click_operator('+'));
document.querySelector('#minus').addEventListener('click', click_operator('-'));
document.querySelector('#divide').addEventListener('click', click_operator('/'));
document.querySelector('#multiply').addEventListener('click', click_operator('*'));
document.querySelector('#calculate').addEventListener('click', print_result);
document.querySelector('#clear').addEventListener('click',reset);

