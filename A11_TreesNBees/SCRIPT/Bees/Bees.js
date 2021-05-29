"use strict";
//Inspired and Supported by Huu Thien Phan Ngoc - Made with Mariia Kolkutova, Mona Kabelka & Christina Däschner
var L09_Bees;
(function (L09_Bees) {
    class Bees {
        constructor(_position, _velocity, _randomScale) {
            this.randomNumber = (Math.floor(Math.random() * 2000) + 1000);
            this.counter = 0;
            this.posX = _position.x;
            this.posY = _position.y;
            this.randomScale = _randomScale;
            this.velocityX = _velocity.x;
            this.velocityY = _velocity.y;
        }
        draw() {
            L09_Bees.crc2.save();
            L09_Bees.crc2.translate(this.posX, this.posY);
            L09_Bees.crc2.scale(this.randomScale, this.randomScale);
            L09_Bees.crc2.lineWidth = 2;
            L09_Bees.crc2.strokeStyle = "black";
            L09_Bees.crc2.fillStyle = "gold";
            L09_Bees.crc2.beginPath();
            L09_Bees.crc2.arc(0, 0, 8, 0, Math.PI * 2, false);
            L09_Bees.crc2.fill();
            L09_Bees.crc2.beginPath();
            L09_Bees.crc2.arc(0, 0, 8, 0, Math.PI * 2, false);
            L09_Bees.crc2.stroke();
            L09_Bees.crc2.beginPath();
            L09_Bees.crc2.fillStyle = "white";
            L09_Bees.crc2.arc(-5, -11, 5, 0, Math.PI * 2, false);
            L09_Bees.crc2.fill();
            L09_Bees.crc2.stroke();
            L09_Bees.crc2.beginPath();
            L09_Bees.crc2.fillStyle = "white";
            L09_Bees.crc2.arc(5, -11, 5, 0, Math.PI * 2, false);
            L09_Bees.crc2.fill();
            L09_Bees.crc2.stroke();
            L09_Bees.crc2.beginPath();
            L09_Bees.crc2.arc(-2, -1, 2, 0, Math.PI * 2, false);
            L09_Bees.crc2.stroke();
            L09_Bees.crc2.beginPath();
            L09_Bees.crc2.arc(2, -1, 2, 0, Math.PI * 2, false);
            L09_Bees.crc2.stroke();
            L09_Bees.crc2.restore();
        }
        update() {
            if (this.posX > L09_Bees.crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.posY > L09_Bees.crc2.canvas.height || this.posY < L09_Bees.crc2.canvas.height * 0.40) {
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
            this.draw();
        }
    }
    L09_Bees.Bees = Bees;
})(L09_Bees || (L09_Bees = {}));
//# sourceMappingURL=Bees.js.map