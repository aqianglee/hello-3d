class Point {
    private w;
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
}

export {Point};