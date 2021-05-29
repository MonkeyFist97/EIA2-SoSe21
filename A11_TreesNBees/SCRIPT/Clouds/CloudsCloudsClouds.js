"use strict";
//Inspired and Supported by Huu Thien Phan Ngoc - Made with Mariia Kolkutova, Mona Kabelka & Christina Däschner
var L09_Bees;
(function (L09_Bees) {
    class Cloud {
        constructor(_position) {
            this.velocityX = 0.5;
            this.velocityY = 0.1;
            this.posY = _position.y;
            this.posX = _position.x;
        }
        draw() {
            L09_Bees.crc2.save();
            L09_Bees.crc2.translate(this.posX, this.posY);
            L09_Bees.crc2.beginPath();
            L09_Bees.crc2.moveTo(-115, -20);
            L09_Bees.crc2.bezierCurveTo(-155, 0, -155, 50, -55, 50);
            L09_Bees.crc2.bezierCurveTo(-35, 80, 35, 80, 55, 50);
            L09_Bees.crc2.bezierCurveTo(135, 50, 135, 20, 105, 0);
            L09_Bees.crc2.bezierCurveTo(165, -60, 85, -70, 55, -50);
            L09_Bees.crc2.bezierCurveTo(35, -95, -35, -80, -35, -50);
            L09_Bees.crc2.bezierCurveTo(-85, -95, -135, -80, -115, -20);
            L09_Bees.crc2.lineWidth = 2;
            L09_Bees.crc2.fillStyle = "white";
            L09_Bees.crc2.fill();
            L09_Bees.crc2.strokeStyle = "white";
            L09_Bees.crc2.closePath();
            L09_Bees.crc2.stroke();
            L09_Bees.crc2.restore();
        }
        update() {
            if (this.posX > L09_Bees.crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.posY > L09_Bees.crc2.canvas.height * 0.20 || this.posY < 10) {
                this.velocityY = -this.velocityY;
            }
            this.posX += this.velocityX;
            this.posY += this.velocityY;
            this.draw();
        }
    }
    L09_Bees.Cloud = Cloud;
})(L09_Bees || (L09_Bees = {}));
//# sourceMappingURL=CloudsCloudsClouds.js.map