var audio = 3;
var contrast = 3;
var language = 1;
var highlight = 1;

$(document).ready(function () {

    document.getElementById('square1').style.opacity = 1.0;
    document.getElementById('square2').style.opacity = 1.0;
    document.getElementById('square3').style.opacity = 1.0;
    
    $("#logout").click(function () {
        window.open("/index.html", "_self");
    });

    $("#mainMode").click(function () {
        window.open("/mainMode.html", "_self");
    });

    $("#close").click(function(){
        window.open("/menu.html", "_self");
    });

    $("#rightAudio").click(function () {
        if (audio == 5) {

        } else {
            audio = audio + 1;
        }
        if (audio == 1) {
            document.getElementById('square1').style.opacity = 1.0;
        }
        if (audio == 2) {
            document.getElementById('square2').style.opacity = 1.0;
        }
        if (audio == 3) {
            document.getElementById('square3').style.opacity = 1.0;
        }
        if (audio == 4) {
            document.getElementById('square4').style.opacity = 1.0;
        }
        if (audio == 5) {
            document.getElementById('square5').style.opacity = 1.0;
        }
    });

    $("#leftAudio").click(function () {
        if (audio == 0) {

        } else {
            audio = audio - 1;
        }
        if (audio == 0) {
            document.getElementById('square1').style.opacity = 0.5;
        }
        if (audio == 1) {
            document.getElementById('square2').style.opacity = 0.5;
        }
        if (audio == 2) {
            document.getElementById('square3').style.opacity = 0.5;
        }
        if (audio == 3) {
            document.getElementById('square4').style.opacity = 0.5;
        }
        if (audio == 4) {
            document.getElementById('square5').style.opacity = 0.5;
        }
    });

    $("#secondLanguage").click(function () {
        if (language == 1) {
            language = 2;
            document.getElementById('language').innerText = 'Spanish';
            document.getElementById('secondLanguage').innerText = 'English';
        } else {
            language = 1;
            document.getElementById('language').innerText = 'English';
            document.getElementById('secondLanguage').innerText = 'Spanish';
        }
    });

    $("#leftHighlight").click(function () {
        if (highlight == 1) {
            highlight = 2;
            document.getElementById('statusHighlight').innerText = 'Runner Highlights';
            document.getElementById('soloShow').style.display = "none";
            document.getElementById('teamShow').style.display = "inline";
        } else {
            highlight = 1;
            document.getElementById('statusHighlight').innerText = 'Main Mode Highlights';
            document.getElementById('soloShow').style.display = "inline";
            document.getElementById('teamShow').style.display = "none";
        }
    });

    $("#rightHighlight").click(function () {
        if (highlight == 1) {
            highlight = 2;
            document.getElementById('statusHighlight').innerText = 'Runner Highlights';
            document.getElementById('soloShow').style.display = "none";
            document.getElementById('teamShow').style.display = "inline";
        } else {
            highlight = 1;
            document.getElementById('statusHighlight').innerText = 'Main Mode Highlights';
            document.getElementById('soloShow').style.display = "inline";
            document.getElementById('teamShow').style.display = "none";
        }
    });
});
