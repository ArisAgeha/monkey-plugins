// ==UserScript==
// @name         Baidu Beautify
// @namespace    Aris
// @version      0.51
// @description  你的百度太丑了
// @author       Ageha
// @supportURL   https://github.com/ArisAgeha
// @compatible   chrome
// @match        *://www.baidu.com/*
// @match        *://www.baidu.com/?*
// @run-at       document-start
// @grant        none
//@require       http://code.jquery.com/jquery-3.3.1.js

// ==/UserScript==

window.onload = function() {
    indexSettings();
    resultPageSettings();
};

function indexSettings() {
    addBackgroundPic(6);
    removeContent();
    replaceSearchButton();
    changeColor();
    removeDecoration();
    replaceCursor();
    changeTitle();
    searchBarPositionFixed();
    beautifyChannalWindow();
}

function resultPageSettings(){
    searchBarPositionFixForResPage();
    removeLogo();
    containerBeautify();
}

/*----index page----*/

function addBackgroundPic(picNum) {
    let wrapper = $('<section class="bg-pic"></section>');
    let slideShow = $('<ul class="slideShow"></ul>');
    let pics = [];
    for (let i = 0; i < picNum; i++) {
        pics.push(i);
    }

    for (let i = 0; i < picNum; i++) {
        let li = $('<li></li>');
        let picCode = pics.splice(Math.floor(Math.random()) * picNum.length, 1);
        li.append($(`<span class='pic${i+1}' style='background-image: url("https://coding.net/u/ArisAgeha/p/whosyourdaddy/git/raw/master/${picCode}.jpg");'></span>`));
        slideShow.append(li);
    }
    wrapper.append(slideShow);
    $('body').append(wrapper);
    $('head').append($('<style>body {width: auto;height: 100vh;margin: 0;} .bg-pic {display: block;position: fixed; top: 0vh; z-index: -1;}.bg-pic .slideShow{position: fixed;height: 100vh;width: 100vw;margin: 0;padding: 0; z-index:-1}.bg-pic .slideShow li{list-style-type: none;height: 100%;width: 100%;display: list-item;}.bg-pic .slideShow li span{height: 100%;width: 100%;display: inline-block;position: absolute;top: 0px;left: 0px;background-size: cover;background-position: 50% 50%;opacity: 0;z-index: -2;animation: imageAnimation 36s linear infinite 0s;box-sizing: border-box;text-align: -webkit-match-parent;display: list-item;}.bg-pic .slideShow .pic1 span{animation-delay: 0s;}.bg-pic .slideShow .pic2 {animation-delay: 6s;} .bg-pic .slideShow .pic3 {animation-delay: 12s;}.bg-pic .slideShow .pic4 {animation-delay: 18s;}.bg-pic .slideShow .pic5 {animation-delay: 24s;}.bg-pic .slideShow .pic6 {animation-delay: 30s;} @keyframes imageAnimation {0% {opacity: 0;animation-timing-function: ease-in;}8% {opacity: 1;transform: scale(1.05);animation-timing-function: ease-out;}17% {opacity: 1;transform: scale(1.1) rotate(0deg);}25% {opacity: 0;transform: scale(1.1) rotate(0deg);}100% {opacity: 0}} .s-top-wrap .s-center-box{background-color: rgba(255, 255, 255, 0.8);box-shadow: 1px 2px 2px rgba(0,0,0,0.4);}</style>'));
}

function removeContent() {
    $('#lg, .s-bottom-ctner').remove(); // 百度LOGO、底部信息
    $('.s-isindex-wrap>a:contains("新闻"), .s-isindex-wrap>a:contains("hao123"), .s-isindex-wrap>a:contains("视频"), .s-isindex-wrap>a:contains("地图"), .s-isindex-wrap>a:contains("学术")').remove();
}

function replaceCursor() {
    $('head').append($('<style>body, .s-center-box, .s_form_wrapper, .s-top-wrap {cursor: url(https://coding.net/u/ArisAgeha/p/whosyourdaddy/git/raw/master/Cursor.cur), url(https://coding.net/u/ArisAgeha/p/whosyourdaddy/git/raw/master/Cursor.cur), auto;}</style>'));
    $('#su, #su span').css({ "cursor": "url(https://coding.net/u/ArisAgeha/p/whosyourdaddy/git/raw/master/pen.cur), url(https://coding.net/u/ArisAgeha/p/whosyourdaddy/git/raw/master/pen.cur), auto" });
}

function replaceSearchButton() {
    let newButton = $('<button class="btn self-btn bg s_btn" id="su""></button>');
    let span = $('<span style="display: inline-block; background-image: url(https://github.com/ArisAgeha/Pic/blob/master/search.png?raw=true); height: 30px; width: 30px; background-size: 100% 100%; background-repeat: no-repeat"></span>');
    newButton.append(span);
    $(newButton).replaceAll('#su');
}

function changeColor() {
    $('#su').css({ "background-color": "rgba(224, 65, 255, 0.6)", "border-buttom": "rgba(224, 65, 255, 0.6)", "display": "flex", "align-items": "center", "justify-content": "center" });
    $('#s_btn_wr').css({ "background-color": "transparent", "border": "1px solid rgba(224, 65, 255, 0.6)", "border-bottom": "1px solid rgba(224, 65, 255, 0.6)" });
    $('.s_bri').css({ "background-color": "rgba(224, 65, 255, 0.6)", "border-bottom": "1px solid rgba(224, 65, 255, 0.6)" });
    $('.bg.s_ipt_wr').css({ "opacity": "0.8" });
}

function removeDecoration() {
    $('.s-skin, .s-msg, .mnav, .user-name, .setting-text, .s-lite, a').css({ "text-decoration": "none" });
}

function changeTitle() {
    $('title').text('度娘一下');
}

function searchBarPositionFixed() {
    $('.fm').css({ "position": "absolute", "top": "45%" });
    if ($('#s_main').css("display") === 'none') {
        $('.fm').css({ "position": "absolute", "top": "85%" });
    }
    $('#s_menu_set').on('click', function(){
        console.log(2);
        setTimeout(()=>{
            $('#s_hide_allmods, #s_hide_allmods>*').on('click', function(){
                console.log(1);
                $('.fm').css({ "position": "absolute", "top": "85%" });
            });
        }, 500);
    });

}

function beautifyChannalWindow() {
    $('#s_mancard_main').css({"background-color":"rgba(230,238,232,0.5)", "box-shadow": "0px 0px 8px black"});
}

/*----result page----*/
function searchBarPositionFixForResPage() {
    if (window.location.href.startsWith('https://www.baidu.com/s?')){
        $('.fm').css({"top":"0"});
    }
}

function removeLogo() {
    $('#result_logo').remove();
}

function containerBeautify() {
    $('#container').css({"background-color":"rgba(255,255,255,0.8)", "box-shadow": "3px 5px 8px black"});
    $('#s_tab').css({"background-color":"rgba(255,255,255,0.95)", "box-shadow": "0px 0px 8px black"});
    $('#rs, #page > *').css({"background-color":"transparent"});
    $('.c-border').css({"background-color":"rgba(255,255,255,0.6)"});
}