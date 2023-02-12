
function clock(){

    var hours = document.getElementById("H-value");
    var minutes = document.getElementById("M-value");
    var seconds = document.getElementById("S-value");
    var dayNight = document.getElementById("AM-PM-text");

    var time = new Date();

    var h = ("0" + time.getHours()).slice(-2);
    var m = ("0" + time.getMinutes()).slice(-2);
    var s = ("0" + time.getSeconds()).slice(-2);

    hours.innerHTML = h;
    //console.log(hours.innerHTML);
    minutes.innerHTML = m;
    //console.log(minutes.innerHTML);
    seconds.innerHTML = s;
    //console.log(seconds.innerHTML)

    if((time.getHours()) < 12)
    {
        dayNight.innerHTML = "AM";
    }
    else{
        dayNight.innerHTML = "PM";
    }
}

setInterval(clock,1000);