const result_btn = document.querySelector('#result_btn');
const result = document.querySelector('#result');
const bonus = document.querySelector('#bonus');

//1~45 array
const numbers = Array(45).fill().map((v,i) => i + 1);

//shuffle
const shuffle = [];
while (numbers.length > 0) {
  const index = Math.floor(Math.random() * numbers.length);
  shuffle.push(numbers[index]);
  numbers.splice(index, 1);
};
const win_balls = shuffle.slice(0,6).sort((a,b) => {
  return a - b;
});
const bonus_ball = shuffle[6];

const show_balls = (value, parent) => {
  const ball = document.createElement('span');
  ball.className = 'ball';
  ball.textContent = `${value} `;
  parent.appendChild(ball)
};

result_btn.addEventListener('click', () => {
  for (let value of win_balls) {
    setTimeout(() => {
      show_balls(value, result)
    }, 1000 * (win_balls.indexOf(value) + 1));
  };

  setTimeout(() => {
    show_balls(bonus_ball, bonus);
  }, 7000);
});

