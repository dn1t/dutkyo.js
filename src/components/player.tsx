import { onMount } from "solid-js";
import { useDutkyo } from "../context";
import type { DutkyoOptions } from "../dutkyo";

export function Player(props: DutkyoOptions) {
  let ref!: HTMLCanvasElement;
  const { dutkyo } = useDutkyo();

  onMount(() => {
    if (dutkyo.initialized) throw new Error("Dutkyo is already initialized");
    dutkyo.init(ref).then(() => dutkyo.loadProject());
  });

  return <canvas ref={ref} style={{ width: "480px" }} />;
}
