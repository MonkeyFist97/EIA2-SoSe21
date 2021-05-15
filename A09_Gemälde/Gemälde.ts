//Inspired and Supported by Huu Thien Phan Ngoc & Mona Kabelka <3
namespace L08_Canvas_Alley {
    interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;
    let golden: number = 0.62;

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let horizon: number = crc2.canvas.height * golden;
        let posMountains: Vector = { x: 0, y: horizon };

        drawBackground();
        drawSun({x: (canvas.width / 10) , y: (canvas.height / 15)});
        drawCloud({x: (canvas.width / 2) , y: (canvas.height / 5)}, {x: (canvas.width / 5) , y: (canvas.height / 8)});
        drawMountains(posMountains, 300, 200, "#747c8a", "white");
        drawMountains(posMountains, 200, 150, "#747c8a", "lightgrey");
        drawTree();
        drawGoldenFlowers();
        drawPurpleFlowers();
    }

        // HORIZON
    function drawBackground(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "HSL(100, 80%, 30%)");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

        // SUN
    function drawSun(_position: Vector): void {
        let r1: number = 30;
        let r2: number = 150;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }

        // CLOUDS
    function drawCloud(_position: Vector, _size: Vector): void {
        let nParticles: number = 20;
        let radiusParticle: number = 50;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }

        // MOUNTAINS
    function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        let stepMin: number = 50;
        let stepMax: number = 150;
        let x: number = 0;

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);

            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();
    }

        // TREES
    function drawTree(): void {
        let treeColor: string[] = ["#155c1c", "#1d6e25", "#217a2a"];
        let stepMin: number = 50;
        let stepMax: number = 150;
        let x: number = 0;

        do {
            let y: number = (crc2.canvas.height * golden) + (38 + Math.random() * (50 - 20));
            crc2.save();
            crc2.translate(x, y);
            crc2.fillStyle = "#6e4242";
            crc2.fillRect(0, 0, 30, -50);
            crc2.scale (0.9, 0.9);

            let a: number = 0;
            let b: number = 0;
            let c: number = 0;

            for (let x: number = 0; x <= 2; x++) {

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

        // FLOWERS
    function drawGoldenFlowers(): void {
        let goldenFlower: string = "yellow";
        let x: number = 0;

        do {
            let y: number = (crc2.canvas.height * golden) + (50 + Math.random() * 200);
            crc2.save();
            crc2.translate(x, y);

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
        }

        while (x < crc2.canvas.width);
    }


    function drawPurpleFlowers(): void {
        let purpleFlower: string = "purple";
        let whiteTongue: string = "#f5edda";
        let x: number = 0;

        do {
            let y: number = (crc2.canvas.height * golden) + (50 + Math.random() * 200);
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
        }

        while (x < crc2.canvas.width);

    }
}
