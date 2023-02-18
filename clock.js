
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


function Makediv(){
    var t_container = document.createElement('div');
    t_container.id = "DynamicBlock1";
    t_container.className = "time-message-content";

    var m_container = document.createElement('div');
    m_container.id = "DynamicBlock2";
    m_container.className = "time-message-content";

    var Block2 = document.createElement('div');
    Block2.id = "Block2-message";
    Block2.className = "time-message-content";

    var Block1 = document.createElement('div');
    Block1.id = "Block1-message";
    Block1.className = "time-message-content";

    document.body.appendChild(t_container);
    document.body.appendChild(m_container);

    document.body.appendChild(Block2);
    document.body.appendChild(Block1);

    var morning_timings = document.getElementById('MorningTimeSelector');
    var m_val = morning_timings.options[morning_timings.selectedIndex].text;

    var afternoon_timings = document.getElementById('AfternoonTimeSelector');
    var a_val = afternoon_timings.options[afternoon_timings.selectedIndex].text;

    var evening_timings = document.getElementById('EveningTimeSelector');
    var e_val = evening_timings.options[evening_timings.selectedIndex].text;

    var night_timings = document.getElementById('NightTimeSelector');
    var n_val = night_timings.options[night_timings.selectedIndex].text;

    document.getElementById("Block1-message").innerHTML = "Wake Up Time: " + m_val + "<br>Lunch Time: " + a_val + "<br>Nap Time: " + e_val + "<br>Night Time: " + n_val;

    var linkHourText = new Date().getHours();
    var m_link = document.getElementById('MorningTimeSelector').value;
    var a_link = document.getElementById('AfternoonTimeSelector').value;
    var e_link = document.getElementById('EveningTimeSelector').value;
    var n_link = document.getElementById('NightTimeSelector').value;

    if(linkHourText == m_link){
        document.getElementById("Block2-message").innerHTML = "Good Morning!!";
    }
    else if(linkHourText == a_link){
        document.getElementById("Block2-message").innerHTML = "Good Afternoon!!";
    }
    else if(linkHourText == e_link){
        document.getElementById("Block2-message").innerHTML = "Good Evening!!";
    }
    else if(linkHourText == n_link){
        document.getElementById("Block2-message").innerHTML = "Good Night!!";
    }
    else{
        document.getElementById("Block2-message").innerHTML = "Good Time!!"
    }
    
}

function setAlarm(){
    var m = document.getElementById('MorningTimeSelector').value;
    var clockHour = new Date().getHours();

    if(m == clockHour) {

        document.getElementById('timer-picture').style.backgroundImage="url(./assets/morning.png)";
        document.getElementById('quotes').innerHTML = "Grab Some Healthy BreakFast!!!";
    }

    var a = document.getElementById('AfternoonTimeSelector').value;
    
    if(a == clockHour) {

        document.getElementById('timer-picture').style.backgroundImage="url(./assets/afternoon.png)";
        document.getElementById('quotes').innerHTML = "Let's Have A Sumptuous Lunch!!!";
    }

    var e = document.getElementById('EveningTimeSelector').value;
    
    if(e == clockHour) {

        document.getElementById('timer-picture').style.backgroundImage="url(./assets/evening/evening.png)";
        document.getElementById('quotes').innerHTML = "Let's Freshen Up And Get Tea!!!";
    }

    var n = document.getElementById('NightTimeSelector').value;
    
    if(n == clockHour) {

        document.getElementById('timer-picture').style.backgroundImage="url(./assets/night/night.png)";
        document.getElementById('quotes').innerHTML = "Let's Get Some Nice Dinner!!!";
    }

    Makediv();

}