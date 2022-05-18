class Body {
    constructor(el, direction, topPosition, leftPosition, previous) {
        this.node = document.createElement('div');
        this.node.setAttribute('class', 'body');
        el.appendChild(this.node);

        this.previous = previous;
        this.next = null;

        this.direction = direction;
        this.top = topPosition;
        this.left = leftPosition;
        console.log('current direction: ' + direction);

        if (direction = 'up'){
            console.log('body up')
            this.top += 50;   
        }
        if (direction = 'down'){
            console.log('body down')
            this.top -= 50;
        }
        if (direction = 'left'){
            console.log('body left')
            this.left += 50;
        }
        if (direction = 'right'){
            console.log('body right')
            this.left -= 50;
        }

        this.node.style.top = `${(this.top)}px`;
        this.node.style.left = `${this.left}px`;

        // this.SPEED = 250;
        // setInterval(this.move.bind(this), this.SPEED);
    }

    // addNode(board, direction, topPosition, leftPosition, previous) {
    //   let newNode = new Body(board, direction, topPosition, leftPosition, previous);

    //   previous.next = this;
    //   previous.top = this.top;
    //   previous.left = this.left;
    // }

    move() {
        console.log('body moved');
        const body = this.node;
    
        // let topPosition = Number(body.style.top.replace('px', ''));
        // let leftPosition = Number(body.style.left.replace('px', ''));

        body.style.left = `${(this.left)}px`;
        body.style.top = `${(this.top)}px`;
    }
}