// ==UserScript==
// @name         AutoFill
// @namespace    ygsbzr.zhihuishu
// @version      1.1
// @description  A password and account auto fill tool for zhi-hui-shu(I am Lazy XD)
// @author       ygsbzr
// @match        https://passport.zhihuishu.com/login*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        unsafeWindow
// @grant        GM_log
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// @updateURL    https://raw.githubusercontent.com/ygsbzr/Ygsbzr-Userscript/main/zhi-hui-shu/autofill.user.js
// @downloadURL  https://raw.githubusercontent.com/ygsbzr/Ygsbzr-Userscript/main/zhi-hui-shu/autofill.user.js
// @run-at document-end
// ==/UserScript==

(function () {
    'use strict';
    GM_registerMenuCommand("记录密码",Record,"h");
    addPassword();
})();
function addPassword() {
    var phoneinput=document.getElementById("lUsername");
    phoneinput.value=GM_getValue("phone","");
    var passwordinput=document.getElementById("lPassword");
    passwordinput.value=GM_getValue("password","");
    if(GM_getValue("password","")!=""){
     document.getElementsByClassName("wall-sub-btn")[0].click();
    }
}
/*function addRecord(){
    var rbutton=document.createElement("button");
    rbutton.textContent="记录手机号密码";
    rbutton.style.width="120px";
    rbutton.style.height="100px";
    rbutton.style.textAlign="center";
    rbutton.style.background="#b46300"
    rbutton.style.color="black";
    rbutton.addEventListener("click",Record);
    document.querySelector("div#bottomDiv").appendChild(rbutton);

}*/
function Record(){
    var phoneinput=document.getElementById("lUsername");
    GM_setValue("phone",phoneinput.value);
    var passwordinput=document.getElementById("lPassword");
    GM_setValue("password",passwordinput.value);
    alert("保存成功")
}