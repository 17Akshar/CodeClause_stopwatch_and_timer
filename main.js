function Mode(n){
  var stop = document.querySelector(".change_stop")
  var time = document.querySelector(".change_time")
  var time_body = document.getElementById("timer")
  var stop_body = document.getElementById("stopwatch")
  var navbar = document.getElementById("navbar")
  if(n==1){
    stop.classList.add("highlight")
    stop.classList.remove("dimlight")
    time.classList.add("dimlight")
    time.classList.remove("highlight")
    stop_body.style.marginLeft = "0%"
    navbar.style.backgroundColor = "#080827"
    stop.style.color = "#9e63f5"
    time.style.color = "#452d7b"
  }
  else{
    stop.classList.remove("highlight")
    stop.classList.add("dimlight")
    time.classList.add("highlight")
    time.classList.remove("dimlight")
    stop_body.style.marginLeft = "-100%"
    navbar.style.backgroundColor = "#35D74D"
    stop.style.color = "#3e7922"
    time.style.color = "#1d4509"
    btn_reset();
  }
}
var tens = 0;
var second = 0;
var min = 0;
var hour = 0;
var hr_ele = document.getElementById("hr")
var min_ele = document.getElementById("mins")
var sec_ele = document.getElementById("secs")
var interval;

function Start(){
  second++;
  if(second<=9){
    sec_ele.innerHTML = "0"+second;
  }
  else{
    sec_ele.innerHTML = second
  }
  if(second>=60){
    second = 0;
    min++;
    if(min<=9){
      min_ele.innerHTML = "0"+min;
    }
    else{
      min_ele.innerHTML = min;
    }
  }
  if(min>=60){
    min = 0;
    hour++;
    if(hour<=9){
      hr_ele.innerHTML = "0"+hour
    }
    else{
      hr_ele.innerHTML = hour

    }
  }


}
function btn_start(){
  clearInterval(interval)
  interval = setInterval(Start,1000)
}
function btn_stop(){
  clearInterval(interval)

}
function btn_reset(){
  clearInterval(interval);
  second = 0;
  hour = 0;
  min = 0
  hr_ele.innerHTML = "00"
  min_ele.innerHTML = "00"
  sec_ele.innerHTML = "00"
}
function animate(){
  var sec = document.getElementsByClassName(".out")
  sec.classList.add("animate__animated")
  sec.classList.add("animate__fadeIn")
  // sec.style.ani = "bounce"

}


var time;
var ttime;
function SetTimer(){
   time = document.getElementById("in_value").value;
  if(time==0||time==""){
    alert("VALUE CANNOT BE ZERO! AGAIN ENTER THE VALUE")

  }else{
    ttime=time*60;
    tsec = time*60;
    timer_sec.innerHTML = tsec;
    timer_interval = setInterval(runTimer,1000);
    
  }
  
}
var timer_sec = document.getElementById("timer_sec");
var time_percentage;
var bar = document.getElementById("bar")
function runTimer(){
  
  if(tsec==0){
    alert("TIMES UP!")
    clearInterval(timer_interval);
    tsec=0;
    bar.style.width = "100%"
  }
  else{
    tsec--;
    timer_sec.innerHTML = tsec;

    // if(tsec==0){
    //   clearInterval(timer_interval)
    //   tsec==0;
    // }
    time_percentage = (tsec/ttime)*100;
    console.log(time_percentage)
    bar.style.width = `${time_percentage}`+"%"
  }
  
}

function timer_reset(){
  clearInterval(timer_interval)
  tsec=0;
  timer_sec.innerHTML = "00";
  document.getElementById("in_value").innerHTML = "0";
  bar.style.width = "100%"
}