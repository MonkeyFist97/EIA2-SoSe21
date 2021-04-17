namespace Inspector {
    console.log("Start");
    let myBody: HTMLBodyElement = <HTMLBodyElement>document.querySelector("body");
    let div0: HTMLDivElement = <HTMLDivElement>document.getElementById("lefty");
    let div1: HTMLDivElement = <HTMLDivElement>document.getElementById("righty");
    window.addEventListener("load", handleLoad); //brauch ich das obwohl defer ist?

    function handleLoad(_event: Event): void {
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

    function setInfoBox(_event: MouseEvent): void {
        let x: number = _event.clientX;
        let y: number = _event.clientY;
        let spanner: HTMLSpanElement = <HTMLSpanElement>document.querySelector(".spanner");
        spanner.style.left = (x + 20) + "px";
        spanner.style.top = (y + 20) + "px";
        // spanner.style.display = "";
        let targetDOM: EventTarget = <EventTarget>_event.target;
        spanner.innerHTML = "target:" + targetDOM + "<br>" + "Mouse Position - left:" + x + "px; top:" + y + "px";
    }

    function logInfo(_event: Event): void {
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event.composedPath());
    }
}