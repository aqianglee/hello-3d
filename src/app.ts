import { Point } from "./Point";
import { Circle } from "./shapes/Circle";
import { Camera } from "./Camera";
import { Line } from "./shapes/Line";
import { Block } from "./shapes/Block";
import { KeyObject } from "crypto";

let canvas:HTMLCanvasElement  = document.createElement('canvas');
canvas.width = 800;
canvas.height = 800;
canvas.style.cssText = 'margin: 0px auto; display: block;';
document.body.appendChild(canvas);

let ctx:CanvasRenderingContext2D = canvas.getContext('2d');
let camera: Camera = new Camera(new Point(0, 0, 0), 40, 40);

ctx.clearRect(0,0,800,800);
ctx.strokeRect(0,0,800,800);
camera.setX(90);
function draw() {
   
    ctx.clearRect(0,0,800,800);
    ctx.strokeRect(0,0,800,800);
    let x = 0;
    let y = 0;
    for(x= -10; x <= 10; x ++)
        for(y= -10; y <= 10; y ++)
            new Block(x,y,0).paint(ctx, camera);    
   
}

draw();
let x = 0;
let z = 0;

canvas.addEventListener('mousemove', function(event) {
    camera.addZ(event.offsetX - x);
    x = event.offsetX;
    camera.addX(z - event.offsetY);
    z = event.offsetY;
    draw();
    return false;
});

let keyCode:number = null;

document.addEventListener('keydown', function(event) {
    keyCode = event.keyCode;
});

document.addEventListener('keyup', function(event) {
    keyCode = null;
});

setInterval(function() {
    if(keyCode == 65) {
        camera.moveX(-10);
    }
    if(keyCode == 68) {
        camera.moveX(10);
    }
    if(keyCode == 87) {
        camera.moveY(-10);
    }
    if(keyCode == 83) {
        camera.moveY(10);
    }

    if(keyCode == 32) {
        camera.moveZ(-10);
    }

    if(keyCode == 16) {
        camera.moveZ(10);
    }
    if(keyCode != null) {
        draw();
    }
}, 16)

canvas.oncontextmenu = function(){
    return false;
}
