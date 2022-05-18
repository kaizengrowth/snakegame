class Apple {
  constructor(el) {
    this.node = document.createElement('img');
    this.node.setAttribute('id', 'apple');
    this.node.setAttribute('src', 'src/assets/apple.png');

    el.appendChild(this.node);

    let topPosition = (Math.floor(Math.random() * 14)) * 50;
    let leftPosition = (Math.floor(Math.random() * 14)) * 50;

    coordinates[0] = topPosition;
    coordinates[1] = leftPosition;
    
    console.log(coordinates);

    this.node.style.left = `${(leftPosition)}px`;
    this.node.style.top = `${(topPosition)}px`;
  }

  remove() {
    this.node = null;
    for (const key in coordinates) {
      delete coordinates[key];
    }
    // hit = false;
  }
}