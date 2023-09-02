function readSheet(url) {
  var rt = {
    url: url,
    image: '',
    loaded: false,
    onload: function() {},
  }
  
  var xhr = new XMLHttpRequest()
  xhr.open('GET', url)
  xhr.addEventListener('readystatechange', function(e) {
    if (xhr.readyState == xhr.DONE) {
      rt.image = 'data:image/png;base64' + xhr.response
      rt.onload()
    }
  })
  xhr.send(null)
  return rt;
}