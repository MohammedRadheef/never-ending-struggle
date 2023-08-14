var grd = canvas.app.createGradient(0, 0, 100, 100, [
  0.1, 
  'red',
  1,
  'black'
  ])

new entity({
  type: 'image',
  imageSizeAuto: true,
  width: window.innerWidth,
  height: window.innerHeight,
  imageURl: 'images/thumbnail/temp.jpg'
})
  
var box = new entity({
  width: 100,
  height: 100,
  fill: grd.gradient
})

var i = 0, color = app.randomColor()

scripts.intervals.push(setInterval(function(){
  i += 0.1
  box.data.fill = canvas.app.createGradient(0, 0, 100, 100, [
  i % 1, 
  app.randomColor(true),
  1,
  color
  ]).gradient

}, 100))

setTimeout(function(){
  scripts.pause()
  scripts.play()
}, 3000)
