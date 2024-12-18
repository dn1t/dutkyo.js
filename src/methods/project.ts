import type { IObject } from "../classes/object-container.ts";
import type { IScene } from "../classes/scene-container.ts";
import type {
  IVariable,
  List,
  Message,
} from "../classes/variable-container.ts";
import type { Dutkyo } from "../dutkyo";
import { defaultProject } from "./defaultProject";

export interface Project {
  category: string;
  scenes: IScene[];
  objects: IObject[];
  variables: IVariable[];
  lists: List[];
  messages: Message[];
  functions: any[];
  tables: any[];
  speed: number;
  expansionBlocks: any[];
  aiUtilizeBlocks: any[];
}

export let projectLoaded = false;

export function loadProject(this: Dutkyo, project: Project = defaultProject) {
  this.projectLoaded = false;

  this.speed = project.speed;
  this.objectContainer.addObjects(project.objects);
  this.variableContainer.addVariables(project.variables);
  this.sceneContainer.addScenes(project.scenes);

  this.render();
  this.projectLoaded = true;
}
