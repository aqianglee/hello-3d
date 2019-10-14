import { Shape } from "./Shape";
import { Camera } from "../Camera";
import { Point } from "../Point";
import { Point2d } from "../Point2D";

class Block implements Shape {
    private p1: Point;
    private p2: Point;
    private p3: Point;
    private p4: Point;
    private p5: Point;
    private p6: Point;
    private p7: Point;
    private p8: Point;

    private size: number;
    private positon: Point;

    constructor(x: number, y:number, z: number) {
        this.size = 100;
        this.positon = new Point(x * 100, y * 100, z * 100);
        this.p1 = new Point(x * this.size - this.size / 2, y * this.size - this.size / 2, z * this.size - this.size / 2);
        this.p2 = new Point(x * this.size - this.size / 2, y * this.size + this.size / 2, z * this.size - this.size / 2);
        this.p3 = new Point(x * this.size + this.size / 2, y * this.size + this.size / 2, z * this.size - this.size / 2);
        this.p4 = new Point(x * this.size + this.size / 2, y * this.size - this.size / 2, z * this.size - this.size / 2);

        this.p5 = new Point(x * this.size - this.size / 2, y * this.size - this.size / 2, z * this.size + this.size / 2);
        this.p6 = new Point(x * this.size - this.size / 2, y * this.size + this.size / 2, z * this.size + this.size / 2);
        this.p7 = new Point(x * this.size + this.size / 2, y * this.size + this.size / 2, z * this.size + this.size / 2);
        this.p8 = new Point(x * this.size + this.size / 2, y * this.size - this.size / 2, z * this.size + this.size / 2);
    }

    paint(ctx:CanvasRenderingContext2D, camera: Camera) {
        let p12d = new Point2d(this.p1, camera, this.positon);
        let p22d = new Point2d(this.p2, camera, this.positon);
        let p32d = new Point2d(this.p3, camera, this.positon);
        let p42d = new Point2d(this.p4, camera, this.positon);
        let p52d = new Point2d(this.p5, camera, this.positon);
        let p62d = new Point2d(this.p6, camera, this.positon);
        let p72d = new Point2d(this.p7, camera, this.positon);
        let p82d = new Point2d(this.p8, camera, this.positon);

        if(camera.getPosition().getZ()   >= this.positon.getZ()) {
            //this.draw(ctx, p12d, p22d, p32d, p42d, 'green');
            this.drawLeftAndRight(camera, ctx, p12d, p22d, p32d, p42d, p52d, p62d, p72d, p82d);
            this.draw(ctx, p52d, p62d, p72d, p82d, 'brown');
        } else {
            //this.draw(ctx, p52d, p62d, p72d, p82d, 'brown');
            this.drawLeftAndRight(camera, ctx, p12d, p22d, p32d, p42d, p52d, p62d, p72d, p82d);
            this.draw(ctx, p12d, p22d, p32d, p42d, 'green');
        }
    }

    private drawLeftAndRight(camera: Camera, ctx: CanvasRenderingContext2D, p12d: Point2d, p22d: Point2d, p32d: Point2d, p42d: Point2d, p52d: Point2d, p62d: Point2d, p72d: Point2d, p82d: Point2d) {
        if (camera.getPosition().getX() >= this.positon.getX()) {
            this.draw(ctx, p12d, p52d, p82d, p42d, 'brown');
            this.drawFontAndBack(camera, ctx, p12d, p22d, p32d, p42d, p52d, p62d, p72d, p82d);
            this.draw(ctx, p22d, p62d, p72d, p32d, 'brown');
        }
        else {
            this.draw(ctx, p22d, p62d, p72d, p32d, 'brown');
            this.drawFontAndBack(camera, ctx, p12d, p22d, p32d, p42d, p52d, p62d, p72d, p82d);
            this.draw(ctx, p12d, p52d, p82d, p42d, 'brown');
        }
        this.draw(ctx, p52d, p62d, p72d, p82d, 'brown');
    }

    private drawFontAndBack(camera: Camera, ctx: CanvasRenderingContext2D, p12d: Point2d, p22d: Point2d, p32d: Point2d, p42d: Point2d, p52d: Point2d, p62d: Point2d, p72d: Point2d, p82d: Point2d) {
        if (camera.getPosition().getY() >= this.positon.getY()) {
            this.draw(ctx, p12d, p22d, p62d, p52d, 'brown');
            this.draw(ctx, p32d, p42d, p82d, p72d, 'brown');
        }
        else {
            this.draw(ctx, p32d, p42d, p82d, p72d, 'brown');
            this.draw(ctx, p12d, p22d, p62d, p52d, 'brown');
        }
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
        ctx.stroke();
    }
}

export {Block};
