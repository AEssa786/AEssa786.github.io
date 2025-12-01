document.addEventListener("DOMContentLoaded", function() {

    function updateClock() {
        var time = new Date();
        const hours = document.getElementById('hours');
        const minutes = document.getElementById('minutes');
        const seconds = document.getElementById('seconds');
        hours.textContent = String(time.getHours()).padStart(2, '0');
        minutes.textContent = String(time.getMinutes()).padStart(2, '0');
        seconds.textContent = String(time.getSeconds()).padStart(2, '0');
    }
    updateClock();
    setInterval(updateClock, 1000);

    function showCLock(){
        
    }

    const clockbtn = document.getElementById("clock");
    clockbtn.addEventListener('click', showCLock())

});