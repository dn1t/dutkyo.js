import { render } from "solid-js/web";
import { DutkyoProvider } from "./context";
import type { DutkyoOptions } from "./dutkyo";
import { Workspace } from "./workspace";

export function initWorkspace(root: HTMLElement, options: DutkyoOptions) {
  render(
    () => (
      <DutkyoProvider options={options}>
        <Workspace />
      </DutkyoProvider>
    ),
    root,
  );
}

export { Dutkyo } from "./dutkyo";
