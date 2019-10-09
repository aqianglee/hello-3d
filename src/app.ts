import { Point } from "./Point";
import { Circle } from "./shapes/Circle";
import { Camera } from "./Camera";
import { Line } from "./shapes/Line";
import { Block } from "./shapes/Block";

let canvas:HTMLCanvasElement  = document.createElement('canvas');
canvas.width = 800;
canvas.height = 800;
canvas.style.cssText = 'margin: 0px auto; display: block;';
document.body.appendChild(canvas);

let ctx:CanvasRenderingContext2D = canvas.getContext('2d');
let camera: Camera = new Camera(-90, 0, 0);

function draw() {
    ctx.clearRect(0,0,800,800);
    ctx.strokeRect(0,0,800,800);
    // for(let i = -10; i <= 10; i ++) {
    //     new Line(new Point(-1000, i * 100 ,0), new Point(1000, i * 100,0), '#666').paint(ctx, camera);
    //     new Line(new Point(i * 100, -1000,0), new Point(i * 100, 1000,0), '#666').paint(ctx, camera);
    // }

    // let j:number = 0;
    // for(j = 0; j < 90; j += 10) {
    //     let r: number = j * Math.PI / 180;
    //     let r2: number = 300 * Math.cos(r);
    //     let z:number = 300 * Math.sin(r);
    //     for(let i:number = 0; i < 360; i += 15) {
    //         let p:Point = new Point(r2 * Math.cos(Math.PI / 180 * i), r2 * Math.sin(Math.PI / 180 * i) ,z)
    //         new Circle(p, 5).paint(ctx, camera);
    //         let p2:Point = new Point(r2 * Math.cos(Math.PI / 180 * i), r2 * Math.sin(Math.PI / 180 * i) ,-z)
    //         new Circle(p2, 5).paint(ctx, camera);
    //     }
    // }

    new Block(new Point(-100,-100, -100), new Point(100,100, 100)).paint(ctx, camera);
}

draw();
let x = 0;
let z = 0;
let turn: boolean = false;

canvas.addEventListener('mousedown', function(event){
    if(event.button == 2) {
        x = event.offsetX;
        z = event.offsetY;
        turn = true;
        return false;
    }
});

canvas.addEventListener('mousemove', function(event) {
    if(turn) {
        camera.setZ(event.offsetX - x);
        camera.setX(event.offsetY - z);
        x = event.offsetX;
        z = event.offsetY;
        draw();
    }
    return false;
});

canvas.addEventListener('mouseup', function(event) {
    turn = false;
    return false;
});

canvas.oncontextmenu = function(){
    return false;
}
