let time = 60;
let timer;

const display = document.getElementById('time');

function start(){
  clearInterval(timer);
  timer = setInterval(()=>{
    if(time <= 0){
      clearInterval(timer);
      alert('Session expired');
    }else{
      time--;
      display.innerText = time;
    }
  }, 1000);
}

function reset(){
  time = 60;
  display.innerText = time;
  start();
}

start();
