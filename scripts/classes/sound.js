class Sound {
  constructor(src, loop = false) {
    var audio = document.createElement('audio')
    var source = document.createElement('source')
    this.audio = audio;
    this.source = source;
    source.src = src;
    this.loop = loop;
    audio.appendChild(source)
    audio.autoplay = true
    audio.loop = this.loop
  }
  play() {
    this.audio.load()
  }
}