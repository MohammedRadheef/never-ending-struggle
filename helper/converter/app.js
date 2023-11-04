document.getElementById("sh").onchange = () => {
  var file = document.getElementById("sh").files[0];
  file.text().then(function (txt) {
    document.getElementById("img").src = "data:image/png;base64" + txt;
  });
};

document.getElementById("url").onchange = () => {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", document.getElementById("url").value);
  xhr.addEventListener("readystatechange", function (e) {
    if (xhr.readyState == xhr.DONE) {
      document.getElementById("img").src =
        "data:image/png;base64" + xhr.response;
    }
  });
  xhr.send(null);
};
