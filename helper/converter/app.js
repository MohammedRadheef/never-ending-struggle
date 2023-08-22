document.getElementById('sh').onchange = () => {
  var file = document.getElementById('sh').files[0]
  file.text().then(function(txt){
    document.getElementById('img').src = 'data:image/png;base64'+txt
  })
}