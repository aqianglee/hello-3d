import { Point } from "./Point";

class Camera {

    private x: number;
    private y: number;
    private z: number;
    private distance: number;
    private lookAtPoint: Point;

    constructor(private position: Point,  private visionX: number, private visionZ: number) {
        this.x = 0;
        this.y = 0;
        this.z = 0;
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

    public setX(x: number): void{
        this.x = (Math.PI / 180 * x);
    }

    public setY(y: number): void{
        this.y = (Math.PI / 180 * y);
    }

    public setZ(z: number): void{
        this.z = (Math.PI / 180 * z);
    }

    public addX(x: number): void{
        let temp = Math.PI * 80 / 180;
        if(this.x < -temp) {
            this.x = -temp;
            return;
        }

        if(this.x > temp) {
            this.x = temp;
            return;
        }
        this.x += (Math.PI / 180 * x);
    }

    public addY(y: number): void{
        this.y += (Math.PI / 180 * y);
    }

    public addZ(z: number): void{
        this.z += (Math.PI / 180 * z);
    }

    public getLookAtPoint():Point {
        return this.lookAtPoint;
    }

    public getPosition():Point {
        return this.position;
    }

    public getVisionX():number {
        return Math.PI / 180 * this.visionX;
    }

    public getVisionZ():number {
        return Math.PI / 180 * this.visionZ;
    }

    public moveX(distance:number):void {
        this.position = this.position.move(distance, 0, 0);
    }

    public moveY(distance:number):void {
        this.position = this.position.move(0, distance, 0);
    }

    public moveZ(distance:number):void {
        this.position = this.position.move(0, 0, distance);
    }
}

export {Camera};