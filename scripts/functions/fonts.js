function connectFont(name, url) {
  app.css(`
    @font-face {
      src: url("${url}");
      font-family: ${name};
    }
  `);
}
