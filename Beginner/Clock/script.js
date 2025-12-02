document.addEventListener("DOMContentLoaded", function() {

    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');
    const addButtons = document.getElementById('specificOptions');
    let stopwatchInterval;
    let timerInterval;
    let sec = 0;
    let min = 0;
    let hour = 0;
    let clockInterval = null;

    function updateClock() {
        var time = new Date();    
        hours.textContent = String(time.getHours()).padStart(2, '0');
        minutes.textContent = String(time.getMinutes()).padStart(2, '0');
        seconds.textContent = String(time.getSeconds()).padStart(2, '0');
    }

    function showCLock(){
        addButtons.innerHTML = '';
        clearInterval(clockInterval);
        updateClock();
        clockInterval = setInterval(updateClock, 1000);

    }

    function stopClock(){
        clearInterval(clockInterval);
        hours.textContent = String(hour).padStart(2, '0');
        minutes.textContent = String(min).padStart(2, '0');
        seconds.textContent = String(sec).padStart(2, '0');

        const addBtn = document.createElement('button');
        addBtn.id = "startStopbtn";
        addBtn.textContent = "Start";
        addButtons.appendChild(addBtn);

        const stopBtn = document.createElement('button');
        stopBtn.id = "stopStopbtn";
        stopBtn.textContent = "Stop";
        addButtons.appendChild(stopBtn);

        const clearStopbtn = document.createElement('button');
        clearStopbtn.id = "clearStopbtn";
        clearStopbtn.textContent = "Clear";
        addButtons.appendChild(clearStopbtn);
    }

    function showStopwatch(){
        addButtons.innerHTML = '';
       stopClock()

        document.getElementById("startStopbtn").addEventListener('click', startStopwatch)
        document.getElementById("stopStopbtn").addEventListener('click', function(){clearInterval(stopwatchInterval);})
        document.getElementById("clearStopbtn").addEventListener('click', function(){
            clearInterval(stopwatchInterval);
            sec = -1;
            min = 0;
            hour = 0;
            stopControl();
        });

    }

    function stopControl(){
        sec++;
        if (sec == 60){
            min++;
            sec = 0;
        }
        if(min == 60){
            hour++;
            min = 0;
        }
        seconds.textContent = String(sec).padStart(2, '0');
        minutes.textContent = String(min).padStart(2, '0');
        hours.textContent = String(hour).padStart(2, '0');
    }

    function startStopwatch() {
        stopwatchInterval = setInterval(stopControl, 1000);
    }


    function showTimer(){
        addButtons.innerHTML = '';
        stopClock()

        const addTenSec = document.createElement('button')
        addTenSec.id = 'addTenSec';
        addTenSec.textContent = "+10s";
        addButtons.appendChild(addTenSec);

        const addTenMin = document.createElement('button');
        addTenMin.id = 'addTenMin';
        addTenMin.textContent = '+10m'
        addButtons.appendChild(addTenMin);

        const addThirtyMin = document.createElement('button');
        addThirtyMin.id = 'addThirtyMin';
        addThirtyMin.textContent = '+30m'
        addButtons.appendChild(addThirtyMin);

        document.getElementById("startStopbtn").addEventListener('click', startTimer)
        document.getElementById("stopStopbtn").addEventListener('click', function(){clearInterval(timerInterval);})
        document.getElementById("clearStopbtn").addEventListener('click', function(){
            clearInterval(timerInterval);
            sec = 1;
            min = 0;
            hour = 0;
            timerControl();
        });

        document.getElementById('addTenSec').addEventListener('click', function(){
            sec+=10;
            if (sec>=60){
                sec = sec%60;
                min ++;
                minutes.textContent = String(min).padStart(2, '0');
            } 
            seconds.textContent = String(sec).padStart(2, '0');

        });
        document.getElementById('addTenMin').addEventListener('click', function(){
            min+=10;
            if(min >= 60){
                min = min%60;
                hour++;
                hours.textContent = String(hour).padStart(2, '0');
            } 
            minutes.textContent = String(min).padStart(2, '0');
        });
        document.getElementById('addThirtyMin').addEventListener('click', function(){
            min+=30;
            if(min >= 60){
                min = min%60;
                hour++;
                hours.textContent = String(hour).padStart(2, '0');
            }  
            minutes.textContent = String(min).padStart(2, '0');
        });
    }

    function timerControl(){
        sec--;
        if (sec < 0) {
            if (min > 0) {
                min--;
                sec = 59;
            } else if (hour > 0) {
                hour--;
                min = 59;
                sec = 59;
            } else {
                clearInterval(timerInterval);
                sec = 0;
                min = 0;
                hour = 0;
            }
        }
        seconds.textContent = String(sec).padStart(2, '0');
        minutes.textContent = String(min).padStart(2, '0');
        hours.textContent = String(hour).padStart(2, '0');
    }

    function startTimer(){
        timerInterval = setInterval(timerControl, 1000);
    }

    document.getElementById("clock").addEventListener('click', showCLock);
    document.getElementById("stopwatch").addEventListener('click', showStopwatch);
    document.getElementById("timer").addEventListener('click', showTimer);

    showCLock();
});