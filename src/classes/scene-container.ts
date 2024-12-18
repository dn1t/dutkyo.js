import { Container } from "pixi.js";
import type { Dutkyo } from "../dutkyo";

export interface IScene {
  id: string;
  name: string;
}

export class Scene implements IScene {
  container: Container;
  id: string;
  name: string;

  constructor(scene: IScene) {
    this.container = new Container();
    this.id = scene.id;
    this.name = scene.name;
  }
}

export class SceneContainer {
  dutkyo: Dutkyo;
  scenes = new Map<string, Scene>();

  constructor(dutkyo: Dutkyo) {
    this.dutkyo = dutkyo;
  }

  addScenes(scenes: IScene[]) {
    for (const scene of scenes) {
      this.scenes.set(scene.id, new Scene(scene));
    }
  }
}
