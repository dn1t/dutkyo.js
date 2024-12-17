import { render } from "solid-js/web";
import type { DutkyoOptions } from "./dutkyo";
import { Workspace } from "./workspace";

export function initWorkspace(root: HTMLElement, options: DutkyoOptions) {
  render(() => <Workspace options={options} />, root);
}

export { Dutkyo } from "./dutkyo";
