const homeMangoScript = new MangoScript("homeUI", function() {
  var entityArrOfUi = [];

  var background_image = new entity({
    type: "image",
    width: window.innerWidth,
    height: window.innerHeight,
    imageSizeAuto: true,
    mergeimageURL: false,
    img: SRC_HOME_BG_IMG.tag,
    z: 0,
  });
  entityArrOfUi.push(background_image);

  setTimeout(function() {
    entityArrOfUi.forEach(function(entity){
      entity.data.destroy();
    })
    playMangoScript.run();
  }, 100)

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
  entityArrOfUi.push(contact_icon);
  entityArrOfUi.push(settings_icon);


  background_image.data.onupdated = function() {
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
    width: getPercentage(window.innerWidth, 25),
    height: getPercentage(window.innerHeight, 60),
    type: "image",
    imageSizeAuto: true,
    imageURL: "images/ui/color_icons/FrameSquare.png",
    x: getPercentage(window.innerWidth, 20),
    y: getPercentage(window.innerHeight, 20),
    strokeWidth: 5,
    stroke: COLOR_GREEN,
    fill: "#444",
  });

  var hammerIcon = new entity({
    type: "image",
    width: 100,
    height: 100,
    x: getPercentage(window.innerWidth, 30) + getPercentage(160, 18),
    y: getPercentage(window.innerHeight, 36),
    imageSizeAuto: true,
    mergeimageURL: false,
    img: SRC_ICON_HAMMER.tag,
  });

  var offlineText = new entity({
    type: 'text',
    x: getPercentage(window.innerWidth, 38),
    y: getPercentage(window.innerHeight, 39) + 100,
    text: 'Offline',
    font: 'lg',
    fill: '#fff',
    fontSize: 12
  })

  var cardOnline = new entity({
    width: getPercentage(window.innerWidth, 20),
    height: getPercentage(window.innerHeight, 60),
    type: "image",
    imageSizeAuto: true,
    imageURL: "images/ui/color_icons/FrameSquare.png",
    x: getPercentage(window.innerWidth, 30) + 190,
    y: getPercentage(window.innerHeight, 20),
    strokeWidth: 5,
    stroke: COLOR_GREEN,
    fill: "#444",
  });

  var onlineText = new entity({
    type: 'text',
    x: getPercentage(window.innerWidth, 38) + 190,
    y: getPercentage(window.innerHeight, 39) + 100,
    text: 'Online',
    font: 'lg',
    fill: '#fff',
    fontSize: 12
  });

  var toolsIcon = new entity({
    type: "image",
    width: 100,
    height: 100,
    x: getPercentage(window.innerWidth, 30) + getPercentage(160, 18) + 190,
    y: getPercentage(window.innerHeight, 36),
    imageSizeAuto: true,
    mergeimageURL: false,
    img: SRC_ICON_TOOLS.tag,
  });

  entityArrOfUi.push(versionText);
  entityArrOfUi.push(creditsText);
  entityArrOfUi.push(cardOnline);
  entityArrOfUi.push(cardOffline);
  entityArrOfUi.push(toolsIcon);
  entityArrOfUi.push(hammerIcon);
  entityArrOfUi.push(offlineText);
  entityArrOfUi.push(onlineText);
});