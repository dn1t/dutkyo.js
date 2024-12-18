import type { Dutkyo } from "../dutkyo";
import {
  PictureSprite,
  type IPictureSprite,
  type ISoundSprite,
  type SoundSprite,
} from "./sprite";

export interface IObject {
  id: string;
  name: string;
  script: string;
  objectType: string;
  rotateMethod: string;
  scene: string;
  sprite: {
    pictures: IPictureSprite[];
    sounds: ISoundSprite[];
  };
  selectedPictureId: string;
  lock: boolean;
  entity: {
    x: number;
    y: number;
    regX: number;
    regY: number;
    scaleX: number;
    scaleY: number;
    rotation: number;
    direction: number;
    width: number;
    height: number;
    font: string;
    visible: boolean;
  };
}

export class DutObject {
  dutkyo: Dutkyo;
  id: string;
  name: string;
  script: string;
  objectType: string;
  rotateMethod: string;
  scene: string;
  #sprite: {
    pictures: IPictureSprite[];
    sounds: ISoundSprite[];
  };
  selectedPictureId: string;
  lock: boolean;
  entity: {
    x: number;
    y: number;
    regX: number;
    regY: number;
    scaleX: number;
    scaleY: number;
    rotation: number;
    direction: number;
    width: number;
    height: number;
    font: string;
    visible: boolean;
  };

  pictureSprites = new Map<string, PictureSprite>();
  soundSprites = new Map<string, SoundSprite>();

  get selectedSprite() {
    return this.pictureSprites.get(this.selectedPictureId)?.sprite ?? null;
  }

  constructor(dutkyo: Dutkyo, object: IObject) {
    this.dutkyo = dutkyo;
    this.id = object.id;
    this.name = object.name;
    this.script = object.script;
    this.objectType = object.objectType;
    this.rotateMethod = object.rotateMethod;
    this.scene = object.scene;
    this.#sprite = object.sprite;
    this.selectedPictureId = object.selectedPictureId;
    this.lock = object.lock;
    this.entity = object.entity;
  }

  async init() {
    for (const sprite of this.#sprite.pictures) {
      const spriteClass = await new PictureSprite(sprite).init();
      if (!spriteClass) continue;

      spriteClass.sprite.pivot.x = this.entity.width / 2;
      spriteClass.sprite.pivot.y = this.entity.height / 2;

      spriteClass.sprite.x = this.entity.x + 240;
      spriteClass.sprite.y = 135 - this.entity.y;
      this.pictureSprites.set(sprite.id, spriteClass);
    }
    for (const sprite of this.#sprite.sounds) {
      this.soundSprites.set(sprite.id, sprite);
    }
  }
}
