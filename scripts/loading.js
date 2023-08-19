var loadingPageScript = new MangoScript('loading', function() {
  new entity({
    type: 'image',
    z: -1,
    imageSizeAuto: true,
    width: window.innerWidth,
    height: window.innerHeight,
    imageURl: 'images/thumbnail/temp.jpg'
  })

  new entity({
    width: 10000,
    height: 10000,
  })
  
  var FULLSCREEN_TEXT_INFO = 'The game requires wide width and full screen,\n so click the button'
  
  var textInfo = new entity({
    font: 'lg',
    text: FULLSCREEN_TEXT_INFO,
    x: 10,
    y: 10,
    fill: '#fff',
    stroke: '#fff',
    type: 'text',
    splitLine: true,
    fontSize: 13
  })
  
  textInfo
  
  var rotateButton = new Button('Full Screen')
  rotateButton.x = (window.innerWidth / 2) - (rotateButton.background.data.width / 2)
  rotateButton.y = ((window.innerHeight / 2) - (rotateButton.background.data.height / 2))+15
})

loadingPageScript.run()