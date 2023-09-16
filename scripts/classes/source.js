class GameSource {
  constructor(type, url) {
    this.name = name;
    this.url = url;
    this.type = type
  }
  loaded = false;
  tag = document.createElement('img');
  error = false;
  load() {
    var self = this;
    if (self.type == 'image') {
      self.tag.src = self.url
      self.tag.onload = function() {
        self.onload()
      }
      self.loaded = true
    } else {
      var sheet = readSheet(self.url)
      sheet.onload = function() {
        self.tag.src = sheet.image
        self.tag.onload = self.onload
        self.loaded = true
      }
    }
  }
  onload = function() {}
}