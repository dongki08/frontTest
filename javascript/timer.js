let isStarted = false;

let number = () => {
  if (!isStarted) {
    //타이머가 작동중이 아닐때
    isStarted = true;
    document.getElementById('finish').disabled = false;
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, '0');
    document.getElementById('target').innerText = token;

    let time = 10;
    let timers;

    timers = setInterval(function () {
      if (time >= 0) {
        max = Math.floor(time / 60);
        min = String(time % 60).padStart(2, '0');
        document.getElementById('timer').innerText = max + ':' + min;
        time = time - 1;
      } else {
        document.getElementById('finish').disabled = true;
        isStarted = false;
        console.log('타이머 작동중');
        clearInterval(timers);
      }
    }, 1000);
  } else {
    //타이머가 작동중일때
  }
};
