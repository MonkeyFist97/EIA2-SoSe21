"use strict";
//Inspired and Supported by Huu Thien Phan Ngoc
var L11_TreesNBees;
(function (L11_TreesNBees) {
    L11_TreesNBees.golden = 0.62;
    let moveables = [];
    let flowers = [];
    let imageData;
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        L11_TreesNBees.crc2 = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        createBees(10);
        createBackground();
        createCloud();
        createFlowers();
        imageData = L11_TreesNBees.crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }
    function createBackground() {
        L11_TreesNBees.drawBackground();
        L11_TreesNBees.drawSun({ x: (L11_TreesNBees.crc2.canvas.width / 10), y: (L11_TreesNBees.crc2.canvas.height / 15) });
        L11_TreesNBees.drawMountains({ x: 0, y: L11_TreesNBees.crc2.canvas.height * L11_TreesNBees.golden }, 300, 200, "#747c8a", "white");
        L11_TreesNBees.drawMountains({ x: 0, y: L11_TreesNBees.crc2.canvas.height * L11_TreesNBees.golden }, 200, 150, "#747c8a", "lightgrey");
        L11_TreesNBees.drawTree();
        L11_TreesNBees.drawBeeHive();
    }
    function createFlowers() {
        let xPos = 0;
        do {
            let flowerType = Math.floor(Math.random() * 2) + 1;
            if (flowerType == 1) {
                flowers.push(new L11_TreesNBees.GoldenFlowers(xPos, 50 + (L11_TreesNBees.crc2.canvas.height * L11_TreesNBees.golden), (50 + Math.random() * 600)));
            }
            else {
                flowers.push(new L11_TreesNBees.PurpleFlowers(xPos, 50 + (L11_TreesNBees.crc2.canvas.height * L11_TreesNBees.golden), (50 + Math.random() * 600)));
            }
            xPos += 10 + Math.random() * (50 - 10);
        } while (xPos < L11_TreesNBees.crc2.canvas.width);
    }
    function createBees(_nBee) {
        for (let index = 0; index < _nBee; index++) {
            let randomScale = 0.5 + Math.random() * (2.5 - 1.3);
            let randomVelocityX = (Math.random() - 0.5) * 5;
            let randomVelocityY = (Math.random() - 0.5) * 5;
            moveables.push(new L11_TreesNBees.Bees({ x: L11_TreesNBees.crc2.canvas.width / 2, y: L11_TreesNBees.crc2.canvas.height * L11_TreesNBees.golden }, { x: randomVelocityX, y: randomVelocityY }, randomScale));
        }
    }
    function createCloud() {
        moveables.push(new L11_TreesNBees.Cloud({ x: L11_TreesNBees.crc2.canvas.width * .10, y: L11_TreesNBees.crc2.canvas.height * .10 }, { x: 0.5, y: 0.1 }));
        moveables.push(new L11_TreesNBees.Cloud({ x: L11_TreesNBees.crc2.canvas.width * .5, y: L11_TreesNBees.crc2.canvas.height * .05 }, { x: 0.5, y: 0.1 }));
    }
    function animate() {
        requestAnimationFrame(animate);
        L11_TreesNBees.crc2.clearRect(0, 0, L11_TreesNBees.crc2.canvas.width, L11_TreesNBees.crc2.canvas.height);
        L11_TreesNBees.crc2.putImageData(imageData, 0, 0);
        for (let index = 0; index < moveables.length; index++) {
            moveables[index].update();
            moveables[index].draw();
        }
    }
})(L11_TreesNBees || (L11_TreesNBees = {}));
//# sourceMappingURL=Main.js.map