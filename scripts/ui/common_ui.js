class Button {
  constructor(text) {
    this.x = 10;
    this.y = 10;
    this.bgGradient = app.createGradient(50, 10, 50, 70, [
      0.1,
      COLOR_GREEN,
      1,
      COLOR_GREEN_LIGHT,
    ]);
    this.padding = 5;

    this.background = new entity({
      width: 30,
      height: 30,
      type: "roundRect",
      fill: this.bgGradient.gradient,
      stroke: COLOR_GREEN,
      strokeWidth: 3,
      z: 100,
      x: this.x,
      arcLevel: 3,
      shadow: 3,
      shadowX: 5,
      shadowY: -5,
      shadowColor: "#ffffff00",
      y: this.y,
    });

    // button light effect
    /*this.lightbox = new entity({
      x: this.x + 4,
      y: this.y + 3,
      type: "roundRect",
      width: this.background.data.width - 7,
      height: (this.background.data.height / 100) * 30,
      fill: '#ffffff50',
      stroke: 'transparent',
      z: 120
    })*/

    this.text = new entity({
      type: "text",
      text: text,
      fontSize: "normal " + 15,
      x: 15,
      y: 17,
      z: 100,
      font: "lg",
      fill: "#fff",
    });

    var self = this;
    this.onclick = () => {};
    this.on = this.background.data.on;

    this.background.data.on("click", function (e) {
      self.bgGradient = app.createGradient(
        self.x + self.background.data.width / 2,
        self.y,
        self.x + self.background.data.width / 2,
        self.y + self.background.data.height,
        [0.1, COLOR_GREEN_LIGHT, 1, COLOR_GREEN]
      );

      self.onclick(e);

      self.background.data.fill = self.bgGradient.gradient;
    });

    this.update = function () {
      this.background.data.width = this.text.data.getWidth() + 8;

      this.background.data.x = this.x;
      this.background.data.y = this.y;

      this.text.data.x = this.x + this.padding + 2;
      this.text.data.y = this.y + this.padding + 2;

      this.bgGradient = app.createGradient(
        this.x + this.background.data.width / 2,
        this.y,
        this.x + this.background.data.width / 2,
        this.y + this.background.data.height,
        [0.1, COLOR_GREEN, 1, COLOR_GREEN_LIGHT]
      );

      this.background.data.fill = this.bgGradient.gradient;
    };

    this.update();

    scripts.loopers.push(
      new LooperScript(
        function () {
          self.update();
        },
        true,
        190
      )
    );
  }
}

class ProgressBar {
  constructor(value = 0) {
    this.x = 10;
    this.y = 10;
    this.width = 140;
    this.height = 20;
    this.value = value;
    var self = this;

    this.outline = new entity({
      type: "roundRect",
      width: this.width,
      height: this.height,
      x: this.x,
      y: this.y,
      arcLevel: 5,
      strokeWidth: 3,
      stroke: COLOR_GREEN_LIGHTEN,
      fill: COLOR_GREEN_TRPT,
    });

    this.track = new entity({
      type: "roundRect",
      width: (this.width / 102.5) * this.value,
      height: this.height - 4,
      x: this.x + 1.5,
      y: this.y + 2,
      arcLevel: 5,
      stroke: "transparent",
      fill: app.createGradient(
        self.x + self.outline.data.width / 2,
        self.y,
        self.x + self.outline.data.width / 2,
        self.y + self.outline.data.height,
        [
          0,
          COLOR_GREEN_LIGHT,
          0.4,
          COLOR_GREEN_LIGHT,
          0.7,
          COLOR_GREEN,
          1,
          COLOR_GREEN,
        ]
      ).gradient,
    });

    this.lightbox = new entity({
      x: this.x + 4,
      y: this.y + 3,
      type: "roundRect",
      width: (this.width / 102.5) * this.value - 7,
      height: (this.height / 100) * 20,
      fill: "#ffffff50",
      stroke: "transparent",
    });

    this.update = function () {
      self.outline.data.width = self.width;
      self.outline.data.height = self.height;
      self.outline.data.x = self.x;
      self.outline.data.y = self.y;

      self.track.data.x = self.x + 1.5;
      self.track.data.y = self.y + 2;
      self.track.data.width = (self.width / 102.5) * self.value;
      self.track.data.height = self.height - 4;
      (self.track.data.fill = app.createGradient(
        self.x + self.outline.data.width / 2,
        self.y,
        self.x + self.outline.data.width / 2,
        self.y + self.outline.data.height,
        [
          0,
          COLOR_GREEN_LIGHT,
          0.4,
          COLOR_GREEN_LIGHT,
          0.7,
          COLOR_GREEN,
          1,
          COLOR_GREEN,
        ]
      ).gradient),
        (self.lightbox.data.x = self.x + 4);
      self.lightbox.data.y = self.y + 3;
      self.lightbox.data.width = (self.width / 102.5) * self.value - 7;
      self.lightbox.data.height = (this.height / 100) * 20;
    };

    this.track.data.onupdated = function () {
      self.update();
    };
  }
}

var pro = new ProgressBar(40);
(pro.x = 100), (pro.value = 90);

new Button("HELLO");
