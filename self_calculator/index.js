const num_btns = document.querySelectorAll('#num');
const operator_btns = document.querySelectorAll('#operator');
const result = document.querySelector('#result');
const reset = document.querySelector('#reset');
const sign = document.querySelector('#sign');
const percentage = document.querySelector('#percentage');
const calculate = document.querySelector('#calculate');
const decimal_point = document.querySelector('#decimal_point');
let number1 = '';
let number2 = '';
let operator = '';

//alert
const alert_param = { icon: 'warning', title: '숫자를 입력해 주세요!' };
const warning_notice = Swal.mixin({
  toast: true,
  position: 'center-center',
  showConfirmButton: false,
  timer: 1000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  }
});

//number btn event
const click_num = (event) => {

  //operator_empty
  if (!operator) {
    number1 += event.target.textContent;
    result.value = number1;
    if (number1 != 0) {
      reset.textContent = 'C';
    } else if (event.target.textContent == '0') {
      number1 = '0';
      result.value = '0';
    }
    return;
  }

  //operator_full
  if (number2 == '0' && event.target.textContent == '0') {
    number2 = '0';
    result.value = '0';
    return;
  }

  if (!number2) {
    result.value = '';
  }
  number2 += event.target.textContent;
  result.value += event.target.textContent;
};

//decimal_point btn event
const click_decimal_point = () => {
  //operator_empty
  if (!operator) {
    //number1_empty
    if (!number1) {
      number1 += '0.';
      result.value = '0.';
      reset.textContent = 'C';
    }
    //number1_full
    if (!number1.includes('.')) {
      number1 += '.';
      result.value += '.';
    }
    return;
  }

  //operator_full
  //number2_empty
  if (!number2) {
    number2 = '0.';
    result.value = '0.';
    return;
  }
  //number2_full
  if (!number2.includes('.')) {
    number2 += '.';
    result.value += '.';
  }
};

//result btn event
const click_calculate = () => {
  if (number2) {
    switch (operator) {
      case '÷':
        result.value = Number(number1) / Number(number2);
        break;

      case '×':
        result.value = Number(number1) * Number(number2);
        break;

      case '-':
        result.value = Number(number1) - Number(number2);
        break;

      case '+':
        result.value = Number(number1) + Number(number2);
        break;
    }
    number1 = result.value;
    number2 = '';
    operator = '';
  } else {
    number1 = '';
    result.value = '';
    warning_notice.fire(alert_param);
  }
};

//operator btn event
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
    warning_notice.fire(alert_param);
  }
};

//add event
for (let num_btn of num_btns) {
  num_btn.addEventListener('click', click_num);
};
for (let operator_btn of operator_btns) {
  operator_btn.addEventListener('click', click_operator);
};

percentage.addEventListener('click', () => {
  result.value /= 100;
  number1 = result.value;
  number2 = '';
});

reset.addEventListener('click', () => {
  number1 = '';
  number2 = '';
  operator = '';
  result.value = '';
  reset.textContent = 'AC';
});

sign.addEventListener('click', () => {
  if (!number1 || result.value == '0') {
    number1 += '-0';
    result.value = '-0';
  } else {
    number1 = String(-result.value);
    result.value = number1;
    number2 = ''
  }
});

calculate.addEventListener('click', click_calculate);
decimal_point.addEventListener('click', click_decimal_point);


