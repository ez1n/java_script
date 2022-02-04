const num = Number(prompt('참가인원', 1));
const $input = document.querySelector('input');
const $button = document.querySelector('button');
const $word = document.querySelector('#word');
const $order = document.querySelector('#order');
let word; //제시어
let new_word; //현재 단어
let old_word = new Array(); //지금까지 제시된 단어
$input.focus();

//버튼 클릭 이벤트
const click_btn = () => {
  //제시어가 비어있거나 올바른가?
  if (!word || word[word.length - 1] == new_word[0]) { //empty or correct

    //제시어가 중복되지 않는가?
    if (!old_word.includes(new_word)) {
      word = new_word; //입력 단어 -> 제시어
      $word.textContent = word; //화면에 제시어 표시
      old_word.push(new_word);

      //순서 넘기기
      const order = Number($order.textContent);
      if (order + 1 > num) { //last
        $order.textContent = 1;
      } else { //non-last
        $order.textContent = order + 1;
      }
      const $result = document.querySelector('#result');
      $result.innerHTML += $word.textContent + '  🠖  ';
      
    } else {
      alert('올바르지 않은 단어입니다!');
    }
  } else {//full and not correct
    alert('올바르지 않은 단어입니다!');
  }
  $input.value = ''; //입력창 비우기
  $input.focus(); //입력창 내부에 커서 위치
};

// 엔터 키 이벤트
const enter_press = (event) => {
  if (event.keyCode === 13) {
    click_btn()
  }
};

const on_input = (event) => {
  new_word = event.target.value; //입력 단어 -> 현재 단어로 변경
};

$input.addEventListener('input', on_input);
$input.addEventListener('keydown', enter_press);
$button.addEventListener('click', click_btn);