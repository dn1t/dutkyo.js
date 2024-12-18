import { Assets, Sprite } from "pixi.js";

export interface IPictureSprite {
  id: string;
  dimension: {
    width: number;
    height: number;
    scaleX?: number;
    scaleY?: number;
  };
  filename?: string;
  fileurl?: string;
  name: string;
  imageType: string;
}

export class PictureSprite implements IPictureSprite {
  sprite!: Sprite;
  id: string;
  dimension: {
    width: number;
    height: number;
    scaleX?: number;
    scaleY?: number;
  };
  filename?: string;
  fileurl?: string;
  name: string;
  imageType: string;

  constructor(pictureSprite: IPictureSprite) {
    this.id = pictureSprite.id;
    this.dimension = pictureSprite.dimension;
    this.filename = pictureSprite.filename;
    this.fileurl = pictureSprite.fileurl;
    this.name = pictureSprite.name;
    this.imageType = pictureSprite.imageType;
  }

  async init() {
    const url = this.fileurl
      ? this.fileurl.startsWith("http")
        ? this.fileurl
        : (() => {
            const tmp = new URL("https://playentry.org");
            tmp.pathname = this.fileurl;
            return tmp.href;
          })()
      : this.filename
        ? `https://playentry.org/uploads/${this.filename.slice(0, 2)}/${this.filename.slice(2, 4)}/image/${this.filename}.${this.imageType}`
        : null;
    if (!url) return null;

    const texture = await Assets.load(url);
    const sprite = new Sprite(texture);

    sprite.width = this.dimension.width;
    sprite.height = this.dimension.height;
    sprite.scale = {
      x: this.dimension.scaleX ?? 1,
      y: this.dimension.scaleY ?? 1,
    };

    this.sprite = sprite;

    return this;
  }
}

export interface ISoundSprite {
  duration: number;
  id: string;
  filename: string;
  name: string;
}

export class SoundSprite implements ISoundSprite {
  duration: number;
  id: string;
  filename: string;
  name: string;

  constructor(soundSprite: ISoundSprite) {
    this.duration = soundSprite.duration;
    this.id = soundSprite.id;
    this.filename = soundSprite.filename;
    this.name = soundSprite.name;
  }
}
