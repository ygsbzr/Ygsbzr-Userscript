// ==UserScript==
// @name         Remove ADV-Wanben
// @namespace    Ygsbzr
// @version      1.1
// @description  移除广告
// @author       Ygsbzr
// @match        https://m.xiaoshuowanben.com/*/*.html
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        unsafeWindow
// @run-at       document-end
// @updateURL    https://raw.githubusercontent.com/ygsbzr/Ygsbzr-Userscript/main/Novel/wanben.user.js
// @downloadURL  https://raw.githubusercontent.com/ygsbzr/Ygsbzr-Userscript/main/Novel/wanben.user.js
// ==/UserScript==
var id;
(function () {
    id = setInterval(function(){ RemoveADS() }, 1000);
})();
function RemoveADS(){
    var adva=document.querySelectorAll("a");
    adva.forEach(function(node){
        if(!node.getAttribute("href").endsWith("html")){
            node.remove();
        }
    });
    var advsib=document.querySelector("div[id=contentbox]");
    advsib.nextElementSibling.nextElementSibling.remove();
    clearInterval(id)
}
