import { Shape } from "./Shape";
import { Camera } from "../Camera";
import { Point } from "../Point";
import { Point2d } from "../Poiny2D";

class Block implements Shape {
    private p1: Point;
    private p2: Point;
    private p3: Point;
    private p4: Point;
    private p5: Point;
    private p6: Point;
    private p7: Point;
    private p8: Point;

    constructor(point: Point, point2:Point) {
        this.p1 = new Point(point.getX(), point.getY(), point.getZ());
        this.p2 = new Point(point.getX(), point.getY(), point2.getZ());
        this.p3 = new Point(point.getX(), point2.getY(), point.getZ());
        this.p4 = new Point(point.getX(), point2.getY(), point2.getZ());
        this.p5 = new Point(point2.getX(), point.getY(), point.getZ());
        this.p6 = new Point(point2.getX(), point.getY(), point2.getZ());
        this.p7 = new Point(point2.getX(), point2.getY(), point.getZ());
        this.p8 = new Point(point2.getX(), point2.getY(), point2.getZ());
    }

    paint(ctx:CanvasRenderingContext2D, camera: Camera) {
        let p12d = new Point2d(this.p1, camera);
        let p22d = new Point2d(this.p2, camera);
        let p32d = new Point2d(this.p3, camera);
        let p42d = new Point2d(this.p4, camera);
        let p52d = new Point2d(this.p5, camera);
        let p62d = new Point2d(this.p6, camera);
        let p72d = new Point2d(this.p7, camera);
        let p82d = new Point2d(this.p8, camera);

        this.draw(ctx, p12d, p52d, p62d, p22d, '#00F');
        this.draw(ctx, p32d, p42d, p82d, p72d, '#0FF');

        // this.draw(ctx, p12d, p52d, p72d, p32d, '#F00');
        // this.draw(ctx, p22d, p62d, p82d, p42d, '#0F0');


        // this.draw(ctx, p12d, p22d, p42d, p32d, '#FF0');
        // this.draw(ctx, p52d, p72d, p82d, p62d, '#F0F');
    }

    draw(ctx:CanvasRenderingContext2D, p:Point2d, p2:Point2d, p3:Point2d, p4:Point2d, color:string):void {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.moveTo(p.getX(), p.getY());
        ctx.lineTo(p2.getX(), p2.getY());
        ctx.lineTo(p3.getX(), p3.getY());
        ctx.lineTo(p4.getX(), p4.getY());
        ctx.closePath();
        ctx.fill();
    }
}

export {Block};
