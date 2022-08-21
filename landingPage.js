


let currentTime = new Date().getHours();
if (7 <= currentTime && currentTime < 18) {
    if (document.body) {
        document.body.className = "landingImageDay"
    }
} else {if (document.body) {
    document.body.className = "landingImageNight"
}}



let currentTime2 = new Date().getHours();
if ( 4 <= currentTime2 && currentTime2 < 12){
    document.getElementById('Greeting').innerHTML = 'Good Morning'
} else if (12 <= currentTime2 && currentTime2 < 17){
    document.getElementById('Greeting').innerHTML = 'Good Afternoon'
} else if (17 <= currentTime2 && currentTime2 < 4){ document.getElementById('Greeting').innerHTML = 'Good Evening'}