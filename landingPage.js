let currentTime = new Date().getHours();
if (document.body) {
    if (currentTime >= 6 && currentTime < 18) {
        document.body.className = "landingImageNight"
    }
    else if (currentTime >= 7 && currentTime < 20) {
        document.body.className = "landingImageDay"
    }
}