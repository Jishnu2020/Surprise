function start() {
var curtain = document.getElementById('curtain');
curtain.src = "tenor.gif";
setTimeout(function(){ curtain.src = "images.jfif"; }, 5000);
}