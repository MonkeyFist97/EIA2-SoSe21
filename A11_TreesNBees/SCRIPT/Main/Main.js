"use strict";
//Inspired and Supported by Huu Thien Phan Ngoc - Made with Mariia Kolkutova, Mona Kabelka & Christina Däschner
var L09_Bees;
(function (L09_Bees) {
    L09_Bees.golden = 0.62;
    let bienen = [];
    let clouds = [];
    let imageData;
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        L09_Bees.crc2 = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        createBees(10);
        createBackground();
        createCloud();
        imageData = L09_Bees.crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }
    function createBackground() {
        L09_Bees.drawBackground();
        L09_Bees.drawSun({ x: (L09_Bees.crc2.canvas.width / 10), y: (L09_Bees.crc2.canvas.height / 15) });
        L09_Bees.drawMountains({ x: 0, y: L09_Bees.crc2.canvas.height * L09_Bees.golden }, 300, 200, "#747c8a", "white");
        L09_Bees.drawMountains({ x: 0, y: L09_Bees.crc2.canvas.height * L09_Bees.golden }, 200, 150, "#747c8a", "lightgrey");
        L09_Bees.drawTree();
        L09_Bees.drawBeeHive();
        L09_Bees.drawGoldenFlowers();
        L09_Bees.drawPurpleFlowers();
    }
    function createBees(_nBee) {
        for (let index = 0; index < _nBee; index++) {
            let randomScale = 0.5 + Math.random() * (2.5 - 1.3);
            let randomVelocityX = (Math.random() - 0.5) * 5;
            let randomVelocityY = (Math.random() - 0.5) * 5;
            bienen.push(new L09_Bees.Bees({ x: L09_Bees.crc2.canvas.width / 2, y: L09_Bees.crc2.canvas.height * L09_Bees.golden }, { x: randomVelocityX, y: randomVelocityY }, randomScale));
        }
    }
    function createCloud() {
        clouds.push(new L09_Bees.Cloud({ x: L09_Bees.crc2.canvas.width * .10, y: L09_Bees.crc2.canvas.height * .10 }));
        clouds.push(new L09_Bees.Cloud({ x: L09_Bees.crc2.canvas.width * .5, y: L09_Bees.crc2.canvas.height * .05 }));
    }
    function animate() {
        requestAnimationFrame(animate);
        L09_Bees.crc2.clearRect(0, 0, L09_Bees.crc2.canvas.width, L09_Bees.crc2.canvas.height);
        L09_Bees.crc2.putImageData(imageData, 0, 0);
        for (let index = 0; index < bienen.length; index++) {
            bienen[index].update();
        }
        for (let index = 0; index < clouds.length; index++) {
            clouds[index].update();
        }
    }
})(L09_Bees || (L09_Bees = {}));
//# sourceMappingURL=Main.js.map