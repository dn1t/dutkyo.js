import type { Dutkyo } from "../dutkyo";

export interface IVariable {
  id: string;
  name: string;
  object: string | null;
  visible: boolean;
  value: string;
  variableType: string;
  isCloud: boolean;
  isRealTime: boolean;
  cloudDate: boolean;
  x: number;
  y: number;
}

export class Variable implements IVariable {
  id: string;
  name: string;
  object: string | null;
  visible: boolean;
  value: string;
  variableType: string;
  isCloud: boolean;
  isRealTime: boolean;
  cloudDate: boolean;
  x: number;
  y: number;

  constructor(variable: Variable) {
    this.id = variable.id;
    this.name = variable.name;
    this.object = variable.object;
    this.visible = variable.visible;
    this.value = variable.value;
    this.variableType = variable.variableType;
    this.isCloud = variable.isCloud;
    this.isRealTime = variable.isRealTime;
    this.cloudDate = variable.cloudDate;
    this.x = variable.x;
    this.y = variable.y;
  }
}

export class List {}

export class Message {}

export class VariableContainer {
  dutkyo: Dutkyo;
  variables = new Map<string, Variable>();
  lists = new Map<string, List>();
  messages = new Map<string, Message>();

  constructor(dutkyo: Dutkyo) {
    this.dutkyo = dutkyo;
  }

  addVariables(variables: Variable[]) {
    for (const variable of variables) {
      this.variables.set(variable.id, new Variable(variable));
    }
  }
}
