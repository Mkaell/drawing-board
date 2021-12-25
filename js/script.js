const board = document.querySelector('#board'),
      SQUARES_NUMBER = 600,
      MAIN_COLOR = '#1d1d1d',
      colors = ['#e74c3c', '#8e44ad', '#3498ab', '#3498db', '#e67e22',
                '#2ecc71', '#F1C40F', '#ECF0F1' , '#1ABC9C', '#FF1493',
                '#9932CC', '#0000FF', '#FFF0F5'];


for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseleave', () => removeColor(square));
    board.append(square);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.backgroundColor = MAIN_COLOR;
    element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}