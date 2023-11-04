class Sound {
  constructor(srcURL, loop = false) {
    var audio = document.createElement("audio");
    var source = document.createElement("source");
    this.audio = audio;
    this.source = source;
    source.src = srcURL;
    this.loop = loop;
    this.volume = audio.volume;
    audio.appendChild(source);
    audio.autoplay = true;
    audio.loop = this.loop;
    this.duration = audio.duration;
    this.currentTime = 0;
  }
  play() {
    this.audio.load();
    this.update();
    var self = this;
    this.audio.addEventListener("load", function () {
      self.update();
    });
  }
  stop() {
    this.audio.pause();
    this.update();
  }
  update() {
    this.audio.volume = this.volume;
    this.duration = this.audio.duration;
    this.currentTime = this.audio.currentTime;
  }
}
