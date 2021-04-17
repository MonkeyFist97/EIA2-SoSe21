"use strict";
var Inspector;
(function (Inspector) {
    console.log("Start");
    let myBody = document.querySelector("body");
    let div0 = document.getElementById("lefty");
    let div1 = document.getElementById("righty");
    window.addEventListener("load", handleLoad); //brauch ich das obwohl defer ist?
    function handleLoad(_event) {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        myBody.addEventListener("click", logInfo);
        myBody.addEventListener("keyup", logInfo);
        div0.addEventListener("click", logInfo);
        div0.addEventListener("keyup", logInfo);
        div1.addEventListener("click", logInfo);
        div1.addEventListener("keyup", logInfo);
    }
    function setInfoBox(_event) {
        let x = _event.clientX;
        let y = _event.clientY;
        let spanner = document.querySelector("#spanner");
        spanner.style.left = x + "px";
        spanner.style.top = y + "px";
        spanner.style.display = "";
        spanner.innerHTML = "target:" + _event.target + "<br>" + "Mouse Position - left:" + x + "px; top:" + y + "px";
    }
    function logInfo(_event) {
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
    }
})(Inspector || (Inspector = {}));
//# sourceMappingURL=Inspector.js.map