// ==UserScript==
// @name         DownLoadAll
// @namespace    ygsbzr.TronClass
// @version      0.1
// @description  A simple download something like ppt more convenient
// @author       ygsbzr
// @match        http://courses.cuc.edu.cn/course/*/courseware
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        unsafeWindow
// @grant        GM_log
// @grant        GM_download
// @require      https://raw.githubusercontent.com/lihengdao666/Modify-Tampermonkey-Libs/master/filesaver.js
// ==/UserScript==

(function () {
    'use strict';
    var button=document.createElement("button");
    button.textContent="下载全部";
    button.style.width="50px";
    button.style.height="25px";
    setTimeout(function(){
        button.addEventListener('click',DownloadAll)
    document.querySelector("div.column-header").appendChild(button);
    },1000)
    
})();
var len=-1;
var AllNodes;
var t1;
function DownloadAll(){
    AllNodes=document.querySelectorAll("a[original-title='下载']");
    t1=window.setInterval(saveIt,2000);
}
function saveIt(){
    len++;
    saveAs(AllNodes[len].getAttribute("href"));
    if(AllNodes.length==len){
        clearInterval(t1);
    }
}
