"use strict";
//Inspired and Supported by Huu Thien Phan Ngoc 
var L11_TreesNBees;
(function (L11_TreesNBees) {
    class Flower {
        constructor(_xPos, _yRandomMin, _yRandomMax) {
            this.xPos = _xPos;
            this.yRandomMax = _yRandomMax;
            this.yRandomMin = _yRandomMin;
            this.draw();
        }
        draw() {
            //Hello World
        }
    }
    L11_TreesNBees.Flower = Flower;
    class GoldenFlowers extends Flower {
        constructor(_xPos, _yRandomMin, _yRandomMax) {
            super(_xPos, _yRandomMin, _yRandomMax);
        }
        draw() {
            let y = this.yRandomMin + this.yRandomMax;
            L11_TreesNBees.crc2.save();
            L11_TreesNBees.crc2.translate(this.xPos, y);
            L11_TreesNBees.crc2.fillStyle = "green";
            L11_TreesNBees.crc2.fillRect(-0.5, 0, 1, 15);
            for (let x = 0; x < 8; x++) {
                L11_TreesNBees.crc2.beginPath();
                L11_TreesNBees.crc2.rotate(45 * Math.PI / 180);
                L11_TreesNBees.crc2.moveTo(0, 0); //0
                L11_TreesNBees.crc2.lineTo(-2, -5); //A
                L11_TreesNBees.crc2.lineTo(-2, -6); //B
                L11_TreesNBees.crc2.lineTo(-1, -7); //C
                L11_TreesNBees.crc2.lineTo(0, -7.5); //D
                L11_TreesNBees.crc2.lineTo(1, -7); //E
                L11_TreesNBees.crc2.lineTo(2, -6); //F
                L11_TreesNBees.crc2.lineTo(2, -5); //G
                L11_TreesNBees.crc2.closePath(); //back to O
                L11_TreesNBees.crc2.fillStyle = "gold";
                L11_TreesNBees.crc2.fill();
            }
            L11_TreesNBees.crc2.beginPath();
            L11_TreesNBees.crc2.arc(0, 0, 2, 0, 2 * Math.PI);
            L11_TreesNBees.crc2.stroke();
            L11_TreesNBees.crc2.fillStyle = "orange";
            L11_TreesNBees.crc2.fill();
            L11_TreesNBees.crc2.restore();
        }
    }
    L11_TreesNBees.GoldenFlowers = GoldenFlowers;
    class PurpleFlowers extends Flower {
        constructor(_xPos, _yRandomMin, _yRandomMax) {
            super(_xPos, _yRandomMin, _yRandomMax);
        }
        draw() {
            let purpleFlower = "purple";
            let whiteTongue = "#f5edda";
            let y = this.yRandomMin + this.yRandomMax;
            L11_TreesNBees.crc2.save();
            L11_TreesNBees.crc2.translate(this.xPos, y);
            L11_TreesNBees.crc2.fillStyle = "green";
            L11_TreesNBees.crc2.fillRect(-0.5, 0, 1, 15);
            //Purple Top
            L11_TreesNBees.crc2.beginPath();
            L11_TreesNBees.crc2.moveTo(0, 0); //A
            L11_TreesNBees.crc2.lineTo(-4, -1); //B
            L11_TreesNBees.crc2.lineTo(-6, -3); //C
            L11_TreesNBees.crc2.lineTo(-7, -5); //D
            L11_TreesNBees.crc2.lineTo(-7, -7); //E
            L11_TreesNBees.crc2.lineTo(-6, -9); //F
            L11_TreesNBees.crc2.lineTo(-4, -14); //G
            L11_TreesNBees.crc2.lineTo(-4, -16); //H
            L11_TreesNBees.crc2.lineTo(-6, -24); //I
            L11_TreesNBees.crc2.lineTo(-8, -26); //J
            L11_TreesNBees.crc2.lineTo(-6, -26); //K
            L11_TreesNBees.crc2.lineTo(-2, -22); //L
            L11_TreesNBees.crc2.lineTo(0, -16); //M
            L11_TreesNBees.crc2.lineTo(2, -22); //N
            L11_TreesNBees.crc2.lineTo(6, -26); //O
            L11_TreesNBees.crc2.lineTo(8, -26); //P
            L11_TreesNBees.crc2.lineTo(6, -24); //Q
            L11_TreesNBees.crc2.lineTo(4, -16); //R
            L11_TreesNBees.crc2.lineTo(4, -14); //S
            L11_TreesNBees.crc2.lineTo(6, -9); //T
            L11_TreesNBees.crc2.lineTo(7, -7); //U
            L11_TreesNBees.crc2.lineTo(7, -5); //V
            L11_TreesNBees.crc2.lineTo(6, -3); //W
            L11_TreesNBees.crc2.lineTo(4, -1); //X
            L11_TreesNBees.crc2.closePath();
            L11_TreesNBees.crc2.fillStyle = purpleFlower;
            L11_TreesNBees.crc2.fill();
            //White Tongue
            L11_TreesNBees.crc2.translate(0, -16); //M
            L11_TreesNBees.crc2.beginPath();
            L11_TreesNBees.crc2.moveTo(0, 0);
            L11_TreesNBees.crc2.lineTo(-2, -6); //L (from M)
            L11_TreesNBees.crc2.lineTo(0, -15); //C_1 (from M) -- C_1 (0, -31)
            L11_TreesNBees.crc2.lineTo(2, -18); //D_1 (from M) -- D_1 (2, -34)
            L11_TreesNBees.crc2.lineTo(4, -17); //D_1 (from M) -- E_1 (4, -35)
            L11_TreesNBees.crc2.lineTo(7, -18); //D_1 (from M) -- F_1 (7, -34)
            L11_TreesNBees.crc2.lineTo(8, -14); //D_1 (from M) -- G_1 (8, -32)
            L11_TreesNBees.crc2.lineTo(6, -17.5); //D_1 (from M) -- H_1 (6, -33.5)
            L11_TreesNBees.crc2.lineTo(3, -17); //D_1 (from M) -- I_1 (3, -33)
            L11_TreesNBees.crc2.lineTo(2, -6); //N (from M)
            L11_TreesNBees.crc2.closePath();
            L11_TreesNBees.crc2.fillStyle = whiteTongue;
            L11_TreesNBees.crc2.fill();
            L11_TreesNBees.crc2.restore();
        }
    }
    L11_TreesNBees.PurpleFlowers = PurpleFlowers;
})(L11_TreesNBees || (L11_TreesNBees = {}));
//# sourceMappingURL=Flowers.js.map