function sendingFont() {
  var font_link = document.getElementById("font_link").value;
  var font_name = document.getElementById("font_name").value;

  var bodyFont = document.getElementById("bodyID");

  // Sending Font Link to under <head>
  document.getElementById("head").innerHTML = font_link;

  // Ammending <body> style with #font_name
  bodyFont.setAttribute("style", `${font_name}`);
}
