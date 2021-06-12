//Inspired and Supported by Huu Thien Phan Ngoc
namespace L11_TreesNBees {

    export let crc2: CanvasRenderingContext2D;
    export let golden: number = 0.62;
    let moveables: Moveable[] = [];
    let flowers: Flower[] = [];
    let imageData: ImageData;

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        createBees(10);
        createBackground();
        createCloud();
        createFlowers();
        imageData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }

    function createBackground(): void {
        drawBackground();
        drawSun({ x: (crc2.canvas.width / 10), y: (crc2.canvas.height / 15) });
        drawMountains({ x: 0, y: crc2.canvas.height * golden }, 300, 200, "#747c8a", "white");
        drawMountains({ x: 0, y: crc2.canvas.height * golden }, 200, 150, "#747c8a", "lightgrey");
        drawTree();
        drawBeeHive();
    }

    function createFlowers(): void {
        let xPos: number = 0;

        do {
            let flowerType: number = Math.floor(Math.random() * 2) + 1;

            if (flowerType == 1) {
                flowers.push(new GoldenFlowers(xPos, (crc2.canvas.height * golden), (50 + Math.random() * 600)));
            }
            else {
                flowers.push(new PurpleFlowers(xPos, (crc2.canvas.height * golden), (50 + Math.random() * 600)));
            }

            xPos += 10;
        }
        while (xPos < crc2.canvas.width);
    }

    function createBees(_nBee: number): void {
        for (let index: number = 0; index < _nBee; index++) {
            let randomScale: number = 0.5 + Math.random() * (2.5 - 1.3);
            let randomVelocityX: number = (Math.random() - 0.5) * 5;
            let randomVelocityY: number = (Math.random() - 0.5) * 5;

            moveables.push(<Moveable>new Bees({ x: crc2.canvas.width / 2, y: crc2.canvas.height * golden }, { x: randomVelocityX, y: randomVelocityY }, randomScale));
        }

    }

    function createCloud(): void {
        moveables.push(<Moveable>new Cloud({ x: crc2.canvas.width * .10, y: crc2.canvas.height * .10 }, { x: 0.5, y: 0.1 }));
        moveables.push(<Moveable>new Cloud({ x: crc2.canvas.width * .5, y: crc2.canvas.height * .05 }, { x: 0.5, y: 0.1 }));
    }

    function animate(): void {
        requestAnimationFrame(animate);

        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imageData, 0, 0);

        for (let index: number = 0; index < moveables.length; index++) {
            moveables[index].update();
            moveables[index].draw();
        }
    }
}
