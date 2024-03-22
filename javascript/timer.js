let number = () => {
  const token = String(Math.floor(Math.random() * 1000000)).padStart(6, '0');
  document.getElementById('target').innerText = token;
};

let time = 5;
let time2 = 6;
setInterval(function () {
  if (time >= 0) {
    max = Math.floor(time / 60);
    min = String(time % 60).padStart(2, '0');
    document.getElementById('timer').innerText = max + ':' + min;
    time = time - 1;
  } else {
    document.getElementById('finish').disabled = true;
  }
}, 1000);
