import { Application } from "pixi.js";
import type { ObjectContainer } from "./classes/object-container";
import type { SceneContainer } from "./classes/scene-container";
import type { VariableContainer } from "./classes/variable-container";
import * as methods from "./methods";

export interface DutkyoOptions {}

class _Dutkyo {
  app = new Application();
  options: DutkyoOptions;
  initialized = false;

  projectId: string | null = null;
  speed = 60;

  objectContainer!: ObjectContainer;
  variableContainer!: VariableContainer;
  sceneContainer!: SceneContainer;

  constructor(options: DutkyoOptions) {
    this.options = options;
    Object.assign(this, methods);
  }
}

export type Dutkyo = InstanceType<typeof _Dutkyo> & typeof methods;
export const Dutkyo = _Dutkyo as {
  new (...args: ConstructorParameters<typeof _Dutkyo>): Dutkyo;
};
