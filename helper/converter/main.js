var log = document.getElementById('logs')

function msg(msg, err = false) {
  log.innerHTML += '<p ' + (err ? 'class="err"' : '') + '>' + msg + '</p>'
}

document.getElementById('btn').onclick = function() {
  log.innerHTML = '';
  msg("Starting...");
  var file = document.getElementById('file').files[0]
  if (file == undefined) {
    msg('ERR: File Not Found', true)
  } else {
    var fl = new FileReader()
    fl.readAsDataURL(file)
    msg('Reading...')
    fl.addEventListener('load', function(e) {
      msg('Converting to .sheet')
      var dataModule = 'data:' + file.type + ';base64,'
      msg('file detected')
      var rs = fl.result.slice(fl.result.indexOf(','), fl.result.length)
      msg('creating sheet...')
      var sht = new Blob([rs], {
        type: 'application/image_sheet',
      })
      msg('sheet created...')
      var flName = prompt('enter file name')
      msg('file name is ' + flName + '.sheet')
      msg('file is ready')
      document.getElementById('a').href = window.URL.createObjectURL(sht)
      document.getElementById('a').download = flName+'.sheet'
      document.getElementById('a').innerHTML = 'Download Sheet'

      msg('download now')
    })
  }
}
