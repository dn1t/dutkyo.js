import { Player } from "./components/player";
import { useDutkyo } from "./context";

export function Workspace() {
  const { dutkyo } = useDutkyo();

  return (
    <div class="">
      <div class="flex">
        <div>
          <Player {...dutkyo.options} />
          <div class="flex">
            <button type="button" onClick={() => dutkyo}>
              Start
            </button>
            <button type="button" onClick={() => dutkyo}>
              Stop
            </button>
          </div>
        </div>
        <div>Hello, world!</div>
      </div>
    </div>
  );
}
