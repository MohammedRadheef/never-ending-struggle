const homeMangoScript = new MangoScript('homeUI', function(){
  var background_image = new entity({
    type: 'image',
    width: window.innerWidth,
    height: window.innerHeight,
    imageSizeAuto: true,
    mergeImageUrl: false,
    img: SRC_HOME_BG_IMG.tag
  })
})