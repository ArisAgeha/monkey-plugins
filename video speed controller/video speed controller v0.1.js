// ==UserScript==
// @name         Video Speed Controller
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       ArisAgeha
// @include      *://*
// @require      https://code.jquery.com/jquery-3.3.1.js
// @supportURL   https://github.com/ArisAgeha
// ==/UserScript==

(function() {
    document.onkeypress = function(e) {
        let video = document.getElementsByTagName('video');
        if (e.charCode === 46){
            for (let i of video) {
                i.playbackRate += 0.1;
            }
        } else if (e.charCode === 44) {
            for (let i of video) {
                i.playbackRate -= 0.1;
            }
        } else if (e.charCode === 47) {
            for (let i of video) {
                i.playbackRate = 1;
            }
        }
        console.log(video[0].playbackRate);
    };
})();