//Inspired and Supported by Huu Thien Phan Ngoc 
namespace L11_TreesNBees {

    export class Flower {
        xPos: number;
        yRandomMin: number;
        yRandomMax: number;

        constructor(_xPos: number, _yRandomMin: number, _yRandomMax: number) {
            this.xPos = _xPos;
            this.yRandomMax = _yRandomMax;
            this.yRandomMin = _yRandomMin;
            this.draw();
        }

        draw(): void {
            //Hello World
        }
    }

    export class GoldenFlowers extends Flower {

        constructor(_xPos: number, _yRandomMin: number, _yRandomMax: number) {
            super(_xPos, _yRandomMin, _yRandomMax);
        }

        draw(): void {
            // let randomScale: number = . + Math.random() * (0.8 - 0.5);
            let y: number = this.yRandomMin + this.yRandomMax;
            crc2.save();
            crc2.translate(this.xPos, y);
            crc2.fillStyle = "green";
            crc2.fillRect(-0.5, 0, 1, 15);

            for (let x: number = 0; x < 8; x++) {
                crc2.beginPath();
                crc2.rotate(45 * Math.PI / 180);
                crc2.moveTo(0, 0); //0
                crc2.lineTo(-2, -5); //A
                crc2.lineTo(-2, -6);  //B
                crc2.lineTo(-1, -7);  //C
                crc2.lineTo(0, -7.5); //D
                crc2.lineTo(1, -7); //E
                crc2.lineTo(2, -6); //F
                crc2.lineTo(2, -5); //G
                crc2.closePath(); //back to O
                crc2.fillStyle = "gold";
                crc2.fill();
            }
            crc2.beginPath();
            crc2.arc(0, 0, 2, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fillStyle = "orange";
            crc2.fill();
            crc2.restore();
        }
    }


    export class PurpleFlowers extends Flower {

        constructor(_xPos: number, _yRandomMin: number, _yRandomMax: number) {
            super(_xPos, _yRandomMin, _yRandomMax);
        }

        draw(): void {
            let purpleFlower: string = "purple";
            let whiteTongue: string = "#f5edda";
            let y: number = this.yRandomMin + this.yRandomMax;
            crc2.save();
            crc2.translate(this.xPos, y);

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
        }
    }
}
