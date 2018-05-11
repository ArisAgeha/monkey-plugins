// ==UserScript==
// @name         live2d
// @namespace    Aris
// @version      0.3
// @description  try to take over the world!
// @author       Aris Ageha
// @supportURL   https://github.com/ArisAgeha
// @include      *
// @grant        none
// @run-at       document-start
// @require       http://code.jquery.com/jquery-3.3.1.js
// ==/UserScript==

$("<link>").attr({ href: "https://raw.githack.com/ArisAgeha/live2d/master/waifu.css", rel: "stylesheet", type: "text/css" }).appendTo('head');
$('body').append('<div class="waifu"><div class="waifu-tips"></div><canvas id="live2d" width="280" height="250" class="live2d"></canvas><div class="waifu-tool"><span class="fui-home"></span> <span class="fui-chat"></span> <span class="fui-eye"></span> <span class="fui-user"></span> <span class="fui-photo"></span> <span class="fui-info-circle"></span> <span class="fui-cross"></span></div></div>');
$('body').append($('<script src="https://raw.githack.com/ArisAgeha/live2d/master/live2d.js"></script>'));
$('body').append($('<script src="https://raw.githack.com/ArisAgeha/live2d/master/waifu-tips.js"></script>'));

setTimeout(function(){
    initModel('https://raw.githack.com/ArisAgeha/live2d/master/');
}, 1000);