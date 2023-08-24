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

    this.background.data.on("click", function(e) {
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

    this.update = function() {
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
        function() {
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

    this.update = function() {
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

    this.track.data.onupdated = function() {
      self.update();
    };
  }
}

class Selector {
  constructor(names = ['null'], values = ['null']) {
    this.x = 50;
    this.y = 50;
    this.width = 140;
    this.names = names
    this.values = values
    this.value = values[0]
    this.name = names[0]
    this.onchange = () => {}
    var self = this;

    this.background = new entity({
      type: 'roundRect',
      x: this.x,
      y: this.y,
      width: this.width,
      height: 30,
      arcLevel: 3,
      strokeWidth: 3,
      stroke: '#ccc',
      fill: '#fff',
    })

    this.selectedText = new entity({
      text: this.name,
      x: this.x + 8,
      y: this.y + 8,
      fontSize: 14,
      font: 'lg',
      type: 'text',
      fill: COLOR_BLACK
    })

    this.selectionBoxs = []
    this.selectionBoxTexts = []

    this.limitChar = 30
    this.addDots = false

    this.icon = new entity({
      type: 'image',
      x: 425,
      y: 63,
      width: 50,
      height: 50,
      translate: {
        x: (this.x + (this.width - 24)) * graphical.scale,
        y: (this.y + 5) * graphical.scale
      },
      dx: -24,
      dy: -0,
      rotate: (270 * (Math.PI / 180)),
      dWidth: 20,
      filter: 'brightness(20%)',
      dHeight: 20,
      imageURl: 'images/ui/icons.png'
    })

    function bgClick(e) {
      self.update()
      self.icon.data.render = false
      
      self.background.data.height = self.values.length * 30
      
      // limited: 150 <= (self.values.length * 30) ? 150 : self.values.length * 30
      self.selectedText.data.render = false

      // limitation are disabled 
      /*
      if (150 <= (self.values.length * 30)) {
        var startY = 0;
        var count = 0

        function scroll(e) {
          if ((startY - e.touches[0].clientY) < 0) {
            console.log('top')
          } else {
            // bottom
            count += 1;
            if (count == 5) {
              self.name = self.names[count]
              if (self.selectionBoxs.length != 0) {
              clearBoxAndTexts()}
              addBoxAndTexts()
              count = 0
            }
          }
        }

        self.background.data.on('touchstart', function(e) {
          startY = e.clientY
          self.background.data.on('touchmove', scroll)
        })

        self.background.data.on('touchend', function() {
          self.background.data.off('touchmove', scroll)
        })
      }
      */

      self.selectionBoxs = []
      self.selectionBoxTexts = []

      function addBoxAndTexts() {
        self.names.forEach(function(name, nameIndex) {
          self.selectionBoxs.push(
            new entity({
              x: self.name == name ? self.x+1:self.x,
              y: self.name == name ? (self.y + 30 * (nameIndex)) + 1: self.y + 30 * (nameIndex),
              type: 'roundRect',
              width: self.name == name ? self.width - 2: self.width,
              arcLevel: 3,
              fill: self.name == name ? '#66666630' : '#fff',
              stroke: COLOR_TRANSPARENT,
              height: 30,
              z: 400,
              //render: *limited* (nameIndex >= 5 ? false : true),
              sIndex: nameIndex
            })
          )

          self.update()

          self.selectionBoxTexts.push(
            new entity({
              text: name.slice(0, self.limitChar) + (self.addDots ? '...' : ''),
              x: self.x + 8,
              y: self.y + (30 * (nameIndex + 0)) + 8,
              fontSize: 14,
              font: 'lg',
              type: 'text',
              z: 401,
              //render: *limited* (nameIndex >= 5 ? false : true),
              fill: COLOR_DARK_GREY
            })
          )
        })
      }

      addBoxAndTexts()

      self.selectionBoxs.forEach(function(box, index) {
        box.data.on('touchend', function() {
          self.name = self.names[index]
          self.value = self.values[index]
          self.update()
          self.onchange()
          toDefault();
        })
      })

      function clearBoxAndTexts() {
        self.selectionBoxs.forEach(function(box) {
          box.data.destroy()
        })

        self.selectionBoxTexts.forEach(function(text) {
          text.data.destroy()
        })
      }

      function toDefault() {
        self.background.data.height = 30
        self.selectedText.data.render = true
        self.icon.data.render = true

        clearBoxAndTexts()

        self.selectionBoxs = []
        self.selectionBoxTexts = []
        self.update()

        document.body.removeEventListener('click', toDefault)
      }

      setTimeout(function() {
        document.body.addEventListener('click', toDefault)
      }, 5)
    }

    this.background.data.on('click', bgClick)

    this.update = function() {
      self.background.data.x = self.x
      self.background.data.y = self.y
      self.background.data.width = self.width

      self.selectedText.data.x = self.x + 8
      self.selectedText.data.y = self.y + 8
      self.selectedText.data.text = self.name

      self.icon.data.translate = {
        x: (self.x + (self.width - 24)) * graphical.scale,
        y: (self.y + 5) * graphical.scale
      }
    }

    this.update()
    this.background.data.onupdated = this.update
  }
}

var pro = new ProgressBar(40);
(pro.x = 100), (pro.value = 90);

new Button("HELLO");

var select = new Selector([
  'take Game',
  'pick Game',
  'make Game',
  'cake Game',
  'joke Game',
  'look Game'
  ],
  [
    'tk',
    'pk',
    'mk', 
    'ck',
    'jk', 
    'lk'
    ])
select.y = 100
select.limitChar = 8
select.addDots = true
select.update()

var select = new Selector([
  'take Game',
  'pick Game',
  'make Game',
  'cake Game',
  'joke Game',
  'look Game'
  ],
  [
    'tk',
    'pk',
    'mk', 
    'ck',
    'jk', 
    'lk'
    ])
select.y = 150
select.limitChar = 10
select.width = 200
select.addDots = false
select.update()

