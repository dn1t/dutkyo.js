import { Player } from "./components/player";
import type { DutkyoOptions } from "./dutkyo";

interface WorkspaceOptions {
  options: DutkyoOptions;
}

export function Workspace(props: WorkspaceOptions) {
  return (
    <div>
      <Player {...props.options} />
      <div>Hello, world!</div>
    </div>
  );
}
