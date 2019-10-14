import { Shape } from "./Shape";
import { Camera } from "../Camera";
import { Point } from "../Point";
import { Point2d } from "../Point2D";

class Circle implements Shape {
    constructor(private point: Point, private r: number) {

    }

    paint(ctx: CanvasRenderingContext2D, camera: Camera):void {
        let p2d:Point2d = new Point2d(this.point, camera, this.point);
        ctx.beginPath();
        ctx.arc(p2d.getX(), p2d.getY(), this.r, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}

export {Circle};