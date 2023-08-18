class Button {
  constructor(text) {
    this.background = new entity({
      width: 30,
      height: 30,
      type: 'roundRect',
      fill: COLOR_GREEN+'90',
      stroke: COLOR_GREEN,
      strokeWidth: 3,
      z: 100,
      x: 10,
      arcLevel: 3,
      y: 10
    })

    this.text = new entity({
      type: 'text',
      text: text,
      fontSize: 'normal ' + 15,
      x: 15,
      y: 17,
      z: 100,
      font: 'sf',
      fill: '#fff',
    })

    this.update = function() {
      this.background.data.width = this.text.data.getWidth() + 8
    }

    var self = this;
    scripts.loopers.push(
      new LooperScript(function() {
        self.update()
      }, true, 100)
    )
  }
}

var RX = new Button('can you receive this message from a boy')