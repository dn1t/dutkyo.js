import { defineConfig } from "tsup";
import {
  type PresetOptions,
  generateTsupOptions,
  parsePresetOptions,
} from "tsup-preset-solid";

const preset_options: PresetOptions = {
  entries: [{ entry: "./src/index.tsx" }],
};

export default defineConfig((config) => {
  const watching = !!config.watch;
  const parsed_options = parsePresetOptions(preset_options, watching);

  return generateTsupOptions(parsed_options);
});
