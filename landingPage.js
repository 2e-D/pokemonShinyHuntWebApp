


let currentTime = new Date().getHours();
if (7 <= currentTime && currentTime < 18) {
    if (document.body) {
        document.body.className = "landingImageDay"
    }
} else {if (document.body) {
    document.body.className = "landingImageNight"
}}