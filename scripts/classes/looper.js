class LooperScript {
  constructor(handle, isLoop, timeStamp = 0) {
    this.isLoop = isLoop;
    this.timeStamp = timeStamp;
    this.handle = handle;
    this.handleCode = 0;
  }
}
