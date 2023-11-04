var playMangoScript = new MangoScript('play', function() {
  new entity({
    type: 'image',
    dx: 80,
    dy: 10,
    dWidth: 200,
    dHeight: 200,
    width: 1024,
    height: 1024,
    img: SRC_ARCHERY_LVL_1.tag,
    mergeimageURL: false,
  })
})