export class NotInitializedError extends Error {
  constructor() {
    super("Dutkyo is not initialized");
    this.name = "NotInitializedError";
  }
}
