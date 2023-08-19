class Button {
  constructor(text) {
    this.x = 10;
    this.y = 10;
    this.bgGradient = app.createGradient(50, 10, 50, 70, [
      0.1,
      COLOR_GREEN,
      1,
      COLOR_GREEN
      ])
    this.padding = 5
    

    this.background = new entity({
      width: 30,
      height: 30,
      type: 'roundRect',
      fill: this.bgGradient.gradient,
      stroke: COLOR_GREEN,
      strokeWidth: 3,
      z: 100,
      x: this.x,
      arcLevel: 3,
      shadow: 3,
      shadowX: 5,
      shadowY: -5,
      shadowColor: '#ffffff90',
      y: this.y
    })

    this.text = new entity({
      type: 'text',
      text: text,
      fontSize: 'normal ' + 15,
      x: 15,
      y: 17,
      z: 100,
      font: 'sb',
      fill: '#fff',
    })

    var self = this;
    this.onclick = ()=>{};
    this.on = this.background.data.on

    this.background.data.on('click', function(e) {
      self.bgGradient = app.createGradient(
        self.x + (self.background.data.width / 2),
        self.y,
        self.x + (self.background.data.width / 2),
        self.y + self.background.data.height,
        [
      0.1,
      COLOR_GREEN_LIGHT,
      1,
      COLOR_GREEN
      ])
      
      self.onclick(e)

      self.background.data.fill = self.bgGradient.gradient
    })

    this.update = function() {
      this.background.data.width = this.text.data.getWidth() + 8

      this.background.data.x = this.x
      this.background.data.y = this.y

      this.text.data.x = this.x + this.padding + 2
      this.text.data.y = this.y + this.padding + 2

      this.bgGradient = app.createGradient(
        this.x + (this.background.data.width / 2),
        this.y,
        this.x + (this.background.data.width / 2),
        this.y + this.background.data.height,
        [
      0.1,
      COLOR_GREEN,
      1,
      COLOR_GREEN_LIGHT
      ])

      this.background.data.fill = this.bgGradient.gradient
    }

    scripts.loopers.push(
      new LooperScript(function() {
        self.update()
      }, true, 190)
    )
  }
}

var RX = new Button('Download Now')
RX.x = 50
RX.y = 100