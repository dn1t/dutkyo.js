import { ObjectContainer } from "../classes/object-container";
import { SceneContainer } from "../classes/scene-container";
import { VariableContainer } from "../classes/variable-container";
import type { Dutkyo } from "../dutkyo";

export async function init(
  this: Dutkyo,
  canvas: HTMLCanvasElement,
  resolution = 1,
): Promise<Dutkyo> {
  const offscreenCanvas = canvas.transferControlToOffscreen();
  await this.app.init({
    canvas: offscreenCanvas,
    width: 480,
    height: 270,
    resolution: 1.333 * resolution,
    background: "white",
  });

  this.objectContainer = new ObjectContainer(this);
  this.variableContainer = new VariableContainer(this);
  this.sceneContainer = new SceneContainer(this);
  this.initialized = true;

  return this;
}
