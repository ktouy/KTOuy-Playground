//history
function back() {
  window.history.back();
},
function delante() {
  window.history.forward();
}

var int = setInterval(back, 1000);
setTimeout(back, 1000);
clearInterval(int);

