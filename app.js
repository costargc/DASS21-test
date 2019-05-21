
time = 30;
$("#timer").text(timeConverter(time));
setInterval(count, 1000);

function count() {
    if (time > 0) {
        time--;
        var converted = timeConverter(time);
        console.log(converted);
        $("#timer").text(converted);
    }
    else {
        return false;
    }
}


function timeConverter(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes === 0) {
        minutes = "00";
    }
    else if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
}