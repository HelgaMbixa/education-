// ==UserScript==
// @name         Bot for Yanex
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// @grant        none
// ==/UserScript==

let keywords = ['гобой', 'как звучит флейта', 'кларнет'];
let keyword = keywords[getRandom(0,keywords.length)];
let button = document.getElementsByClassName("button_theme_websearch")[0];
if(button != undefined){
    document.getElementById("text").value='гобой';
    document.getElementsByClassName("button_theme_websearch")[0].click();
}else{
    let links = document.links;

    for(let i=0; i<links.length; i++){
        if(links[i].href.indexOf("xn----7sbab5aqcbiddtdj1e1g.xn--p1ai") != -1){
            console.log("Ссылка найдена"+links[i]);
            links[i].click();
            break;
        }
    }
}
function getRandom(min, max){
    return Math.floor(Math.random()*(max-min)+min);
}
