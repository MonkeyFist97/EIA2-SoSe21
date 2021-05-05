"use strict";
var myCanvas;
(function (myCanvas) {
    window.addEventListener("load", handleLoad);
    let canvas;
    let crc2;
    function handleLoad(_event) {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d"); //warum 2D?
        canvas.width = window.innerWidth; //canvas Breite = Breite der "Leinwand" 
        canvas.height = window.innerHeight; //canvas Höhe = Höhe der "Leinwand"
        // //Rechteck Grün
        // crc2.fillStyle = "green";
        // crc2.fillRect(30, 30, 100, 100);
        // //Rechteck Blau
        // crc2.fillStyle = "blue";
        // crc2.fillRect(100, 100, 100, 100);
        // //Rechteck Red
        // crc2.fillStyle = "red";
        // crc2.fillRect(170, 170, 100, 100);
        let color = ["blue", "green", "magenta", "yellow", "orange"];
        //Dreiecke        
        for (let i = 0; i < color.length; i++)
            for (let x = 0; x < 100; x++) {
                let x = Math.floor(Math.random() * Math.floor(canvas.width));
                let y = Math.floor(Math.random() * Math.floor(canvas.height));
                let z = Math.floor(Math.random() * Math.floor(canvas.width));
                let a = Math.floor(Math.random() * Math.floor(canvas.height));
                let b = Math.floor(Math.random() * Math.floor(canvas.width));
                let c = Math.floor(Math.random() * Math.floor(canvas.height));
                crc2.beginPath();
                crc2.strokeStyle = color[i];
                crc2.moveTo(z, a);
                crc2.lineTo(x, y);
                crc2.lineTo(b, c);
                crc2.closePath();
                crc2.stroke();
                console.log(color[i]);
            }
        //Dicker Kreis in der Mitte 
        for (let t = 0; t < 2; t++) {
            for (let i = 0; i < color.length; i++) {
                let x = Math.floor(Math.random() * Math.floor(canvas.width));
                let y = Math.floor(Math.random() * Math.floor(canvas.height));
                crc2.beginPath();
                crc2.arc(x, y, 100, 0, 2 * Math.PI, false);
                crc2.fillStyle = color[i];
                crc2.fill();
                crc2.closePath();
                crc2.stroke();
            }
        }
    }
})(myCanvas || (myCanvas = {}));
//# sourceMappingURL=myBrush.js.map