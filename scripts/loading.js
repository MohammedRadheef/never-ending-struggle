var loadingPageScript = new MangoScript('loading', function() {
  new entity({
    type: 'image',
    imageSizeAuto: true,
    width: window.innerWidth,
    height: window.innerHeight,
    imageURl: 'images/thumbnail/temp.jpg'
  })
})

loadingPageScript.run()