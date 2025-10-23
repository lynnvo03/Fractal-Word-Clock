console.log("hello lynn");

document.addEventListener("DOMContentLoaded", handlePageLoaded);

function handlePageLoaded() {

    setInterval(handleClockInterval, 1000);
    drawClockFace();
    drawClockFace(new Date()); 
    window.addEventListener("mousemove", handleMouseMove);

    setInterval(() => drawClockFace(new Date()), 60000);
}

function handleClockInterval() {
    drawClockFace();
}

/* function handleMouseMove(event) {
    let hours = Math.floor(event.pageX / window.innerWidth * 24);
    let minutes = Math.floor(event.pageY / window.innerHeight * 60); */

/*     var date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);

    drawClockFace(date);
} */

function drawClockFace(date) {
    if(null == date) {
        date = new Date();
    }

    resetClockFace();

    lightUpLettersFor(".wordItIs");
    
    var currentHours = date.getHours();
    var minutes = date.getMinutes();
    
    var displayHour = currentHours;
    

    if (minutes === 0) {
        if (currentHours !== 0 && currentHours !== 12) {
            lightUpLettersFor(".wordOClock");
        }
    } else if (minutes >= 1 && minutes <= 19) {
        lightUpMinuteWord(minutes);
    } else if (minutes >= 20 && minutes <= 59) {
        let tensDigit = Math.floor(minutes / 10) * 10;
        let onesDigit = minutes % 10;

        lightUpLettersFor(".wordMinutes" + tensDigit);

        if (onesDigit > 0) {
            let onesWord;
            switch (onesDigit) {
                case 1: onesWord = "One"; break;
                case 2: onesWord = "Two"; break;
                case 3: onesWord = "Three"; break;
                case 4: onesWord = "Four"; break;
                case 5: onesWord = "Five"; break;
                case 6: onesWord = "Six"; break;
                case 7: onesWord = "Seven"; break;
                case 8: onesWord = "Eight"; break;
                case 9: onesWord = "Nine"; break;
            }
            lightUpLettersFor(".word" + onesWord); 
        }
    }

    if (minutes >= 55) { 
        displayHour = addOneToHours(displayHour);
    }

    var wordHour = displayHour % 12; 

    if (wordHour === 0) {
        wordHour = 12;
    }

  if (minutes !== 0 || (currentHours !== 0 && currentHours !== 12)) {
        lightUpLettersFor(".wordHours" + wordHour); 
    }
    
    if (currentHours === 0) {
        if (minutes === 0) {
            
            lightUpLettersFor(".wordMidnight");
        } else {
            
            lightUpLettersFor(".wordInThe");
            lightUpLettersFor(".wordMorn");
            lightUpLettersFor(".wordIng");
        }
        
    } else if (currentHours >= 1 && currentHours <= 11) { 
    
        lightUpLettersFor(".wordInThe");
        lightUpLettersFor(".wordMorn");
        lightUpLettersFor(".wordIng");
        
    } else if (currentHours === 12) { 
        if (minutes === 0) {
            
            lightUpLettersFor(".wordNoon");
        } else {
            
            lightUpLettersFor(".wordInThe");
            lightUpLettersFor(".wordAfter"); 
            lightUpLettersFor(".wordNoon");
        }
        
    } else if (currentHours >= 13 && currentHours <= 16) { 
        
        lightUpLettersFor(".wordInThe");
        lightUpLettersFor(".wordAfter");
        lightUpLettersFor(".wordNoon");
        
    } else if (currentHours >= 17 && currentHours <= 23) { 
       
        lightUpLettersFor(".wordInThe");
        lightUpLettersFor(".wordEven");
        lightUpLettersFor(".wordIng");
    }
}


function lightUpMinuteWord(minutes) {

    lightUpLettersFor(".wordMinutes" + minutes);


    if (minutes >= 13 && minutes <= 19) {
        lightUpLettersFor(".wordTeen");
    }
}

function resetClockFace() {
    document.querySelectorAll(".letter").forEach(function(item){
        item.classList.remove("letterOn");
    });
}

function lightUpLettersFor(className) {
    document.querySelectorAll(className).forEach(function(item) {
        item.classList.add("letterOn");
    })
}

function addOneToHours (hours) {
    if(hours < 23) {
        hours ++;
    } else {
        hours = 0
    }
    return hours;
}
