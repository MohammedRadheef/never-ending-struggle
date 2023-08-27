function setInPercentage(key, string, percentage, value) {
  key[string] = (value / 100) * percentage
  return key[string]
}

function setInPercentageWithLooper(key, string, percentage, value) {
  scripts.loopers.push(new LooperScript(function() {
    setInPercentage(key, string, percentage, value)
  }, true, 0.1))
}