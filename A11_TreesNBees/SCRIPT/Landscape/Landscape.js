"use strict";
//Inspired and Supported by Huu Thien Phan Ngoc - Made with Mariia Kolkutova, Mona Kabelka & Christina Däschner
var L09_Bees;
(function (L09_Bees) {
    window.addEventListener("load", handleLoad);
    let crc2;
    let golden = 0.62;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        let horizon = crc2.canvas.height * golden;
        let posMountains = { x: 0, y: horizon };
        drawBackground();
        drawSun({ x: (canvas.width / 10), y: (canvas.height / 15) });
        drawMountains(posMountains, 300, 200, "#747c8a", "white");
        drawMountains(posMountains, 200, 150, "#747c8a", "lightgrey");
        drawTree();
    }
    L09_Bees.handleLoad = handleLoad;
    // HORIZON
    function drawBackground() {
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "HSL(100, 80%, 30%)");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    L09_Bees.drawBackground = drawBackground;
    // SUN
    function drawSun(_position) {
        let r1 = 30;
        let r2 = 150;
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    L09_Bees.drawSun = drawSun;
    // MOUNTAINS
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        crc2.lineTo(x, 0);
        crc2.closePath();
        let gradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }
    L09_Bees.drawMountains = drawMountains;
    // TREES
    function drawTree() {
        let treeColor = ["#155c1c", "#1d6e25", "#217a2a"];
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        do {
            let y = (crc2.canvas.height * golden) + (38 + Math.random() * (50 - 20));
            crc2.save();
            crc2.translate(x, y);
            crc2.fillStyle = "#6e4242";
            crc2.fillRect(0, 0, 30, -50);
            crc2.scale(0.9, 0.9);
            let a = 0;
            let b = 0;
            let c = 0;
            for (let x = 0; x <= 2; x++) {
                crc2.beginPath();
                crc2.moveTo(-70 + a, -50 + b);
                crc2.lineTo(15, -150 + c);
                crc2.lineTo(100 - a, -50 + b);
                crc2.closePath();
                crc2.fillStyle = treeColor[x];
                crc2.fill();
                a += 20;
                b += -60;
                c += -50;
            }
            crc2.restore();
            x += stepMin + Math.random() * (stepMax - stepMin);
        } while (x < crc2.canvas.width);
    }
    L09_Bees.drawTree = drawTree;
    // FLOWERS
    function drawGoldenFlowers() {
        let goldenFlower = "yellow";
        let x = 0;
        do {
            let y = (crc2.canvas.height * golden) + (50 + Math.random() * 600);
            crc2.save();
            crc2.translate(x, y);
            crc2.fillStyle = "green";
            crc2.fillRect(-0.5, 0, 1, 15);
            for (let x = 0; x < 8; x++) {
                crc2.beginPath();
                crc2.rotate(45 * Math.PI / 180);
                crc2.moveTo(0, 0); //0
                crc2.lineTo(-2, -5); //A
                crc2.lineTo(-2, -6); //B
                crc2.lineTo(-1, -7); //C
                crc2.lineTo(0, -7.5); //D
                crc2.lineTo(1, -7); //E
                crc2.lineTo(2, -6); //F
                crc2.lineTo(2, -5); //G
                crc2.closePath(); //back to O
                crc2.fillStyle = goldenFlower;
                crc2.fill();
            }
            crc2.beginPath();
            crc2.arc(0, 0, 2, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fillStyle = "orange";
            crc2.fill();
            crc2.restore();
            x += 10;
        } while (x < crc2.canvas.width);
    }
    L09_Bees.drawGoldenFlowers = drawGoldenFlowers;
    function drawPurpleFlowers() {
        let purpleFlower = "purple";
        let whiteTongue = "#f5edda";
        let x = 0;
        do {
            let y = (crc2.canvas.height * golden) + (50 + Math.random() * 600);
            crc2.save();
            crc2.translate(x, y);
            crc2.fillStyle = "green";
            crc2.fillRect(-0.5, 0, 1, 15);
            //Purple Top
            crc2.beginPath();
            crc2.moveTo(0, 0); //A
            crc2.lineTo(-4, -1); //B
            crc2.lineTo(-6, -3); //C
            crc2.lineTo(-7, -5); //D
            crc2.lineTo(-7, -7); //E
            crc2.lineTo(-6, -9); //F
            crc2.lineTo(-4, -14); //G
            crc2.lineTo(-4, -16); //H
            crc2.lineTo(-6, -24); //I
            crc2.lineTo(-8, -26); //J
            crc2.lineTo(-6, -26); //K
            crc2.lineTo(-2, -22); //L
            crc2.lineTo(0, -16); //M
            crc2.lineTo(2, -22); //N
            crc2.lineTo(6, -26); //O
            crc2.lineTo(8, -26); //P
            crc2.lineTo(6, -24); //Q
            crc2.lineTo(4, -16); //R
            crc2.lineTo(4, -14); //S
            crc2.lineTo(6, -9); //T
            crc2.lineTo(7, -7); //U
            crc2.lineTo(7, -5); //V
            crc2.lineTo(6, -3); //W
            crc2.lineTo(4, -1); //X
            crc2.closePath();
            crc2.fillStyle = purpleFlower;
            crc2.fill();
            //White Tongue
            crc2.translate(0, -16); //M
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(-2, -6); //L (from M)
            crc2.lineTo(0, -15); //C_1 (from M) -- C_1 (0, -31)
            crc2.lineTo(2, -18); //D_1 (from M) -- D_1 (2, -34)
            crc2.lineTo(4, -17); //D_1 (from M) -- E_1 (4, -35)
            crc2.lineTo(7, -18); //D_1 (from M) -- F_1 (7, -34)
            crc2.lineTo(8, -14); //D_1 (from M) -- G_1 (8, -32)
            crc2.lineTo(6, -17.5); //D_1 (from M) -- H_1 (6, -33.5)
            crc2.lineTo(3, -17); //D_1 (from M) -- I_1 (3, -33)
            crc2.lineTo(2, -6); //N (from M)
            crc2.closePath();
            crc2.fillStyle = whiteTongue;
            crc2.fill();
            crc2.restore();
            x += 25;
        } while (x < crc2.canvas.width);
    }
    L09_Bees.drawPurpleFlowers = drawPurpleFlowers;
    function drawBeeHive() {
        crc2.save();
        crc2.translate(crc2.canvas.width / 2, crc2.canvas.height * 0.7);
        crc2.scale(8, 8);
        crc2.lineWidth = 0.5;
        crc2.strokeStyle = "black";
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(-5.5, -1);
        crc2.quadraticCurveTo(-6, -6, -4, -8.5);
        crc2.quadraticCurveTo(-3.5, -10.5, -1.5, -11);
        crc2.quadraticCurveTo(0, -12, 1.5, -11);
        crc2.quadraticCurveTo(3.5, -10.5, 4, -8.5);
        crc2.quadraticCurveTo(3.5, -10.5, 4, -8.5);
        crc2.quadraticCurveTo(6, -6, 5.5, -1);
        crc2.fillStyle = "yellow";
        crc2.fill();
        crc2.closePath();
        crc2.stroke();
        crc2.beginPath();
        crc2.arc(0, -8, 1.5, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.closePath();
        crc2.restore();
    }
    L09_Bees.drawBeeHive = drawBeeHive;
})(L09_Bees || (L09_Bees = {}));
//# sourceMappingURL=Landscape.js.map