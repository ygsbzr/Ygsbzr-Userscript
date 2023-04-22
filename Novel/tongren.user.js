// ==UserScript==
// @name         Remove ADV
// @namespace    Ygsbzr
// @version      0.1
// @description  移除广告
// @author       Ygsbzr
// @match        https://trxs.cc/tongren/*/*.html
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        unsafeWindow
// @updateURL    https://raw.githubusercontent.com/ygsbzr/Ygsbzr-Userscript/main/Novel/tongren.user.js
// @downloadURL  https://raw.githubusercontent.com/ygsbzr/Ygsbzr-Userscript/main/Novel/tongren.user.js
// ==/UserScript==

(function () {
    'use strict';
    
})();
function RemoveADS(){
    var iframe=document.getElementsByTagName("iframe");
    iframe[0].previousElementSibling.remove();

}