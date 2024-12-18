import { onMount } from "solid-js";
import { Dutkyo, type DutkyoOptions } from "../dutkyo";

export function Player(props: DutkyoOptions) {
  let ref!: HTMLCanvasElement;

  onMount(async () => {
    const dutkyo = await new Dutkyo(props).init(ref);
    dutkyo.loadProject();
  });

  return <canvas ref={ref} style={{ width: "480px" }} />;
}
