const num = document.querySelector('#num');
const word = document.querySelector('#word');
const input_box = document.querySelector('input');
const btn = document.querySelector('button');
const used_word = document.querySelector('#used_word');
let last_word; //마지막 단어
let new_word; //입력된 단어
let origin_words = new Array(); //지금까지 나온 단어들

const real_num = Number(prompt('참가 인원', 1)); //인원 정하기
input_box.focus(); //커서 놓기

//button event
const on_btn = () => {
  //제시어가 비어있거나 올바른가?
  if (!last_word || last_word[last_word.length - 1] == new_word[0]) { //empty

    if (new_word.length == 3) { //단어길이==3
      word.textContent = new_word;
      last_word = new_word; //제시어 -> 현재단어
      used_word.innerHTML += new_word + '  쿵쿵따  ♥ ';

      //순서 넘김
      const number = Number(num.textContent);
      if (number + 1 > real_num) {
        num.textContent = 1;
      } else {
        num.textContent = number + 1;
      }

    } else { //단어길이!=3
      alert('다시 입력해 주세요!');
    }

  } else { //full
    alert('다시 입력해 주세요!');
  }
  origin_words.push(new_word)
  input_box.value = '';
  input_box.focus();
};

//enter event
const enter_press = (event) => {
  if (event.keyCode == 13) {
    on_btn();
  }
};

//input event
const on_input = (event) => {
  new_word = event.target.value;
};

input_box.addEventListener('input', on_input);
input_box.addEventListener('keydown', enter_press);
btn.addEventListener('click', on_btn);

