class Button {
  constructor(text) {
    this.background = new entity({
      width: 30,
      height: 30,
      fill: '#33333350',
      stroke: '#111',
      z: 100,
      x: 10,
      y: 10
    })
    this.text = new entity({
      type: 'text',
      text: 'Loading',
      fontSize: 15,
      x: 15,
      y: 17,
      z: 100,
      fill: '#fff',
    })
    
    this.background.data.width = this.text.data.getWidth() + 5
  }
}

new Button('null')