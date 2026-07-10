let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

let timer = null;

const hoursDisplay = document.getElementById("hours");
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const millisecondsDisplay = document.getElementById("milliseconds");

const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const lapBtn = document.getElementById("lap");

const lapList = document.getElementById("lapList");

startBtn.addEventListener("click", () => {
    if (timer !== null) return;
    timer = setInterval(updateTime, 10);
});

pauseBtn.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
});

resetBtn.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;

    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    updateDisplay();

    lapList.innerHTML = "";
});

lapBtn.addEventListener("click", () => {
    if (
        hours === 0 &&
        minutes === 0 &&
        seconds === 0 &&
        milliseconds === 0
    ) {
        return;
    }

    const lap = document.createElement("li");

    lap.textContent =
        `${formatTime(hours)} : ${formatTime(minutes)} : ${formatTime(seconds)} : ${formatTime(milliseconds)}`;

    lapList.prepend(lap);
});

function updateTime() {
    milliseconds++;

    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
    }

    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    updateDisplay();
}

function updateDisplay() {
    hoursDisplay.textContent = formatTime(hours);
    minutesDisplay.textContent = formatTime(minutes);
    secondsDisplay.textContent = formatTime(seconds);
    millisecondsDisplay.textContent = formatTime(milliseconds);
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}