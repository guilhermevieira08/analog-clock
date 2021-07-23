let digitalElement = document.querySelector('.digital');
let segElement = document.querySelector('.p_s');
let minElement = document.querySelector('.p_m');
let hourElement = document.querySelector('.p_h');

function updateClock() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`

    let segDeg = ((360 / 60) * second) - 90
    let minDeg = ((360 / 60) * minute) - 90
    let hourDeg = ((360 / 12) * hour) - 90

    segElement.style.transform = `rotate(${segDeg}deg)`
    minElement.style.transform = `rotate(${minDeg}deg)`
    hourElement.style.transform = `rotate(${hourDeg}deg)`
}


function fixZero(time) {
    return time < 10 ? '0'+time : time;
}

setInterval(updateClock, 1000);
updateClock()