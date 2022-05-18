class Head {
  constructor(el) {
    this.node = document.createElement('div');
    this.node.setAttribute('id', 'head');
    el.appendChild(this.node);

    this.head = this.node;
    this.tail = null;
    this.next = null;

    this.currentDirection = 'right';
    this.SPEED = 250;

    this.top = 0;
    this.left = 0;

    this.node.style.top = this.top;
    this.node.style.left = this.left;

    setTimeout(this.move.bind(this), this.SPEED);
  }

  addNode(board, direction, topPosition, leftPosition, previous) {
     // Adding a new node
      console.log("added node");
      const node = new Body(board, direction, topPosition, leftPosition, previous);
      if (this.next) {
        this.next.previous = node;
        node.next = this.next;
      }
      this.next = node;
      node.previous = this;
      if (!this.tail) {
        this.tail = node;
      }
  }

  // addNode(board, direction, topPosition, leftPosition, previous) {
  //   let newNode = new Body(board, direction, topPosition, leftPosition, previous);

  //   previous.next = this;
  //   previous.top = this.top;
  //   previous.left = this.left;
  // }

  move() {
    const head = this.node;
    const direction = this.currentDirection;

    let topPosition = Number(head.style.top.replace('px', ''));
    let leftPosition = Number(head.style.left.replace('px', ''));

    if (direction === 'right') {
      this.left += 50;
      head.style.left = `${(this.left)}px`;
    }
    if (direction === 'left') {
      this.left -= 50;
      head.style.left = `${(this.left)}px`;
    }
    if (direction === 'up') {
      this.top -= 50;
      head.style.top = `${(this.top)}px`;
    }
    if (direction === 'down') {
      this.top += 50;
      head.style.top = `${(this.top)}px`;
    }

    // Move all other nodes
    let nodePtr = this.tail;
    if (this.tail) {
      do {
        nodePtr.top = nodePtr.previous.top;
        nodePtr.left = nodePtr.previous.left;
        if (nextMove) {
          nodePtr.move();
        }
        nextMove = true;
        nodePtr = nodePtr.previous;
      } while (nodePtr.previous);
    }

    // Hitting a Border
    if ((topPosition >= 700) || (topPosition < 0)) {
      console.log('game over');
      this.gameOver();
      return;
    }

    if ((leftPosition >= 700) || (leftPosition < 0)) {
      console.log('game over');
      this.gameOver();
      return;
    }

    // Hiting an Apple
    if ((coordinates[0] === topPosition) && (coordinates[1] === leftPosition)) {
      console.log('hit!');
      // hit = true;
      apple.remove();
      this.addNode(board, this.direction, this.top, this.left, this);

      // let nodePtr = this.tail;
      // if (this.tail) {
      //   while (nodePtr.previous !== this) {
      //     nodePtr.top = nodePtr.previous.top;
      //     nodePtr.left = nodePtr.previous.left;
      //     nodePtr.move();
      //     nodePtr = nodePtr.previous;
      //   }
      // }

      let newApple = new Apple(board);

      // if the coordinates of newApple are the same as the coordinates of this
      if ((coordinates[0] === topPosition) && (coordinates[1] === leftPosition)) {
      // then delete new Apple, and create another newerApple
        newApple.remove()
        let newerApple = new Apple(board);
      }
    }
  
    setTimeout(this.move.bind(this), this.SPEED);
  }

  gameOver() {
    window.confirm('Game over! Would you like to play again?') ? location.reload() : alert('Thanks for playing!')
  }
}
