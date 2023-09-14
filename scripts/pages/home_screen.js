const homeMangoScript = new MangoScript('homeUI', function(){
  var background_image = new entity({
    type: 'image',
    width: window.innerWidth,
    height: window.innerHeight,
    imageSizeAuto: true,
    mergeImageUrl: false,
    img: SRC_HOME_BG_IMG.tag,
    z: 0,
  })
  
  var contact_icon = new entity({
    type: 'image',
    dWidth: 35,
    dHeight: 35,
    x: 379,
    y: 119,
    dx: 3,
    dy: 3,
    width: 50,
    height: 50,
    mergeImageUrl: false,
    img: SRC_ICON_SHEET.tag,
  })
  
  var settings_icon = new entity({
    type: 'image',
    dWidth: 35,
    dHeight: 35,
    x: 536,
    y: 67,
    dx: (window.innerWidth - 37),
    dy: 3,
    width: 50,
    height: 50,
    mergeImageUrl: false,
    img: SRC_ICON_SHEET.tag,
  })
  
  background_image.data.onupdated = function() {
    background_image.data.width = window.innerWidth
    background_image.data.height = window.innerHeight
  }
})