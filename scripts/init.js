let canvas = Mango();
let mng = canvas;
let mango = canvas;
let cnv = canvas.setCanvas(document.getElementById('c'));
let ctx = cnv.ctx;
let elem = cnv.elem;
let entity = canvas.entity;
let entityGroup = canvas.entityGroup;
let layer = canvas.Layer;
let app = canvas.app

app.css(`
 #c {
   width: 100%;
   height: 100vh;
 }
 
 body {
   margin: 0
 }
`)

let graphical = {
  scale: 1,
  width: window.innerWidth,
  height: window.innerHeight,
  update() {
    this.width = window.innerWidth * this.scale
    this.height = window.innerHeight * this.scale
    canvas.setPixels(this.width, this.height)
  }
}


let scripts = {
  intervals: [],
  timeouts: [],
  stoppedLoops: [],
  stoppedIntervals: [],
  stoppedTimeOuts: [],
  connect(url){
    var script = document.createElement('script')
    script.src = url
    document.body.appendChild(script)
  },
  pause(){
    this.stoppedLoops = canvas.loopers
    canvas.loopers = []
    
    this.stoppedIntervals = this.intervals
    this.intervals.forEach(function(value){
      clearInterval(value)
    })
    
    this.stoppedTimeOuts = this.timeouts
    this.timeouts.forEach(function(value){
      clearTimeout(value)
    })
  },
  play(){
    canvas.loopers = this.stoppedLoops
    console.log(this.intervals, this.stoppedIntervals);
  }
}

scripts.connect('scripts/classes/class.app.js')

graphical.scale = 3
graphical.update()

canvas.addLoop(function() {
  canvas.entityStore.forEach(function(entity) {
    entity.scale = { x: graphical.scale, y: graphical.scale }
  })
})

canvas.start_loop()

canvas.specialRender()