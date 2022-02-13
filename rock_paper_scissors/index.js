const computer = document.querySelector('#computer');
const scissors = document.querySelector('#scissors');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const score = document.querySelector('#score');
const img_url = "./img/rsp.png";
computer.style.background = `url(${img_url}) 0 0`;
computer.style.backgroundSize = 'auto 200px';

//img X axis
const rspX = {
  scissors: '0', //가위
  rock: '-220px', //바위
  paper: '-440px' //보
};

let computer_choice = 'scissors';
const change_computer_hand = () => {
  if (computer_choice === 'rock') {
    computer_choice = 'scissors';
  } else if (computer_choice === 'scissors') {
    computer_choice = 'paper';
  } else if (computer_choice === 'paper') {
    computer_choice = 'rock';
  }
  computer.style.background = `url(${img_url}) ${rspX[computer_choice]} 0`;
  computer.style.backgroundSize = 'auto 200px';
};
setInterval(change_computer_hand,100);

let interval_id = setInterval(change_computer_hand,100);
const click_btn = () => {
  clearInterval(interval_id);

  setTimeout(() => {
    interval_id = setInterval(change_computer_hand, 100);
  }, 1000);
};
rock.addEventListener('click', click_btn);
scissors.addEventListener('click', click_btn);
paper.addEventListener('click', click_btn);

