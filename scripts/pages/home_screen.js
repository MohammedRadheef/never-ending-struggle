const homeMangoScript = new MangoScript("homeUI", function () {
  var background_image = new entity({
    type: "image",
    width: window.innerWidth,
    height: window.innerHeight,
    imageSizeAuto: true,
    mergeimageURL: false,
    img: SRC_HOME_BG_IMG.tag,
    z: 0,
  });

  var contact_icon = new entity({
    type: "image",
    dWidth: 35,
    dHeight: 35,
    x: 379,
    y: 119,
    dx: 3,
    dy: 3,
    width: 50,
    height: 50,
    mergeimageURL: false,
    img: SRC_ICON_SHEET.tag,
  });

  var settings_icon = new entity({
    type: "image",
    dWidth: 35,
    dHeight: 35,
    x: 536,
    y: 67,
    dx: window.innerWidth - 37,
    dy: 3,
    width: 50,
    height: 50,
    mergeimageURL: false,
    img: SRC_ICON_SHEET.tag,
  });

  background_image.data.onupdated = function () {
    background_image.data.width = window.innerWidth;
    background_image.data.height = window.innerHeight;
  };

  var versionText = new entity({
    type: "text",
    x: 6,
    y: window.innerHeight - 23,
    text: "v1.O",
    font: "lg",
    fill: "#fff",
    fontSize: 14,
  });

  var creditsText = new entity({
    type: "text",
    x: window.innerWidth - 55,
    y: window.innerHeight - 23,
    text: "Credits",
    font: "lg",
    fill: "#fff",
    fontSize: 14,
  });

  var cardOffline = new entity({
    width: getPrectage(window.innerWidth, 20),
    height: getPrectage(window.innerHeight, 60),
    type: "image",
    imageSizeAuto: true,
    imageURL: "images/ui/color_icons/FrameSquare.png",
    x: getPrectage(window.innerWidth, 30),
    y: 80,
    strokeWidth: 5,
    stroke: COLOR_GREEN,
    fill: "#444",
  });

  var IH = new entity({
    type: "image",
    width: 100,
    height: 100,
    x: getPrectage(window.innerWidth, 30) + getPrectage(160, 18),
    y: 130,
    imageSizeAuto: true,
    mergeimageURL: false,
    img: SRC_ICON_HAMMER.tag,
  });

  var cardOnline = new entity({
    width: 160,
    height: getPrectage(window.innerHeight, 60),
    type: "roundRect",
    x: getPrectage(window.innerWidth, 30) + 190,
    y: 80,
    strokeWidth: 5,
    stroke: COLOR_GREEN,
    fill: "#333",
  });
});
