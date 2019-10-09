import { Camera } from "../Camera";

interface Shape {
    paint(ctx: CanvasRenderingContext2D, camera: Camera):void;
}

export {Shape};