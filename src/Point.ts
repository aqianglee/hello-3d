import { Vector } from "./Vector";

class Point {
    private w: number;
    constructor(private x: number, private y: number, private z:number) {
        this.w = 1;
    }

    public getX(): number {
        return this.x;
    }

    public getY(): number {
        return this.y;
    }

    public getZ(): number {
        return this.z;
    }

    public getW(): number {
        return this.w;
    }

    public getDistance(point: Point): number {
        let xx: number = (point.getX() -this.x) * (point.getX() -this.x);
        let yy: number = (point.getY() -this.y) * (point.getY() -this.y);
        let zz: number = (point.getZ() -this.z) * (point.getZ() -this.z);
        return Math.sqrt(xx + yy + zz);
    }

    public move(x:number, y:number, z:number ) {
        let v:Vector = new Vector(
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            x, y, z, 1
            );
        
        return this.mutilply(v);
    }

    public rolateX(arc:number) {
        let v:Vector = new Vector(
            1, 0, 0, 0,
            0, Math.cos(arc), -Math.sin(arc), 0,
            0, Math.sin(arc), Math.cos(arc), 0,
            0, 0, 0, 1
            );
        
        return this.mutilply(v);
    }
    public rolateY(arc:number) {
        let v:Vector = new Vector(
            Math.cos(arc), 0, Math.sin(arc), 0,
            0, 1, 0, 0,
            -Math.sin(arc), 0, Math.cos(arc), 0,
            0, 0, 0, 1
            );
        
        return this.mutilply(v);
    }
    public rolateZ(arc:number) {
        let v:Vector = new Vector(
            Math.cos(arc), Math.sin(arc), 0, 0,
            -Math.sin(arc), Math.cos(arc), 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
            );
        
        return this.mutilply(v);
    }

    public mutilply(v:Vector):Point {
        let x = this.x * v.x1 + this.y * v.x2 + this.z * v.x3 + this.w * v.x4;
        let y = this.x * v.y1 + this.y * v.y2 + this.z * v.y3 + this.w * v.y4;
        let z = this.x * v.z1 + this.y * v.z2 + this.z * v.z3 + this.w * v.z4;
        let w = this.x * v.w1 + this.y * v.w2 + this.z * v.w3 + this.w * v.w4;
        return new Point(x, y, z);
    }
}

export {Point};