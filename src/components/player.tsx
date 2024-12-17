import { onMount } from "solid-js";
import { Dutkyo, type DutkyoOptions } from "../dutkyo";

export function Player(props: DutkyoOptions) {
  let ref!: HTMLCanvasElement;

  onMount(() => {
    new Dutkyo().init(ref, props);
  });

  return <canvas ref={ref} />;
}
