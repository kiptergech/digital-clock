const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM/PM"

    if(h > 12) {
        h = h-12;
        ampm = "PM";
    }

    if(h < 10){
        h="0" + h;
    }

    if(m < 10 ) {
        m = "0" + m;
    }

    if(s < 10) {
        s = "0" + s; 
    }

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl, (innerText = ampm);
    setTimeout(()=>{
    updateClock()
},1000)
}


updateClock()