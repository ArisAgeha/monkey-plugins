// ==UserScript==
// @name         live2D看板娘 / kanban musume
// @namespace    Aris
// @version      0.5
// @description  看板娘代码重构中(｀・ω・´)
// @author       Aris Ageha
// @supportURL   https://github.com/ArisAgeha
// @include      *://*
// @grant        none
// @run-at       document-start
// @require      http://code.jquery.com/jquery-3.3.1.js
// ==/UserScript==

if(self === top){
    linkAssets();
    clock(0);
}

function linkAssets() {
    $("<link>").attr({ href: "https://raw.githack.com/ArisAgeha/live2d/master/waifu.css", rel: "stylesheet", type: "text/css" }).appendTo('head');
    $('body').eq(0).append('<div class="waifu"><div class="waifu-tips"></div><canvas id="live2d" width="280" height="250" class="live2d"></canvas><div class="waifu-tool"><span class="fui-home"></span> <span class="fui-chat"></span> <span class="fui-eye"></span> <span class="fui-user"></span> <span class="fui-photo"></span> <span class="fui-info-circle"></span> <span class="fui-cross"></span></div></div>');
    $('body').eq(0).append($('<script src="https://raw.githack.com/ArisAgeha/live2d/master/live2d.js"></script>'));
    $('body').eq(0).append($('<script src="https://raw.githack.com/ArisAgeha/live2d/master/waifu-tips2.js"></script>'));
}

function clock(count) {
    try{
        initModel('https://raw.githack.com/ArisAgeha/live2d/master/');
        console.log('init success');
        return;
    } catch(e) {
        console.error('init fail!!!');
        count++;
        if (count % 3 === 0) {
            linkAssets();
            console.warn('try to link assets again');
        }
        setTimeout(function(){
            clock(count);
        }, 500);
    }
}