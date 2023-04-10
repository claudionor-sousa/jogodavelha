const board = document.getElementById('board');
const squares = board.querySelectorAll('.square');

let currentPlayer = 'x';

squares.forEach(square => {
  square.addEventListener('click', () => {
    if (square.textContent !== '') {
      return;
    }

    square.classList.add(currentPlayer);
    square.textContent = currentPlayer;

    if (checkWinner()) {
      alert(` O jogador com ${currentPlayer.toUpperCase()}  venceu!`);
      reset();
      return;
    }

    if (checkDraw()) {
      alert('Empate!');
      reset();
      return;
    }

    currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
  });
});

function checkWinner() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  return winningCombinations.some(combination => {
    const [a, b, c] = combination;
    return squares[a].textContent &&
           squares[a].textContent === squares[b].textContent &&
           squares[a].textContent === squares[c].textContent;
  });
}

function checkDraw() {
  return Array.from(squares).every(square => square.textContent !== '');
}

function reset() {
  squares.forEach(square => {
    square.classList.remove('x', 'o');
    square.textContent = '';
  });
  currentPlayer = 'x';
}
