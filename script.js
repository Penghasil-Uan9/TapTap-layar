let score = 0;
const scoreElement = document.getElementById('score');
const tapButton = document.getElementById('tapButton');

tapButton.addEventListener('click', () => {
    score++;
    scoreElement.textContent = 'Skor: ' + score;
});