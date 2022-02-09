const input = document.querySelector('#input');
const form = document.querySelector('#form');
const logs = document.querySelector('#logs');
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

//set number of numbers
let number_num = parseInt(prompt('숫자 갯수를 입력하세요', 3));
if (number_num > 10) {
  alert('10 이하로 입력해 주세요!');
  number_num = parseInt(prompt('숫자 갯수를 입력하세요', 3));
};

//1~10 array
const numbers = [];
for (let i = 0; i < 10; i += 1) {
  numbers.push(i);
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
const check_input = (in_put) => {
  if (isNaN(Number(in_put)) || in_put == '') {
    warning_notice.fire({
      icon: 'warning',
      title: '숫자를 입력하라.'
    });
    return;
  }

  if (in_put.length != number_num) {
    warning_notice.fire({
      icon: 'warning',
      title: '길이가 다르다.'
    });
    return;
  }

  if (new Set(in_put).size != number_num) {
    warning_notice.fire({
      icon: 'warning',
      title: '중복된 값이 있다.'
    });
    return;
  }

  if (try_num.includes(in_put)) {
    warning_notice.fire({
      icon: 'warning',
      title: '이미 입력한 값이다.'
    });
    return;
  }

  return true;
};

form.addEventListener('submit', (event) => {
  event.preventDefault(); //prevent initialization
  const input_value = input.value;
  input.value = '';
  const valid = check_input(input_value);

  if (!valid) return;
  if (answer.join('') === input_value) {
    logs.textContent = '홈런!';
    warning_notice.fire({
      icon: 'success',
      title: '⚾홈런⚾'
    })
    return;
  }
  if (try_num.length >= 9) {
    const message = document.createTextNode(`패배! 정답은 ${answer.join('')} 입니다!`);
    logs.appendChild(message);
    return warning_notice.fire({
      icon: 'error',
      title: '패배🤪'
    });
  }

  let strike = 0;
  let ball = 0;
  let out_num = 0;

  for (let i = 0; i < answer.length; i += 1) {
    const index = input_value.indexOf(answer[i]);
    if (index > -1) {
      if (index == i) {
        strike += 1;
      } else {
        ball += 1;
      }
    } else {
      out_num += 1;
    }
  };

  if (out_num == 3) {
    logs.innerHTML += `${try_num.length + 1}. ${input_value} : OUT <br>`;
    try_num.push(input_value);
    return;
  }
  logs.innerHTML += `${try_num.length + 1}. ${input_value} : ${strike} S ${ball} B <br>`;
  try_num.push(input_value);
  input.focus();
});


