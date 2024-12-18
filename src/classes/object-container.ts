import type { Dutkyo } from "../dutkyo";
import { DutObject, type IObject } from "./object";

export class ObjectContainer {
  dutkyo: Dutkyo;
  objects = new Map<string, DutObject>();

  constructor(dutkyo: Dutkyo) {
    this.dutkyo = dutkyo;
  }

  async addObjects(objects: IObject[]) {
    for (const object of objects) {
      this.objects.set(object.id, new DutObject(this.dutkyo, object));
    }
  }

  async render() {
    await Promise.all(
      Array.from(this.objects.values()).map(async (object) => {
        await object.init();
        if (object.selectedSprite)
          this.dutkyo.sceneContainer.scenes
            .get(object.scene)
            ?.container.addChild(object.selectedSprite);
      }),
    );
    for (const scene of this.dutkyo.sceneContainer.scenes.values()) {
      this.dutkyo.app.stage.addChild(scene.container);
    }
  }
}
