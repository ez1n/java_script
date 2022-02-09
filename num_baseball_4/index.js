const input = document.querySelector('#input');
const form = document.querySelector('#form');
const logs = document.querySelector('#logs');

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

//set number of numbers
let number_num = parseInt(prompt('숫자 갯수를 입력하세요', 3));
if (number_num > 10) {
  alert('10 이하로 입력해 주세요!');
  number_num = parseInt(prompt('숫자 갯수를 입력하세요', 3));
};

//1~10 array
const numbers = [];
for (let i = 0; i < 10; i += 1) {
  numbers.push(i + 1);
};

//answer
const answer = [];
for (let i = 0; i < number_num; i += 1) {
  const index = Math.floor(Math.random() * numbers.length);
  answer.push(numbers[index]);
  numbers.splice(index, 1);
};

//check_validation
const try_num = [];
const check_input = () => {
  if (input.length != number_num) {
    return warning_notice({
      icon: 'warning',
      title: '길이가 다릅니다!'
    });
  }
  if (new Set(input).size != number_num) {
    return warning_notice({
      icon: 'warning',
      title: '중복된 값이 있습니다!'
    });
  }
  if (try_num.includes(input)) {
    return warning_notice({
      icon: 'warning',
      title: '이미 시도한 값입니다!'
    });
  }
};

form.addEventListener('submit', (event) => {
  event.preventDefault(); //prevent initialization
  const value = input.value;
  input.value = '';
  const valid = check_input(value);

  if (!valid) return;
  if (answer.join('') == value) {
    logs.textContent = '홈런!';
    return;
  }
  if (try_num.length > 10) {
    const message = document.createTextNode(`패배! 정답은 ${answer.join('')} 입니다!`);
    logs.appendChild(message);
    return;
  }

  let strike = 0;
  let ball = 0;
  let out = '';
  for (let i = 0; i < answer.length; i += 1) {
    const index = value.indexOf(answer[i]);
    if (index == -1) {
      out = 'out';
      logs.innerHTML(`${out}`);
      return;
    }
    if (index === i) {
      strike += 1;
    } else {
      ball += 1;
    }
  }

  logs.innerHTML(`${value}: ${strike} S ${ball} B` + '<br>');
  try_num.push(value);
});