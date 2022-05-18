const coordinates = [0,0];
let bodySpawn = false;
let snakeBody;
let nextMove = false;

document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const board = document.querySelector('#board');

  const head = new Head(board);
  let apple = new Apple(board);

  body.addEventListener('keydown', (e) => {
    if (e.keyCode === 37) {
      console.log('pressed left');
      head.currentDirection = 'left';
      if (bodySpawn) {
        snakeBody.direction = 'left';
      }
    }
    if (e.keyCode === 39) {
      console.log('pressed right');
      head.currentDirection = 'right';
      if (bodySpawn) {
        snakeBody.direction = 'right';
      }
    }
    if (e.keyCode === 38) {
      console.log('pressed up');
      head.currentDirection = 'up';
      if (bodySpawn) {
        snakeBody.direction = 'up';
      }
    }
    if (e.keyCode === 40) {
      console.log('pressed down');
      head.currentDirection = 'down';
      if (bodySpawn) {
        snakeBody.direction = 'down';
      }
    }
  });
});
