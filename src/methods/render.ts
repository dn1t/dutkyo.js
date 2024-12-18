import { NotInitializedError } from "../classes/error";
import type { Dutkyo } from "../dutkyo";

export function render(this: Dutkyo) {
  if (!this.initialized) throw new NotInitializedError();

  this.objectContainer.render();
}
