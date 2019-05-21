// start test
question=0;
$("#start").on("click", function () {
    // $("#initialScreen").css("display: 'none'");
    document.getElementById("initialScreen").style.display = "none";
    document.getElementById("question"+question).style.display = "flex";
    question++;
    time = 30;
    $("#timer").text(timeConverter(time));
    
    myclock = setInterval(function () {
    
        count();
        if (time == 0) {
            clearInterval(myclock);
            document.getElementById('r0').click();
        }
    
    }, 1000);
});
// start test - end

$("#r0").on("click", function () {
    console.log("r0",question)
    question++;
});
$("#r1").on("click", function () {
    console.log("r1",question)
    question++;
});
$("#r2").on("click", function () {
    console.log("r2",question)
    question++;
});
$("#r3").on("click", function () {
    console.log("r3",question)
    question++;
});




function count() {
    if (time > 0) {
        time--;
        var converted = timeConverter(time);
        // console.log(converted);
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