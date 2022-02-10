const form = document.querySelector('#form');
const input = document.querySelector('#input');
const logs = document.querySelector('#logs');
const btn = document.querySelector('#btn');
const num_number = Number(prompt('1~10 숫자 갯수를 입력해주세요', 3));
input.focus();

//alert
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

//answer
const numbers = Array(10).fill().map((v,i) => i);
const answer = [];
for (let i = 0; i < num_number; i += 1) {
  let index = Math.floor(Math.random() * (numbers.length - 1));
  answer.push(numbers[index]);
  numbers.splice(index,1);
};

//check input value
const tries = []; //used number
const check_input = (value) => {
  if (value == '' || isNaN(value)) {
    warning_notice.fire({icon: 'warning', text: '숫자를 입력해 주세요'});
    return;
  }
  if (value.length != answer.length) {
    warning_notice.fire({icon: 'warning', text: '길이가 맞지 않습니다'});
    return;
  }
  if (tries.includes(value)) {
    warning_notice.fire({icon: 'warning', text: '중복된 값입니다'});
    return;
  }
  if (new Set(value).size != answer.length) {
    warning_notice.fire({icon: 'warning', text: '같은 값이 들어있습니다'});
    return;
  }
  return true;
};

//form event
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = input.value;
  input.value = '';
  let valid = check_input(value);

  if (!valid) return;

  if (value == answer.join('')){
    logs.append('홈런!');
    warning_notice.fire({icon: 'success', text: '⚾홈런!⚾'});
    return;
  }

  if (tries.length >= 9) {
    logs.append(`패배! 정답은 ${answer.join('')}`);
    warning_notice.fire({icon: 'error', text: '😩패배!😩'});
    return;
  }
  
  let strike = 0;
  let ball = 0;
  let out = 0;

  for (let i of Array.from(value)) {
    switch (answer.indexOf(Number(i))) {
      case -1 : 
        out += 1;
        break;

      case value.indexOf(i) :
        strike += 1;
        break;

      default : ball += 1;
    }
  }

  if (out == 3) {
    logs.innerHTML += `${tries.length + 1}번째. ${value} : out <br>`;
  } else {
    logs.innerHTML += `${tries.length + 1}번째. ${value} : ${strike} S ${ball} B <br>`;
  }
  tries.push(value);
  input.focus();
});

