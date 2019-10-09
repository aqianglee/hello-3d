import { Point } from "./Point";
import { Camera } from "./Camera";

class Point2d {
    private x: number;
    private y: number;
    constructor(point: Point, camera: Camera) {
        let x : number = point.getX();
        let y : number = point.getY();
        let z : number = point.getZ();


        let x2 : number = x * Math.cos(camera.getZ()) - y * Math.sin(camera.getZ());
        let y2 : number = x * Math.sin(camera.getZ()) + y * Math.cos(camera.getZ());
        let z2 : number = z;

        let x3 : number = x2 * Math.cos(camera.getY()) - z2 * Math.sin(camera.getY());
        let y3 : number = y2;
        let z3 : number = x2 * Math.sin(camera.getY()) + z2 * Math.cos(camera.getY());

        let x4 : number = x3;
        let y4 : number = y3 * Math.cos(camera.getX()) - z3 * Math.sin(camera.getX());
        let z4 : number = y3 * Math.sin(camera.getX()) + z3 * Math.cos(camera.getX());

        this.x = 400 + x4;
        this.y = 400 - y4;

    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }
}

export { Point2d };