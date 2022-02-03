const num = Number(prompt('몇 명이 참가하나요?'));
const $input = document.querySelector('input');
const $button = document.querySelector('button');
const $word = document.querySelector('#word');
const $order = document.querySelector('#order')
let word; //제시어
let new_word; //현재 단어

const click_btn = () => {
  if(!word) { //empty
    word = new_word; //입력 단어 -> 제시어
    $word.textContent = word; //화면에 제시어 표시
  } else {//full
    if(word[word.length - 1] == new_word[0]) { //same
      word = new_word;
      $word.textContent = word;
      const order = Number($order.textContent);
      if (order + 1 > num) { //마지막 순서
        $order.textContent = 1;
      } else { //마지막 순서 x
        $order.textContent = order + 1;
      }
    } else{ //different

    }
  }
};
const on_input = (event) => {
  new_word = event.target.value; //입력 단어 -> 현재 단어로 변경
};

//이벤트
$input.addEventListener('input', on_input);
$button.addEventListener('click', click_btn);
