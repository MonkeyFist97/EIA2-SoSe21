"use strict";
//Inspired and Supported by Huu Thien Phan Ngoc
var L11_TreesNBees;
(function (L11_TreesNBees) {
    class Cloud extends L11_TreesNBees.Moveable {
        constructor(_position, _velocity) {
            super(_position, _velocity);
        }
        draw() {
            L11_TreesNBees.crc2.save();
            L11_TreesNBees.crc2.translate(this.posX, this.posY);
            L11_TreesNBees.crc2.beginPath();
            L11_TreesNBees.crc2.moveTo(-115, -20);
            L11_TreesNBees.crc2.bezierCurveTo(-155, 0, -155, 50, -55, 50);
            L11_TreesNBees.crc2.bezierCurveTo(-35, 80, 35, 80, 55, 50);
            L11_TreesNBees.crc2.bezierCurveTo(135, 50, 135, 20, 105, 0);
            L11_TreesNBees.crc2.bezierCurveTo(165, -60, 85, -70, 55, -50);
            L11_TreesNBees.crc2.bezierCurveTo(35, -95, -35, -80, -35, -50);
            L11_TreesNBees.crc2.bezierCurveTo(-85, -95, -135, -80, -115, -20);
            L11_TreesNBees.crc2.lineWidth = 2;
            L11_TreesNBees.crc2.fillStyle = "white";
            L11_TreesNBees.crc2.fill();
            L11_TreesNBees.crc2.strokeStyle = "white";
            L11_TreesNBees.crc2.closePath();
            L11_TreesNBees.crc2.stroke();
            L11_TreesNBees.crc2.restore();
        }
        update() {
            if (this.posX > L11_TreesNBees.crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.posY > L11_TreesNBees.crc2.canvas.height * 0.20 || this.posY < 10) {
                this.velocityY = -this.velocityY;
            }
            this.posX += this.velocityX;
            this.posY += this.velocityY;
        }
    }
    L11_TreesNBees.Cloud = Cloud;
})(L11_TreesNBees || (L11_TreesNBees = {}));
//# sourceMappingURL=CloudsCloudsClouds.js.map