"use strict";
//Inspired and Supported by Huu Thien Phan Ngoc
var L11_TreesNBees;
(function (L11_TreesNBees) {
    class Bees extends L11_TreesNBees.Moveable {
        constructor(_position, _velocity, _randomScale) {
            super(_position, _velocity);
            this.randomNumber = (Math.floor(Math.random() * 2000) + 1000);
            this.counter = 0;
        }
        draw() {
            L11_TreesNBees.crc2.save();
            L11_TreesNBees.crc2.translate(this.posX, this.posY);
            L11_TreesNBees.crc2.scale(this.randomScale, this.randomScale);
            L11_TreesNBees.crc2.lineWidth = 2;
            L11_TreesNBees.crc2.strokeStyle = "black";
            L11_TreesNBees.crc2.fillStyle = "gold";
            L11_TreesNBees.crc2.beginPath();
            L11_TreesNBees.crc2.arc(0, 0, 8, 0, Math.PI * 2, false);
            L11_TreesNBees.crc2.fill();
            L11_TreesNBees.crc2.beginPath();
            L11_TreesNBees.crc2.arc(0, 0, 8, 0, Math.PI * 2, false);
            L11_TreesNBees.crc2.stroke();
            L11_TreesNBees.crc2.beginPath();
            L11_TreesNBees.crc2.fillStyle = "white";
            L11_TreesNBees.crc2.arc(-5, -11, 5, 0, Math.PI * 2, false);
            L11_TreesNBees.crc2.fill();
            L11_TreesNBees.crc2.stroke();
            L11_TreesNBees.crc2.beginPath();
            L11_TreesNBees.crc2.fillStyle = "white";
            L11_TreesNBees.crc2.arc(5, -11, 5, 0, Math.PI * 2, false);
            L11_TreesNBees.crc2.fill();
            L11_TreesNBees.crc2.stroke();
            L11_TreesNBees.crc2.beginPath();
            L11_TreesNBees.crc2.arc(-2, -1, 2, 0, Math.PI * 2, false);
            L11_TreesNBees.crc2.stroke();
            L11_TreesNBees.crc2.beginPath();
            L11_TreesNBees.crc2.arc(2, -1, 2, 0, Math.PI * 2, false);
            L11_TreesNBees.crc2.stroke();
            L11_TreesNBees.crc2.restore();
        }
        update() {
            if (this.posX > L11_TreesNBees.crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.posY > L11_TreesNBees.crc2.canvas.height || this.posY < L11_TreesNBees.crc2.canvas.height * 0.40) {
                this.velocityY = -this.velocityY;
            }
            if (this.counter == this.randomNumber) {
                this.velocityX = -this.velocityX;
                this.velocityY = -this.velocityY;
                this.counter = 0;
                this.randomNumber = (Math.floor(Math.random() * 2000) + 1000);
            }
            this.posX += this.velocityX;
            this.posY += this.velocityY;
            this.counter++;
        }
    }
    L11_TreesNBees.Bees = Bees;
})(L11_TreesNBees || (L11_TreesNBees = {}));
//# sourceMappingURL=Bees.js.map