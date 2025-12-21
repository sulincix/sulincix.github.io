// Apple garbage blocker
function isApple() {
    return /iPhone/i.test(navigator.userAgent)
    || /Macintosh/i.test(navigator.userAgent)
    || /Mac OS X/i.test(navigator.userAgent)
    || /iPad/i.test(navigator.userAgent);
}

if(isApple()){
    document.body.innerHTML = "<h1 style='color:white;'>Apple Devices Are Not Allowed!</h1>"
    document.body.innerHTML += "<p style='color:white;'>Get a real device: use Android or GNU/Linux!</p>";
    throw new Error("Apple Detected!");
}

