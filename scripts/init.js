let canvas = Mango();
let mng = canvas;
let mango = canvas;
let cnv = canvas.setCanvas(document.getElementById("c"));
let ctx = cnv.ctx;
let elem = cnv.elem;
let entity = canvas.entity;
let entityGroup = canvas.entityGroup;
let layer = canvas.Layer;
let app = canvas.app;

app.css(`
 #c {
   width: 100%;
   height: 100vh;
 }
 
 body {
   margin: 0
 }
`);

let graphical = {
  scale: 1,
  width: window.innerWidth,
  height: window.innerHeight,
  update() {
    this.width = window.innerWidth * this.scale;
    this.height = window.innerHeight * this.scale;
    canvas.setPixels(this.width, this.height);
  },
};

class MangoScript {
  constructor(name, handle) {
    this.name = name;
    this.init = handle;
    scripts.mangoScripts.push(this);
  }
  run() {
    this.init();
    scripts.pause();
    scripts.play();
  }
}

let scripts = {
  loopers: [],
  mangoScripts: [],
  connect(url) {
    var script = document.createElement("script");
    script.src = url;
    document.body.appendChild(script);
    return script;
  },
  pause() {
    canvas.end_loop();

    this.loopers.forEach(function (value) {
      if (value.isLoop == true) {
        clearInterval(value.handleCode);
      } else {
        clearTimeout(value.handleCode);
      }
    });
  },
  play() {
    canvas.start_loop();

    var self = this;
    this.loopers.forEach(function (value) {
      if (value.isLoop == true) {
        value.handleCode = setInterval(value.handle, value.timeStamp);
      } else {
        value.handleCode = setTimeout(value.handle, value.timeStamp);
      }
    });
  },
};

scripts.connect("scripts/basic.script.loader.js");
scripts.play();

graphical.scale = 1.5;
graphical.update();

canvas.addLoop(function () {
  canvas.entityStore.forEach(function (entity, entityIndex) {
    if (entity.type) {
      entity.scale = { x: graphical.scale, y: graphical.scale };
    } else {
      canvas.entityStore.splice(entityIndex, 1);
    }
  });
});

window.onresize = window.onorientationchange = function () {
  graphical.update();
};

function fullScreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    /* Safari */
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    /* IE11 */
    element.msRequestFullscreen();
  }

  window.screen.orientation
    .lock("landscape")
    .then(function () {
      console.log("done");
    })
    .catch(function (error) {
      console.warn(error);
    });
}

canvas.start_loop();
canvas.specialRender();

var development = {
  x: 0,
  y: 0,
  msg: "Running",
  active: false,
};

function msg(msg) {
  development.msg = msg;
}

if (development.active) {
  var textLog = new entity({
    type: "text",
    text: "app\nDem",
    x: 8,
    y: 8,
    z: 1000000,
    fontSize: 13,
    splitLine: true,
    fill: "#fff",
    font: "monospace",
    shadow: 5,
  });

  textLog.data.onupdated = function () {
    var TEXT_LOG = `
  x: ${development.x}
  y: ${development.y}
  
  ${development.msg}`;
    textLog.data.text = TEXT_LOG;
  };

  window.ontouchmove =
    window.ontouchstart =
    window.onmousemove =
      function (e) {
        if (e.changedTouches) {
          e = e.changedTouches[0];
        } else if (e.touches) {
          e = e.touches[0];
        }

        development.x = e.clientX;
        development.y = e.clientY;
      };
}
