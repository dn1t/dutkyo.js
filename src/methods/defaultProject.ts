import type { Project } from "./project";

export const defaultProject: Project = {
  category: "기타",
  scenes: [{ id: "7dwq", name: "장면 1" }],
  objects: [
    {
      id: "0p2w",
      name: "(1)엔트리봇",
      script: "[]",
      objectType: "sprite",
      rotateMethod: "free",
      scene: "7dwq",
      sprite: {
        pictures: [
          {
            id: "5mqn",
            dimension: {
              width: 284,
              height: 350,
              scaleX: 0.31545741324921134,
              scaleY: 0.31545741324921134,
            },
            filename: "a8268fd79a48fd9b92c7b47406b95393",
            name: "걷는 엔트리봇 1",
            imageType: "png",
          },
          {
            id: "oss5",
            dimension: {
              width: 284,
              height: 350,
            },
            filename: "44cbd5953180e91751e82837bdff91ac",
            name: "(1)엔트리봇_걷기2",
            imageType: "png",
          },
        ],
        sounds: [
          {
            duration: 1.3,
            id: "k5wp",
            filename: "30a5116094820dedc36a4a761b9d1816",
            name: "강아지 짖는 소리",
          },
        ],
      },
      selectedPictureId: "5mqn",
      lock: false,
      entity: {
        x: 0,
        y: 0,
        regX: 142,
        regY: 175,
        scaleX: 0.31545741324921134,
        scaleY: 0.31545741324921134,
        rotation: 0,
        direction: 90,
        width: 284,
        height: 350,
        font: "undefinedpx ",
        visible: true,
      },
    },
  ],
  variables: [
    {
      name: "초시계",
      id: "brih",
      visible: false,
      value: "0",
      variableType: "timer",
      isCloud: false,
      isRealTime: false,
      cloudDate: false,
      object: null,
      x: 134,
      y: -70,
    },
    {
      name: "대답",
      id: "1vu8",
      visible: false,
      value: "0",
      variableType: "answer",
      isCloud: false,
      isRealTime: false,
      cloudDate: false,
      object: null,
      x: 150,
      y: -100,
    },
  ],
  lists: [],
  messages: [],
  functions: [],
  tables: [],
  speed: 60,
  expansionBlocks: [],
  aiUtilizeBlocks: [],
};
