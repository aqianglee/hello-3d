import { Shape } from "./Shape";
import { Camera } from "../Camera";
import { Point } from "../Point";
import { Point2d } from "../Point2D";

class Line implements Shape {
    private position:Point;
    constructor(private p: Point, private p2:Point, private color: string) {
        this.position = new Point((p.getX() + p2.getX())/ 2, (p.getY() + p2.getY())/ 2, (p.getZ() + p2.getZ())/ 2)
    }
    paint(ctx: CanvasRenderingContext2D, camera: Camera):void {
        let p = new Point2d(this.p, camera, this.position);
        let p2 = new Point2d(this.p2, camera, this.position);
        ctx.strokeStyle = this.color;
        ctx.beginPath()
        ctx.moveTo(p.getX(), p.getY());
        ctx.lineTo(p2.getX(), p2.getY());
        ctx.stroke();
    }
}

export {Line};