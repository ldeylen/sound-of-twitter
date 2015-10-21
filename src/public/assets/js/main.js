"use strict";

var options = {
    server: "http://127.0.0.1",
    port: "3000"
}


var soundOfTwitter = new App(options);

document.addEventListener("DOMContentLoaded", function() {
    soundOfTwitter.init();
});

