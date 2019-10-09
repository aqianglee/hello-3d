class Camera {

    private x: number;
    private y: number;
    private z: number;

    constructor(x: number, y: number, z: number) {
        this.x = Math.PI / 180 * x;
        this.y = Math.PI / 180 * y;
        this.z = Math.PI / 180 * z;
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
        this.x += (Math.PI / 180 * x);
        if(this.x > Math.PI) {
            this.x = Math.PI
        }
    }

    public setY(y: number): void{
        this.y += (Math.PI / 180 * y);
    }

    public setZ(z: number): void{
        this.z += (Math.PI / 180 * z);
    }
}

export {Camera};