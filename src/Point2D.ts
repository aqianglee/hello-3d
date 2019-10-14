import { Point } from "./Point";
import { Camera } from "./Camera";

class Point2d {
    private x: number;
    private y: number;
    constructor(point: Point, camera: Camera, center: Point) {

        let cameraPos = camera.getPosition()

        let point2 = point.move(-cameraPos.getX(), -cameraPos.getY(), -cameraPos.getZ()).rolateZ(camera.getZ()).rolateX(camera.getX()).rolateY(camera.getY()); 
        
        
        let x = point2.getX();
        let y = point2.getY();
        let z = point2.getZ();
        let x5:number = x;
        let y5:number = y;
        let distance = 400 / Math.tan(camera.getVisionZ());
        
        if(z + distance >= 0) {
            let largeX = 400 + 400 * z / distance;
            let largeY = 400 + 400 * z / distance;
            x5 = 400 * x / largeX;
            y5 = 400 * y / largeY;
        }
        
        this.x = 400 + x5;
        this.y = 400 + y5;
    }

    public getX():number {
        return this.x;
    }

    public getY():number {
        return this.y;
    }

}

export { Point2d };