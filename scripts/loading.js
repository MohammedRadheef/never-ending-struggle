var loadingPageScript = new MangoScript("loading", function() {
  var blackScreen = new entity({
    width: 10000,
    height: 10000,
    z: -2,
    fill: COLOR_BLUE,
  });

  var background_image = new entity({
    type: 'image',
    z: -1,
    imageSizeAuto: true,
    width: window.innerWidth * 0,
    height: window.innerHeight * 0,
    imageURl: 'images/thumbnail/ca2k.png',
    filter: 'brightness(80%)',
    x: 0,
    y: 0
  })

  if (window.innerWidth < 400) {
    var blankScreen = new entity({
      width: 10000,
      height: 10000,
      z: 1000,
    });

    var FULLSCREEN_TEXT_INFO =
      "The game requires wider width and full screen,\n click to continue";

    var textInfo = new entity({
      font: "lg",
      text: FULLSCREEN_TEXT_INFO,
      x: 10,
      y: 10,
      fill: "#fff",
      stroke: "#fff",
      type: "text",
      splitLine: true,
      fontSize: 13,
      z: 1001,
    });
  }

  window.onclick = function() {
    fullScreen(document.querySelector("body"));
    blankScreen.data.destroy();
    textInfo.data.destroy();
    window.onclick = function() {}
  };

  background_image.data.onupdated = function() {
    background_image.data.width = window.innerWidth
    background_image.data.height = window.innerHeight
  }

  var progressBar = new ProgressBar(5)
  progressBar.width = 200
  progressBar.x = (window.innerWidth / 2) - (progressBar.width / 2)
  progressBar.y = (window.innerHeight - 60)
  progressBar.outline.data.fill = '#4C802F'

  var loadingText = new entity({
    type: 'text',
    x: (window.innerWidth / 2) - 46,
    y: window.innerHeight - 30,
    text: 'Loading... (5%)',
    font: 'lg',
    fill: '#fff',
    fontSize: 14
  })

  loadingText.data.onupdated = function() {
    loadingText.data.x = (window.innerWidth / 2) - 46
    loadingText.data.y = window.innerHeight - 30
    loadingText.data.text = ('Loading... (' + progressBar.value.toFixed(1) + ')').replaceAll(0, 'O')

    progressBar.x = (window.innerWidth / 2) - (progressBar.width / 2)
    progressBar.y = (window.innerHeight - 60)
  }

  // code for loading contents
  scripts.connect('scripts/functions/readfile.js').onload = function() {
    progressBar.value = 6;
    scripts.connect('scripts/classes/source.js').onload = function() {
      scripts.connect('scripts/property/common.sources.js').onload = function() {
        progressBar.value = 7;
        commonSources.forEach(function(src) {
          src.load()
          src.onload = function() {
            progressBar.value += (20 / commonSources.length)
          }
        })
      }
    }
  }


});

loadingPageScript.run();