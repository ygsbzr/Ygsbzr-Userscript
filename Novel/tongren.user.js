// ==UserScript==
// @name         Remove ADV
// @namespace    Ygsbzr
// @version      1.0
// @description  移除广告
// @author       Ygsbzr
// @match        https://trxs.cc/tongren/*/*.html
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        unsafeWindow
// @run-at       document-end
// @updateURL    https://raw.githubusercontent.com/ygsbzr/Ygsbzr-Userscript/main/Novel/tongren.user.js
// @downloadURL  https://raw.githubusercontent.com/ygsbzr/Ygsbzr-Userscript/main/Novel/tongren.user.js
// ==/UserScript==

(function () {
    'use strict';
    RemoveADS();
})();
function RemoveADS(){
    var advscipt=document.querySelector("body > script:nth-child(5)");
    advscipt.parentElement.removeChild(advscipt);
    var advdiv=document.querySelector("iframe");
    advdiv.previousElementSibling
    advdiv.parentElement.removeChild(advdiv);
}