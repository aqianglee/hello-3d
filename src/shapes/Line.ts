import { Shape } from "./Shape";
import { Camera } from "../Camera";
import { Point } from "../Point";
import { Point2d } from "../Poiny2D";

class Line implements Shape {
    constructor(private p: Point, private p2:Point, private color: string) {

    }
    paint(ctx: CanvasRenderingContext2D, camera: Camera):void {
        let p = new Point2d(this.p, camera);
        let p2 = new Point2d(this.p2, camera);
        ctx.strokeStyle = this.color;
        ctx.beginPath()
        ctx.moveTo(p.getX(), p.getY());
        ctx.lineTo(p2.getX(), p2.getY());
        ctx.stroke();
    }
}

export {Line};