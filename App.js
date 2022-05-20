let secratenumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'Plzz enter some value';
  } else if (guess === secratenumber) {
    document.querySelector('.message').textContent = 'correct num';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.highscore').textContent = score;
  } else if (guess !== secratenumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secratenumber ? 'too high' : 'too low';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lose !';
      document.querySelector('.score').textContent = '0';
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secratenumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
});
