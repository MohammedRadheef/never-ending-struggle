var loadingPageScript = new MangoScript('loading', function() {
  var blackScreen = new entity({
    width: 10000,
    height: 10000,
    z: -2,
    fill: COLOR_BLUE
  })
  
  /*var background_image = new entity({
    type: 'image',
    z: -1,
    imageSizeAuto: true,
    width: window.innerWidth,
    height: window.innerHeight,
    imageURl: 'images/thumbnail/home.jpg',
    filter: 'brightness(100%)',
    x: 20,
    y: 20
  })*/

  if (window.innerWidth < 400) {
    
    var blankScreen = new entity({
      width: 10000,
      height: 10000,
      z: 1000
    })

    var FULLSCREEN_TEXT_INFO = 'The game requires wider width and full screen,\n click to continue'

    var textInfo = new entity({
      font: 'lg',
      text: FULLSCREEN_TEXT_INFO,
      x: 10,
      y: 10,
      fill: '#fff',
      stroke: '#fff',
      type: 'text',
      splitLine: true,
      fontSize: 13,
      z: 1001
    })

    window.onclick = function() {
      fullScreen(document.querySelector('body'))
      blankScreen.data.destroy()
      textInfo.data.destroy()
    }

    /*background_image.data.onupdated = function() {
      background_image.data.width = window.innerWidth - 150
      background_image.data.height = window.innerHeight - 25
    }*/
  }
})

loadingPageScript.run()