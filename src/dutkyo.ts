import { Application } from "pixi.js";

export interface DutkyoOptions {}

export class Dutkyo {
  app = new Application();

  async init(canvas: HTMLCanvasElement, options: DutkyoOptions) {
    const offscreenCanvas = canvas.transferControlToOffscreen();
    await this.app.init({
      canvas: offscreenCanvas,
      width: 640,
      height: 360,
      background: "white",
    });

    return this.app.canvas;
  }
}
