const num = Number(prompt('참가인원'));
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
    $input.value = ''; //입력창 비우기
    $input.focus(); //입력창 내부에 커서 위치
  } else {//full
    if(word[word.length - 1] == new_word[0]) { //same
      word = new_word;
      $word.textContent = word;
      const order = Number($order.textContent);
      if (order + 1 > num) { //last
        $order.textContent = 1;
      } else { //non-last
        $order.textContent = order + 1;
      }
      $input.value = '';
      $input.focus();
    } else{ //different
      alert('fail!');
      $input.value = '';
      $input.focus();
    }
  }
};
const on_input = (event) => {
  new_word = event.target.value; //입력 단어 -> 현재 단어로 변경
};

//이벤트
$input.addEventListener('input', on_input);
$button.addEventListener('click', click_btn);
